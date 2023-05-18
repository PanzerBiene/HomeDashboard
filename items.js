// DOM elements
const item_Form = document.querySelector("#item-form");
const item_List = document.querySelector(".items");
const main_Input = document.querySelector("#item-form input");

let items = JSON.parse(localStorage.getItem("items")) || [];

if (localStorage.getItem("items")) {

     items.map((item) => {
        create_Item(item);
    })
}

/**
 * Listen for a submit action on the item form
 * Call createItem with the new item
 * add the item to the item list and saves it in storage
 */
item_Form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input_Value = main_Input.value ;

    if (input_Value == "") {
        return ;
    }

    const item = {
        id: new Date().getTime(),
        name: input_Value,
        amount: 0,
        is_In_Stock: true
    };

    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));

    create_Item(item);

    item_Form.reset();
    main_Input.focus();
})

/**
 * Listen for click event on the item_List element
 * If the remove-item button is clicked call remove_Item with the id of the item
 * If update-item is clicked call update_Item
 */
item_List.addEventListener("click", (e) => {

    if (e.target.classList.contains("remove-item") || 
    e.target.parentElement.classList.contains("remove-item") || 
    e.target.parentElement.parentElement.classList.contains("remove-item")) {

        const item_Id = e.target.closest("li").id;
        remove_Item(item_Id);
    }
    else if (e.target.classList.contains("update-item") ||
    e.target.parentElement.classList.contains("update-item") || 
    e.target.parentElement.parentElement.classList.contains("update-item")) {
        
        update_Item();
    }

})

/**
 * Listen for keydown event on the item_List element
 * if the key was a spacebar prevent newline and remove focus from element
 */
item_List.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        e.target.blur();
    }
})

/**
 * Create a list item for the new item
 * Create the markup for the item
 * Append the item as a child element of the item_List element
 * @param {Object} item 
 */
function create_Item(item) {
    const item_El = document.createElement("li");
    
    item_El.setAttribute("id", item.id);

    if((!item.is_In_Stock && item.amount <= 0) || item.amount <=0) {
        item_El.classList.add("out-of-stock");
        item.amount = 0;
    }
    else if (item.amount > 0) {
        item.is_In_Stock = true;
    }

    const item_El_Markup = `
        <div>
            <span contenteditable="true" id="name">${item.name}</span>
            <span  contenteditable="true" id="amount">${item.amount}</span>
            <button title="Update ${item.name}" class="update-item">
            <svg viewBox="0 0 24 24" fill="none">
                    <path d="M7.25 17.25L6.75 6.75"
                    stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                    <path d="M17.25 1.75L6.75 17.25"
                    stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
            <button title="Remove ${item.name}" class="remove-item">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17.25 17.25L6.75 6.75"
                    stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                    <path d="M17.25 6.75L6.75 17.25"
                    stroke="#A4D0E3" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
                        `;
          
    item_El.innerHTML = item_El_Markup;

    item_List.appendChild(item_El);
}

/**
 * Remove the item with the corrisponding id from items
 * Save items to storage
 * Remove the element with the id from the document
 * @param {number} item_Id 
 */
function remove_Item(item_Id) {
    items = items.filter((item) => item.id != parseInt(item_Id));

    localStorage.setItem("items", JSON.stringify(items));

    document.getElementById(item_Id).remove();
}

/**
 * Get the list of item elements
 * For each of the items get the text values for name and amount
 * Create new item object for each item with new values
 * Push new item to new_items list
 * Save new_items list to storage
 */
function update_Item() {

    let list_items = document
    .getElementsByClassName("items")[0]
    .getElementsByTagName("li");

    let new_items = [];

    for (i=0; i< list_items.length; i++) {
        let id = list_items.item(i).getAttribute("id");

        let spans = list_items.item(i)
        .getElementsByTagName("div")[0]
        .getElementsByTagName("span");

        let name = spans[0].textContent;
        let amount = spans[1].textContent;
        let is_In_Stock = false;

        if (amount <= 0) {
            amount = 0;
            is_In_Stock = true;
        }

        let item = {
            id: id,
            name: name,
            amount: amount,
            isInStock: is_In_Stock
        };

        new_items.push(item);
    }

    localStorage.setItem("items", JSON.stringify(new_items));
}