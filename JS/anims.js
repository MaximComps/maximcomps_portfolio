//SLIDES PROJETS

const pjslides = [
    { img: "Images/Projets/chaine-de-production_cover.jpg", title: "CHAINE DE PRODUCTION [AUTOM S2]", text: "C’est un projet de chaîne de production automatisée sur Control Expert où chaque pièce est acheminée et triée selon son type, la station 4 assurant le tri précis vers les zones dédiées, avec des améliorations comme le comptage des pièces et la gestion des dépôts pour garantir un fonctionnement fluide et sans erreur.", link: "projet-chainedeproduction.html" },
    { img: "Images/Projets/choppe-lapin_cover.jpg", title: "CHOPPE-LAPIN [IE S3]", text: "C’est un jeu interactif utilisant un écran et un télémètre laser où le joueur doit attraper un lapin en ajustant la vitesse de sa main selon son état, le projet ayant consisté à améliorer la précision des mesures du capteur et à optimiser l’affichage pour que l’expérience reste fluide et réactive.", link: "projet-choppelapin.html" },
    { img: "Images/Projets/station-de-pompage_cover.jpg", title: "STATION DE POMPAGE [AUTOM S3]", text: "C'est un projet d’automatisation d’un système de pompage sur Control Expert, intégrant le câblage d’une platine, la conception des GRAFCET (manuel, automatique et sécurité) et le développement d’une IHM avec simulation des niveaux d’eau. L’installation assure le transfert d’eau entre une source, un bassin et un château d’eau, avec supervision en temps réel, gestion des modes de fonctionnement et sécurisation complète du système.", link: "projet-stationdepompage.html" },
    { img: "Images/Projets/translateur-rotatif_cover.jpg", title: "TRANSLATEUR ROTATIF [AUTOM S3]", text: "C’est un projet d’automatisation d’un translateur rotatif sur Control Expert permettant de prendre une caisse détectée et de la déposer automatiquement sur l’un des quatre anneaux disponibles, grâce à la coordination de cinq vérins pilotés par plusieurs GRAFCET de tâche, de sécurité et de fonctionnement..", link: "projet-translateurrotatif.html" },
    { img: "Images/Projets/smart-car_cover.jpg", title: "SMART-CAR [IE/ELEC S2]", text: "C’est un projet de Smart Car télécommandée combinant électronique et programmation, où la maquette de voiture est contrôlée via une carte analogique et une carte Arduino, avec des fonctionnalités comme le moteur, les capteurs de distance et la connexion Bluetooth, offrant un défi complet entre modélisation, soudure et codage.", link: "projet-smartcar.html" }
];

// const expslides = [
//     { img: "img1.jpg", title: "STAGE Max Technologies Europe [2021]", text: "Voici la description du premier élément.", link: "experiences.html" },
//     { img: "img2.jpg", title: "STAGE Planneurs de Puivert [2021]", text: "Voici un autre contenu avec une image différente.", link: "experiences.html" }
// ];

let currentIndex = { pj: 0, exp: 0 };

document.addEventListener("DOMContentLoaded", () => {
    setupSlider("pj", pjslides);
    // setupSlider("exp", expslides);
});

function setupSlider(type, slides) {
    document.getElementById(`${type}-arrow-right`).addEventListener("click", () => changeSlide(type, slides, 1));
    document.getElementById(`${type}-arrow-left`).addEventListener("click", () => changeSlide(type, slides, -1));
}

function changeSlide(type, slides, direction) {
    currentIndex[type] = (currentIndex[type] + direction + slides.length) % slides.length;
    updateSlide(type, slides);
}

function updateSlide(type, slides) {
    document.getElementById(`${type}-bande-img`).src = slides[currentIndex[type]].img;
    document.getElementById(`${type}-bande-title`).innerText = slides[currentIndex[type]].title;
    document.getElementById(`${type}-bande-text`).innerText = slides[currentIndex[type]].text;
    document.getElementById(`${type}-bande-link`).href = slides[currentIndex[type]].link;
}

//BARRE DE RECHERCHE

const searchBar = document.getElementById("searchBar");
const skills = document.querySelectorAll(".skill-card");

searchBar.addEventListener("keyup", function() {
    const searchValue = searchBar.value.toLowerCase();

    skills.forEach(function(skill) {
        const text = skill.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            skill.style.display = "block";
        } else {
            skill.style.display = "none";
        }
    });
});