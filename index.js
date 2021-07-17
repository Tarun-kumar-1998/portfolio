let jokebtnEl = document.getElementById("jokebtn");

function joke() {
    let choice = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", choice)
        .then(function(response) {
            return response.json();
        })
        .then(function(status) {
            alert(status.value);
        });
}
jokebtnEl.addEventListener("click", joke);
















let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let input = document.getElementById("quoteInput");
let sbtn = document.getElementById("submitBtn");
let rbtn = document.getElementById("resetBtn");
let spnner = document.getElementById("spinner");
let typingtestcloseEl = document.getElementById("typingtestclose");
let countdown = 0;


let typingtestbuttonEl = document.getElementById("typingtestbutton");
let typingtesttttEl = document.getElementById("typingtestttt");
let ti = setInterval(function() {
    countdown = countdown + 1;
    timerEl.textContent = countdown;
}, 1000);
input.addEventListener("keydown", function(event) {
    ti;
})
typingtestbuttonEl.addEventListener("click", function(event) {
    typingtesttttEl.classList.remove("d-none");
    typingtestclose.classList.remove("d-none");
    console.log("dfghj");
    countdown = 0;
    setInterval(ti);
});
let options = {
    method: "GET"
};

fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(status) {
        let t = status.content;
        quoteDisplayEl.textContent = t;
    });
sbtn.addEventListener("click", function(event) {
    let t = quoteDisplayEl.textContent;
    console.log(input.value)
    spnner.classList.remove("d-none");
    clearInterval(ti);
    if (input.value === t) {
        resultEl.style.color = "green";
        spnner.classList.add("d-none");
        resultEl.textContent = "You typed in " + countdown + " seconds";
        clearInterval(ti);
    } else {
        resultEl.style.color = "red";
        spnner.classList.add("d-none");
        resultEl.textContent = "You typed incorrectsentnce";
    }
})
rbtn.addEventListener("click", function(event) {
    clearInterval(ti);
    timerEl.textContent = "0";

    quoteDisplayEl.textContent = "";
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(status) {
            let t = status.content;
            quoteDisplayEl.textContent = t;
        });

});


typingtestclose.addEventListener("click", function(event) {
    typingtesttttEl.classList.add("d-none");
    clearInterval(ti);
    countdown = 0;
    timerEl.textContent = countdown;
});
