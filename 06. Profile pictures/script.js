function foo(){
    const profile=document.createElement("div");
    profile.setAttribute("class",'profile');
    profile.innerHTML=`<h1></h1>`
}

fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/users')
.then((data) => (data.json()))
// .then((result)=>{console.log(result)})
.then((result)=>{
    for(var person of result){
        const profile=document.createElement('div');
        profile.setAttribute('class', 'profile');
        profile.innerHTML+=`
        <div class="card">
        <div class='image'><img src="${person.avatar}" /></div>
        <div class="content">
        <h3>${person.name}</h3>
        Office Id: ${person.id}
        </div>
        </div>`
        document.body.append(profile)
    }
})

