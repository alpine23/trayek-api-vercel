const trayeks = [
    {
        id: 1,
        rute: ["Alun-alun", "Taman Kyai Langgeng", "Akmil"],
        detail:["Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Alun-alun", "Cacaban", "Jl. Diponegoro", "Taman Kyai Langgeng", "SMAN 4 Magelang", "Pakelan", "Jl. Gatot Subroto", "Akmil", "Jl. Tentara Pelajar", "Alun-alun", "Jl. Pahlawan", "Taman Badakan", "Menowo", "Jl. Ahmad Yani - Kebonpolo"],
        trayek: "Trayek 1"
    },
    {
        id: 2,
        rute: ["Terminal Magersari","RSU Tidar / Unimma Kampus 1","Artos"],
        detail: ["Terminal Magersari", "Jl. Ikhlas", "Shopping", "RSU Tidar / Unimma Kampus 1", "Jl. Gatot Subroto", "Jl. Sarwo Edi", "Artos", "Jl. Jend. Sudirman", "Terminal Magersari"],
        trayek: "Trayek 2"
    },
    {
        id: 3,
        rute: ["Terminal Magersari", "RSU Tidar / Unimma Kampus 1", "Alun-alun", "Rindam"],
        detail: ["Terminal Magersari", "Jl. Ikhlas", "Shopping", "RSU Tidar / Unimma Kampus 1", "Jl. Tentara Pelajar", "Alun-alun", "Jl. Pahlawan", "Tuguran", "Jl. Kapten Suparman", "Jl. Perintis Kemerdekaan", "Ngembik", "Jl. Rambutan", "Kupatan", "Jl. Ahmad Yani", "Menowo", "Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Jl. Majapahit", "Jl. Sriwijaya", "Jl. Singosari", "Jl. Beringin I", "Jl. Beringin IV", "Terminal Magersari"],
        trayek: "Trayek 3"
    },
    {
        id: 4,
        rute: ["Terminal Tidar","Rindam","Alun-alun"],
        detail: ["Terminal Tidar", "Canguk", "Jl. Urip Sumoharjo", "Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Alun-alun", "Jl. Pemuda", "Shopping", "Jl. Jend. Sudirman", "Jl. Soekarno-Hatta", "Terminal Tidar"],
        trayek: "Trayek 4"
    },
    {
        id: 5,
        rute: ["Terminal Tidar", "Artos", "Taman Kyai Langgeng", "Univ. Tidar", "GOR Smapta"],
        detail: ["Terminal Tidar", "Artos", "Jl. Sarwo Edi", "Pakelan", "Jl. Sultan Agung", "Jl. Panembahan Senopati", "Taman Kyai Langgeng", "Jl. Diponegoro", "Jl. Pahlawan", "Tuguran", "Univ. Tidar", "GOR Smapta", "Jl. Jeruk Timur", "Jl. Ahmad Yani", "Menowo", "Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Jl. Majapahit", "Jl. Sriwijaya", "Jl. Singosari", "Jl. Beringin I", "Jl. Beringin IV", "Jl. Jend. Sudirman", "Jl. Soekarno-Hatta", "Terminal Tidar"],
        trayek: "Trayek 5"
    },
    {
        id: 6,
        rute: ["Terminal Magersari", "RSU Tidar / Unimma Kampus 1", "Alun-alun", "Rindam"],
        detail: ["Terminal Magersari", "Jl. Ikhlas", "Shopping", "RSU Tidar / Unimma Kampus 1", "Jl. Tentara Pelajar", "Alun-alun", "Jl. Pahlawan", "Tuguran", "Menowo", "Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Alun-alun", "Jl.Sriwijaya", "Jl. Singosari", "Jl. Jend. Sudirman", "Bank BRI", "Terminal Magersari"],
        trayek: "Trayek 6"
    },
    {
        id: 7,
        rute: ["Terminal Tidar","Artos", "Rindam", "Akmil"],
        detail: ["Terminal Tidar", "Artos", "Jl. Sarwo Edi", "Pakelan", "Jl. Gatot Subroto", "Akmil", "Jl. Tentara Pelajar", "Jl. Sutopo", "Jl. Diponegoro", "Cacaban", "Jl. Veteran", "Jl. Majapahit", "Jl. Sriwijaya", "Jl. Medang", "SMAN 3 Magelang", "Jl. Kalingga", "Jl. Taruma Negara", "Jl. Sriwijaya", "Jl. Telaga Warna", "Jl. Gelangan", "Komplek Rindam", "Jl. Kesatrian Kulon", "Rindam", "Jl. Ahmad Yani", "Jl. Pemuda", "Shopping", "Jl. Jend. Sudirman", "Jl. Soekarno-Hatta", "Terminal Tidar"],
        trayek: "Trayek 7"
    },
    {
        id: 8,
        rute: ["Terminal Tidar", "RSU Tidar / Unimma Kampus 1"],
        detail: ["Terminal Tidar", "Canguk", "Jl. Telaga Warna", "Jl. Sriwijaya", "Jl. Singosari", "Jl. Beringin I", "Jl. Beringin IV", "Terminal Magersari", "Jl. Ikhlas", "Shopping", "RSU Tidar / Unimma Kampus 1", "Jl. Tentara Pelajar", "Jl. D.I. Panjaitan", "Cacaban", "Jl. Diponegoro", "Jl. Pahlawan", "Taman Badakan", "Menowo", "Jl. Ahmad Yani", "Kebonpolo", "Jl. Urip Sumoharjo", "Canguk", "Terminal Tidar"],
        trayek: "Trayek 8"
    },
    {
        id: 9,
        rute: ["Rindam", "Terminal Tidar"],
        detail: ["Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Jl. Majapahit", "Jl. Sriwijaya", "Jl. Singosari", "Jl. Beringin I", "Jl. Beringin IV", "Jl. Jend. Sudirman", "Jl. Soekarno-Hatta", "Terminal Tidar", "Canguk", "RS. Tentara", "Jl. Urip Sumoharjo", "Kebonpolo"],
        trayek: "Trayek 9"
    },
    {
        id: 10,
        rute: ["Terminal Tidar", "Alun-alun", "Rindam"],
        detail: ["Terminal Tidar", "Jl. Soekarno-Hatta", "Jl. Jend. Sudirman", "Terminal Magersari", "Jl. Ikhlas", "Shopping", "RSU Tidar / Unimma Kampus 1", "Jl. Tentara Pelajar", "Alun-alun", "Jl. Pahlawan", "Tuguran", "Menowo", "Jl. Ahmad Yani", "Kupatan", "RSJ", "Sambung", "RSJ", "Kupatan", "Jl. Ahmad Yani", "Menowo", "Kebonpolo", "Rindam", "Jl. Ahmad Yani", "Jl. Majapahit", "Jl. Sriwijaya", "Jl. Singosari", "Jl. Beringin I", "Jl. Beringin III", "Jl. Soekarno-Hatta", "Terminal Tidar"],
        trayek: "Trayek 10"
    },
    {
        id: 12,
        rute: ["Terminal Magersari", "Alun-alun", "Artos"],
        detail: ["Terminal Magersari", "Tidar Indah", "Hero Swalayan", "Jl. Tentara Pelajar", "Alun-alun", "Jl. Pemuda", "Shopping", "Jl. Jend. Sudirman", "Artos", "Jl. Soekarno-Hatta", "Tidar Campur", "Tidar Salakan", "Dampit", "Tidar Salakan", "Tidar Campur", "Beringin II", "Beringin IV", "Terminal Magersari"],
        trayek: "Trayek 12"
    }
];
module.exports = trayeks;
