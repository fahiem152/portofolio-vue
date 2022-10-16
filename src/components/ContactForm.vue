
<script>
import BaseInput from '../components/BaseInput.vue';
import helper from '../utils/helper.js';
import d$contact from '../stores/contact.js';
import { mapActions, mapState } from 'pinia';
export default {
    name: "ContacForm",
    data: () => ({
        // data: []
        input: {
            nama: '',
            email: '',
            telepon: '',
            pesan: ''
        },

    }),
    methods: {
        ...mapActions(d$contact, ['a$add']),
        submit() {
            this.a$add({ ...this.input });
            // alert('data berhasil di submit');
            console.log(this.input)
            this.reset();
        },
        reset() {
            this.input = helper.resetForm(this.input);
            // this.input = resetObject(this.input);
        },
    },
    computed: {
        ...mapState(d$contact, ['g$listcontact']),
    },
    components: { BaseInput }
}
</script>
<template>
    <h1 class="judulcontact">Contact Form</h1>
    <div class="contact-form">


        <form @submit.prevent="submit">
            <BaseInput v-model="input.nama" name="nama" label="Nama" type="text" />
            <BaseInput v-model="input.email" name="email" label="Email" type="email" />
            <BaseInput v-model="input.telepon" name="telepon" label="Telepon" type="number" />
            <BaseInput v-model="input.pesan" name="pesan" label="Pesan " type="textarea" />
            <br>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>

        </form>
        <div class="list-contact">
            <h2>Conatct List:</h2>
       
            <ol>
                <li v-for="(member, index) in g$listcontact" :key="index">{{  member}}</li>
            </ol>
        </div>
    </div>
</template>

<style>
.contact-form {
    display: flex;
    margin: 24px;


}

.judulcontact {
    text-align: center;
    font-weight: bold;
    color: aqua;
    font-size: 32px;
    margin-bottom: 50px;
    margin-top: 50px;
    letter-spacing: 5px;
}

form {
   
    background-color: rgb(231, 227, 227);
    padding: 28px;
    border-radius: 12px;
}

button {
    color: #FFF;
    background-color: #09F;
    width: 50%;
    height: 65px;
    font-size: 18px;
    border-radius: 12px;
    letter-spacing: 3px;
}


button:hover {
    font-weight: 600;
    color: #FFF;
    background-color: #333;
    width: 50%;
    height: 65px;
    font-size: 18px;
    border: 2px solid #09F;
    letter-spacing: 3px;
}

.list-contact {
    width: 90%;
    margin-left: 28px;
    background-color: #333;
    padding: 20px;
    border-radius: 12px;
}
h2{
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    color: whitesmoke;
}
.list-contact ol li{
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;
}
@media screen and (max-width: 801px) {
    .contact-form{
        display: flex;
        flex-direction: column;
    }
    .list-contact{
      
        margin-top: 50px;
        height: 700px;
    }
}
@media screen and (max-width: 429px) {
    form{
        width: 300px;
    }
    .list-contact{
        margin-left: 0px;
        width: 300px;
    }
    .judulcontact{
        margin-left: 28px;
    }
}
</style>
