# Modbus協定

## 背景知識
### Serial Communication
1. 又名序列通訊、串行通訊。
2. 意義：相對於並行通訊，資料位元是逐一傳送。(並行則是看有幾個channel就幾位)
3. 實體接口即Serial Port，別名序列埠、Com Port。此接口之標準有RS-232、RS-485、USB等。[ref](https://kknews.cc/zh-tw/tech/j84324e.html)

### UART
1. 全名：Universal Asynchronous Receiver/Transmitter
2. 通用非同步收發器。
3. 是電腦硬體(通常是晶片)，專門執行序列通訊。
4. 它具有RS-232、RS-485等傳輸介面共通需要的傳輸能力，至於要製作成何種介面，則仰賴電路規劃。[ref](https://makerpro.cc/2016/04/understand-what-is-uart/)
5. UART其實是Data Link Layer，所以沒有定義接頭形狀，
6. UART只是晶片內序列傳輸模組的通稱。[ref](https://www.strongpilab.com/rs232-uart-difference/)[ref1](https://www.pyknote.xyz/posts/uart%E7%AD%86%E8%A8%98/)
7. UART(Universal Asynchronous Receiver/Transmitter) 即是规定编码格式、bit rate，产生通信所需的bit流的标准。[ref](https://zhuanlan.zhihu.com/p/25893717)

帶整理
http://phorum.study-area.org/index.php?topic=64749.0
https://zhidao.baidu.com/question/270542924.html
https://kknews.cc/zh-tw/news/9n4gj68.html
https://makerpro.cc/2019/12/uart-part-1/
https://ithelp.ithome.com.tw/articles/10251650

## 串列通訊
hello world