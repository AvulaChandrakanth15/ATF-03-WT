//let obj1={
//    name:"Shrey",
//  age:25
//}
//let obj2=obj1
//obj2.name="Shrey Khandelwal"
//console.log(obj1)
//console.log(obj2)
/*node .\IT.js (in cmd)*/
/*--------DOM manipulation--------*/
let parent=document.getElementById("parent")
let btn=document.getElementById("btn")
let toggle=1
btn.addEventListener("click",function(){
   if(toggle==1){
        parent.style.backgroundColor=" rgb(52,52,52)"
        toggle=0
    }else{
        parent.style.backgroundColor=" beige"
        toggle=1
    }
    
})

//document.getElementById("parent").addEventListener("click",()=>{
  //  if(toggle==1){
    //    parent.style.backgroundColor="rgb(52,52,52)"
      //  toggle=0
    //}else{
      //  parent.style.backgroundColor="beige"
        //toggle=1
    //}
//})
let a=123.2256
console.log(Math.random()*10)
console.log(Math.floor(a))
console.log(Math.ceil(a))
console.log(Math.floor((Math.random()*10)+1))
let max=55
let min=40
console.log(Math.floor((Math.random()*(max-min+1))+min))