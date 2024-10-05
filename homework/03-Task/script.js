//Nusret

////////////// TASK 1 //////////////

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'

//I use three way , for,reduce method and for of

let sum=0
for(let i=0;i<arr1.length;i++){
sum+=arr1[i]
}
console.log(`sum= ${sum}`);

let sum1=0;
for(let x of arr1){
  sum1+=x
}
console.log(`sum1= ${sum1}`);

x=arr1.reduce((sum2,item) =>sum2 + item,0 )
console.log('sum2=',x); //reduce method is better way because our code become more short and readable


// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10,88)
console.log("push",arr1);

// 3.Remove first two numbers from arr1

// arr1.shift()
// arr1.shift()
// console.log('shift',arr1); //shift method

arr1.splice(0,2)
console.log('splice=',arr1); //splice method is better because we can easily remove a lot of elements in array with splice

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.unshift(0,9,11)
console.log('unshift=',arr1);

// 5.Remove four numbers in front of arr1(shift)

// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);

for(let i=0;i<4;i++){
    arr1.shift()
}
console.log(arr1); //we cant write a number inside shift becausse of it i write with for loop

// arr1.splice(0,4)
// console.log(arr1);  with splice method



////////////// TASK 2 //////////////

const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

// 1.Console values from "Rufet" to "Ali"
let sarr2=arr2.slice(2,10)
console.log('sarr2',sarr2);  //slice method

let farr2=arr2.filter((_,index) => index>=arr2.indexOf("Rufet") && index<arr2.indexOf("Ali")+1)
 console.log('farr2',farr2); //
    
//let farr2=arr2.filter((item,index) => index )

// 2.Change Mehman to Fidan

// 3.Console each name with map
// 4.Console only names which is Fatime
// 5.Console all names where name is Gunel, then change it to "Nihad"
// 6.Console last second value of arr2
// 7.Console length of arr2