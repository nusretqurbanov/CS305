// //Nusret


// ////////////// TASK 1 //////////////


// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// // 1.Sum all the numbers in 'arr1'

// //I use three way , for,reduce method and for of

// let sumy=0
// for(let i=0;i<arr1.length;i++){
// sumy+=arr1[i]
// }
// console.log(`sum= ${sumy}`);

// let sum1=0;
// for(let x of arr1){
//   sum1+=x
// }
// console.log(`sum1= ${sum1}`);

// x=arr1.reduce((sum2,item) =>sum2 + item,0 )
// console.log('sum2=',x); //reduce method is better way because our code become more short and readable


// // 2.Add two numbers (10,88) to end of arr1 (push methods)

// arr1.push(10,88)
// console.log("push",arr1);

// // 3.Remove first two numbers from arr1

// // arr1.shift()
// // arr1.shift()
// // console.log('shift',arr1); //shift method

// arr1.splice(0,2)
// console.log('splice=',arr1); //splice method is better because we can easily remove a lot of elements in array with splice

// // 4.Add three numbers (0,9,11) in front of arr1(unshift)

// arr1.unshift(0,9,11)
// console.log('unshift=',arr1);

// // 5.Remove four numbers in front of arr1(shift)

// // arr1.shift()
// // arr1.shift()
// // arr1.shift()
// // arr1.shift()
// // console.log(arr1);

// for(let i=0;i<4;i++){
//     arr1.shift()
// }
// console.log(arr1); //we cant write a number inside shift becausse of it i write with for loop

// // arr1.splice(0,4)
// // console.log(arr1);  with splice method



// ////////////// TASK 2 //////////////

// const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

// // 1.Console values from "Rufet" to "Ali"
// let sarr2=arr2.slice(2,10)
// console.log('sarr2',sarr2);  //slice method

// let farr2=arr2.filter((_,index) => index>=arr2.indexOf("Rufet") && index<arr2.indexOf("Ali")+1)
//  console.log('farr2',farr2); //
    
// //let farr2=arr2.filter((item,index) => index )

// // 2.Change Mehman to Fidan
// arr2.splice(arr2.indexOf('Mehman'),1,'Fidan')  //I use splice for change process find index of Mehman variable and using 1 i delete it and append Fidan
// console.log(arr2);
// // 3.Console each name with map

// arr2.map(item => console.log(item) );


// // 4.Console only names which is Fatime
// filt=arr2.filter(item => item==='Fatime')
// console.log('filt=',filt);

// // 5.Console all names where name is Gunel, then change it to "Nihad"
// arr2.filter((item,index) =>  item==='Gunel' && arr2.splice(index,1,'Nihad'))
//  console.log('arr2=',arr2);

// // 6.Console last second value of arr2
// console.log(arr2[arr2.length-2]);

// // 7.Console length of arr2
// console.log('length',arr2.length);


// ////////////// TASK 3 //////////////

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// // 1.Show only numbers

// numt=arr3.filter(item => typeof item ==='number' )
// console.log('numt',numt);

// for(let i=0;i<arr3.length;i++){
//     if(typeof arr3[i]==='number' ) {
//         console.log(arr3[i]);
        
//     }
// };


// // 2.Show only true values

// true1=arr3.filter(item => item )
// console.log('true1=',true1);

// // 3.Show only false values

// false1=arr3.filter(item => !item )
// console.log('false1=',false1);


// // 4.Show only strings

// stringt=arr3.filter(item => typeof item ==='string' )
// console.log('stringt',stringt);


// for(let i=0;i<arr3.length;i++){
//     if(typeof arr3[i]==='string' ) {
//         console.log(arr3[i]);
        
//     }
// };



// ////////////// TASK 4 //////////////

 //const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// // 1.Console (only even numbers)


// even=numbers.filter(item => item%2===0)
// console.log('even',even);


// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2===0){
//         console.log(numbers[i])
// }}
// ;


// // 2.Console (only odd numbers)

// odd=numbers.filter(item => item%2===1)
// console.log('odd',odd);

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2===1){
//         console.log(numbers[i])
// }}
// ;




// ////////////// TASK 5 //////////////


 const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]


