# Sql Server語法

## 抓入表格

    SELECT * INTO #temp;
    INSERT INTO #temp SELECT _table

## Drop temp table

    IF object_id('tempdb..#temp') IS NOT NULL
    BEGIN
    DROP TABLE #temp
    END;

## 從SP取得result table

[ref](https://stackoverflow.com/questions/653714/insert-results-of-a-stored-procedure-into-a-temporary-table)

1. 使用SELECT INTO (不用宣告table) 要 Linking Servers。
2. 用INSERT INTO但要宣告 table。（插入實體表則不用宣告）

    CREATE TABLE #temp
    (
        COL1 INT,
        COL2 INT
    )
    INSERT INTO #temp Exec Sp'Params'

因此寫成table-valued函數是一種解法

    SELECT TOP(0) * INTO #temp FROM table-valued-func(@gameId,DEFAULT);

## Inserted.id

### Get in C# end

    INSERT INTO MyTable(Name, Address, PhoneNo)
    OUTPUT INSERTED.ID
    VALUES ('Yatrix', '1234 Address Stuff', '1112223333')
    DECLARE @OutputTbl TABLE (ID INT)

PS: by .ExecuteScalar()

### Get in sql

    DECLARE @OutputTbl TABLE (ID INT)

    INSERT INTO MyTable(Name, Address, PhoneNo)
    OUTPUT INSERTED.ID INTO @OutputTbl(ID)
    VALUES ('Yatrix', '1234 Address Stuff', '1112223333')

[ref](https://stackoverflow.com/questions/10999396/how-do-i-use-an-insert-statements-output-clause-to-get-the-identity-value/10999467#10999467)

## 表A選擇性地從表B取得數值代換，但不發生重複

    SELECT iif(X,A.col1,B.col1) as hello FROM A LEFT JOIN B 
    ON A.col1 = iif(X,null,B.col1) WHERE (X)OR(...);

說明：
在X為真時不需要表B=>
    1.讓ON對不準，確保A必無duplicate
    2.此時B的欄位全為null，...處若B有條件會導致A完全搜不到，所以要加(X)OR

實際例子，一般狀況下要從當前的球員列表找背號，但是如果是檢視當時比賽的資料，就要以當時的背號為主。

    SELECT upl.*
    ,case @gameId when null THEN upl.jerseyNumber else sgm.jerseyNumber END as jerseyNumber 
    FROM unorderedPlayerList upl
    LEFT JOIN Sport_GameMetadata sgm 
    ON upl.id=iif(@gameId is null,null,sgm.playerId ) --為了不讓JOIN在不指定game時抓到一堆重複的player資料
    WHERE (@gameId is null) OR (sgm.gameId=@gameId AND sgm.deleteFlag=0 )

## 更新順序

    IF OBJECT_ID('tempdb..#temp') IS NOT NULL
    BEGIN
    DROP TABLE #temp
    END;

    SELECT
    * INTO #temp
    FROM [AgSportDb].[dbo].[Sport_EventTypes]
    WHERE sportTypeId = 2;

    DBCC CHECKIDENT (Sport_EventTypes, RESEED, 26);
    DELETE Sport_EventTypes
    WHERE sportTypeId = 2;

    INSERT INTO [Sport_EventTypes]
    SELECT
        [sportTypeId],
        ...
        [deleteFlag]
    FROM #temp
    ORDER BY emitterId, displayOrder;
