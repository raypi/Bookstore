let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "img": "./img/cover/book001.jpg",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "img": "./img/cover/book002.jpg",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "img": "./img/cover/book003.jpg",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "img": "./img/cover/book004.jpg",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "img": "./img/cover/book005.jpg",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "img": "./img/cover/book006.png",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "img": "./img/cover/book007.jpg",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "img": "./img/cover/book008.jpg",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "img": "./img/cover/book009.jpg",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]


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

