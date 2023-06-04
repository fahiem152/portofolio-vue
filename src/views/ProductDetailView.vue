<script>
import { project } from '../assets/project';
import Navbar from '../components/Navbar.vue';

    export default {
    props: [
        "id"
    ],
    setup(props) {
        const detail = project["project"].find(function (item) {
            return item.id == props.id;
        });
        return {
            detail,
        };
    },
    components: { Navbar }
}
</script>
<template>
    <Navbar/>
    <div class="detail-content">
        <h1>{{ detail.title }}</h1>
        
        <img :src= "detail.image">
        <p>{{ detail.deskripsi }}</p>
    </div>
</template>
<style>
.detail-content{
    margin: 24px;
   
}
.detail-content h1{
    color: rgb(0, 0, 0);
    text-align: center;
    letter-spacing: 5px;
    font-size: 32px;
    margin-bottom: 50px;
    letter-spacing: 5px;
    font-weight: bold;
}
.detail-content img{
    width: 100%;
 
    display: block;
    margin: auto;
   
    border-radius: 20px;
    border-collapse: separate; 
}
.detail-content p{
    margin-top: 50px;
    font-size: 24px;
    letter-spacing: 5px;
    text-align: justify;
    color: rgb(28, 24, 24);
}
@media screen and (max-width: 429px) {
    .detail-content h1{
        font-size: 28px;
        letter-spacing: 1px;
    }
    .detail-content img{
        width: 100%;
        border-radius: 8px;
    }
    .detail-content p{
        letter-spacing: 1px;
        font-size: 16px;
    }
}
</style>