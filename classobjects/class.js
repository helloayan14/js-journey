// prototypes in js 

// const employee ={
//     salary:3444,
//     calctax() {
//         console.log("hello tax")
//     }
// }
// const employee2={
//     salary:433,

// }

// employee2.__proto__= employee


// classes and objects in js

// class Toyotacar{

//     constructor(brand,mileage){
//         console.log("creating new object")
//         this.brand=brand
//         this.mileage=mileage
//     }
//     start() {
//         console.log("start the car")
//     }
//     stop() {
//         console.log("the car has been stopped")
//     }
// }

// let fortuner=new Toyotacar("fortuner",10)
// console.log(fortuner)
// let lexus=new Toyotacar()
// console.log(lexus)

// inheritance

// class Person{
//     constructor(){
//         this.species="homosapiens"
//     }
//     eat(){
//         console.log("it eats")
//     }

//     work(){
//         console.log("it works")
//     }
    

// }

// class engineer extends Person{
//     work(){
//         console.log("it works hard")
//     }
// }

// let obje=new engineer()

// super keyword

// class Person{
//     constructor(){
//         console.log("enter parent constructor")
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("it eats")
//     }
// }

// class engineer extends Person{
//     constructor(branch){
//         console.log("enter engineer constructor")
//         super();
//         this.branch=branch
//         console.log("exit the child")

//     }
//     work(){
//         console.log("it works very hard")
//     }
// }

// let eng=new engineer("fortuner")


// class Person{
//     constructor(name){
//        this.name=name
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("it eats")
//     }
// }

// class engineer extends Person{
//     constructor(name){
        
//         super(name);
        

//     }
//     work(){
//         super.eat()
//         console.log("it works very hard")
//     }
// }

// let eng=new engineer("ayan")




// practice ques 1
// data="info"
// class user{
//     constructor(name,email){
//         this.name=name
//         this.email=email

//     }
//     viewdata(){
//         console.log(data)
//     }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email)
//     }
//     editdata(){
//         data="new info"
//     }
// }

// let stu1=new user("ayan","dfae@@")
// let ad=new admin("adm","@jsdoj")


// // error handling

// let a=2
// let b=4
// try{
//     console.log(a+c)

// }catch(err){
//     console.log(err)
// }