function clock(){
                  
    let hour = document.querySelector('#hour');
    let localTime = new Date().toLocaleTimeString('en');
    hour.innerText = localTime;
    
    
};  

setInterval(clock,500)



