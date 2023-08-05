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
        <div class="container">
            <div class="metrics row mt-4">
                <div class="col col-lg-3.5 border bg-light rounded mx-2" id="items-in-shopping-list">Items in shopping list: {{ shopping_list.length }}</div>
                <div class="col col-lg-3.5 border bg-light rounded mx-2" id="items-in-db">Items in list: {{ items.length }}</div>
                <div class="col col-lg-3.5 border bg-light rounded mx-2" id="items-in-todo">Items in todo list: {{ todo_list.length }}</div>
            </div>
        </div>
    </section>
</template>