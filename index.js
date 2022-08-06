const sidebar= document.querySelector('.sideBar')
const ham = document.querySelector('.ham')
ham.addEventListener('click',()=>{
    console.log(sidebar.style.left)
    if(sidebar.style.left=="0px"){
        sidebar.style.left="-25rem"
    }
    else{
        sidebar.style.left="0px"
    }
})