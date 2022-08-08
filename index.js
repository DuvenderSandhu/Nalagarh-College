const sidebar= document.querySelector('.sideBar')
const ham = document.querySelector('.ham')
const btn= document.querySelector('.btn')
let para= document.querySelector('.innerrightabout p')
const string= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et id deserunt totam minima voluptatibus, aperiam cumque maiores repudiandae architecto. Veniam consequatur esse aut veritatis officia iste, eos expedita quod! Obcaecati suscipit fuga ex incidunt animi officiis itaque vero enim delectus nam. Totam corrupti repellendus eum molestiae voluptate accusantium incidunt. Sunt?"
btn.addEventListener('click',()=>{
    // para.innerHTML=para.innerHTML+string;

})

ham.addEventListener('click',()=>{
    console.log(sidebar.style.left)
    if(sidebar.style.left=="0px"){
        sidebar.style.left="-25rem"
    }
    else{
        sidebar.style.left="0px"
    }
})