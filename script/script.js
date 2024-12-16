

  console.log(books.findIndex((book) => book['name'] === 'Die Geheimnisse des Ozeans'));

  function init(){
    insertBooks();
  }

// Funktion die alle Bücher auf der Startseite anzeigt
function insertBooks(){
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBook(indexBook);
    }
  }


  // erstellt das HTML Element und gibt es zurück in die funktion Insert Books
  // Bücher anzeigen mit: Titel, Bild, Likes, Preis und Kommentaren
  function getBook(indexBook) {
    return `
        <div class="bookPreview">
            <div><img class="imgBookPreview" src="${books[indexBook].img}"></img></div>
            <div class="bookDescription"> 
              <div>
                <h2>Buchtitel: ${books[indexBook].name}</2>
                <h3>Author: ${books[indexBook].author}</h3>
              </div>  
              <div class="commentBookContainer">
                <div class="commentBook">
                  <div class="commentAuthorName">
                      Inge:
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Inge
                  </div>
                </div> 
                
                <div class="commentBook">
                  <div class="commentAuthorName">
                      Mandy:
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Mandy
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Klaus:
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Klaus
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Peter:
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Peter
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Reno: 
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Reno
                  </div>
                </div>  
              </div>
               <div>
              <label for="commentInput">Kommentar:</label>
              <input type="text" id="commentInput" name="commentInput"> 
              <button type="button">senden</button>
            </div>
            </div>  
            <div class="bookDescriptionButton">
              <div class="displayFlex">
               <img onclick="#" class="imgDescriptionButton" src="./img/icon/hart_white.png" alt=""></img>  <p>${books[indexBook].likes}</p>
              </div>
              <img onclick="#" class="imgDescriptionButton" src="./img/icon/favorits.png" alt=""></img>
              <p>Preis: ${books[indexBook].price} €<p>
              <img onclick="#" class="buyButton" src="./img/icon/buy_white.png" alt=""></img
            </div>    
        </div>
    `;
}  


// Weitere Aufgaben:
// Es gibt mindestens 3 Bücher auf der Seite zu sehen, hier kann man jeweils Kommentare hinzufügen
// implementiere eine Like Funktion, welche die Herzfarbe ändert und die gefällt mir anzahl erhöht oder verringert
// OPTIONAL: Du kannst Bücher als Favoriten markieren und dir gesondert anzeigen lassen
// Responsive bis 320px Breite, alles responsive ohne Scrollbalken

