# .Net

## Editor Short Cuts

Remove unused namespaces : `Ctrl + R + G`

Beautify code : `ctrl + k + d`

Rename variable : `ctrl + r + r`

Remove line break (using Regex) :

    (^ *\r\n)

`(^ *\r\n)`: kill line break which probably contains spaces ahead.

## Js Json to C# Backend

    { a:undefind , b:null , c:'' , d:123 } => 
    Request.form["a"] == null , .GetType() throws error.
    Request.form["b"] != null , .GetType()==System.String
    Request.form["c"] != null , .GetType()==System.String
    Request.form["d"].GetType()==System.String

Request.form["x"] | ==null | .GetType()
------------------|:------:|---------------
a                 | true   |  throws Error!
b                 | false  |  System.String
c                 | false  |  System.String
d                 | false  |  System.String

## Page Life Cycle

Great References:

1.[[Asp.Net] Web Form 的事件簡介](https://careychen.pixnet.net/blog/post/22573436-%5Basp.net%5D-web-form-%E7%9A%84%E4%BA%8B%E4%BB%B6%E7%B0%A1%E4%BB%8B)
2.[ASP.NET - Life Cycle](https://www.tutorialspoint.com/asp.net/asp.net_life_cycle.htm)

## How to authenticate

Use [Session State](https://www.eztrust.com.tw/html/webdesign/show.aspx?num=20&category=C&kind=19).

> 當使用者巡覽 Web 應用程式中的 ASP.NET 頁面時，ASP.NET 工作階段狀態可讓您為使用者儲存和擷取值。HTTP 是沒有狀態 (Stateless) 的通訊協定。這表示 Web 伺服器會將頁面的每個 HTTP 要求視為獨立要求。伺服器不會保留先前要求所使用的變數值。ASP.NET 工作階段狀態會在限制時間間隔內，將來自相同瀏覽器的要求識別為一個工作階段，並提供方法來保存這個工作階段期間內的變數值。

## Beginner's pain

### Using wrong language

    <%@ Page Title="Your page's title" Language="C#" %>

[ref](http://hk.voidcc.com/question/p-kupslmka-rp.html)

### IIS Deploy related

If it didnt' run as expected, check:  
1.應用程式集區的識別

## Some great refs

[ASP.NET 簡史](https://blog.darkthread.net/blog/aspnet-history/)
