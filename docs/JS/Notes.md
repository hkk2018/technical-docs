# 筆記

## 備忘
1. rest parameter

        (...ars) => { 
            console.log(...ars); // 0 'hello'
            console.log(ars); // [0, 'hello']
        }
        
        
## 特殊字元檢驗

    let rg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    rg.test("hello world");
