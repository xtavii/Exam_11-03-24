async function newsfetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();

    //creazione variabile
    
    let argomenti = document.getElementsByClassName("item_text");
    
    //numero argomenti per classe su console
    console.log(argomenti.length);

    //replace argomenti
    argomenti[0].innerHTML= json.programming_languages_popular[0];
    argomenti[1].innerHTML= json.programming_languages_popular[1];
    argomenti[6].innerHTML= json.programming_languages_popular[3];
    argomenti[5].innerHTML= json.programming_languages_popular[2];
    argomenti[10].innerHTML= json.programming_languages_popular[4];
    argomenti[13].innerHTML= json.programming_languages_popular[5];
    argomenti[14].innerHTML= json.programming_languages_popular[6];
    argomenti[15].innerHTML= json.programming_languages_popular[7];

    //variabile image
    let image = document.getElementsByClassName("eltdf-normal-logo");
    
    //numero image per classe su console
    console.log(image.length);

    //replace immagine
    image[0].src = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png';

    //bonus
    
}
newsfetch();

    