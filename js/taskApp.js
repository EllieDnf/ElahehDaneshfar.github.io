window.onload = function() {

  document.getElementById("addTask").addEventListener("click", addTask);
  function addTask(event) {
    event.preventDefault();
    var existingTasksList = localStorage.getItem("tasksList");
    var newTask = document.getElementById("inputTask").value;
    if (existingTasksList == null){
      existingTasksList = "";
      let taskNum=0;
    }
    localStorage.setItem("newTask", newTask);
    existingTasksList+="** "+newTask+"<br>";
    localStorage.setItem("tasksList", existingTasksList);
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasksList");
  }

  document.getElementById("clearTask").addEventListener("click", clearTask);

  function clearTask(event) {

    event.preventDefault();
    localStorage.clear();
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasksList");

  }
  document.getElementById("showTasks").addEventListener("click", showTasks);

  function showTasks(event) {
    event.preventDefault();
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasksList");
  }
};
