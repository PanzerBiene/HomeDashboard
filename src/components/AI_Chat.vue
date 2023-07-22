<script>
export default{
    props: {
        items: Array,
    },
    emits: ['SENDTOAI'],
    methods: {
        get_messages() {
            return ["test"];
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
    <button id="prompt-submit" @click="$emit('SENDTOAI', get_messages())">Send</button>
</template>