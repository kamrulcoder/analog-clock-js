setInterval( function(){
    let date  = new Date();
    let  hour = date.getHours() * 30;
    let minute = date.getMinutes() * 6;
    let seconds = date.getSeconds() * 6;

    function setAngle(wrapper, angle){
        document.querySelector('.'+wrapper).style.transform = `rotateZ(${angle}deg)`;
    }
    
    setAngle('hr',hour );
    setAngle('min',minute );
    setAngle('sec',seconds );

},1000);
