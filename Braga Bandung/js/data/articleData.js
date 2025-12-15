const articleData = {
    id: 1,
    title: "Braga Bandung",
    excerpt: "Pengalaman jalan-jalan menyusuri jalan Braga.",
    category: "Sejarah",
    date: "14 November 2025",
    author: {
        name: "Sammy",
        avatar: "./../../Penulis/Sammy.jpg",
        bio: "Perjalanan di Braga Bandung"
    },
    heroImage: "./images/Foto 1.jpg",
    tags: ["Sejarah", "Jalan-jalan"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Braga?",
            content: `
                <p>Braga adalah sebuah jalan yang berada di pusat Kota Bandung, Jawa barat, Indonesia. Sekarang Braga menjadi salah satu tempat wisata yang sering di kunjungi banayk orang. Di sana juga ada orang dari negara luar, bukan hanya Indonesia.</p>
            `
        },
        {
            type: "section", 
            id: "arti",
            title: "Apa arti nama Braga?",
            content: `
                <p>Nama Braga berasal dari bahasa Belanda yang berarti panggung atau pertunjukkan. Jalan ini diberi nama Braga karena dulunya dipenuhi dengan teater, kafe, dan tempat hiburan.Pada masa kolonial Belanda, jalan ini sangat terkenal sebagai pusan perbelanjaan dan gaya hidup. Jalan Braga menjadi tempat di mana para bangsawan Belanda dan para elit berjalan-jalan sehingga mendapatkan julukan <i><b>De Postweg</b></i> dan kemudian menjadi <i><b>Braga Weg</b></i>.</p>                
            `
        },
        {
            type: "section",
            id: "keunikan",
            title: "Apa Keunikan Jalan Braga?", 
            content: `
                <p>Jalan Braga memiliki keindahan arsitektur dan gaya hidup yang menyerupai Eropa saat itu membuat Bandung dijuluki <i><b>Paris Van Java</b></i> dan Braga adalah jantung dari julukan tersebut.</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Pabrik Mochi Arjuna Wijaya Sukabumi",
        date: "28 Mei 2025", 
        image: "./../Pabrik Moci Sukabumi/images/Foto (5).jpg"
    }
];