<script setup>
import Home_Stats from '../components/Home_Stats.vue';
import { useItemsStore } from '../stores/items.js';

const item_store = useItemsStore()
const items = item_store.get_items;
const shopping_list = item_store.get_shopping_list_items;
</script>
<template>

<main>    
    <Home_Stats :items=items :shopping_list=shopping_list :todo_list=[]> </Home_Stats>
</main>

</template>