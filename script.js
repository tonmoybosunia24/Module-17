// Array.js


var friendage = [11, 24, 54, 25, 41, 5];
var picnicFee = [5000, 200, 4000, 150]
var nayikas = ["mahi", "Opu", "Sabnur", "sabana"]
var vowels = ["a", "e", "i", "o"]
// console.log(picnicFee.length) /* (.length) এটি ব্যাবহার করা হয় এরে এর মধ্যে কয়টা উপাদান আছে তার জন্য/ */


// Index.js


var numbers = [14, 45.25, 25, 754]
/* get element by index */
var index = numbers[1]; /* কোন এরে এর নিদিষ্ট কোন এলিমেন্ট কে ধরার জন্য। */
// console.log(index) 
/* Set ELement Value */
numbers[1] = 77; /* (numbers[1]) কোন এরে এর এলিমেন্ট মানকে পরিবর্তন করার জন্য। */
numbers[2] = 4545465;
// console.log(numbers)
/* Find index Of An ELement */
var positionIndex = numbers.indexOf(77) /* (.indexOf(77))কোন এরে এর কোন এলিমেন্ট এর ইনডেক্স খুজে পাওয়ার জন্য। */
// console.log(positionIndex)


// Push-Pop.js


var numbers = [78, 45, 454, 45, 454]
/* Use Push To Add ELement To An Array As The Last Element Array */
numbers.push(33); /* (.push(33);) কোন এরে এর মধ্যে কোন এলিমেন্ট কে শেষে এড করার জন্য */
numbers.push(4656546)
numbers.pop(); /* (.pop();) কোন এরে এর মধ্যে কোন এলিমেন্ট কে শেষে রিমুভ করে দেওয়ার জন্য */
/* console.log(numbers) */
var element = numbers.pop(); /* কোন এরে এর শেষ এলিমেন্ট টাকে ধরার জন্য। */
console.log(element)


// Comparison.js


/* console.log(5 > 6); */ 
/* console.log(5 < 6); */
/* console.log(6 == 6); */
/* console.log(5 != 6); */ /* একটার থেকে আরেকটা অসমান কিনা */
/* console.log(5 <= 6) */
/* console.log(5 >= 6) */ /* একটার থেকে আরেকটা বড় বা ছোট বা সমান কিনা */
/* var number1 = 5;
var number2 = 8;
console.log(number1 <= number2) */

/* Multiple Condicions Comparison */

money1 > money2 && result1 < result2 && height1 > height2 /* অনেকগুলা কন্ডিশন দেওয়ার জন্য।এখানে সবগুলোই পূরণ করাতে হবে। (&&-And) */
money1 < money2 || result1 > result2 /* এখানে যে কোন একটা পূরণ করলেই হবে। (||-Or) */


// Condition.js


var iphone = 79000;
var myBudget = 95000;
/* If Iphone Price is less Than My Budget.I Will By The Iphone. */
if (iphone < myBudget){ /* ( if (iphone < myBudget){ ) কোন কিছুর মধ্যে কন্ডিশন দেওয়ার জন্য। */
    console.log("Iphone Kine Futani Marbo")
}
var chickenPrice = 500;
var myMOney = 501;
/* if (chickenPrice <= myMOney){
    console.log("Murgir Ran Khamu")
}
if (chickenPrice > myMOney){
    console.log("Smash Potato And Lentils Soup Khabo)
} */
if (chickenPrice < myBudget){
    console.log("i WIll Eat Chilcken")
}
else{ /* (else) এটা ব্যাবহার করা হয় যদি প্রথম শর্ত তাহলে দ্বিতীয় টা কাজ করবে। */
    console.log("I WIll Eat Potato")
}


// Multiple-Condition.js


var isGraduated = true;
var salary = 25000;
var cars = 2;
if((isGraduated == false || salary > 50000) && cars >= 1){ /* মাল্টিপল কন্ডিশন। */
    console.log("Colo Biye Kore Feli")
} 
else{
    console.log("Tor Kopale BIye Nai")
}


// Multi-Stage-Condition.js


var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscit = 20;
if(danishPrice < money){
    console.log("Danish Khamu Re")
}
else if(butterBread < money){
    console.log("Butter Bread Cha Er Sathe Chubay Khamu Re")
}
else if(toastBiscit < money){
    console.log("Toast Biscit A Sudu Khamu")
}
else{
    console.log("Tui Bis Kha Vai")
}


// Nested-Conditon.js


var math = true;
var geometry = true;
var straighlint = true;
if(math == true){
    if(geometry == true){
        if(straighlint == true){
            console.log("You Are Pass")
        }
        else{
            console.log("valo kore poro")
        }
    }
    else{
        console.log("Tui Ai Ongo ka Paris Na bodna")
    }
}
else{
    console.log("fail")
}


// Some Problem


/* var fruits = ["Apple", "Banana", "Orange"]
var positionIndex = fruits.indexOf("Banana");
var banana = fruits[1];
fruits[1] = "Mango";
fruits.pop()
fruits.push("Watermelon")
console.log(fruits) */

/* var tonmoy = 59;
var tom = 66;
var jen = 95;
var peter = 40;
if(80 <= tonmoy){
    console.log("you got A")
}
else if(60 <= tonmoy){
    console.log("got B")
}
else if(50 <= tonmoy){
    console.log("got c")
}
else if(40 <= tonmoy){
    console.log("got D")
}
else if(39 >= tonmoy){
    console.log("you are feltu")
} */

// Define the numbers
// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

// // Compare the numbers to find the largest
// if (num1 >= num2 && num1 >= num3) {
//     console.log("The largest number is: ");
// } 
// else if (num2 >= num1 && num2 >= num3) {
//     console.log("The largest number is: ");
// } 
// else {
//     console.log("The largest number is: ");
// }