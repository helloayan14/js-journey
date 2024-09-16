// let btn=document.querySelector(".btn1")
// btn.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)
    
    
//     console.log("hiii")
// }

// let btn=document.querySelector(".but")
// btn.addEventListener("click",()=>{
//     console.log("hi by header1")
// })
// const header2=()=>{
//     console.log("hi by header2")
// }
// btn.addEventListener("click",header2)
// btn.addEventListener("click",()=>{
//     console.log("hi by header3")
// })
// btn.addEventListener("click",()=>{
//     console.log("hi by header4")
// })

// btn.removeEventListener("click",header2)


let mode=document.querySelector("#t")
let m="light"
let body=document.querySelector("body")
mode.addEventListener("click",()=>{
    if(m==="light"){
        m="dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        m="light"
        body.classList.add("light")
    }
    console.log(m)
})