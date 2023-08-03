<script setup>
import ai_chat from '../components/AI_Chat.vue';
import { useItemsStore } from '../stores/items.js';
import { usePreferencesStore } from '../stores/preferences';
import { useAIMessagesStore } from '../stores/ai_messages';
import axios from 'axios';

const item_store = useItemsStore()
const items = item_store.get_items;

const preferences_store = usePreferencesStore();
const preferences = preferences_store.get_preferences;
const allergies = preferences_store.get_allergies;

const ai_messages_store = useAIMessagesStore();
const ai_messages = ai_messages_store.get_ai_messages;

async function send_to_ai(messages) {
    alert('sent to ai');
    const url = "https://zjvhedhed9.execute-api.ap-southeast-2.amazonaws.com/prod/chatai";

    const only_use_pantry = document.getElementById("only_use_pantry").checked;

    const data = {
        pantry_items: items,
        chat_messages: messages,
        preferences: preferences,
        allergies: allergies,
        only_use_pantry: only_use_pantry
    };
    ai_messages_store.add_ai_message({role: messages[messages.length-1].role, "content": messages[messages.length-1].content});
    const config = {
        'x-api-key': '',
        'Access-Control-Allow-Origin': '*',
    };
    console.log(data);
    const response = await axios.post(url, data, config);
    console.log(response);
    ai_messages_store.add_ai_message({role: "assistant", content: response.data.body.slice(1,response.data.body.length-1)})
    console.log(response);
}
</script>
<template>

<main>
    <label for="only_use_pantry">Only use items in pantry?</label>
    <input type="checkbox" id="only_use_pantry" :checked="true"/>
    <ai_chat :items=items :ai_messages=ai_messages @SENDTOAI="send_to_ai"></ai_chat>
</main>

</template>