// asynchorous nature

// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("four")
//     ,4000

// })

// console.log("three")


// callbacks

// function sum(a,b){
//     console.log(a+b)

// }

// function calculator (a,b,sumcallback){
//     sumcallback(a,b)
// }

// calculator(1,2,sum)
// // or
// calculator(1,2 , (a,b) => {
//     console.log(a+b)
// })


// callback hells 

// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log("Data",dataid)
//         if(getnextdata){
//             getnextdata()
//         }
//     },3000)
// }

// getdata(1,()=>{
//     getdata(3 , ()=>{
//         getdata(4 , ()=>{
//             getdata(5)
//         })
//     })
// })




// promises

// let pro=new Promise((resolve,reject)=>{
//     console.log("i am promise")
//     // resolve("succesed")
//     reject("not done")
// })

// api return promises

// function getdata(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("Data",dataid)
//             // resolve(" succeseed")
//             reject("it failed")
//             if(getnextdata){
//                 getnextdata()
//             }
//         },3000)
//     })
   
// }

// work after promises

// const getpromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promises")
//         resolve("yes")
//         // reject("not")
//     })
// }

// let pro=getpromise()
// pro.then((res)=>{
//     console.log("yes promises fullfilled",res)
// })
// pro.catch((err)=>{
//     console.log("not promises fullfilled",err)
// })


// promise chain
// 1
// function asyncfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some detains");
//             resolve("succes")
//         }, 4000);
//     })
// }

// console.log("fetching data")
// let p1=asyncfunc();
// p1.then((res)=>{
//     console.log(res)
// })

// 2
function asyncfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data1");
            resolve("succes")
        }, 4000);
    })
}

function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data2");
            resolve("succes")
        }, 4000);
    })
}

// console.log("fetching data1")
// let p1=asyncfunc();
// p1.then((res)=>{
//     console.log(res)
// })
// console.log("fetching data2")
// let p2=asyncfunc();
// p2.then((res)=>{
//     console.log(res)
// })

// for one after the other


// console.log("fetching data1")
// let p1=asyncfunc()
// p1.then((then)=>{
//     console.log("fetching data2")
//     let p2=asyncfunc2()
//     p2.then((res)=>{})
// })

// or

// console.log("fetching data1")

// asyncfunc().then((then)=>{
//     console.log("fetching data2");
    
//     asyncfunc2().then((res)=>{})
// })

// or

// asyncfunc().then((res)=>{
//     return asyncfunc2()
// }).then((res)=>{
//     console.log(res);
// })






// async await
// async function hello(){
//     console.log("hello")
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data")
//             resolve(200)
//         },2000);
//     })
// }

// async function getweatherdata(){
//     await api();
//     await api();
// }

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid)
            resolve("success")
            
        }, 2000);
    })
}

// async function getalldata(){
//     console.log("getting data 1")
//     await getdata(1);
//     console.log("getting data 2")
//     await getdata(2)
//     console.log("getting data 3")
//     await getdata(3)
// }

// by iife

(async function (){
    console.log("getting data 1")
    await getdata(1);
    console.log("getting data 2")
    await getdata(2)
    console.log("getting data 3")
    await getdata(3)
}) ();

