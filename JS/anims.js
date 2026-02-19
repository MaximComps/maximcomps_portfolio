const pjslides = [
    { img: "Images/Projets/choppe-lapin_cover.jpg", title: "CHOPPE-LAPIN [IE S3]", text: "C’est un jeu interactif utilisant un écran et un télémètre laser où le joueur doit attraper un lapin en ajustant la vitesse de sa main selon son état, le projet ayant consisté à améliorer la précision des mesures du capteur et à optimiser l’affichage pour que l’expérience reste fluide et réactive.", link: "projet-choppelapin.html" },
    { img: "Images/Projets/chaine-de-production_cover.jpg", title: "CHAINE DE PRODUCTION [AUTOM S2]", text: "C’est un projet de chaîne de production automatisée sur Control Expert où chaque pièce est acheminée et triée selon son type, la station 4 assurant le tri précis vers les zones dédiées, avec des améliorations comme le comptage des pièces et la gestion des dépôts pour garantir un fonctionnement fluide et sans erreur.", link: "projet-chainedeproduction.html" },
    { img: "Images/Projets/smart-car_cover.jpg", title: "SMART-CAR [IE/ELEC S2]", text: "Voici un autre contenu avec une image différente.", link: "projet-smartcar.html" },
    { img: "Images/Projets/translateur-rotatif_cover.jpg", title: "TRANSLATEUR ROTATIF [AUTOM S3]", text: "Encore une troisième description.", link: "projet-translateurrotatif.html" },
    { img: "Images/Projets/station-de-pompage_cover.jpg", title: "STATION DE POMPAGE [AUTOM S3]", text: "Encore une troisième description.", link: "projet-stationdepompage.html" },
    { img: "Images/Projets/robot-mobile_cover.jpg", title: "ROBOT MOBILE [IE/ELEC S2]", text: "Encore une troisième description.", link: "projet-robotmobile.html" },
    { img: "Images/Projets/electrocardiographe_cover.jpg", title: "ELECTROCARDIOGRAPHE [ELEC S3]", text: "Encore une troisième description.", link: "projet-electrocardiographe.html" },
    { img: "Images/Projets/bras-manipulateur_cover.jpg", title: "BRAS MANIPULATEUR [ROBO S4]", text: "Encore une troisième description.", link: "projet-brasmanipulateur.html" },
    { img: "Images/Projets/volet-roulant_cover.jpg", title: "VOLET ROULANT [AUTOM S1]", text: "Encore une troisième description.", link: "projet-voletroulant.html" },
];

const expslides = [
    { img: "img1.jpg", title: "STAGE Max Technologies Europe [2021]", text: "Voici la description du premier élément.", link: "experiences.html" },
    { img: "img2.jpg", title: "STAGE Planneurs de Puivert [2021]", text: "Voici un autre contenu avec une image différente.", link: "experiences.html" }
];

let currentIndex = { pj: 0, exp: 0 };

document.addEventListener("DOMContentLoaded", () => {
    setupSlider("pj", pjslides);
    setupSlider("exp", expslides);
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