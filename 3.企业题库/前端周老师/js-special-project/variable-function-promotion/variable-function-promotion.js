function fn() {
  console.log(a);

  var a = 1;
}
fn();

function fn () {
  var a;
  console.log(a);
  a = 1;
}

// 作用域
// 全局作用域  块级作用域   函数作用域
var a = 'global';
function foo() {
  var b = 'local';
  console.log(a);
  console.log(b);
}
foo();

{
  let c = 'block';
  console.log(c);
}
console.log(c);

// 变量提升
// 变量的声明会提到函数的顶部，变量赋值并不会提升

// 变量提升
foo();
function foo() {
  console.log('hello');
}

// 函数表达式
foo2();
var foo2 = function () {
  console.log('hello2');
};

//
var foo2;
foo2();
foo2 = function () {
  console.log('hello2');
};

// 变量提升和函数提升同时存在
var a = true;
foo();
function foo() {
  if (a) {
    var a = 10;
  }
  console.log(a);
}

// 
function foo() {
  var a;
  if (a) {
    a = 10;
  }
  console.log(a); // undefined
}

// 3. 变量提升和函数提升的优先级
console.log(a);
console.log(a());
var a = 1;
function a() {
  console.log(2);
}
a = 3;
console.log(a);
console.log(a());

// 
function a() {
  console.log(2);
}
var a;
console.log(a);   // function a
console.log(a()); // 2
a = 1;
a = 3;
console.log(a);  // 3
console.log(a()); // Error

// 函数提升的优先级高于变量提升
// 对于相同名称的变量声明是不会覆盖掉函数声明的
// 但是变量的赋值是会覆盖函数是声明

