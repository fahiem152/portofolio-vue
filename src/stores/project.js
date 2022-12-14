import {
    defineStore
} from "pinia";


const projectStore = defineStore({
    id: 'project',
    state: () => ({
        list: [
            {
                "id": "1",
                "title": "Website Demak",
                "image": 'public/project1.png',
                "deskripsi": 'Website Demak adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Dasar Pemrograman Web di platform Dicoding. Webisite Demak ini sendiri berisi tentang Sejarah kabupaten Demak, wisata - wisata yang ada di kabupaten demak, kuliner - kuliner yang ada di kabupaten demak, dan Profile Kabupaten Demak. Webiste ini dibangun menggunakan Teknologi html, css dan javascript murni atau dibuat tanpa menggunakan framework sama sekali.'
            },
            {
                "id": "2",
                "title": 'Bookshelf Apps',
                "image": 'public/project2.png',
                "deskripsi": 'Bookshelf Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission Front End Pemula di platform Dicoding. Bookshelf Apps adalah sebua apps website yang digunakan untuk menyimpan buku baru yang berisi field judul, penulis, tahun, dan memliki field yang bertipe boolean selesai di baca. terdapat duna rak buku yaitu rak buku yang belum selesai di baca dan rak buku yang sudah selesai di baca. Bookshelf Apps ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. Bookshelf Apps ini sudah menerapkan web storage untuk menyimpan data data seperti judul, penulis, tahun dan sudah dibaca, web storage nya menggunakan local storage.'
            },
            {
                "id": "3",
                "title": 'Web Calculator',
                "image": 'public/project3.png',
                "deskripsi": 'Web Calculator adalah suatu kuis dalam kelas  Front End Pemula di platform Dicoding. Web Calculator adalah sebuah Web perhitungan kalkulator sederhan yang memiliki fungsi tambah, kurang, kali, bagi. Web calculator juga bisa menampilkan history perhitungan dalam limit tertentu. Web calculator ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. web calculator ini sudah menerapkan web storage untuk menyimpan data data seperti angka, operator dan hasil perhitungan. web storage nya menggunakan local storage.'
            },
            {
                "id": "4",
                "title": "Wisata Jawa Tengah",
                "image": 'public/project4.png',
                "deskripsi": 'Wisata Jawa Tengah adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Flutter Pemula di platform Dicoding. Wisata Jawa Tengah adalah aplikasi multi-platform yang artinya dapat di jalankan dari beberapa OS, seperti android, ios, windows dan juga web browser(chrome). Wisata Jawa Tengah adalah aplikasi yang menyediakan list wisata - wisata terbaika di Jawa Tengah. Apps Wisata Jawa Tengah ini dibagun menggunakan Teknologi framework Flutter. Flutter sendiri meenggunakan bahasa pemrograman dart.'
            },
            {
                "id": "5",
                "title": 'Shamo Apps',
                "image": 'public/project5.png',
                "deskripsi": 'Shamo Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission kelas Flutter  di platform BuildWith Angga. Shamo apps adalah aplikasi multi-platform yang artinya dapat di jalankan dari beberapa OS, seperti android, ios, windows dan juga web browser(chrome). Shamo apps adalah aplikasi toko septau yang menjual beberapa merek dan jenis sepatu. Shamo Apps ini dibagun menggunakan Teknologi framework Flutter. Flutter sendiri meenggunakan bahasa pemrograman dart.'
            },
            {
                "id": "6",
                "title": 'Bookshelf Apps',
                "image": 'public/project2.png',
                "deskripsi": 'Bookshelf Apps adalah project atau tugas yang digunakan untuk menyelesaikan submission Front End Pemula di platform Dicoding. Bookshelf Apps adalah sebua apps website yang digunakan untuk menyimpan buku baru yang berisi field judul, penulis, tahun, dan memliki field yang bertipe boolean selesai di baca. terdapat duna rak buku yaitu rak buku yang belum selesai di baca dan rak buku yang sudah selesai di baca. Bookshelf Apps ini dibangung menggunakan teknologi html, css, dan javasscript murni atau tidak menggunakan framework apapun. Bookshelf Apps ini sudah menerapkan web storage untuk menyimpan data data seperti judul, penulis, tahun dan sudah dibaca, web storage nya menggunakan local storage.'
            },
        ]
    }),
    actions: {},
    getters: {
        g$listproject: ({
            list
        }) => list,
        g$detail: ({list}) => {
            return (id) => list.find((project)=>project.id === id);
        },
    },
})

export default projectStore;