window.onload = function() {
  document.getElementById('add').addEventListener("click", addTask);
  document.getElementById('clear').addEventListener("click", clearTask);

  var list = document.getElementById('tasks');

    function addTask() {
      var task_value = document.getElementById('in').value;

        if (task_value.trim() == '') {
          alert("Empty string!");
        }
        else {
          var new_item = document.createElement('li');
          new_item.textContent = task_value + "  ";
          list.appendChild(new_item);
          clearTask();

          del_button = document.createElement('button');
          del_button.textContent = 'X';
          del_button.addEventListener("click", function() {
            this.parentNode.remove();
          });
          list.lastChild.appendChild(del_button);
        }
    }

    function clearTask() {
      document.getElementById('in').value = "";
    }
}
