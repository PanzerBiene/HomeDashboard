<script>
export default{
    props: {
        items: Array,
    }
};

</script>

<template>
    <section>
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <span contenteditable="true" id="name">{{ item.name }}</span>
                    <span  contenteditable="true" id="amount">{{ item.amount}}</span>
                </li>
            </ul>
        </section>
</template>