"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//var a=1
var a = "jspang";
//console.log(a);

window.onload = function () {
    console.log(a);
};
/* 
var variable
let 局部申明
const 


*/
//二进制　声明　binary
var binary = 21;
console.log(binary);
//八进制　声明　Octal
var octal = 438;
console.log(octal);
/* let a = 918.1;
console.log(Number.isFloat(a))
console.log(Number.parseInt(a)) */

var jspang = Math.pow(2, 53) - 1;
console.log(jspang);

//json数组　改为　数组
var json = {
    '0': "jspang",
    '1': "技术胖",
    '2': "大",
    length: 3
};
var arr = Array.from(json);
console.log(arr);

//　arrary.of　方法　　　'3，4，5，6'
var arr1 = Array.of(3, 4, 5, 6);
console.log(arr1);
//'[3,4,5,6]'
var stt = '[3,4,5,6]';
var arr2 = eval(stt);

console.log(arr2);

//'[3,4,5,6]'
var stt1 = '[3,4,5,6]';
var arr3 = Array.of(stt1);

console.log(arr3);
var arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4.find(function (value, index, arr4) {
    return value > 5;
}));

function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a + b;
}
console.log(add(1));

var add = function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a + b;
};
console.log(add(1));
//　对像的函数解构json
var json2 = {
    a: "jspang",
    b: '技术这'
};
function fun(_ref) {
    var a = _ref.a,
        _ref$b = _ref.b,
        b = _ref$b === undefined ? 'web' : _ref$b;

    console.log(a, b);
}
//key 值的构建
var key = "skill";
var obj = _defineProperty({}, key, 'web');
console.log(obj);

//自定义对象　方法
var obj2 = {
    add: function add(a, b) {
        return a + b;
    }
};

console.log(obj2.add(2, 3));
console.log(+0 === -0);
console.log(NaN === NaN);

var a2 = { a: 'jspang' };
var b2 = { b: 'duoduo' };
var c2 = { c: 'diadia' };
var d2 = Object.assign(a2, b2, c2);
console.log(d2);

var aa = new String();
var bb = new Number();
var cc = new Boolean();
var dd = new Array();
var ee = new Object();

var f = Symbol();
console.log(typeof f === "undefined" ? "undefined" : _typeof(f));

//set
var setArr = new Set(["jspang", "jishu", "web"]);

// for of 
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = setArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
    //forEach
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

setArr.forEach(function (value) {
    return console.log(value);
});
//size;
