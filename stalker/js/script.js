//mobile__menu
let countMob = 0;
function toggleStyle(){
    ++countMob;
    var mob = document.getElementById("mobile__menu");
    if ( countMob % 2 !== 0){
        mob.classList.remove('mobile__no');
    }
    else {
        mob.classList.add('mobile__no');
    }
}

function mobileExit(){
    var mob = document.getElementById("mobile__menu");
    mob.classList.add('mobile__no');
}