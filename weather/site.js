//widget Виджет
var pre = 0;
document.getElementById('prebtn').onclick = function (){
	++pre;
	if (pre == 1){
	next = 2;
	document.getElementById('pos1').classList.remove("widget__active");
	document.getElementById('pos2').classList.remove("widget__active");
	document.getElementById('pos3').classList.add("widget__active");	
	}
	else if (pre == 2){
	document.getElementById('pos1').classList.remove("widget__active");
	document.getElementById('pos3').classList.remove("widget__active");
	document.getElementById('pos2').classList.add("widget__active");
	}
	else if (pre == 3){
	document.getElementById('pos2').classList.remove("widget__active");
	document.getElementById('pos3').classList.remove("widget__active");
	document.getElementById('pos1').classList.add("widget__active");
	pre = 0;
	}
	
}

var next = 0;
document.getElementById('nextbtn').onclick = function (){
	++next;
	if (next == 1){
	pre =2;
	document.getElementById('pos1').classList.remove("widget__active");
	document.getElementById('pos3').classList.remove("widget__active");
	document.getElementById('pos2').classList.add("widget__active");
	}
	else if (next== 2){
	document.getElementById('pos1').classList.remove("widget__active");
	document.getElementById('pos2').classList.remove("widget__active");
	document.getElementById('pos3').classList.add("widget__active");
	}
	else if (next== 3){
	document.getElementById('pos3').classList.remove("widget__active");
	document.getElementById('pos2').classList.remove("widget__active");
	document.getElementById('pos1').classList.add("widget__active");
	next = 0;
	}
}
