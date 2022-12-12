function digitalClock(){
    const time=new Date();
    console.log(time);
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var txt="AM";
    if(h>12){
        h=h-12;
        txt="PM";
    }else if(h===0){ 
        h=12;
        txt="AM";
    }

    h=h<10?'0'+h:h;
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;
    
    const clock=document.querySelector('.time');
    clock.innerHTML=`${h} : ${m} : ${s}   ${txt}`;
}
// digitalClock()

setInterval(digitalClock, 1000)
