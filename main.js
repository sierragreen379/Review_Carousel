// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "img/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "img/andre-styles-pq9npYMirk8-unsplash.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "img/ian-dooley-d1UPkiFd04A-unsplash.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

// select items
const img = document.querySelector("#person-img");
const person = document.querySelector("#name");
const job = document.querySelector("#job");
const review = document.querySelector("#review");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const randomBtn = document.querySelector("#random-btn");

// event listeners
nextBtn.addEventListener("click", pushNext);
prevBtn.addEventListener("click", pushPrev);
randomBtn.addEventListener("click", pushRandom);

// functions to run on event
let reviewNum = 0;

function pushNext() {
    reviewNum += 1;
    if (reviewNum > reviews.length - 1) {
        reviewNum = 0;
    }
    img.src = reviews[reviewNum].img;
    person.innerHTML = reviews[reviewNum].name;
    job.innerHTML = reviews[reviewNum].job;
    review.innerHTML = reviews[reviewNum].text;
}

function pushPrev() {
    reviewNum -= 1;
    if (reviewNum <= -1) {
        reviewNum = reviews.length - 1;
    }
    img.src = reviews[reviewNum].img;
    person.innerHTML = reviews[reviewNum].name;
    job.innerHTML = reviews[reviewNum].job;
    review.innerHTML = reviews[reviewNum].text;
}

function pushRandom() {
    reviewNum = Math.floor(Math.random() * (reviews.length));
    img.src = reviews[reviewNum].img;
    person.innerHTML = reviews[reviewNum].name;
    job.innerHTML = reviews[reviewNum].job;
    review.innerHTML = reviews[reviewNum].text;
}