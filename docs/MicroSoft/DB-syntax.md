# Sql Server語法

## 抓入表格

    SELECT * INTO #temp;
    INSERT INTO #temp SELECT _table

## Drop temp table

    IF object_id('tempdb..#temp') IS NOT NULL
    BEGIN
    DROP TABLE #temp
    END

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

### Get in C#

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
