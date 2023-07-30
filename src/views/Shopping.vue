<script setup>
import Shopping_List from '../components/Shopping_List.vue';
import { useItemsStore } from '../stores/items';
const item_store = useItemsStore();
let shopping_list = item_store.get_shopping_list_items;


/**
 * check the items name and amount are valid then either display an error message
 * or add them to the shopping list via the item store
 * @param {object} item the item to add to the shopping list
 */
function add_to_shopping_list(item) {
    if( item.name != undefined && item.name.length > 0 && item.amount != undefined && item.amount >= 0) {
        item_store.add_shopping_list_item({name: item.name, amount: item.amount});
    }
    else {
        alert("Error invalid item. make sure the name is not empty and the amount is greater or equal to 0");
    }
}

/**
 * loop over each item in the shopping list and call item_store.buy_item to transfer the item to the items list
 * once every item is added reset the shopping list
 */
function buy_shopping_list() {
    for (let i = 0; i < shopping_list.length; i++) {
        console.log(shopping_list[i]);
        item_store.buy_item(shopping_list[i]);
    }
    item_store.reset_shopping_list();
}
</script>

<template>
    
    <main>
        Shopping List
        <Shopping_List :shopping_list_items=shopping_list @add="add_to_shopping_list" @buy="buy_shopping_list"></Shopping_List>
    </main>

</template>