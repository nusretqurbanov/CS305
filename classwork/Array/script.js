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




// const users = [
// {
//     id:1,
//     name:'Nusret',
//     gender: 'Male',
//     age:33
// },
// {
//     id:2,
//     name:'Polad',
//     gender: 'Male',
//     age:18
// },
// {
//     id:3,
//     name:'Gunel',
//     gender: 'Female',
//     age:20
// },
// {
//     id:4,
//     name:'Elirza',
//     gender: 'Male',
//     age:18
// },
// {
//     id:5,
//     name:'Fidan',
//     gender: 'Female',
//     age:20
// },

// ]
// let sum=0
// const result = users.map(item => sum+=item.age)
// console.log(sum);

// const result1 = users.filter(item => item.gender === "Female")
// console.log(result1);

// const result2 = users.filter(item => item.age >= 25)
// console.log(result2);


// const result3 = users.map(item => item.age*10)
// console.log(result3);

// const numbers = [9,5,3,11,12,33,22,9,10,0,8]
//numbers.reverse()
//console.log('reverse',numbers);
// numbers.sort((a,b) => a-b)
// console.log('asc',numbers);

// numbers.sort((a,b) => b-a)
// console.log('desc',numbers);

// numbers.splice(3,4)
// console.log(numbers);
// let result=numbers.find(item => item===11)
// console.log(result);
// let result1=numbers.filter(item => item > 10)
// console.log(result1);

// numbers.push(66,77)
// console.log(numbers);
// for(i=4;i<numbers.length;i++)
// {
//     numbers.pop()
// }
// console.log(numbers);

// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// console.log('pop',numbers);


// numbers.shift()
// numbers.shift()
// console.log('shift',numbers);

// numbers.unshift(0,1,2)
// console.log(numbers);

// const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]
// const list = ['6', '3', true, 'a', undefined, false, 10, 11, 5]
// const list2 = ['a', ['f'], 7, ['d', [false]]]

// 1.check if all item is greater than 5 (some)
// a=numbers.some(item => item > 5)
// console.log("some",a);
// 2.check if all item is greater than 2 (every)
// b=numbers.every(item => item > 2)
// console.log("every",b);

// 3.flat 'list2' deeps(2) (flat)
// x=list2.flat(2)
// console.log('flat',x);
// 4.flat 'list2' deeps(Infinity) (flat)
// y=list2.flat(Infinity)
// console.log('flat2',y);
// 5.sum all 'numbers' (reduce)
// d=numbers.reduce((acc,item) => acc+=item,0)
// console.log(d);

// 6.sum only type number in 'list' (reduce)
// k=list.reduce((acc,item) => (typeof==='number' ?  console.log(acc+=item) : console.log('false'),0))
// console.log(k);
// k=list.reduce((acc,item) => typeof item==='number' ?  acc+=item : acc,0)
// console.log(k);

// 7.check 'list' array that all item is true value (not falsy value) (every)

// v=list.every(item => item )
// console.log("every",v);
// 8.sort only numbers in 'list'
// let m=list.filter(item=> typeof item==='number')
// let l=m.sort()
// console.log(l);


