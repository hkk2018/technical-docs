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
