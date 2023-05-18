// DOM elements
const itemForm = document.querySelector("#item-form")
const itemList = document.querySelector(".items")
const mainInput = document.querySelector("#item-form input")

let items = JSON.parse(localStorage.getItem("items")) || [];

if (localStorage.getItem("items")) {
    items.map((item) => {
        createItem(item)
    })
}

itemForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = mainInput.value 

    if (inputValue == "") {
        return 
    }

    const item = {
        id: new Date().getTime(),
        name: inputValue,
        amount: 0,
        isInStock: true
    }

    items.push(item)
    localStorage.setItem("items", JSON.stringify(items))

    createItem(item)

    itemForm.reset()
    mainInput.focus()
})

itemList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item") || 
    e.target.parentElement.classList.contains("remove-item") || 
    e.target.parentElement.parentElement.classList.contains("remove-item")) {
        const itemId = e.target.closest("li").id
        removeItem(itemId)
    }
    else if (e.target.classList.contains("update-item") ||
    e.target.parentElement.classList.contains("update-item") || 
    e.target.parentElement.parentElement.classList.contains("update-item")) {
        
        let list_items = document.getElementsByClassName("items")[0].getElementsByTagName("li")
        let new_items = []
        for (i=0; i< list_items.length; i++) {
            let id = list_items.item(i).getAttribute("id")
            let spans = list_items.item(i).getElementsByTagName("div")[0].getElementsByTagName("span");
            let name = spans[0].textContent;
            let amount = spans[1].textContent;
            let isInStock = false;
            if (amount <= 0) {
                amount = 0
                isInStock = true;
            }

            let item = {
                id: id,
                name: name,
                amount: amount,
                isInStock: isInStock
            }
            console.log(item)
            new_items.push(item);
        }
        localStorage.setItem("items", JSON.stringify(new_items))

    }
})

itemList.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        console.log(e.target)

        if (e.target.id == "name") {
            itemName = e.target.innerText
            itemAmount = e.target.amount
        }
        else if (e.target.id == "amount") {
            itemName = e.target.name
            itemAmount = e.target.innerText
        }

        updateItem(e.target.parentElement.parentElement.id, itemName, itemAmount)
        e.target.blur()
    }
})

function createItem(item) {
    const itemEl = document.createElement("li")
    
    itemEl.setAttribute("id", item.id)

    if((!item.isInStock && item.amount <= 0) || item.amount <=0) {
        itemEl.classList.add("out-of-stock")
        item.amount = 0
    }
    else if (item.amount > 0) {
        item.isInStock = true
    }

    const itemElMarkup = `
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
                        `
          
    itemEl.innerHTML = itemElMarkup

    itemList.appendChild(itemEl)
}

function removeItem(itemId) {
    items = items.filter((item) => item.id != parseInt(itemId))

    localStorage.setItem("items", JSON.stringify(items))

    document.getElementById(itemId).remove()
}