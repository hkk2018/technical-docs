# Sql Server語法

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

