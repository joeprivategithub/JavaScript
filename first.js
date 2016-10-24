alert('Hello, javascript,from js file');

var x = 1;
"Hello,javascript";
if (2 > 1){
	var a = 1;
	var b = 2;
	var c = 3;
}

var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}
new Array(1, 2, 3);
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0];

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

person.name;
person.citysss;

var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null


var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串

//int i = 123; // b是整数类型变量，类型用int申明
//b = "ABC"; // 错误：不能把字符串赋给整型变量

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false

var age = 20;
if (age >= 18) {
    alert('adult');
} else {
    console.log('age < 18');
    alert('teenager');
}
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}

var x = 0;
var i;
for (i=1; i<=10000; i++) {
    x = x + i;
}
alert(x);

