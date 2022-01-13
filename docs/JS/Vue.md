# Vue JS
## 備忘
1. 設子組件emit多個參數，而要在母組件template上指名取得時，可以透過Js其餘參數功能取得（`$event`僅能取得第一個參數）。[ref](https://stackoverflow.com/questions/44149294/in-vue-js-how-can-i-emit-multiple-value-from-child-to-parent-while-parents-v-o)

        @on-select-rejected="(...ewq) => onReject('hello',ewq)"
