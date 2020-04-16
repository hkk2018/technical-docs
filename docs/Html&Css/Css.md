# CSS心得

## Table

1. `table-layout: fixed;`雖然可以強制使得表格不隨內容自己調整，而能寫死寬度比例，然而施用了此性質的Table在側欄水平伸縮時，其隨之拓寬或窄縮的動畫會有卡頓的現象。為此，如果用`word-break: break-all;`對內容拆解，內容就不會擠壓到原本th所設置的寬度比例，這樣就不需要用`table-layout: fixed;`了，而動畫的問題也就迎刃而解。
