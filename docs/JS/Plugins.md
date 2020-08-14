# 套件使用經驗

## jQuery Sortable

[連結](https://johnny.github.io/jquery-sortable/);

1. `$("ol.example").sortable()`之外，containerSelector項也要填，不可省，否則第一個拖拉元素會無法drop。
2. itemSelector只要寫相對於containerSelector的部分即可。
3. destroy記得要針對當初的元素。(否則可能會沒真的清除而造成異常)
