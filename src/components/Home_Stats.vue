<script>
export default{
    props: {
        shopping_list_num: Number,
        items_in_list: Number,
        items_in_todo: Number
    }
};

</script>

<template>
    <section>
            <ul class="metrics">
                <li id="items-in-shopping-list">Items in shopping list: {{ shopping_list_num }}</li>
                <li id="items-in-db">Items in list: {{ items_in_list }}</li>
                <li id="items-in-todo">Items in todo list: {{ items_in_todo }}</li>
            </ul>
        </section>
</template>