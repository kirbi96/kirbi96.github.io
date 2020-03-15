var selectedetRow = null; //применяется если строка не редактируется

function formSubmit(){ //отправка формы 
	var formData = readFormData();  //считывание формы
	if (selectedetRow == null){  //строка не редактируется
		insertNewRecord(formData); //добавляем данные из формы в таблицу
	}
	else { //строка редактируется
		updateRecord(formData); //отправляем исправленные данные в таблицу
	}
	resetForm(); //очищаем форму
}

//JSON 
var requestURL = 'https://github.com/kirbi96/crud/blob/master/lpu.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var full_name = request.response;
	console.log(full_name);
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
	cell4.innerHTML = `<a onClick="onEdit(this)">Ред</a> <a onClick="onDelete(this)">Уд</a>`;
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
		row = td.parentElement.parentElement;//обращение к tr
	document.getElementById('list').deleteRow(row.rowIndex);
	resetForm();
	}
}