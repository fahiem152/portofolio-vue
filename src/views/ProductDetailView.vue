<script>

import Navbar from '../components/Navbar.vue';

import projectStore from '@/stores/project';
import { mapState } from 'pinia';

export default {
     name: 'DetailProject',
     computed: {
        ...mapState(projectStore, ['g$detail']),
        detail(){
            return this.g$detail(this.$route.params.id)
        },
    },
    components: { Navbar }
}
</script>
<template>
    
    <Navbar />

    <div class="detail-content">
     
            <h1>{{ detail.title }}</h1>
            
            <img :src= "detail.image">
            <p>{{ detail.deskripsi }}</p>
 
    </div>
</template>
<style>

.detail-content {
    margin: 24px;

}

.detail-content h1 {
    color: aqua;
    text-align: center;
    letter-spacing: 5px;
    font-size: 32px;
    margin-bottom: 50px;
    letter-spacing: 5px;
    font-weight: bold;
}

.detail-content img {
    width: 100%;

    display: block;
    margin: auto;

    border-radius: 20px;
    border-collapse: separate;
}

.detail-content p {
    margin-top: 50px;
    font-size: 24px;
    letter-spacing: 5px;
    text-align: justify;
    color: whitesmoke;
}

@media screen and (max-width: 429px) {
    .detail-content h1 {
        font-size: 28px;
        letter-spacing: 1px;
    }

    .detail-content img {
        width: 100%;
        border-radius: 8px;
    }

    .detail-content p {
        letter-spacing: 1px;
        font-size: 16px;
    }
}
</style>