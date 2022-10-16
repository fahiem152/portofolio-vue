<script>
export default {
    name: 'BaseInput',
    emits: ['update:modelValue', 'escaped'],
    props: {
        name: String,
        label: String,
        modelValue: String,
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>
<template>
    <div class="baseinput">
        <label :for="name">
            <p class="label">{{ label +'    :' }}</p>
            <input :type="type" :placeholder="label" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" @keyup.esc="$emit('escaped', $event)">
        </label>
    </div>
</template>
<style>

.label {
   color: black;
    margin: 12px;
    font-weight: 500;
    font-size: large;
}

input {
    width: 400px;
    height: 60px;

    color: #000;
    border: 2px solid rgb(16, 4, 240);
    border-radius: 8px;

}
@media screen and (max-width: 429px) {
    .baseinput{
        width: 100%;
    }
   input{
    width: 100%;
   }
   .label{
    margin: 4px;
   }
}
</style>