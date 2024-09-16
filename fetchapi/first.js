const URL="https://cat-fact.herokuapp.com/facts"
const factpara=document.querySelector("#fact")
const btn= document.querySelector("#btn")

const getfacts=async ()=>{
    console.log("getting data")
    let response=await fetch(URL)
    console.log(response) //json format
    let data=await response.json()
     factpara.innerText=data[2].text 


}
// by promise Chain
function getfacts(){
    fetch(URL)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        factpara.innerText=data[3].text
    })
}



btn.addEventListener("click",getfacts)