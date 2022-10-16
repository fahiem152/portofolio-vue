<script>
import BaseInput from '../components/BaseInput.vue';

import helper from '../utils/helper.js'
import BaseSelected from '../components/BaseSelected.vue';
import d$member from '../stores/member.js';
import {mapActions, mapState} from 'pinia';
const dummyData = [
    {
        name: 'UserA',
        email: 'usera@gmail.com',
        class: 'A',
    },
    {
        name: 'UserB',
        email: 'userB@gmail.com',
        class: 'B',
    },
    {
        name: 'UserC',
        email: 'userc@gmail.com',
        class: 'C',
    },
    {
        name: 'UserD',
        email: 'userd@gmail.com',
        class: 'B',
    }
];
export default {
    name: "TestView",
    data: () => ({
        title: "Test",
        //data
        data:[],
        //input
        input: {
            name: "",
            email: "",
            class: "",
        },
        //dropdown
        dropdown:{
            class: ["A","B","C"]
        }
    }),
    components: { BaseInput, BaseSelected },
    methods: {
        ...mapActions(d$member, ['a$add']),
        submit(){
            this.data.push({... this.input});
            this.reset();
            // console.log(this.input)
        },
        submitStore(){
            this.a$add({...this.input});
            this.reset();
        },
        reset(){
            this.input = helper.resetForm(this.input);
            // this.input = resetObject(this.input);
        },
        logEmits(event){
            console.log('fromEmits', event);
        }
    },
    watch:{
        'input.name'(val){
            console.log('input Name has changed to', val);
        },
        'input.email'(val){
            console.log('input Email has changed to', val);
        },
        'input.class'(val){
            console.log('input Class has changed to', val);
        }
    },
    created(){
        // dummyData.forEach((object)=>this.data.push(object))'
        dummyData.forEach((object)=>this.a$add(object));
    }, 
    computed:{
        ...mapState(d$member, ['g$list']),
        memberList(){
            return this.data.map((object)=> `${object.name} -> ${object.class} -> ${object.email}`)
        }
    }
};
</script>
<template>
    <div class="test">
        <h1>{{ title }}</h1>
        <form @submit.prevent="submitStore">
            <BaseInput v-model="input.name" name="name" label="Your Name" type="text" @escaped="logEmits"/>
            <BaseInput v-model="input.email" name="email" label="Your Email" type="email" @escaped="logEmits"/>
            <BaseSelected v-model="input.class" name="class" label="Your Class" :data="dropdown.class"/>
            <!-- <label for="class">
                <p>Class</p>
                <select name="class" id="class" v-model="input.class" placeholder="Select Class">
                    <template v-for="item in dropdown.class" :key="item">
                    <option value="" selected hidden disabled>Select Class</option>
                        <option :value="item">{{ item }}</option>
                    </template>
                </select>
            </label> -->
            <br>
            <br>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            <br>
            <br>
            <p>Member List:</p>
            <ol>
                <li v-for="(member, index) in g$list" :key="index">{{  member}}</li>
            </ol>
        </form>
        
    </div>
</template>
<style>
@media (min-width: 1024px) {
    .test {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>


