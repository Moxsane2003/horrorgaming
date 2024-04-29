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
      
  
      data.forEach(nom => {
        let title= nom.journal.nomJournal;
        console.log(title);
          let titleJs= `<h4>${title}</h4>`;
        
          let body= document.querySelector("body")
          console.log(body);
    
          body.insertAdjacentHTML("beforeend", titleJs);    
        
      });



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici