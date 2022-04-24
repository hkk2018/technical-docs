# 連線
1. [win10內建ssh、scp等工具](https://docs.microsoft.com/zh-tw/windows-hardware/manufacture/desktop/factoryos/connect-using-ssh?view=windows-11)
## SSH

## SCP
1. 從遠端伺服器複製檔案至本地端
2. 從遠複製下來的語法如下

        scp -P [port number] [username]@[server name or IP]:[path to file on server] [path to file on local PC]
    [syntax](https://www.rosehosting.com/blog/how-to-download-a-file-from-a-server-to-your-desktop-using-ssh/#Step-2-Create-the-SCP-Command)
    [examples](http://note.drx.tw/2008/03/ubuntuscp-part1.html)
    [with key](https://www.techrepublic.com/article/how-to-use-secure-copy-with-ssh-key-authentication/)

<!-- TODO 語法應該推廣為source and destination，並且定義位址格式可能為遠端與local格式，另外描述-i -->
3. 