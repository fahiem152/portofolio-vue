import { defineStore } from "pinia";
const d$contact = defineStore({
    id: "contact",
    state: ()=>({
        list:[],
    }),
    actions:{
        a$add(data){
            this.list.push(data);
        }
    },
    getters: {
       
        g$listcontact: ({ list })=>list.map((object)=> `${object.nama}->${object.email}->${object.telepon}->${object.pesan}`),
    }
})

export default d$contact;