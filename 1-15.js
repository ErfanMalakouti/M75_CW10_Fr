///////////////////1
let x = parseInt(prompt("enter your number "));
console.log(x);

///////////////////2
let a = parseInt(prompt("enter your number "));
let b = parseInt(prompt("enter your number "));
let c = a + b;
console.log(c);

///////////////////3
let numb1 = 2;
let numb2 = 4;
let numb3 = 5;
let sum = numb1 + numb2 + numb3;
let avreage = sum / 3;
console.log(avreage);

/////////////////////4
let numb1 = 10;
let numb2 = 20;
console.log(numb1 > numb2 ? numb1 : numb2);

/////////////////////5
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/////////////////////6
let a = 11;
while (a < 100) {
  console.log(a);
  a += 2;
}

/////////////////////7
let a = 2;
let b = 5;
let c = a;
a = b;
b = c;
console.log(a, b);

/////////////////////8
let a = 2;
let b = ((5)[(a, b)] = [b, a]);
console.log(a, b);

/////////////////////9
let sum = 0;
for (let i = 1; i < 11; i++) {
  sum += i;
}
console.log(sum);

////////////////////10
let n = +prompt();
let sum1 = 0,
  count = 0,
  reverse = 0;
while (n > 1) {
  reverse = reverse * 10 + (n % 10);
  count++;
  sum1 += n % 10;
  n = Math.floor(n / 10);
}
console.log(`reverse=${reverse}\ncount=${count}\nsum1=${sum1}`);

///////////////////11
class circle {
  constructor(radius) {
    this.radius = radius;
    this.area = function () {
      return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function () {
      return 2 * Math.PI * this.radius;
    };
  }
}
let c = new circle(2);
console.log("Area =", c.area().toFixed(2));
console.log("perimeter =", c.perimeter().toFixed(2));

///////////////////12

function even(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}

//////////////////13
function avval(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return "avval nist";
    }
  }
  return "avval ast";
}

//////////////////14
let a = +prompt();
let sum = 1;
for (let i = 1; i <= a; i++) {
  sum = sum * i;
}
console.log(sum);

////////////////15

function convert(a, b, c) {
  let dec = parseInt(a, b);
  return dec.toString(c);
}
console.log(convert(18, 10, 2));
