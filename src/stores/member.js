import { defineStore } from "pinia";
const d$member = defineStore({
    id: 'member',
    state: ()=>({
        list:[],
    }),
    actions:{
        a$add(data){
            this.list.push(data);
        }
    },
    getters: {
        g$list: ({ list })=>list.map((object)=> `${object.name}->${object.class}->${object.email}`),
        g$listcontact: ({ list })=>list.map((object)=> `${object.name}->${object.email}`),
    }
});

export default d$member;