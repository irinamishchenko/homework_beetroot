// Task 1

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];


for(i = 0; i < playList.length; i++) {
    let list = document.createElement('div');
    list.innerHTML = `<p>${[i+1]}. ${playList[i].author}: ${playList[i].song}</p>`;
    document.querySelector('.first-task').append(list);
};

// Task 2

let modal = document.querySelector('.modal');
let openButton = document.querySelector('.btn-open');
let closeBtn = document.querySelector(".btn-close");


openButton.onclick = function() {
    modal.style.display = "flex";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};


