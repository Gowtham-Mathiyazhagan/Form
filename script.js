const form=document.querySelector("form");
const text=document.querySelector("#name");
const email=document.querySelector("#email");
const select=document.querySelector("#Course");
const gender=document.querySelectorAll("input[name=gender]")
const check=document.querySelector("checkbox");
const submit=document.querySelectorAll("button")[0];


submit.addEventListener("click",function(event){
    // event.preventDefault()
    console.log( "Name :",text.value);
   console.log("Email: ", email.value)
   console.log("form submited")

})
console.log(text)
select.addEventListener("change",function(e){
   console.log(e.target.value);
})
form.addEventListener("reset", function (e) {
    console.log("Reset or Clear Form Data");
  });

  const span=document.querySelector("#span")
  const msg=document.querySelector(".count")

function solve(duration){
   return new Promise((resolve,reject)=>{
       setTimeout(resolve,duration)
   })
}
solve(1000).then(()=>{
   span.innerText="1";
   return solve(1000)
})
.then(()=>{
   span.innerText="2"
   return solve(1000)
})
.then(()=>{
   span.innerText="3"
   return solve(1000)
})
.then(()=>{
   span.innerText="4"
   return solve(1000)
})
.then(()=>{
   span.innerText="5"
   return solve(1000)
})
.then(()=>{
   span.innerText="6"
   return solve(1000)
})
.then(()=>{
   span.innerText="7"
   return solve(1000)
})
.then(()=>{
   span.innerText="8"
   return solve(1000)
})
.then(()=>{
   span.innerText="9"
   return solve(1000)
})
.then(()=>{
   span.innerText="10"
   return solve(1000)
})
.then(()=>{

   msg.innerHTML="<b>Hurry Up....<b>"
   return solve(1000)
})
const fine=document.querySelector("i");

function good(ele,method){
   return new Promise((resolve, reject) => {
      ele.addEventListener(method,resolve)
   })
}
good(fine,"click").then((ele)=>{
   // ele.style.color="blue";
   console.log(ele)
   return good(fine,"click")
}).then(()=>{
   // ele.style.backgroundColor="black";
   console.log("clicked")
})