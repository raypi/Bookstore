// init function beim laden der Seite im Body
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


// fügt die Kommentare ein
function getTheComment(comments) {
  let commentsHTML = "";
  comments.forEach(commentObj => {
      commentsHTML += `<p><strong>${commentObj.name}:</strong> ${commentObj.comment}</p>\n`;
  });
  return commentsHTML;
}


// prüft ob eingabe im Kommentarfeld vorhanden, wenn vorhanden speichert es den Kommentar als anonym
function addNote(indexBook) {
  // erstellt Dynamische IDs für Input-Feld und Fehler-Div
  const inputField = document.getElementById(`commentInput_${indexBook}`);
  const failDiv = document.getElementById(`commentFail_${indexBook}`);
  
  // prüft ob eingabe vorhanden
  const commentText = inputField.value.trim();
  if (commentText === "") {
      failDiv.textContent = "Bitte zuerst Kommentar eintragen, dann senden!";
      return; // Funktion beenden, wenn keine Eingabe vorhanden ist
  }

  // speichert vorhandenen Kommentar
  const book = books[indexBook];
  book.comments.push({
      name: "Anonym",
      comment: commentText
  });

  // aktualisiert die vorhandenen kommentare neu 
  insertComment(indexBook);

  // Input-Feld und Fehler-Div zurücksetzen
  inputField.value = "";
  failDiv.textContent = "";
}


// Drücken des Like BTN ändert die Farbe des Herzes und den Counter
function pushLikeBtn(indexBook) {
  const book = books[indexBook];
  const likeHeart = document.getElementById(`likeHeart_${indexBook}`);
  const likeCount = document.getElementById(`likeCount_${indexBook}`);

  // Wenn `liked` true war, wird es false und die Likes werden um 1 verringert
  if (book.liked) {
      book.liked = false;
      book.likes--;
      likeHeart.src = "./img/icon/hart_white.png"; // Weißes Herz setzen
  } 
  // Wenn `liked` false war, wird es true und die Likes werden um 1 erhöht
  else {
      book.liked = true;
      book.likes++;
      likeHeart.src = "./img/icon/hart_red.png"; // Rotes Herz setzen
  }

  // Likes-Wert aktualisieren
  likeCount.textContent = book.likes;
}

// Weitere Aufgaben:
// Es gibt mindestens 3 Bücher auf der Seite zu sehen, hier kann man jeweils Kommentare hinzufügen
// implementiere eine Like Funktion, welche die Herzfarbe ändert und die gefällt mir anzahl erhöht oder verringert
// OPTIONAL: Du kannst Bücher als Favoriten markieren und dir gesondert anzeigen lassen
// Responsive bis 320px Breite, alles responsive ohne Scrollbalken

