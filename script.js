//================================================slider========================================================
let counterr = 1;

function NextSlide() {
    counterr++;
    if (counterr === 4) {
        counterr = 1;
    }
    document.getElementById('radio' + counterr).checked = true;
}
function PreviousSlide() {
    counterr--;
    if (counterr === 0) {
        counterr = 3;
    }
    document.getElementById('radio' + counterr).checked = true;
}

let right = true;

setInterval(function () {
    if (right) {
        counterr++;
        if (counterr >= 3) {
            counterr = 3;
            right = false;
        }
    }
    else {
        counterr--;
        if (counterr <= 1) {
            counterr = 1;
            right = true;
        }
    }
    document.getElementById('radio' + counterr).checked = true;

}, 3000);

//=========================================clear-films==================================================================
let films = document.querySelectorAll('.film')
let posters = document.querySelectorAll('.poster')
let hearts = document.querySelectorAll('.heart')

function clearFilmsList() {
    const filmsList = document.getElementById('films-list');
    filmsList.innerHTML = '';
    for (i = 0; i < hearts.length; i++) {
        if (hearts[i].style.fill === "red") {
            const addedfilm = document.createElement('div');
            addedfilm.className = "film"

            const image = posters[i].cloneNode(true)
            addedfilm.appendChild(image);
            filmsList.appendChild(addedfilm);
        }
    }
}
// function loadfilms() {
//     for (i = 0; i < films.length; i++) {
//         const mm = localStorage.getItem('fav' + i)
//         document.getElementById('films-list').appendChild(mm);
//     }
// }
// window.onload = loadfilms()

// document.getElementById('films-list').appendChild(addedfilm);
//=======================================================add-to-favorite================================================

function press(number) {
    const heartt = document.getElementById('heart' + number);

    if (heartt.style.fill === "black") {
        heartt.style.fill = "red"
        localStorage.setItem('heartColor' + (number - 1), "red");
    }
    else {
        heartt.style.fill = "black"
        localStorage.setItem('heartColor' + (number - 1), "black");
    }

}
function loadHeartColors() {
    hearts.forEach((heart, index) => {
        const color = localStorage.getItem('heartColor' + index);
        heart.style.fill = color;
    });
}
window.onload = loadHeartColors()

hearts.forEach((heart, index) => {
    heart.addEventListener('click', (e) => {
        press(index + 1)
        clearFilmsList();
    });
});

//====================================================search==================================================

function search() {
    let inputvalue = document.getElementById('search').value.toUpperCase();
    let img = document.querySelectorAll('.film');
    let title = document.getElementsByTagName('h6');

    for (i = 0; i < title.length; i++) {
        if (title[i].textContent.toUpperCase().indexOf(inputvalue) >= 0) {
            img[i].style.display = "";
        } else {
            img[i].style.display = "none";
        }
    }

}
//==============================================likes-&-dislikes=====================================================

let like = document.querySelector('.like');
let likecounter = document.getElementById('likecounter');
let likes = parseInt(likecounter.textContent);
let dislikecounter = document.getElementById('dislikecounter');
let dislikes = parseInt(dislikecounter.textContent);
let dislike = document.querySelector('.dislike');

let var1 = "black";

like.style.fill = var1
dislike.style.fill = var1

like.addEventListener("click", (e) => {
    if (dislike.style.fill === "red") {
        dislike.style.fill = var1
        dislikes--;
        dislikecounter.textContent = dislikes;
    }

    if (like.style.fill === var1) {
        likes++;
        likecounter.textContent = likes;
        like.style.fill = "green";
    } else if (like.style.fill === "green") {
        like.style.fill = var1;
        likes--;
        likecounter.textContent = likes;
    }
})
dislike.addEventListener("click", (e) => {
    if (like.style.fill === "green") {
        like.style.fill = var1
        likes--;
        likecounter.textContent = likes;
    }

    if (dislike.style.fill === var1) {
        dislikes++;
        dislikecounter.textContent = dislikes;
        dislike.style.fill = "red";
    } else if (dislike.style.fill === "red") {
        dislike.style.fill = var1;
        dislikes--;
        dislikecounter.textContent = dislikes;
    }

})
//==============================================rating-stars========================================================
let starscounter;

function count2() {
    starscounter = 2;
}
function count3() {
    starscounter = 3;
}
function count4() {
    starscounter = 4;
}
function count5() {
    starscounter = 5;
}

let stars = document.querySelectorAll('.nejma');
function clearstars() {
    stars.forEach(star => {
        star.style.fill = "none"
    });
}
let couleur = "#FFCB45";

stars[0].addEventListener('click', (e) => {
    console.log(stars[0]);

    if (couleur.includes(stars[0].style.fill)) {
        stars[0].style.fill = "none"
    }
})
function setStars(number) {
    clearstars();
    for (let i = 0; i < number; i++) {
        stars[i].style.fill = "#FFCB45";
    }
}

stars.forEach((star, index) => {
    star.addEventListener("click", (e) => {
        setStars(index + 1)
    });
});

//==========================================darkmode==============================================================

const body = document.getElementById('bdy');
function switchmode() {
    if (body.className === "defaultmode") {
        localStorage.setItem('mode', "darkmode");
        body.className = "darkmode";
    } else {
        localStorage.setItem('mode', "defaultmode");
        body.className = "defaultmode";
    }
}
function loadmode() {
    const savedMode = localStorage.getItem('mode');
    body.className = savedMode;
}
window.onload = loadmode();

//===============================================hamburger-menu========================================================

function displaymenu() {
    if (document.querySelector('.bar').style.display === "none") {
        document.querySelector('.bar').style.display = "flex"
    } else {
        document.querySelector('.bar').style.display = "none"
    }

}
//======================================add-review================================================================

document.getElementById('sumbit-button').addEventListener('click', (e) => {
    if (document.getElementById('textearea').value != '') {
        const newcomment = document.createElement('div');
        newcomment.className = "prototype";
        document.getElementById('displaycomments').appendChild(newcomment);

        const person = document.createElement('h4');
        person.className = "comintir";
        person.textContent = "You";
        newcomment.appendChild(person);

        const paragraph = document.createElement('p')
        paragraph.textContent = document.getElementById('textearea').value;;
        newcomment.appendChild(paragraph);

        document.getElementById('textearea').value = '';
        clearstars();
    }
})




