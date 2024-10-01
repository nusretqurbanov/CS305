//Nusret

////////////// TASK 1 //////////////


// 1.Multiply 12 with 8, and console the result:
let a=12,b=8
console.log(`result: ${a*b}`);  /*we can write static and dynamic data in one line using backticks 
,we write dynamic data in  ${} */

// 2.Divide 10 by 2 add result to variables x, and console x:

let x=10/2;
console.log('x:'+" "+x); //this is second possible case for output our results
//console.log(`x: ${x}`);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
let num1=20,num2=17
console.log(`sum= ${num1+num2}`);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

let name = "nusret"
let surname='qurbanov'
let year=2005
let info= name + ' ' + surname +' ' + year //
console.log('info=' , info);

const infoeasy=
{
    surname: 'nusret',
    name:'qurbanov',
    year:2005
}
console.log(infoeasy);// I use object method which it is easy way

const infoarray=['nusret','qurbanov',2005]
console.log(infoarray);


// 5.Console the remainder(%) when 17 is divided by 12.
console.log(`remainder= ${17%12}`);
console.log('remainder=', 17%12);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.
let cityName='Baku'
cityName='Gence'
console.log('cityName=',cityName);//with let we can reassign value but cannot redeclare new value,we cannot reassign with 'const'

var cityName1='Baku'
var cityName1='Gence'
cityName1='Goygol'
console.log('cityName1=',cityName1);//with var we can redeclare and reassign new value

////////////// TASK 2 //////////////


//  {
//     let x='code'
//     let y='academy'
//  }
/*  console.log(`example1= ${x+y}`); This code will not work because our decleared variable
 is between the {} adn let and const is block scoped variables */

{

    let x ='code'
    let y='academy'
      console.log(`example1= ${x+y}`)
  
} //this is correct version

// {let h ='code'
// let k='academy'}
//   console.log(`example1= ${h+k}`)  //this code wiil not work because const also block scope 

{
    var cd ='code'
    var ac='academy'
}
  console.log(`examplevar= ${cd+ac}`) //this code wiil work var is not bloce scope

  ////////////// TASK 3 //////////////
//Find the type of all the following cases

let name1 = "Ulfat"
console.log(typeof name1);

 //let surname1 = Zakirli we write string between ' '
 let surname1 = 'Zakirli'
 console.log(typeof surname1);
 
 let year1 = 2000
 console.log(typeof year1);
 
 year1 = "2000"
 console.log(typeof year1); //we reassign new value to year1 variable which number 
 //datatype converted string datatype
 
 let city1;
 console.log(typeof city1); // if we don't give value to variable with let keywordv this give us undefined as a datatype 
 
 let qualification = null
 console.log(qualification);
 
 let obj = { name: 'ulfat' }
 console.log(typeof obj);
 
 let arr = ['a', 'b', 'c']
 console.log(typeof arr); //array include object datatype

 ////////////// TASK 4 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'

sum1=0;
 for(let i=0;i<arr1.length;i++)
 { 
sum1+=arr1[i]
 }
 console.log('sum=',sum1);

// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10,88)
console.log('newarr1',arr1); //push methods appends elements to end of the array

// 3.Remove first two numbers from arr1
arr1.splice(0,2) // 0 is start index and 2 is count of elements we want to remove
console.log('arr1',arr1); //splice us remove elements from array we first enter start index ,
// secondly we enter how many element we want to delete from start index

// arr1.shift()
// arr1.shift()
// console.log(arr1); we also can write shift commadn two times

// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0,9,11)
console.log("unshift",arr1); //unshift use for add elements  to beggining of array

// 5.Remove four numbers in front of arr1(shift)
for (let i = 0; i < 4; i++) {
    arr1.shift();
}
// console.log(arr1);
// arr1.splice(0,4)
// console.log(arr1); //this method is more easy

////////////// TASK 5 //////////////
// 1.Create a object add your name, surname, age and city.
const newobject={
    firstName: 'nusret',
    lastName: 'qurbanov',
    age:18,
    city:"Goygol"
}

// 2.Then change name to "Jhon"
newobject.firstName="Jhon"
console.log('firstName=',newobject.firstName)


