# Sql雜記

## Optional Condition In Where Clause 

情境：當輸入某個參數值才要針對該參數值過濾出資料，否則全取。

剛開始寫 **Mysql**，我用三元運算子`if()`來處理這種條件過濾：

    WHERE if(gameType IS NULL , 1 ,if(gameType=gid,1,0) )

不過遇到了**Mssql**，雖然它有`iif()`可以用，但它好像不太能作到最後總結成一個布林值，
比如說(待補待測試)...
不過也因此，我才想到一個更簡單的方法來處理條件過濾：

    WHERE (gameType IS NULL OR (gameType=gid) )

理論上第一式為真，就不會再判斷下去，也就是沒輸入參數值時便不作過濾；當有輸入，則根據第二式作判斷。
