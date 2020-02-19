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