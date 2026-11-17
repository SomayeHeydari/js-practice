// console.log('hello this is somi');
// window.alert('the weather is so good');
// window.alert('do u like autumn?');

// document.getElementById("H1").textContent='Somaye';
// document.getElementById("P1").textContent='My last name is Heydari';

// let x = 19;
// let y = 333333;
// console.log(`im ${x} years old`);
// console.log(typeof x);
// let fullName="Somaye Heydari";
// document.getElementById("H1").textContent =fullName;

// let changeText= document.getElementById("H1").textContent='Somaye Heydari';
// console.log(changeText);
// let myAge = 19;
// console.log(`Im ${myAge} years old.`);
// let favFood="Pizza";
// console.log(`My favourite food is ${favFood}!`);

// const changeBg = document.getElementById("div-one");
// changeBg.style.backgroundColor = "blue";
// const myNumber = 93988722635;
// console.log(`My number is ${myNumber}`);
// const changeParagraphOne= document.getElementById('P1');
// changeParagraphOne.style.color="black";
// document.getElementById('P1').textContent='I Love Programming';

// var weight = 50;
// console.log(`my weight is ${weight} kg`);
// var height = 160;
// console.log(`Im ${height} cm tall`);
// var education = "High Shool Graduate";
// console.log(`The Level Of Education : ${education}`);
// var favColor = "Black";
// console.log(`My Favourite Color is ${favColor}`);

// const firstButton = document.getElementById("bt-one");
// firstButton.style.backgroundColor="red";
// firstButton.style.fontWeight="bold";
// firstButton.style.fontSize="40px";


//primitive types

const myage = 19; //number
console.log(typeof myage);

const myName = "Somaye"; //string
console.log(typeof myName);

//bigint
const population = 12345678987654321234567887654323456789876n;
console.log(typeof population);

let youAreStudent = true; //bolean
console.log(typeof youAreStudent);

let nomber = null; //null
console.log( typeof nomber);

let gender;  //undefined
console.log(typeof gender);


//symbol
const myId = Symbol("Somi");
const stInfo = {
    name :  "Somaye",
    lastName :  "Heydari",
    age :  "19",
}
stInfo[myId] = 98763;
console.log(stInfo[myId]);

const userId= Symbol("user");
console.log(typeof userId);

let equality = (myId === userId);
console.log(`Symbols are equal with each other? ${equality}`);




// non primitive data types

//object
const info ={
name:"sonaye",
lastName:"heydari",
isSingle:true,
};
console.log(typeof info);

//array
const favFoods =["pizza","hamburger meat","ashak"];
console.log(typeof favFoods);

//function
function sum(x,y){
    return x+y;
}
console.log(`Sum: ${sum(2,5)} Type: ${typeof sum}`);


