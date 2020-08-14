
var new_button = document.getElementById("new_button");
var todo_div = document.getElementById("todo");
var count = 0;

new_button.onclick = new_item;

function new_item() {
    new_todo = document.createElement("input")
    new_todo.className = "new_todo";
    new_todo.draggable = true;
    new_todo.id = count++;
    new_todo.ondragstart = drag;
    todo_div.insertBefore(new_todo, todo_div.children[2]);
}

// default action is to have the dragged items move right back to where they came from
// instead, we want to be able to drop into the other columns
function allow_drop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, element, arg) {
    var todo_id = event.dataTransfer.getData("text");
    var todo = document.getElementById(todo_id);

    if(arg == "done"){
        console.log("done");
        todo.style.background = "#dddddd";
        todo.style.color = "#525252";
    } else if(arg == "doing"){
        todo.style.background = "#ffffff";
        todo.style.color = "#000000";
    }
    element.appendChild(todo);

}