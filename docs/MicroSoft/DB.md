# Database(Mssql)

## Installation & Configuration

When `An error has occurred while establishing a connection to the server.`
Make sure that

1. service is already started.
2. TCP/IP is enabled in SQL Server Configuration.
3. firewall(default port 1433)
4. `Allow remote connections to this server` in MSSMS is checked.

ref : [解決SQL Server管理器無法連接遠端資料庫的問題](http://sas.tw/sas/redirect.php?tid=10615&goto=lastpost)

## To update DB but avoid replacing data

* Save [`Change Script`][1] when altering tables.
* To export stored procedures(or specific tables):
    1. right click on Db => `Tasks`(工作)
    2. `Generate Scripts`(產生指令碼)
    3. Choose what to save, and click next
    4. Choose `Script DROP and CREATE`
* Probably save some CRUD scripts manually

[1]:https://blog.miniasp.com/post/2008/06/05/Find-out-T-SQL-commands-generated-by-SQL-Server-Management-Studio

## Make values into dot-separated string by Xml Path

Senario：CMS needs to know relationship between new title and its categories(1 to n), but web doesn't for the sake of reducing internete usage.  
（Also for the compatibility against older version sql server, otherwise String_split）

Example:

    SELECT
        A,B,...,
        iif ( @isWebDisplay = 1, '',
            SUBSTRING(
                (
                    SELECT (',' + CAST(cateId AS varchar(100)))
                    FROM [AgSportDb].[dbo].NewTitleToCate
                    WHERE NewTitleToCate.newsTitleId = titleId
                    FOR xml PATH ('')
                ), 2, 100
            )
        ) as cateIds

it's fine to set 3rd param of SUBSTRING with an aribitrary value as long as it's big enough.  
Great ref：[灵活运用 SQL SERVER FOR XML PATH](https://www.cnblogs.com/doubleliang/archive/2011/07/06/2098775.html)

## T-Sql Formatter (won't change case of variables)

[Sql Formatter](https://sql-format.com/)

## Quirks

1. 有output parameter的話， c#端一定要接到。
2. 某欄位a若為null，不但a=null抓不到，連a=a都抓不到。

## Fastest Way to Copy Stored Procedure

修改，然後將ALTER改成CREATE

## Fast Input Params Into SP Template

在新增的SP頁面中按Ctrl+Shift+M

## 用戶端統計資料

### 時間單位

毫秒，可測試以

    WAITFOR DELAY '00:00:01'

[ref](https://social.msdn.microsoft.com/Forums/sqlserver/en-US/edafe533-4d56-4d82-b654-9601d356675b/unit-of-timestatistics-in-client-statistics?forum=sqlgetstarted):

## Paginate

### Paginate Body

    USE [YourDB]
    GO

    /****** Object:  StoredProcedure [dbo].[Paginate]    Script Date: 2020/3/11 下午 03:13:04 ******/
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO


    -- =============================================
    -- Author:hkk
    -- Create date: 
    -- Description:
    -- =============================================
    CREATE PROCEDURE [dbo].[Paginate] 
        -- Add the parameters for the stored procedure here
        @pageSize int= 10,
        @whichPage int=-1,
        @totalPage int output,
        @whatToOrderBy nvarchar(50)='rowNum'
    AS
    BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    -- Insert statements for procedure here

    --Ceiling內轉為浮點數後，似乎不是輸出整數以至於C#(int)轉換跳錯
    SELECT
        @totalPage = CAST(CEILING(CAST(COUNT(*) AS float) / @pageSize) AS int)
    FROM #temp;


    DECLARE @stmt nvarchar(400),
            @startIndex int,
            @paramsDefinition nvarchar(300);


    -- 複製輸出格式(但不用宣告變數) UNION是為了洗掉自動識別項，讓其成為彷彿一個無自動識別的表格（之所以複製）
    SELECT TOP (0) * INTO #takeBackDataTable FROM #temp
    UNION ALL
    SELECT TOP (0) * FROM #temp;
    --SET IDENTITY_Insert #takeBackDataTable ON; --試老半天沒用

    SET @startIndex = (@whichPage - 1) * @pageSize;

    --經過實際測驗 同樣收到已經標示RowNum的資料，FETCH結論是無論WHERE或FETCH以PK作尋條件快1倍，但FETCH快WHERE 30%
    --@whatToOrderBy的位置由於不能透過變數的方式填入（系統報錯），所以改成純用字串串接，但無Injection風險，因為其乃預存程序中指定，不會從外部填入
    SET @stmt = '
    INSERT INTO #takeBackDataTable SELECT * FROM  #temp ORDER BY ' + @whatToOrderBy +
    ' OFFSET @startIndex ROWS FETCH NEXT @pageSize ROWS ONLY;';

    SET @paramsDefinition = '@pageSize int,@startIndex int';
    EXEC dbo.sp_executesql @stmt,
                            @paramsDefinition,
                            @pageSize,
                            @startIndex;

    SELECT * FROM #takeBackDataTable
    END
    GO

但由傳入#temp方法不同，效能上有差異。

    USE [YourDB]
    GO

    /****** Object:  StoredProcedure [dbo].[Users_Basics#Get]    Script Date: 2020/3/11 下午 03:16:27 ******/
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    -- =============================================
    -- Author:hkk
    -- Create date: 
    -- Description:
    -- =============================================
    CREATE PROCEDURE [dbo].[Users_Basics#Get] 
        -- Add the parameters for the stored procedure here
        @pageSize int = 10, 
        @whichPage int = 1,
        @totalPage int output

    AS
    BEGIN
        -- SET NOCOUNT ON added to prevent extra result sets from
        -- interfering with SELECT statements.
        SET NOCOUNT ON;
        
        -- Insert statements for procedure here
        --法1(先宣告再定PK) 需17.7毫秒
        /*
        SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY createT DESC) AS rowNum INTO #temp
        FROM Users_Basics
        WHERE deleteFlag = 0;
        ALTER TABLE #temp ALTER COLUMN rowNum int NOT NULL;
        ALTER TABLE #temp ADD PRIMARY KEY NONCLUSTERED (rowNum);
        */

        --法2 需11.8毫秒(先宣告空Table，再定PK，再插入資料)
        /*
        SELECT TOP (0)
        *,
        0 AS rowNum INTO #temp
        FROM Users_Basics
        UNION ALL
        SELECT TOP (0)
        *,
        0 AS rowNum
        FROM Users_Basics;
        ALTER TABLE #temp ALTER COLUMN rowNum int NOT NULL;
        ALTER TABLE #temp ADD PRIMARY KEY NONCLUSTERED (rowNum);
        INSERT INTO #temp
        SELECT
            *,
            ROW_NUMBER() OVER (ORDER BY createT DESC) AS rowNum
        FROM Users_Basics
        WHERE deleteFlag = 0;
        */

        --法3 需7.8毫秒(正式宣告Table，再插入資料)
        
        CREATE TABLE #temp (

        [id] [int] NOT NULL,
        [accountName] [nvarchar](100) NOT NULL,
        [ps] [nchar](34) NOT NULL,
        [alias] [nvarchar](20) NULL,
        [createT] [datetime] NOT NULL,
        [gender] [bit] NULL,
        [deleteFlag] [bit] NULL,
        rowNum int NOT NULL
        PRIMARY KEY (rowNum)
        );

        INSERT INTO #temp
        SELECT
            *,
            ROW_NUMBER() OVER (ORDER BY createT DESC) AS rowNum
        FROM Users_Basics
        WHERE deleteFlag = 0;


        EXEC [dbo].[Paginate] @pageSize,
                            @whichPage,
                            @totalPage,
                            'rowNum';

    END
    GO
