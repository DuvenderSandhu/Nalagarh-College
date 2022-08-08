const sidebar= document.querySelector('.sideBar')
const ham = document.querySelector('.ham')
const btn= document.querySelector('.btn')
let para= document.querySelector('.innerrightabout p')
let enroll= document.querySelector('form input')
let alert= document.querySelector('.alert')
let tobechange=document.querySelector('.tobechange')
let course=document.querySelectorAll('.course')

course.forEach((e)=>{
    e.addEventListener('click',()=>{

tobechange.innerHTML=e.firstElementChild.innerText;
    })
})
console.log(tobechange);
// enroll.addEventListener('click',function(event){
//         enroll=Number(enroll)
//         console.log(typeof enroll.value)
        // if(typeof enroll.value==="number"){
        //     alert.style.display="none";
        // }
        // else{
        //     alert.style.display="block";

        // }


// })
const string= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et id deserunt totam minima voluptatibus, aperiam cumque maiores repudiandae architecto. Veniam consequatur esse aut veritatis officia iste, eos expedita quod! Obcaecati suscipit fuga ex incidunt animi officiis itaque vero enim delectus nam. Totam corrupti repellendus eum molestiae voluptate accusantium incidunt. Sunt?"
btn.addEventListener('click',()=>{
    // para.innerHTML=para.innerHTML+string;

})

// ham.addEventListener('click',()=>{

//     if(sidebar.style.left=="0px"){
//         sidebar.style.left="-35%"
//     }
//     else{
//         sidebar.style.left="0px"
//     }
// })