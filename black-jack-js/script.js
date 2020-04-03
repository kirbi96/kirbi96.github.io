var arr =  [2,3,4,6,7,8,9,10,11]; //card coloda
var arrUser = []; //card user
var arrComp = []; //card comp
var click= 0;

var pointUser = 0;
var pointComp = 0;

var totalUser = 0;
var totalComp = 0;


function btnClick(){

	//Анимация
	let start = Date.now();
	let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		rub.style.left = timePassed / 1 + 'px';
		rub.style.top = timePassed / 1 + 'px';
		if (timePassed > 200) clearInterval(timer);

	}, 1);

	let timer1 = setInterval(function() {
	rub.style.left = 0 + 'px';
	rub.style.top = 0 + 'px';
	}, 250);


	//Действия карт
	let a = Math.floor(Math.random()*(9 - click));  //генерируем число
	click = click +1;
	let user = document.getElementById('user');
	let pic = document.createElement("img");
	pic.src = `img/${arr[a]}.jpg`; //генерируем картинку
	user.appendChild(pic); // вставляем картинку
	arrUser.push(arr[a]); //закидываем карту в массив юзера
	arr.splice(a, 1); //удаляем карту из колоды
	pointUser = arrUser.reduce(function(a,b) {
		return a+b
	}); // Суммируем счет юзера
	document.getElementById('point').innerHTML= "Ваш счет = " + pointUser;

	if(pointUser > 21) {
		++totalComp;
		document.getElementById('point').innerHTML= "ВЫ ПРОИГРАЛИ " + pointUser + " ПЕРЕБОР!!!";
		btnRes();
	}
	return pointUser;
}


function btnNext(){

	//Анимация
	let start2 = Date.now();
	let timer = setInterval(function() {
		let timePassed = Date.now() - start2;
		rub.style.left = timePassed / 1 + 'px';
		rub.style.top = - timePassed / 1.5 + 'px';
		if (timePassed > 200) clearInterval(timer);

	}, 1);

	let timer1 = setInterval(function() {
		rub.style.left = 0 + 'px';
		rub.style.top = 0 + 'px';
	}, 250);


	let a = Math.floor(Math.random()*(9 - click));
	click = click +1;
	let comp = document.getElementById('comp');
	let pic = document.createElement("img");
	pic.src = `img/${arr[a]}.jpg`; //генерируем картинку
	comp.appendChild(pic); // вставляем картинку
	arrComp.push(arr[a]); //закидываем карту в массив компа
	arr.splice(a, 1); //удаляем карту из колоды
	pointComp = arrComp.reduce(function(a,b) {
		return a+b
	}); // Суммируем счет компа
	document.getElementById('point_c').innerHTML= "У компьютера = " + pointComp;
	if (pointComp < 17){
		setTimeout(btnNext, 1000);
		return pointComp;
	}
	else if ( pointComp > 21) {
		++totalUser;
		document.getElementById('point_c').innerHTML= "Компьютер проиграл "+ pointComp + " ПЕРЕБОР!!!";
		btnRes();
	}
}

function btnRes(){
	if (pointComp < pointUser && pointUser < 22){
		totalUser = totalUser + 1;
	}
	else if(pointComp > pointUser && pointComp < 22){
		totalComp = totalComp + 1;
	}
	document.getElementById('total').innerHTML= "Общий счет: Комп = " + totalComp + " Вы = " + totalUser;
	setTimeout(newGame, 2000);
	let totalAll = totalComp + totalUser;

	setTimeout(compStart, 2500);

	function compStart() {
		if ( totalAll % 2 !== 0){
			setTimeout(btnNext, 1500);
		}
	}
}


function newGame(){
	arr =  [2,3,4,6,7,8,9,10,11]; //card coloda
	arrUser = []; //card user
	arrComp = []; //card comp
	click= 0;

	pointUser = 0;
	pointComp = 0;

	document.getElementById('point').innerHTML= "Ваш счет = " + pointUser;
	document.getElementById('point_c').innerHTML= "У компьютера = " + pointComp;

	let user = document.getElementById('user');
	let comp = document.getElementById('comp');
	while (user.firstChild) {
		user.removeChild(user.firstChild);
	}
	while (comp.firstChild) {
		comp.removeChild(comp.firstChild);
	}
}





