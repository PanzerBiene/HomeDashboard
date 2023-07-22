<script>
export default{
    props: {
        items: Array,
        shopping_list: Array,
        todo_list: Array
    }
};

</script>

<template>
    <section>
            <ul class="metrics">
                <li id="items-in-shopping-list">Items in shopping list: {{ shopping_list.length }}</li>
                <li id="items-in-db">Items in list: {{ items.length }}</li>
                <li id="items-in-todo">Items in todo list: {{ todo_list.length }}</li>
            </ul>
        </section>
</template>