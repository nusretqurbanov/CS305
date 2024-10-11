const firstname=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const date=document.getElementById('date')

firstname.addEventListener('input', (e) => {
    console.log(e.target.value);
    
})

password.addEventListener('click',(e) =>{
    console.log('someone is here');
    
})

email.addEventListener('input',(e)=>{
    console.log('gmail attempt');
    
})

formofuser.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('send data to backend side');
    

})

date.addEventListener("input",(e)=>{
    console.log(e.target.value);
    
})

checkbox.addEventListener('click',(e)=>{
    console.log("clicked checkbox");
    
})