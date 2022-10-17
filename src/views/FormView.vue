<template>
    <h1>Page Create Form</h1>
    <form>
        <label>name: </label>
        <input type="text" placeholder="Input Name " v-model="form.name"> <br><br>
        <label>Email: </label>
        <input type="email" placeholder="Input Email " v-model="form.email"><br><br>
        <label>Class: </label>
        <select v-model="form.class">
            <option disabled value="">Choose  Class</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select><br><br>
        <button type="submit" v-on:click.prevent="addData">Submit</button>
    </form>
    <br>
    <h3>Data Form</h3>

    <p>Name: {{ form.name }}</p>
    <p>Email: {{ form.email }}</p>
    <p>Class: {{ form.class }}</p>
</template>
<script>
export default {
    name: "FormView",
    data() {
        return {
            form: {
                name: "",
                email: "",
                class: "",
            }
        }
    },
    methods: {
        addData() {
            console.log(this.form)
        }
    }
}
</script>
<style>

</style>