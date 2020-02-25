# JS Quirks

## Pass Params Into console.log From Wrapper Function

    function failedConsoleLog() {
        console.log(arguments);
    }

    function justConsoleLog() {
        console.log.apply(null, arguments);
    }

    failedConsoleLog(1, 2, 3);
    justConsoleLog(1, 2, 3);
    console.log(1, 2, 3);

[Open in CodePen](https://codepen.io/hkk2018/pen/GLGggB?editors=1112)

## Float

    let x = 0.7-0.03;
    let roundedX = Number(x.toPrecision(10));

[Other workaround](https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript)