const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Male",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "ADNSU",
            },
        },
    },
};

// 3.console each value of user object
console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education['uni name']);//we use '.' for create some path for output

// 4.Console only keys of user
console.log('keys',Object.keys(user));
console.log('keys1',Object.keys(user.info));
console.log('keys2',Object.keys(user.info.loc));
console.log('keys3',Object.keys(user.info.loc.education));
//second way
for(key in user)
{
    console.log(key);
    
}

for(key1 in user.info)
    {
        console.log(key1);
        
    }

for(key2 in user.info.loc)
      {
         console.log(key2);
            
      }
 for(key3 in user.info.loc.education)
        {
        console.log(key3);
            
      }
// 5.Console only values of user
console.log('values',Object.values(user));
console.log('values1',Object.values(user.info));
console.log('values2',Object.values(user.info.loc));
console.log('values3',Object.values(user.info.loc.education));

for(value in user)
    {
        console.log(user[value]);
        
    }
    for(value in user.info)
        {
            console.log(user.info[value]);
            
        }
for(value in user.info.loc)
    {
        console.log(user.info.loc[value]);
        
    }
    for(value in user.info.loc.education)
        {
            console.log(user.info.loc.education[value]);
            
        }

const mixedObject = {
    name: "ulfat",
    age: 25,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: "Zakirli",
    contactInfo: {
        email: "ulfat@example.com",
        phone: null,
    },
    scores: [98, 87, 92],
};

// 6.Log only the 'keys' whose values are of type string
for ( key in mixedObject) {
    if (typeof mixedObject[key] === 'string') {
        console.log(key);
    }
}

for ( key in mixedObject.contactInfo) {
    if (typeof mixedObject.contactInfo[key] === 'string') {
        console.log(key);
    }
}
// 7.Log only the 'keys' whose values are of type number
for ( key in mixedObject) {
    if (typeof mixedObject[key] === 'number') {
        console.log(key);
    }
}
// 8.Log only the 'keys' whose values are of type boolean
for ( key in mixedObject) {
    if (typeof mixedObject[key] === 'boolean') {
        console.log(key);
    }
}
// 9.Log only the 'keys' whose values are of type undefined
for(key in mixedObject)
{
    if(typeof mixedObject[key]==='undefined')
    {
        console.log(key);
        
    }
}
for(key in mixedObject.contactInfo)
    {
        if(typeof mixedObject.contactInfo[key]==='undefined')
        {
            console.log(key);
            
        }
    }
// 10.Log only the 'keys' whose values are of type object
for(key in mixedObject)
    {
        if(typeof mixedObject[key]==='object')
        {
            console.log(key);
            
        }
    }
    for(key in mixedObject.contactInfo)
        {
            if(typeof mixedObject.contactInfo[key]==='object')
            {
                console.log(key);
                
            }
        }

// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

for(value in mixedObject){
    if(typeof mixedObject[value] === 'string')
    {
        console.log(mixedObject[value]);
        
    }
}
for(value in mixedObject.contactInfo){
    if(typeof mixedObject.contactInfo[value] === 'string'){
        console.log(mixedObject.contactInfo[value]);
        
    }
}


for(value in mixedObject){
    if(typeof mixedObject[value] === 'number')
    {
        console.log(mixedObject[value]);
        
    }
}
for(value in mixedObject.contactInfo){
    if(typeof mixedObject.contactInfo[value] === 'number'){
        console.log(mixedObject.contactInfo[value]);
        
    }
}

for(value in mixedObject){
    if(typeof mixedObject[value] === 'boolean')
    {
        console.log(mixedObject[value]);
        
    }
}
for(value in mixedObject.contactInfo){
    if(typeof mixedObject.contactInfo[value] === 'boolean'){
        console.log(mixedObject.contactInfo[value]);
        
    }
}

for(value in mixedObject){
    if(typeof mixedObject[value] === 'undefined')
    {
        console.log(mixedObject[value]);
        
    }
}
for(value in mixedObject.contactInfo){
    if(typeof mixedObject.contactInfo[value] === 'undefined'){
        console.log(mixedObject.contactInfo[value]);
        
    }
}
