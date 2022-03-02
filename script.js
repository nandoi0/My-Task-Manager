var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;
var isFormVisible = true;

function toggleImportant() {
    
    console.log("icon clicked");

    if(isImportant) {
        //non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else {
        //important
    $("#iImportant").removeClass(nonImportantClass);
    $("#iImportant").addClass(importantClass);
    isImportant= true;
    }

}

function toggleForm() {
    if(isFormVisible){
        //hide
        isFormVisible = false;
        $("#form").hide();
    }
    else{
        //show
        isFormVisible =true;
        $("#form").show();
    }
    
    }
    function saveTask() {
    

        let title = $("#txtTitle").val();  //this is jquery
        let date = $("#selDate").val();
        let contact = $("#txtContact").val();
        let location = $("#txtLocation").val();
        let desc = $("#txtDescription").val();
        let color = $("#selColor").val();
    

         let task = new Task(isImportant, title, date, contact, location, desc, color);
         console.log(task);

         //save the task

         //display
         displayTask(task);
    }

function displayTask(task) {
    let syntax = `<div class="task">
    <div class="info">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>
        <label class="date">${task.dueDate}</label>
    <div class="extra">
        <label class="location">${task.location}</label>
        <label class="contact">${task.contact}</label>
    </div>
        <button class="btn btn-sm btn-danger">Remove</button>
    
    </div>`;

    $("#tasks-list").append(syntax);
}

function init() {
    console.log("hello");

    //events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);

    //load data

}

window.onload = init;