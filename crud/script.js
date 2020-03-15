var selectedetRow = null; //применяется если строка не редактируется

function formSubmit(){ //отправка формы 
	var formData = readFormData();  //считывание формы
	if (selectedetRow == null){  //строка не редактируется
		insertNewRecord(formData); //добавляем данные из формы в таблицу
	}
	else { //строка редактируется
		updateRecord(formData); //отправляем исправленные данные в таблицу
	}
	localStorage.setItem('localData', JSON.stringify(formData)); //забрасываем изменение в localStorage
	resetForm(); //очищаем форму
}


//JSON
var json0 ={
	full_name: "Клиника 1",
	address: "Адрес 1",
	phone: "88005553535"
};
var json1 ={
	full_name: "Клиника 2",
	address: "Адрес 2",
	phone: "88005553535"
};
var json2 ={
	full_name: "Клиника 3",
	address: "Адрес 3",
	phone: "88005553535"
};
var json3 ={
	full_name: "Клиника 4",
	address: "Адрес 4",
	phone: ["88005553535", '0550']
};
var json4 ={
	full_name: "Клиника 5",
	address: "Адрес 5",
	phone: ["900", '0550']
};
var jsonData = [json0,json1,json2,json3,json4];

function insertJsonData() {
	for( let i = 0; i < jsonData.length; i++){
		insertNewRecord(jsonData[i]);
	}
	let el = document.getElementById('json-btn');
	el.classList.remove("json__active");
}



function readFormData(){ //считываем форму
	var formData ={};
	formData["full_name"] = document.getElementById("full_name").value;
	formData["address"] = document.getElementById("address").value;
	formData["phone"] = document.getElementById("phone").value;
	return formData;
}

function insertNewRecord(data) { //добавляем объект в таблицу
	var table = document.getElementById("list").getElementsByTagName("tbody")[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.full_name;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.address;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.phone;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = `<a onClick="onEdit(this)">Ред</a> <a onClick="onDelete(this)" style="color: red">Уд</a>`;
}

function resetForm(){ //очищаем форму после добавления data в таблицу
	document.getElementById("full_name").value = "";
	document.getElementById("address").value = "";
	document.getElementById("phone").value = "";
	selectedetRow = null;
}

function onEdit(td){ //возвращаем данные в форму для дальнейшего редактирования
	selectedetRow = td.parentElement.parentElement; //обращение к tr
	document.getElementById("full_name").value = selectedetRow.cells[0].innerHTML;
	document.getElementById("address").value = selectedetRow.cells[1].innerHTML;
	document.getElementById("phone").value = selectedetRow.cells[2].innerHTML;
}

function updateRecord(formData){// Добавляем отредактированные значения обратно в таблицу
	selectedetRow.cells[0].innerHTML = formData.full_name;
	selectedetRow.cells[1].innerHTML = formData.address;
	selectedetRow.cells[2].innerHTML = formData.phone;
}

function onDelete(td){ //Удаление строки
	if (confirm ('Вы действительно хотите удалить?')){
		let deleteData = {};
		row = td.parentElement.parentElement;//обращение к tr
		deleteData["full_name"] = list.rows[row.rowIndex].cells[0].innerHTML;
		deleteData["address"] = list.rows[row.rowIndex].cells[1].innerHTML;
		deleteData["phone"] = list.rows[row.rowIndex].cells[2].innerHTML;
		document.getElementById('list').deleteRow(row.rowIndex);
		localStorage.setItem('localData', JSON.stringify(deleteData)); //забрасываем удаленные элементы в localStorage
		resetForm();
	}
}

function resetLastStorage() { // Проверяем последний localStorage
	var local = JSON.parse(localStorage.getItem('localData'));
	document.getElementById('localstorage').innerHTML = local.full_name +" "+ local.address +" "+ local.phone;
}
