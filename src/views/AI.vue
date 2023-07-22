<script setup>
import ai_chat from '../components/AI_Chat.vue';
import { useItemsStore } from '../stores/items.js';

const item_store = useItemsStore()
const items = item_store.get_new_items;
</script>
<template>

<main>    
    <ai_chat :items=items></ai_chat>
</main>

</template>