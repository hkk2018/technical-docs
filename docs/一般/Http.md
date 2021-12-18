# Http記要
1. Http無連接只是強調不一直保持連線，實際上是短/長連接。[ref](https://www.zhihu.com/question/51996213)
2. 短連接：客戶端發出Req到伺服器用Res回傳資料給客戶端後，TCP會斷開。[ref](https://topic.alibabacloud.com/a/http-long-connections-and-short-connections_8_8_20218324.html)
3. 無狀態表示協議本身不保存Context。
4. Get & Post其實都可以夾帶query string，只是Post一般不這麼作。[ref](https://stackoverflow.com/questions/5876809/do-http-post-methods-send-data-as-a-querystring/5876931)
5. Post要設置好content-type，否則伺服器端可能看不懂 。[ref](https://www.itread01.com/content/1536302734.html)