// // 1.Console all values of arr4 

// arr4.map(item => console.log('all arr4=',item))

// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
   
// }

// // if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// // Example: [10,'true',false]
// // Result: [20, "true is string", "false is falsy value"]


// const arrx=arr4.map(item => { if(typeof item==='number'){
//   return item+10
// }
// else if (typeof item==='string'){
//   return item + ' '+ 'is string'
// }
// else {item +' '+ 'is falsy value'}
// })
// console.log(arrx);

// // 2.Sum all numbers of arr4

// k=arr4.reduce((acc,item) => typeof item==='number' ?  acc+=item : acc,0)
// console.log('sumarr4',k);


// let sum=0;
// for (let i = 0; i < arr4.length; i++) {
//     if(typeof arr4[i]==='number'){
//     sum+=arr4[i];
//     }
// }
// console.log(sum);


// // 3.Count only the values that are true


// k1=arr4.filter(item => item).length
// console.log('ctrue=',k1);  //this way is very short and easy

// let a=0
// for (let i = 0; i < arr4.length; i++) {
//     if(arr4[i])
// {
//     a++
// }
// }
// console.log(a);


// // 4.Count only the values that are string


// k2=arr4.filter(item => typeof item==='string').length
// console.log('cstring=',k2);

// let counts=0
// for (let i = 0; i < arr4.length; i++) {
//    if(typeof arr4[i]==='string'){
//   counts++
// }
// }
// console.log(counts);


// // 5.Count only the values that are false


// k3=arr4.filter(item => !item).length
// console.log('cfalse=',k3);


// let af=0
// for (let i = 0; i < arr4.length; i++) {
//     if(!arr4[i])
// {
//     af++
// }
// }
// console.log(af);


// ////////////// TASK 6 //////////////


// let fullName = 'Nusret Qurbanov Mamed'

// // 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

// let separray=fullName.split('')
// console.log('separray',separray);//this method split to letters

// let separrayw=fullName.split(' ')
// console.log('separrayw', separrayw); //this method split to words


// // 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin



// // let separray2=fullName.split(' ')
// // console.log('separray2',separray);
// // ccc=separray2.splice(1,1,separray2[0])
// // console.log(ccc);


// const swape=(array,index1,index2)=>{
//   let y = array[index1];
//   array[index1] = array[index2];
//   array[index2] = y;

// };
// let fullName1 = ['Nusret', 'Qurbanov',' Mamed']
// swape(fullName1,0,1)
// console.log('swape=',fullName1);

// const swape1=(array)=>{
//   let y = array[0]
//   array[0] = array[1];
//   array[1] = y;

// };
// let fullName2 = ['Nusret', 'Qurbanov',' Mamed']
// swape1(fullName2)
// console.log('swape1=',fullName2);



// const separrayw1=fullName.split(' ',3)
// if(separrayw1.length===3) {
//   console.log(separrayw1[1] ,separrayw1[0],separrayw1[2]);  //i wrote with function in third question
// }


// //console.log('separrayw1', separrayw1);


// // 3) Alinan yeni arrayi stringe cevirin(join)


// function swapprocess(anystring,index1,index2){
//   let  carray=anystring.split(' ');
//   [carray[index1],carray[index2]]=[carray[index2],carray[index1]]
//   return carray.join(' ')
// }
// const swapstring=swapprocess(fullName,0,1)
// console.log('swapstring=',swapstring);




// // QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....


 let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// const fives=arr.filter(item => item===5).length
// console.log('fives=',fives);


// let counti=0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===5)
//     {
//        counti++
        
//     }
// }
// console.log(counti);



// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// const sumall=arr.reduce((acc,item) => acc+item ,0)
// console.log('sumall=',sumall);


// let sumarr=0;
// for (let i = 0; i < arr.length; i++) {
//     sumarr+=arr[i];
    
// }
// console.log(sumarr);



// //6) arrayda tekrar olunan reqemleri artan sira ile duzun

for (let i = 0; i < arr.length; i++) {
   if(arr[i]===arr[i])
   {console.log(arr[i]);
   }
}

