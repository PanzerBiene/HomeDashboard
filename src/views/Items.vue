<script setup>

import { ref } from 'vue'; 
import ItemList from '../components/Item_List.vue';
const items = ref([{name: "Carrots", amount: 2}, {name: "Ice cream", amount: 1}]);

function add_item_to_list(item) {
    if(Object.entries(item).length > 0) {
        items.value.push({name: item.name, amount: item.amount});
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