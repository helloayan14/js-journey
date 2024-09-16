// lecture 3

// template literal 
// let sentence=`this is template literal ${1+1}`;
// console.log(sentence)


// strings
// let str="ayansharma"
// console.log(str[6])

// string method
// let m="ay    a n ";
// n=m.toUpperCase()
// n1=m.toLowerCase()
// m=m.trim()  only last and 55443wss
// console.log(n)
// console.log(n1)
// console.log(m)

// practice 
// let nam=prompt("enter your full name");
// username=`@ ${nam}${nam.length}`;
// console.log(username)

// lecture 4
// let marks=[2,3,45,6,4,32,24,4];
// console.log(marks[1])
// console.log(typeof marks)

// let marks=[85,97,44,37,76,60]
// let sum=0
// for(let mark of marks){
//     sum+=mark
// }
// avg=sum/marks.length
// console.log(avg)

// let prices=[250,645,300,900,50]
// for(let i=0;i<prices.length;i++){
//     let dis=prices[i]/10;
//     prices[i]-=dis;
    
// }

// console.log(prices);

// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// companies.splice(0,1);
// companies.splice(1,1,"ola");
// companies.splice(5,1,"amazon")

// lecture 5

// function sum(a,b){
//     return a+b;
// }

// arrow fn
// (a,b)=> {
//     console.log(a+b);
// }

// function countvow(str){
//     let count=0
//     for(let char of str){
//         if(char==="a" || char==="e" || char === "i" || char==="o" || char==="u"){
//             count++;

//         }
//     }
//     console.log(count)
// }

// countvow("ayansharma")
// const countvow=(str)=>{
//     let count=0
//     for(let char of str){
//         if(char==="a" || char==="e" || char === "i" || char==="o" || char==="u"){
//             count++;

//         }
//     }
//     return count;
// }



// for each
// let arr=[1,2,4,5,6]
// arr.forEach(function printval(val){
//     console.log(val);
// })

// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr)
// })

// arr.forEach((val)=>{
//     console.log(val*val)
// })

// let marks=[11,44,90,9,3,56,99]
// let toppers= marks.filter((val)=>{
//     return val>90;
// })
// console.log(toppers)

// let inp=prompt("enter the range of arr");
// i=1
// let arr=[]
// while (i<inp){
//     arr[i-1]=i
//     i++
// }
// console.log(arr)

// let sum = arr.reduce((res,curr)=>{
//     return res+curr; 
// })
// console.log(sum);

// let factorial=arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(factorial);