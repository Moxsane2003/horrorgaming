function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      let themes = data.journal.themes
      console.log(themes);

    
  
function afficherTitreJournal() {
     let title= data.journal.nomJournal;
     console.log(title);
     let titleID= document.getElementById("title")
     console.log(titleID);
     titleID.insertAdjacentHTML("beforeend", title);
    }

function afficherLesThemes(){
  let themes = data.journal.themes;
    console.log(themes);
    themes.forEach(element => {
      let themeTitre = element.nom
      console.log(themeTitre);
      let liste = `<li class= "themesIcons" >
        <a href="#">${themeTitre}</a>
        </li>`;
      let themesId = document.getElementById("themes")
      console.log(themesId);
      themesId.insertAdjacentHTML("beforeend",liste )
    })
}

function articlepprincipal(){
let articleprincipal = data.journal.articlePrincipal
console.log(articleprincipal);
let articleprincipalId = document.getElementById("articlePrincipal")
console.log(articleprincipalId);
let title = articleprincipal.titre;
console.log(title);
let date = articleprincipal.date;
console.log(date);
let description = articleprincipal.description;
console.log(description);
let thmmes = articleprincipal.theme
console.log(thmmes);
let image = articleprincipal.image
console.log(image);

let articlepprincipalall = `<div class="fond">
<h1>${title}</h1>
<p>${description}</p>
<p>${date}</p>
<h4>${thmmes}</h4>
<img src="${image}" alt="">
</div>`
articleprincipalId.insertAdjacentHTML("beforeend", articlepprincipalall)


}
function LesArticles() {
  let articles = data.journal.articles
console.log(articles);
articles.forEach(element => {
  let articleId = document.getElementById("articles")
console.log(articleId);
let titre = element.titre
console.log(titre);
let date  = element.date
console.log(date);
let theme  = element.theme
console.log(theme);
let image  = element.image
console.log(image);
let arti = `<div class ="arti">
<img class="mage" src="${image}" alt="">
<div class= "ecrire">
<h1>${titre}</h1>
<h3>${theme}-${date}</h3>
<a href="">lire article</a>
</div>
</div>`
console.log(arti);
articleId.insertAdjacentHTML("beforeend",arti)

  
});

}

function touslesauteurs() {
  let auteurs = data.journal.auteurs
  console.log(auteurs);
  auteurs.forEach(element => {
  let auteurId = document.getElementById("auteurs")
  console.log(auteurId);
  let prenom = element.prenom
  console.log(prenom);
  let expreience = element.typeExperience
  console.log(expreience);
  let presentation = element.presentation
  //console.log(presentation);
  let image = element.image
  //console.log(image);
  let icons = element.icone
  let lesauteurs = ` <div class= "aut">
  <h2>${prenom}</h2>
  <h3>${expreience}</h3>
  <p>${presentation}</p>
  <img class ="hommess" src="${image}">
  <i class="icon  ${icons}"></i>
  </div>`
  console.log(lesauteurs);
  auteurId.insertAdjacentHTML("beforeend", lesauteurs)
});

}

function Accroche(){
let phrase = data.journal.phraseAccroche
console.log(phrase);
let approcheId = document.getElementById("hdesign")
console.log(approcheId); 
let titreAccroche = `<h1 class = "police">${phrase}</h1> `
console.log(titreAccroche);
approcheId.insertAdjacentHTML("beforeend", titreAccroche)
}

function AccrocheThemes(){
  let themes = data.journal.themes;
    console.log(themes);
    themes.forEach(element => {
      let themeTitre = element.nom
      console.log(themeTitre);
      let themeimage = element.image
      console.log(themeimage);
      let liste = ` <div class= "themesfin">
      <h2>${themeTitre}</h2>
      <img class= "note" src="${themeimage}">
         </div>`
      let themesId = document.getElementById("phraseAccroche")
      console.log(themesId);
      themesId.insertAdjacentHTML("beforeend",liste )
    })
}

    afficherTitreJournal();
    afficherLesThemes()
    articlepprincipal()
    LesArticles()
    touslesauteurs()
    Accroche()
    AccrocheThemes()
       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici