# Regex

## **Set**
form:

    []

examples:

    [abcde]、[a-e]、[^a-e]、[a-zA-Z]

## Quantifier

? : optional

\* : get as many as possible (***include*** getting nothing)

\+ : get as many as possible (***exclude*** getting nothing)

{min,max} : match times range. both are optional.

## Boundary

**start of line**

`^` : match from ***first*** character ***after*** line break. (at most 1 result per line)

**end of line**

`$` : match from ***last***  character ***before*** line break. (at most 1 result per line)

**word-boundary**

`\b foo \b` : get separated word.

**look ahead**

`(?= foo )` : do matching with that suffix.
`(?!= foo )` : do matching without that suffix.

**look behind**

`(?<= foo )` : do matching with that prefix.
`(?<!= foo )` : do matching without that prefix.

<br/>
<br/>

reference:
[咻咻的筆記小站](https://hengxiuxu.blogspot.com/2017/10/regular-expression.html)
