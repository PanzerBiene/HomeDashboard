<script setup>
import ai_chat from '../components/AI_Chat.vue';
import { useItemsStore } from '../stores/items.js';
import axios from 'axios';

const item_store = useItemsStore()
const items = item_store.get_new_items;

async function send_to_ai(messages) {
    alert('sent to ai');
    const url = "https://zjvhedhed9.execute-api.ap-southeast-2.amazonaws.com/prod/chatai";
    const data = {
        pantry_items: items,
        chat_messages: messages,
    };
    const config = {
        'x-api-key': '',
        'Access-Control-Allow-Origin': '*',
    };

    const response = await axios.post(url, data, config);
}
</script>
<template>

<main>    
    <ai_chat :items=items @SENDTOAI="send_to_ai"></ai_chat>
</main>

</template>