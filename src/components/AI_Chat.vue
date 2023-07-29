<script>
export default{
    props: {
        items: Array,
        ai_messages: Array,
    },
    emits: ['SENDTOAI'],
    methods: {
        get_messages() {
            prompt = document.getElementById("prompt").value;
            return [{"role": "You", "content": prompt}];
        },
        remove_prompt() {
            const message_input = document.getElementById("prompt");
            message_input.value = "";
        }
    }
};

</script>

<template>
    <br>
    <div class="chat_history">
        <ul>
            <li v-for="(ai_message, index) in ai_messages" :key="index">
                <span>{{ ai_message.role }}</span>
                <span style="white-space: pre-line">{{ ai_message.content.replace(/\\n|\\r\\n|\\n\\r|\\r/g, '\n') }}</span>
            </li>
        </ul>
    </div>
    <label for="prompt">Your message: </label>
    <input type="text" id="prompt">
    <button id="prompt-submit" @click="$emit('SENDTOAI', get_messages()); remove_prompt()">Send</button>
</template>