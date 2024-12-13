

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
              <p>Buchtitel: ${books[indexBook].name}</p>
              <p>Author: ${books[indexBook].author}</p>
              <div class="commentBookContainer">
                <div class="commentBook">
                  <div class="commentAuthorName">
                      Inge
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Inge
                  </div>
                </div> 
                
                <div class="commentBook">
                  <div class="commentAuthorName">
                      Mandy
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Mandy
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Klaus
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Klaus
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Peter
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Peter
                  </div>
                </div>  

                <div class="commentBook">
                  <div class="commentAuthorName">
                      Reno
                  </div>
                  <div class="commentTxt" >
                      Ich bin ein Kommentar zum Buch von Reno
                  </div>
                </div>  
                
              </div>
            </div>  
            <div class="bookDescriptionButton">
              <p><a href="#">Like</a> Likes: ${books[indexBook].likes}</p>
              <p>Preis: ${books[indexBook].price} €<p>
              <p><a href="#">Favorit</a></p>
              <p>buy now</p>
            </div>    
        </div>
    `;
}  


// Weitere Aufgaben:
// Es gibt mindestens 3 Bücher auf der Seite zu sehen, hier kann man jeweils Kommentare hinzufügen
// implementiere eine Like Funktion, welche die Herzfarbe ändert und die gefällt mir anzahl erhöht oder verringert
// OPTIONAL: Du kannst Bücher als Favoriten markieren und dir gesondert anzeigen lassen
// Responsive bis 320px Breite, alles responsive ohne Scrollbalken

