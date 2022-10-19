<!-- <script>
import { mapState } from 'pinia';
import projectStore from '../stores/project.js';
   export default {
    name: 'BaseCard'
   props: 
   }
</script>
<template>
    <h1 class="judul-list">List Project</h1>
    <div class="list-project">
        <div class="container">
            <h4></h4>
            <img src= "">
            <router-link  :to="{name: 'productdetail', params: {id : project.id} }">
                <button class="detail" >Detail Project</button>
            </router-link>
            
        </div>
    </div>
</template>
<style>
    
.list-project {

 
    display: grid;
    grid-template-columns: auto auto auto ;
    gap: 50px;
    margin: 24px;
  
    align-content: space-evenly;
}

.container {
    height: 400px;
    border-radius: 16px;
    width: 300px;
    background-color: whitesmoke;
    box-shadow: 5px 5px 5px  rgb(128, 121, 121);
    text-align: center;
}

.container h4 {
    color: #333;
    letter-spacing: 3px;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
}

.container img {
    margin: 0px;
    border-radius: 0px;
    height: 250px;
    object-fit: cover;
    width: 300px;

}
.detail:hover{
    font-weight: 700;
    margin: 12px;
    color: #333;
    background-color: aqua;
    width: 90%;
    height: 65px;
    font-size: 18px;
    border-radius: 12px;
    letter-spacing: 3px;
}

.detail{
    margin: 12px;
    color: whitesmoke;
    background-color: #333;
    width: 90%;
    height: 65px;
    font-size: 18px;
    border-radius: 12px;
    letter-spacing: 3px;
    
}

@media screen and (max-width: 801px) {
    .list-project{
        display: grid;
        grid-template-columns: auto auto  ;
    
    }
}
@media screen and (max-width: 429px) {
    .list-project{
        display: grid;
        grid-template-columns: auto;
    
    }
    .judul-list{
        margin-left: 28px;
    }
}
</style> -->