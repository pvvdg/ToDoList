window.onload = function() {
  document.getElementById('add').addEventListener("click", addTask);
}

function addTask() {
  var task = document.getElementById('in').value;//get value input

    if (task.trim() == '') { // trim Удаляет из строки начальные и конечные пробелы и символы конца строки.
      alert("Empty string!");
    }
    else {
      var ol = document.getElementById('tasks');
      var new_item = document.createElement('li');
      new_item.textContent = task;
      ol.appendChild(new_item);

      button = document.createElement('button');
      button.textContent = '-';
      button.setAttribute('onclick','this.parentNode.remove()');
      ol.lastChild.appendChild(button);
  }
}