// // arr.sort((a,b) => a-b)
// // console.log(arr);

// //7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// // logMath.max(...arr)


// const biggest=arr.filter(item => item===Math.max(...arr)).length
// console.log('biggest=',biggest);


// //8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

// lname=arr.includes(fullName1[1].length ) 
// console.log('lname=',lname);

// //9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let fNumber = arr.find(num => num % 3 === 2);
// let fIndex = arr.findIndex(num => num % 3 === 2);
// console.log(`fnumber: ${fNumber}, findex: ${fIndex}`);


// //10) arraydaki en boyuk reqemin ilk indexini tapin

// let fIndexb = arr.findIndex(item => item===Math.max(...arr));
// console.log(fIndexb);

// //11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let indexes = arr.map((item, index) => (item === 4 ? index : -1))
// let four=indexes.filter(index => index!==-1)
// console.log('indexesof4',four);

// //12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let firstIndex = arr.indexOf(5); 
// let lastIndex = arr.lastIndexOf(5);
// console.log(`bfive= ${firstIndex}` );
// console.log(`sfive= ${lastIndex}`);

// //13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// const newarray=arr.filter(item => item>2)
// console.log('difference',arr.length-newarray.length);


// //14) 7 reqeminin indexleri cemini tapin.

// let indsum7 = arr.reduce((acc,item,index)=>{
//     if(item===7){
//         return acc+index
//     }
//     return acc
// })
// console.log('sum7=',indsum7);




// ///////////// TASK 7//////////////

// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]



// //QEYD - !!! Bu tasklarda arr2 istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...


// // 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// function StartingWithT(arr) {
//     return arr.filter(item => item.name.startsWith('t'));
// }
// const result = StartingWithT(arr2);
// console.log('result',result);


// // 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// function SEWithT(arr) {
//     return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// }
// const result2 = SEWithT(arr2);
// console.log('reault2',result2);


// // 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// function sumKeys(arr) {
//     return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')) 
//     .reduce((acc, item) => acc + item.key, 0);

// }


// const sum = sumKeys(arr2);
// console.log('sumKeys=',sum);


// // 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.


// function replaceS(arr){
//     return arr.map(item => { if(item.name.endsWith('e')){
//     return {...item,name: 'SuperDev'};
//     }
//     return item
// });}
// const endearray=replaceS(arr2);
// console.log(endearray);


// // 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin


// function longname(arr){
//     return arr.reduce((acc,item)=> {
//         return item.name.length > acc.name.length ? item : acc;
//     }).key
// }
// const longkey= longname(arr2);
// console.log('key',longkey);


// // 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin


// function squaref(arr) {
//     const longestIndex = arr.reduce((acc, item, index) => {
//     return item.name.length > arr[acc].name.length ? index : acc;
//     }, 0); 
//     return longestIndex ** 2; // Return the square of the index
// }
// const square = squaref(arr2);
// console.log('square',square);


// // 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin


// function new4(arr){
//     return arr.filter(item => item.name.length===4)
// }
// const newarrl4=new4(arr2)
// console.log('l4array0',newarrl4);


// // 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin


// function bkey(arr){
//     return arr.reduce((acc,item) => { 
//     return item.key > acc.key ? item : acc}).name
// }
// const namelong=bkey(arr2)
// console.log(namelong);




// // 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.


// function find2L(arr){
//     return arr.reduce((acc,item,index) => {
//     const L=(item.name.match(/l/gi) || []).length; //i write match(/l/gi) to find all  lovercase l and uppercase L  || [] it give us empty array if any value does not match
//     if(L==2){
//     acc.push(index); //if expression is true append to array
//         }
//      return acc;
//     },[]); //this part create starting value for acc
// }
// const resultL=find2L(arr2)
// console.log(resultL);


// // 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


// function keys2T(arr) {
// return arr.reduce((acc, item) => {
// const tCount = (item.name.match(/t/gi) || []).length; // lovercase l and uppercase L
//   if (tCount === 2) {
//     acc.push(item.key); // Add the key if it contians  2  t's
// }
//    return acc;
//     }, []);
// }

// const resultKeys = keys2T(arr2);
// console.log(resultKeys);


