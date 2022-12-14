fetch('https://restcountries.com/v3.1/all')
.then((data)=>(data.json()))
.then((countries)=>{
    function foo(){
        for(var i of countries){
            const card=document.createElement('div');
            card.setAttribute('class', 'card');

            card.innerHTML+=`
            <div class='img'><img src='${i.flags.svg}'/></div>
            <div class='content'>
            <p>Capital:${i.capital}</p>
            <p>Population:${i.population}</p>
            <p>Region:${i.region}</p>
            </div>
            `
            document.body.append(card)
        }
    }
    foo()
})
