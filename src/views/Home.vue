<script setup>
import Home_Stats from '../components/Home_Stats.vue';
import { useItemsStore } from '../stores/items.js';

const item_store = useItemsStore()
const items = item_store.get_new_items;
</script>
<template>

<main>    
    <Home_Stats :items=items :shopping_list=[] :todo_list=[]> </Home_Stats>
</main>

</template>