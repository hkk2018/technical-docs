# .Net

## Editor Short Cuts

Remove unused namespaces : `Ctrl + R + G`

Beautify code : `ctrl + k + d`

Rename variable : `ctrl + r + r`

Remove line break (using Regex) :

    (^ *\r\n)

`(^ *\r\n)`: kill line break which probably contains spaces ahead.

## Js Json to Backend

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

Best References:

1.[[Asp.Net] Web Form 的事件簡介](https://careychen.pixnet.net/blog/post/22573436-%5Basp.net%5D-web-form-%E7%9A%84%E4%BA%8B%E4%BB%B6%E7%B0%A1%E4%BB%8B)
2.[ASP.NET - Life Cycle](https://www.tutorialspoint.com/asp.net/asp.net_life_cycle.htm)
