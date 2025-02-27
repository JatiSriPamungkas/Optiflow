const isEmpty = (element, className) => {
  return !element.classList.contains(className);
};

if (isEmpty()) {
  console.log("Is it working?");
  const h1 = document.createElement("h1");
  h1.textContent = "You have no List right now :)";

  const existingDiv = document.querySelector("container-input");

  existingDiv.insertAdjacentElement("afterend", h1);
}

const addTask = () => {
  document.getElementById("add-task").addEventListener("click", function () {
    if (document.getElementById("task-input").value == "") {
      return alert("Please fill the Task Name");
    }

    // Create a new container-list div
    const newContainer = document.createElement("div");
    newContainer.className = "container-list";

    // Create a new items div
    const newItems = document.createElement("div");
    newItems.className = "items";

    // Create a new paragraph for the task
    const newTask = document.createElement("p");
    newTask.textContent = document.getElementById("task-input").value;

    // Create a new btn-checklist div
    const newBtnChecklist = document.createElement("div");
    newBtnChecklist.className = "btn-checklist";

    // Create the done button
    const doneButton = document.createElement("button");
    doneButton.className = "done";
    doneButton.textContent = "V";

    // Create the cancel button
    const cancelButton = document.createElement("button");
    cancelButton.className = "cancel";
    cancelButton.textContent = "X";

    // Append buttons to btn-checklist
    newBtnChecklist.appendChild(doneButton);
    newBtnChecklist.appendChild(cancelButton);

    // Append task and btn-checklist to items
    newItems.appendChild(newTask);
    newItems.appendChild(newBtnChecklist);

    // Append items to container-list
    newContainer.appendChild(newItems);

    const getMainTag = document.querySelector("main");
    const existingDiv = document.querySelector("div.container-list");

    // Append the new container-list to the main container
    getMainTag.insertBefore(newContainer, existingDiv);

    document.getElementById("task-input").value = "";
  });
};

const resetText = () => {
  document.getElementById("remove-text").addEventListener("click", function () {
    document.getElementById("task-input").value = "";
  });
};

// document.querySelector(".cancel").addEventListener("click", function () {
//   const changeListColor = document.querySelectorAll(".items");
//   changeListColor.style.backgroundColor = "rgba(252, 25, 25, 0.6)";
// });

const removeAll = () => {
  document.querySelectorAll(".container-list").forEach((item) => {
    item.remove();
  });
}; // this function has called in the html file

// Call the Function
addTask();
resetText();

// end of the code
