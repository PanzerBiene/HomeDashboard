<script>
import { Configuration, OpenAIApi } from "openai";

export default{
    props: {
    },
    methods: {
        send_to_ai() {
            
        }
    }
};

</script>

<template>
    <br>
    <div class="chat_history">
        
    </div>
    <label for="prompt">Your message: </label>
    <input type="text" id="prompt">
    <button id="prompt-submit">Send</button>
</template>