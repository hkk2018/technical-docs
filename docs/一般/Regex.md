# Regex
## 基本語法

    /<pattern>/<flag>

1. `/`隨語言而異，如.NET(C#)則以`"`表示。
2. pattern表示所使用的規則。
3. flag表示旗幟，會影響匹配的行為，如g表示全局匹配（否則只匹配找到的第一個）。
## Set

`[]` : characters to pick up.

examples:

    [abcde]、[a-e]、[^a-e]、[a-zA-Z]

## Quantifier

`?` : optional.

`*` : get as many as possible (***include*** getting nothing).

`+` : get as many as possible (***exclude*** getting nothing).

`{min,max}` : match times range. both are optional.

## Boundary

**start of line**

`^` : match from ***first*** character ***after*** line break. (at most 1 result per line).

**end of line**

`$` : match from ***last***  character ***before*** line break. (at most 1 result per line).

**word-boundary**

`\bfoo\b` : get separated word.

**look ahead**

`(?=foo)` : do matching with that suffix.

`(?!=foo)` : do matching without that suffix.

**look behind**

`(?<=foo)` : do matching with that prefix.

`(?<!=foo)` : do matching without that prefix.

<br/>
<br/>

## State Machine In Regex

scenario1 : search for `gmail` word.

    /gmail/

![statue machine](./imgs/4tcPjHW.png)

There is a stuff would be with several statuses.
0-node means initial status, and when the required event occurs, the status transforms to the next status.
When the final status is reached, this matching succeeds.

<br>

scenario2 :

    /h[aeiou]ng/

![statue machine](./imgs/N9B1B8K.png)

Q : when does status1(node1) move to 2 ?

A : one of `a` or `e` or ... `u` event occurs with topdown order.

scenario3 :

    /https?/

![statue machine](./imgs/xF2LXku.png)

Stauts 5 can be reached either with or without `s`.

scenario4 :

    /a*/

![statue machine](./imgs/z35okDxm.png)

Examine Order: 1.top to down 2.left to right
This figure means getting a as many as possible, and once finished the examination, move from left to right with null condition(require nothing).

scenario5 :

    /a.*t/

![statue machine](./imgs/T8nNFlnm.jpg)

scenario6 :

    /a.*?t/

![statue machine](./imgs/gtKs2yPm.jpg)

Due to `Examine Order` changing, once staisfying null condition, the matching succeeds.

reference:
[咻咻的筆記小站](https://hengxiuxu.blogspot.com/2017/10/regular-expression.html)

## 實戰紀錄

1.去除圖片url中間含有不等的../符號，但是沒有該符號的不挑出來

    src=&quot;(../)+?assets


## 參考資源
[Regular Expressions for Regular Folk](https://refrf.dev/)：好文

[regex101](https://regex101.com/)：線上Regex編輯器