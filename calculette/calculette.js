    var choix, j;
    var deux = new Array;
    var i = 3;
    
    function verif(){
      if(choix === 1 || choix === 2 || choix === 3  || choix === 4 || choix === 5){

        i = 1;
      }else {
        i = 2;
        alert("Erreur \n Commande Inconnue");
      }
    }
      
    var bouton = document.getElementById("calc");
    bouton.addEventListener("click", function(){

      var choix2 = prompt("Quelle type d'opération ? \n Les choix reconnu sont : \n 1: addition \n 2: soustraction \n 3: multiplication \n 4: division \n 5: modulo \n (N'entrez que le chiffre correspondant à votre choix) ");
      choix = parseInt(choix2);
    }, false);
    
    bouton.addEventListener("click", function(){
      verif();
      if(choix !== null && i == 1){
        for(k=0; k<2; k++){
          k === 0 ? j = "premier" : j = "second";
          deux.push(prompt("Tapez votre " + j + " chiffre :"));
          deux[k] = parseFloat(deux[k]);
        } 
        if(i === 1 && deux[0] === NaN){
          i = 2;
        }
      }
    }, false);
    
    bouton.addEventListener("click", function(){
      if(choix === 1)
        alert(deux[0] + deux[1]);
      if(choix === 2)
        alert(deux[0] - deux[1]);
      if(choix === 3)
        alert(deux[0] * deux[1]);
      if(choix === 4)
        alert(deux[0] / deux[1]);
      if(choix === 5)
        alert(deux[0] % deux[1]);
      deux = [];
    }, false);