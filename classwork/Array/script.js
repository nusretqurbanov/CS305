// const nums = [4,5,7,8,10,33,0]

// let mul=1
// for(let i=0;i<nums.length;i++)
// {
//     mul*=nums[i]
// }
// console.log("mul",mul);

// for(i=0;i<nums.length;i++){
// {
//     if(nums[i]>5 && nums[i]<10) 
//     console.log(nums[i]);
//      }
// } 

// for(i=0;i<nums.length;i++)
// {
//     if(nums[i])
//     {
//         console.log('true',nums[i]);
//     }
// }

// let sum=0;
// for(i=0;i<nums.length;i++)
// {
// if(nums[i] %2===0){
//     sum+=nums[i]
// }
    
// }
// console.log('sum',sum);
// let sumodd=0;
// for(i=0;i<nums.length;i++)
// {
// if(nums[i] %2===1){
//     sumodd+=nums[i]
// }
    
// }
// console.log('sumodd',sumodd);




const users = [
{
    id:1,
    name:'Nusret',
    gender: 'Male',
    age:33
},
{
    id:2,
    name:'Polad',
    gender: 'Male',
    age:18
},
{
    id:3,
    name:'Gunel',
    gender: 'Female',
    age:20
},
{
    id:4,
    name:'Elirza',
    gender: 'Male',
    age:18
},
{
    id:5,
    name:'Fidan',
    gender: 'Female',
    age:20
},

]
let sum=0
const result = users.map(item => sum+=item.age)
console.log(sum);

const result1 = users.filter(item => item.gender === "Female")
console.log(result1);

const result2 = users.filter(item => item.age >= 25)
console.log(result2);


const result3 = users.map(item => item.age*10)
console.log(result3);