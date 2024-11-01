var counter = 1;

function NextSlide() {
    counter++;
    if (counter === 4) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}
function PreviousSlide() {
    counter--;
    if (counter === 0) {
        counter = 3;
    }
    document.getElementById('radio' + counter).checked = true;
}
let right = true;

/*setInterval(function () {
    if (right) {
        counter++;
        if (counter >= 3) {
            counter = 3;
            right = false;
        }
    }
    else {
        counter--;
        if (counter <= 1) {
            counter = 1;
            right = true;
        }
    }
    document.getElementById('radio' + counter).checked = true;

}, 3000);*/


/*search bar*/

function search() {
    let inputvalue = document.getElementById('search').value.toUpperCase();
    let Poster = document.querySelectorAll('.film');
    let title = document.getElementsByTagName('h6');

    for (i = 0; i < title.length; i++) {
        if (title[i].innerHTML.toUpperCase().indexOf(inputvalue) >= 0) {
            Poster[i].style.display = "";
        } else {
            Poster[i].style.display = "none";
        }
    }

}

let like = document.querySelector('.like');
let likecounter = document.getElementById('likecounter');
let likes = parseInt(likecounter.textContent);
let dislikecounter = document.getElementById('dislikecounter');
let dislikes = parseInt(dislikecounter.textContent);
let dislike = document.querySelector('.dislike');

like.style.fill = "black"
dislike.style.fill = "black"

//likes 

like.addEventListener("click", (e) => {
    if (dislike.style.fill === "red") {
        dislike.style.fill = "black"
        dislikes--;
        dislikecounter.textContent = dislikes;
    }

    if (like.style.fill === "black") {
        likes++;
        likecounter.textContent = likes;
        like.style.fill = "green";
    } else if (like.style.fill === "green") {
        like.style.fill = "black";
        likes--;
        likecounter.textContent = likes;
    }
})
dislike.addEventListener("click", (e) => {
    if (like.style.fill === "green") {
        like.style.fill = "black"
        likes--;
        likecounter.textContent = likes;
    }

    if (dislike.style.fill === "black") {
        dislikes++;
        dislikecounter.textContent = dislikes;
        dislike.style.fill = "red";
    } else if (dislike.style.fill === "red") {
        dislike.style.fill = "black";
        dislikes--;
        dislikecounter.textContent = dislikes;
    }

})

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

// let star1 = document.getElementById('nejma1');
// let star2 = document.getElementById('nejma2');
// let star3 = document.getElementById('nejma3');
// let star4 = document.getElementById('nejma4');
// let star5 = document.getElementById('nejma5');
// const stars = [star1, star2, star3, star4, star5];

// function clearstars() {
//     star1.style.fill = "none"
//     star2.style.fill = "none"
//     star3.style.fill = "none"
//     star4.style.fill = "none"
//     star5.style.fill = "none"
// }
let stars = document.querySelectorAll('.nejma');
function clearstars(){
    stars.forEach(star => {
        star.style.fill="none"
    });
}

function setStars(number) {
    clearstars();
    for (let i = 0; i < number; i++) {
        stars[i].style.fill = "gold";
    }
}

stars.forEach((star, index) => {
    star.addEventListener("click", (e) => {
        setStars(index + 1);
        console.log(index + 1)
    });
});

// star1.addEventListener("click", (e) => {
//     clearstars();
//     star1.style.fill = "gold"
// })

// star2.addEventListener("click", (e) => {
//     clearstars();
//     star1.style.fill = "gold"
//     star2.style.fill = "gold"
// })
// star3.addEventListener("click", (e) => {
//     clearstars();
//     star1.style.fill = "gold"
//     star2.style.fill = "gold"
//     star3.style.fill = "gold"
// })
// star4.addEventListener("click", (e) => {
//     clearstars();
//     star1.style.fill = "gold"
//     star2.style.fill = "gold"
//     star3.style.fill = "gold"
//     star4.style.fill = "gold"
// })
// star5.addEventListener("click", (e) => {
//     clearstars();
//     star1.style.fill = "gold"
//     star2.style.fill = "gold"
//     star3.style.fill = "gold"
//     star4.style.fill = "gold"
//     star5.style.fill = "gold"
// })



