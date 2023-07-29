<script setup>
import Shopping_List from '../components/Shopping_List.vue';
import { useItemsStore } from '../stores/items';
const item_store = useItemsStore();
const shopping_list = item_store.get_shopping_list_items;

function add_to_shopping_list(item) {
    if( item.name != undefined && item.name.length > 0 && item.amount != undefined && item.amount >= 0) {
        item_store.add_shopping_list_item({name: item.name, amount: item.amount});
    }
    else {
        alert("Error invalid item. make sure the name is not empty and the amount is greater or equal to 0");
    }
}
</script>

<template>
    
    <main>
        Shopping List
        <Shopping_List :shopping_list_items=shopping_list @add="add_to_shopping_list"></Shopping_List>
    </main>

</template>