<script setup>
import ItemList from '../components/Item_List.vue';
import { useItemsStore } from '../stores/items.js';
const item_store = useItemsStore()
const items = item_store.get_items;

function add_item_to_list(item) {
    if( item.name != undefined && item.name.length > 0 && item.amount != undefined && item.amount >= 0) {
        item_store.addItem({name: item.name, amount: item.amount});
    }
    else {
        alert("Error invalid item. make sure the name is not empty and the amount is greater or equal to 0");
    }
}


</script>

<template>

    <main>
        Items
        <ItemList :items=items @add="add_item_to_list"></ItemList>
    </main>

</template>