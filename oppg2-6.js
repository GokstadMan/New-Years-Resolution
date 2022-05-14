let newYearsWishes = [];
let newYearBtn = document.getElementById("new-year-btn");

newYearBtn.addEventListener("click", makeNewWish);

function makeNewWish() {
    let newYearInput = document.getElementById("new-year-input").value;
    if(newYearInput==="") {
        alert("Du må jo skrive noe:-D");return;
    }
    else {
        newYearsWishes.push({
            item:newYearInput,
        });
        showNewYearsWishes(newYearsWishes);
}}

function showNewYearsWishes(newYearsWishes) {
    let newYearContainer = document.getElementById("new-year-container");
    newYearContainer.innerText="";
    for(let i=0;i<newYearsWishes.length;i++) {
        let div = document.createElement("div");
        div.classList.add("new-years-card");

        let img = document.createElement("img");
        img.classList.add("new-years-img");
        img.src = "/images/new-years-eve.webp";

        let cardText = document.createElement("h4");
        cardText.innerText = `Forsett nr ${i+1} : ${newYearsWishes[i].item}`;

        // delete-button:
        let deleteNewYearBtn = document.createElement("button");
        deleteNewYearBtn.innerText = "Slett forsett ?";
        deleteNewYearBtn.classList.add("delete-btn");
        deleteNewYearBtn.addEventListener("click", function () {
            deleteNewYear(newYearsWishes, i);
        });

        // edit-button:
        let editNewYearBtn = document.createElement("button");
        editNewYearBtn.innerText = "Endre forsett ?";
        editNewYearBtn.classList.add("edit-btn");
        editNewYearBtn.addEventListener("click", function () {
            editNewYear(newYearsWishes, i);
        });

        div.append(img, cardText,deleteNewYearBtn,editNewYearBtn);
        newYearContainer.append(div);
    }
}

function deleteNewYear(newYearsWishes, i) {
    let answer = prompt("Ønsker du å slette?(ja/nei)");
    if (answer === "ja") {
        newYearsWishes.splice(i, 1);
        showNewYearsWishes(newYearsWishes);
    }
}

function editNewYear(newYearsWishes,i) {
    let newText = prompt("Hva ønsker du å endre forsettet til? ");
        if(newText==="") {
            alert("Har du ikke noe nyttårsforsett? ");return
        }
        else {
            newYearsWishes[i] = {
                item: newText,
            };
            let answer = prompt("Ønsker du virkelig å endre ? (ja/nei)");
            if (answer === "ja") {
                showNewYearsWishes(newYearsWishes);
            }}
}