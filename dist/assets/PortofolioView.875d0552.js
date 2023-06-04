var $=Object.defineProperty;var j=(e,a,n)=>a in e?$(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var _=(e,a,n)=>(j(e,typeof a!="symbol"?a+"":a,n),n);import{o,c as l,a as t,t as h,w as S,d as f,m as C,b as v,r as d,e as P,f as r,F as m,g as b,h as w,i as V,j as B,k as F}from"./index.920b080d.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as W}from"./Navbar.f7d3801c.js";const L={};const A={name:"BaseInput",emits:["update:modelValue","escaped"],props:{name:String,label:String,modelValue:String,type:{type:String,default:"text"}}},D={class:"baseinput"},x=["for"],I={class:"label"},J=["type","placeholder","value"];function H(e,a,n,p,g,u){return o(),l("div",D,[t("label",{for:n.name},[t("p",I,h(n.label+"    :"),1),t("input",{type:n.type,placeholder:n.label,value:n.modelValue,onInput:a[0]||(a[0]=i=>e.$emit("update:modelValue",i.target.value)),onKeyup:a[1]||(a[1]=S(i=>e.$emit("escaped",i),["esc"]))},null,40,J)],8,x)])}const N=c(A,[["render",H]]);class T{constructor(){_(this,"resetForm",a=>(Object.keys(a).forEach(n=>a[n]=""),a))}}const M=new T,y=f({id:"contact",state:()=>({list:[]}),actions:{a$add(e){this.list.push(e)}},getters:{g$listcontact:({list:e})=>e.map(a=>`${a.nama}->${a.email}->${a.telepon}->${a.pesan}`)}});const E={name:"ContacForm",data:()=>({input:{nama:"",email:"",telepon:"",pesan:""}}),methods:{...C(y,["a$add"]),submit(){this.a$add({...this.input}),console.log(this.input),this.reset()},reset(){this.input=M.resetForm(this.input)}},computed:{...v(y,["g$listcontact"])},components:{BaseInput:N}},G=t("h1",{class:"judulcontact"},"Contact Form",-1),K={class:"contact-form"},Z=t("br",null,null,-1),U=t("button",{type:"reset"},"Reset",-1),Y=t("button",{type:"submit"},"Submit",-1),X={class:"list-contact"},O=t("h2",null,"Conatct List:",-1);function Q(e,a,n,p,g,u){const i=d("BaseInput");return o(),l(m,null,[G,t("div",K,[t("form",{onSubmit:a[4]||(a[4]=P((...s)=>u.submit&&u.submit(...s),["prevent"]))},[r(i,{modelValue:e.input.nama,"onUpdate:modelValue":a[0]||(a[0]=s=>e.input.nama=s),name:"nama",label:"Nama",type:"text"},null,8,["modelValue"]),r(i,{modelValue:e.input.email,"onUpdate:modelValue":a[1]||(a[1]=s=>e.input.email=s),name:"email",label:"Email",type:"email"},null,8,["modelValue"]),r(i,{modelValue:e.input.telepon,"onUpdate:modelValue":a[2]||(a[2]=s=>e.input.telepon=s),name:"telepon",label:"Telepon",type:"number"},null,8,["modelValue"]),r(i,{modelValue:e.input.pesan,"onUpdate:modelValue":a[3]||(a[3]=s=>e.input.pesan=s),name:"pesan",label:"Pesan ",type:"textarea"},null,8,["modelValue"]),Z,U,Y],32),t("div",X,[O,t("ol",null,[(o(!0),l(m,null,b(e.g$listcontact,(s,k)=>(o(),l("li",{key:k},h(s),1))),128))])])])],64)}const R=c(E,[["render",Q]]),q=f({id:"project",state:()=>({list:[{id:"1",title:"Website Demak",image:"public/project1.png",deskripsi:"Website Demak adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Dasar Pemrograman Web di platform Dicoding. Webisite Demak ini sendiri berisi tentang Sejarah kabupaten Demak, wisata - wisata yang ada di kabupaten demak, kuliner - kuliner yang ada di kabupaten demak, dan Profile Kabupaten Demak. Webiste ini dibangun menggunakan Teknologi html, css dan javascript murni atau dibuat tanpa menggunakan framework sama sekali."},{id:"2",title:"Bookshelf Apps",image:"public/project2.png",deskripsi:"Bookshelf Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission Front End Pemula di platform Dicoding. Bookshelf Apps adalah sebua apps website yang digunakan untuk menyimpan buku baru yang berisi field judul, penulis, tahun, dan memliki field yang bertipe boolean selesai di baca. terdapat duna rak buku yaitu rak buku yang belum selesai di baca dan rak buku yang sudah selesai di baca. Bookshelf Apps ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. Bookshelf Apps ini sudah menerapkan web storage untuk menyimpan data data seperti judul, penulis, tahun dan sudah dibaca, web storage nya menggunakan local storage."},{id:"3",title:"Web Calculator",image:"public/project3.png",deskripsi:"Web Calculator adalah suatu kuis dalam kelas  Front End Pemula di platform Dicoding. Web Calculator adalah sebuah Web perhitungan kalkulator sederhan yang memiliki fungsi tambah, kurang, kali, bagi. Web calculator juga bisa menampilkan history perhitungan dalam limit tertentu. Web calculator ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. web calculator ini sudah menerapkan web storage untuk menyimpan data data seperti angka, operator dan hasil perhitungan. web storage nya menggunakan local storage."},{id:"4",title:"Wisata Jawa Tengah",image:"public/project4.png",deskripsi:"Wisata Jawa Tengah adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Flutter Pemula di platform Dicoding. Wisata Jawa Tengah adalah aplikasi multi-platform yang artinya dapat di jalankan dari beberapa OS, seperti android, ios, windows dan juga web browser(chrome). Wisata Jawa Tengah adalah aplikasi yang menyediakan list wisata - wisata terbaika di Jawa Tengah. Apps Wisata Jawa Tengah ini dibagun menggunakan Teknologi framework Flutter. Flutter sendiri meenggunakan bahasa pemrograman dart."},{id:"5",title:"Shamo Apps",image:"public/project5.png",deskripsi:"Shamo Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Flutter  di platform BuildWith Angga. Shamo apps adalah aplikasi multi-platform yang artinya dapat di jalankan dari beberapa OS, seperti android, ios, windows dan juga web browser(chrome). Shamo apps adalah aplikasi toko septau yang menjual beberapa merek dan jenis sepatu. Shamo Apps ini dibagun menggunakan Teknologi framework Flutter. Flutter sendiri meenggunakan bahasa pemrograman dart."},{id:"6",title:"Bookshelf Apps",image:"public/project2.png",deskripsi:"Bookshelf Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission Front End Pemula di platform Dicoding. Bookshelf Apps adalah sebua apps website yang digunakan untuk menyimpan buku baru yang berisi field judul, penulis, tahun, dan memliki field yang bertipe boolean selesai di baca. terdapat duna rak buku yaitu rak buku yang belum selesai di baca dan rak buku yang sudah selesai di baca. Bookshelf Apps ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. Bookshelf Apps ini sudah menerapkan web storage untuk menyimpan data data seperti judul, penulis, tahun dan sudah dibaca, web storage nya menggunakan local storage."}]}),actions:{},getters:{g$listproject:({list:e})=>e,g$detail:({list:e})=>a=>e.find(n=>n.id===a)}});const z={name:"ListProject",computed:{...v(q,["g$listproject"])}},aa=t("h1",{class:"judul-list"},"List Project",-1),ea={class:"list-project"},ta=["src"],na=t("button",{class:"detail"},"Detail Project",-1);function ia(e,a,n,p,g,u){const i=d("router-link");return o(),l(m,null,[aa,t("div",ea,[(o(!0),l(m,null,b(e.g$listproject,(s,k)=>(o(),l("div",{class:"container",key:k},[t("h4",null,h(s.title),1),t("img",{src:s.image},null,8,ta),r(i,{to:{name:"productdetail",params:{id:s.id}}},{default:w(()=>[na]),_:2},1032,["to"])]))),128))])],64)}const sa=c(z,[["render",ia]]),oa={stack:[{id:1,name:"Flutter",image:"https://i.postimg.cc/SKwyvMN4/Flutter.png"},{id:2,name:"Dart",image:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"},{id:3,name:"JavaScript",image:"https://i.postimg.cc/MHwzWJQr/Java-Script.png"},{id:4,name:"ExpressJs",image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},{id:5,name:"GitHub",image:"https://i.postimg.cc/CxxLB063/GitHub.png"},{id:6,name:"GitLab",image:"https://i.postimg.cc/htZ4VYkf/GitLab.png"},{id:7,name:"Firebase",image:"https://i.postimg.cc/7YVZZhX1/Firebase.png"},{id:8,name:"MySQL",image:"https://i.postimg.cc/QCqhCYgN/Group-25.png"},{id:9,name:"Postman",image:"https://i.postimg.cc/XvZjL8Wx/Postman.png"},{id:10,name:"HTML",image:"https://i.postimg.cc/9fjxbS3b/HTML.png"},{id:11,name:"CSS",image:"https://i.postimg.cc/fLmwnRJ9/CSS.png"},{id:12,name:"Boostrap",image:"https://i.postimg.cc/dtv0FrRt/Boostrap.png"},{id:13,name:"Vue",image:"https://i.postimg.cc/d0m5xBwY/Vue.png"}]},la="/websiteportovue/assets/fotoo.4bb47f3e.jpg";const ra={name:"HomePorto",setup(){return{state:V(oa.stack)}}},ua=B('<section id="home"><div class="deskripsi"><h1>Hello, I&#39;am Ahmad Muhammad Fahiem</h1><p> I was born in Demak on May 1, 2002. I am currently 21 years old. I am studying at AKI University Semarang, majoring in informatics Engineering. I am delighted to learn new things to enhance my skills. I am meticulous and able to work collaboratively in a team. I have a keen interest in the field of software engineering, particularly in Mobile Apps development using Flutter.</p><div class="button"><p>Download CV</p></div></div><img src="'+la+'"></section><section id="Contact"><h1 class="judul-list">Contact</h1><div class="containerContact"><div class="serviceContact"><img src="https://i.postimg.cc/MGpVDvKx/pngwing-com-2.png" alt="" srcset=""></div><div class="serviceContact"><img src="https://i.postimg.cc/Y9jPJr8B/pngegg.png" alt="" srcset=""></div><div class="serviceContact"><img src="https://i.postimg.cc/y6mqK5jt/pngwing-com.png" alt="" srcset=""></div><div class="serviceContact"><img src="https://i.postimg.cc/tgjPKs4L/pngwing-com-1.png" alt="" srcset=""></div><div class="serviceContact"><img src="https://i.postimg.cc/CxxLB063/GitHub.png" alt="" srcset=""></div></div></section>',2),pa={id:"skill"},da=t("h1",{class:"judul-list"},"Skills",-1),ma={class:"containerSkill"},ca=["src"];function ga(e,a,n,p,g,u){return o(),l(m,null,[ua,t("section",pa,[da,t("div",ma,[(o(!0),l(m,null,b(p.state,i=>(o(),l("div",{class:"service",key:i.id},[t("img",{src:i.image},null,8,ca),t("h4",null,h(i.name),1)]))),128))])])],64)}const ka=c(ra,[["render",ga]]);const ha={name:"CoursePorto"},ba=t("h1",{class:"judul-list"},"Course",-1),_a=t("div",{class:"containerCourse"},[t("div",{class:"serviceCourse"},[t("img",{src:"https://www.dicoding.com/certificates/0LZ0G6JWNX65",alt:"",srcset:""})]),t("div",{class:"service"},[t("img",{src:"https://www.dicoding.com/certificates/0LZ0G6JWNX65",alt:"",srcset:""})])],-1);function ya(e,a,n,p,g,u){const i=d("Section");return o(),F(i,{id:"Course"},{default:w(()=>[ba,_a]),_:1})}const fa=c(ha,[["render",ya]]),va={name:"PortofolioView",components:{HeaderPorto:L,ContactForm:R,ListProject:sa,Navbar:W,HomePorto:ka,CoursePorto:fa}};function wa(e,a,n,p,g,u){const i=d("Navbar"),s=d("HomePorto"),k=d("ListProject");return o(),l("main",null,[r(i),r(s),r(k)])}const Pa=c(va,[["render",wa]]);export{Pa as default};