# 網頁開發
彙整一些網頁開發常用的技術、觀念。

## 登入驗證
前端以Http的方式呼叫後端API時，驗證的實作方式大致上有
1. Session-Cookie
2. Token 驗證

### Session-Cookie
登入後在伺服器端建立session並將識別用session id存於客戶端的cookie中，此後於每次request取出此id驗證session。

1. 須防範CSRF攻擊（利用Http Request自動夾帶cookie的機制）
2. 須在伺服器端保存session。

[ref：談談前後端分離及認證選擇](https://iter01.com/533770.html)

