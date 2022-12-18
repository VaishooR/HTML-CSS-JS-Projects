function createCards({name,id,avatar,phone,city}){
    document.querySelector('.cards').innerHTML+=`
    <div class="container">
        <img src="${avatar}" alt="">
        <div class="content">
            <h3>${name}</h3>
            <p>ID:${id}</p>
            <p>City:${city}</p>
            <p>Phone:${phone}</p>
        </div>
    </div>
    `
}


async function getUser(){
    try{
        const data=await fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/pagination',{method:"GET"});
    const user=await data.json();
    const pagination=document.querySelector('.pagination');
    const noOfPages=Math.ceil(user.length/9);
    for(let i=1;i<=noOfPages;i++){
        const page=document.createElement('button');
        page.innerText=i;
        pagination.append(page);
        page.onclick=()=>{
            console.log("Clicked the page",i);
            const showcurrentPageUsers=user.slice((i-1)*9,i*9);
            document.querySelector(".cards").innerHTML="";
            showcurrentPageUsers.forEach((fewusers)=>createCards(fewusers));
            
        }
    }
    console.log(noOfPages);
    const firstTenUsers=user.slice(0,9);
    firstTenUsers.forEach((eachuser)=>createCards(eachuser));
    }
    catch{
        document.querySelector('body').innerHTML=`<h1>Not Found</h1>`
    }
    
}
getUser();
