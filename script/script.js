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
    // Ruft insetComment für jedes Buch auf
    for (let indexBook = 0; indexBook < books.length; indexBook++){
      insertComment(indexBook);
    }
  }


// Funktion, die Kommentare eines Buches in das div "bookComment" einfügt
function insertComment(indexBook) {
  // Hole das Buch aus dem books-Array anhand des Index
  let book = books[indexBook];

  // Prüfe, ob das Buch und seine Kommentare existieren
  if (book && book.comments) {
      // Erstelle den HTML-String für die Kommentare mit getTheComment
      let commentsHTML = getTheComment(book.comments);

      // Füge die Kommentare in das passende div ein
      let commentContainers = document.querySelectorAll('.bookComment'); // Selektiere alle Kommentar-Divs
      if (commentContainers[indexBook]) {
          commentContainers[indexBook].innerHTML = commentsHTML; // Füge Kommentare ins richtige Element ein
      }
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
                <h2>Buchtitel: ${books[indexBook].name}</h2>
                <h3>Author: ${books[indexBook].author}</h3>
              </div>  
              <div class="bookComment commentBookContainer"></div>
              <div>
                <label for="commentInput">Kommentar:</label>
                <input type="text" id="commentInput" name="commentInput"> 
                <button type="button">senden</button>
              </div>
            </div>  
            <div class="bookDescriptionButton">
              <div class="displayFlex">
                <img onclick="#" class="imgDescriptionButton" src="./img/icon/hart_white.png" alt=""></img>  
                <p>${books[indexBook].likes}</p>
              </div>
              <img onclick="#" class="imgDescriptionButton" src="./img/icon/favorits.png" alt=""></img>
              <p>Preis: ${books[indexBook].price} €</p>
              <img onclick="#" class="buyButton" src="./img/icon/buy_white.png" alt=""></img>
            </div>    
        </div>
    `;
}


function getTheComment(comments) {
  let commentsHTML = "";
  comments.forEach(commentObj => {
      commentsHTML += `<p><strong>${commentObj.name}:</strong> ${commentObj.comment}</p>\n`;
  });
  return commentsHTML;
}

// Weitere Aufgaben:
// Es gibt mindestens 3 Bücher auf der Seite zu sehen, hier kann man jeweils Kommentare hinzufügen
// implementiere eine Like Funktion, welche die Herzfarbe ändert und die gefällt mir anzahl erhöht oder verringert
// OPTIONAL: Du kannst Bücher als Favoriten markieren und dir gesondert anzeigen lassen
// Responsive bis 320px Breite, alles responsive ohne Scrollbalken

