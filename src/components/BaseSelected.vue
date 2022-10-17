<script>
export default {
    name: 'BaseSelecet',
    emits: ['update:modelValue'],
    props: {
        name: String,
        label: String,
        data: Array,
        modelValue: String,
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>
<template>
    
        <label :for="name">
            <p>{{ label }}</p>
            <select :name="name"  @input="$emit('update:modelValue', $event.target.value)">
                <option value="" selected hidden disabled>{{ label }}</option>
                <option v-for="(item, index) in data" :key="index" :value="item">{{ item }}</option>
            </select>



        </label>
 
</template>
<style>

</style>