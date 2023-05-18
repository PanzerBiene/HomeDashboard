// DOM elements
const shopping_list_metrics = document.getElementById("items-in-shopping-list");
const items_db_metrics = document.getElementById("items-in-db");
const items_todo_metrics = document.getElementById("items-in-todo");

let items = JSON.parse(localStorage.getItem("items")) || [];
let shopping_list = JSON.parse(localStorage.getItem("shopping-list")) || [];
let todo_list = JSON.parse(localStorage.getItem("todo-list")) || [];

shopping_list_metrics.textContent = "Items in shopping list: " + shopping_list.length;
items_db_metrics.textContent = "Items in list: " + items.length;
items_todo_metrics.textContent = "Items in todo list: " + todo_list.length;