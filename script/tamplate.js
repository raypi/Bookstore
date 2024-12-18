// erstellt das HTML Element und gibt es zurück in die funktion Insert Books
// Bücher anzeigen mit: Titel, Bild, Likes, Preis und Kommentaren
function getBook(indexBook) {
    const heartSrc = books[indexBook].liked ? "./img/icon/hart_red.png" : "./img/icon/hart_white.png";
    return `
        <div class="bookPreview">
            <div><img class="imgBookPreview" src="${books[indexBook].img}"></img></div>
            <div class="bookDescription"> 
              <div>
                <h2>Buchtitel: ${books[indexBook].name}</h2>
                <h3>Author: ${books[indexBook].author}</h3>
              </div> 
              <div>
                <p>Kommentare:</p> 
              </div>   
              <div class="bookComment commentBookContainer">
              </div> 
              <div class="inputSection">
                <div>
                  <label for="commentInput_${indexBook}">Kommentar:</label>
                </div>
                <div>
                  <input type="text" id="commentInput_${indexBook}" name="commentInput">
                </div>
                <div>
                  <button onclick="addNote(${indexBook})" id="commentInputButton_${indexBook}" type="button">senden</button>
                </div>
              </div>
              <div id="commentFail_${indexBook}" class="commentFailDiv">
              </div>
            </div>  
            <div class="bookDescriptionButton">
              <div class="buttonDiv">
                <img id="likeHeart_${indexBook}" onclick="pushLikeBtn(${indexBook})" 
                     class="imgDescriptionButton" src="${heartSrc}" alt="like button"></img>  
                <p id="likeCount_${indexBook}">${books[indexBook].likes}</p>
              </div>
              <!-- <img onclick="#" class="imgDescriptionButton" src="./img/icon/favorits.png" alt=""></img> -->
              <p>Preis: ${books[indexBook].price.toFixed(2)} €</p>
             <!-- <img onclick="#" class="buyButton" src="./img/icon/buy_white.png" alt=""></img> -->
            </div>    
        </div>
    `;
  }