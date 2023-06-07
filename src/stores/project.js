import {
    defineStore
} from "pinia";


const projectStore = defineStore({
    id: 'project',
    state: () => ({
        list: [
            {
                "id": 1,
                "title": "Website Demak",
                "image": 'https://i.postimg.cc/9FDKkMJv/project1.png',
                "deskripsi": 'Website Demak is a project or task that is used to complete the submission of Basic Web Programming classes on the Dicoding platform. The Demak website itself contains the history of Demak district, tours in Demak district, culinary delights in Demak district, and Profile of Demak district. This website was built using pure html, css and javascript technology or was created without using a framework at all.'
            },
            {
                "id": 2,
                "title": 'Bookshelf Apps',
                "image": 'https://i.postimg.cc/vHDwdXH2/project2.png',
                "deskripsi": 'Bookshelf Apps are projects or tasks used to complete Beginner Front End submissions on the Dicoding platform. Bookshelf Apps is a website app that is used to store new books that contain fields for title, author, year, and have fields of type Boolean when they ve been read. There are two bookshelves, namely bookshelves that have not been read yet and bookshelves that have been read. This Bookshelf Apps was built using pure html, css and javascript technology or did not use any framework. This Bookshelf Apps has implemented web storage to store data such as title, author, year and read, the web storage uses local storage.'
            },
            {
                "id": 3,
                "title": 'Web Calculator',
                "image": 'https://i.postimg.cc/TYSM2mKd/project3.png',
                "deskripsi": 'Web Calculator is a quiz in the Beginner Front End class on the Dicoding platform. Web Calculator is a simple Web calculator calculation that has the function of adding, subtracting, multiplying, dividing. The web calculator can also display calculation history within certain limits. This web calculator is built using pure html, css and javascript technology or does not use any framework. This web calculator has implemented web storage to store data such as numbers, operators and calculation results. the web storage uses local storage.'
            },
            {
                "id": 4,
                "title": "Wisata Jawa Tengah",
                "image": 'https://i.postimg.cc/CMP9JDHG/project4.png',
                "deskripsi": 'Central Java Tourism is a project or assignment that is used to complete a Beginner Flutter class submission on the Dicoding platform. Central Java Tourism is a multi-platform application which means it can be run from several OS, such as Android, iOS, Windows and also a web browser (Chrome). Central Java Tourism is an application that provides a list of the best tours in Central Java. This Central Java Travel Application is built using the Flutter framework technology. Flutter itself uses the Dart programming language.'
            },
            {
                "id": 5,
                "title": 'Shamo Apps',
                "image": 'https://i.postimg.cc/NjHhKMX1/project5.png',
                "deskripsi": 'Shamo Apps are projects or tasks that are used to complete Flutter class submissions on the BuildWith Angga platform. Shamo apps are multi-platform applications, which means they can be run from several OS, such as Android, iOS, Windows and also a web browser (Chrome). Shamo apps is a septau store application that sells several brands and types of shoes. Shamo Apps is built using the Flutter framework technology. Flutter itself uses the Dart programming language.'
            },
            {
                "id": 6,
                "title": 'Bookshelf Api',
                "image": 'https://i.postimg.cc/25RshDdg/project6.png',
                "deskripsi": 'Bookshelf Api is a project or task used to complete Beginner Back End submissions on the Dicoding platform. Bookshelf Api is an Api that is used to store new books that contain fields for title, author, year, and has fields of type boolean, finished reading and many more. This Api Bookshelf was built using Node Js and Hapi technologies. Bookshelf This fire has features such as adding books, viewing all books, viewing book details, changing books, deleting books.'
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