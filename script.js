let answears = ["Tak", "Nigdy !!!", "Lepiej tego nie wiedzieć"];
let input = document.querySelector(".question-area input");
let ballImg = document.querySelector("img");
let answearInfo = document.querySelector(".answear");
let errorInfo = document.querySelector(".error");
let questionArea = document.querySelector(".question-area");



const shakeAnimation = () => {
    ballImg.classList.add("shake-animation");
    setTimeout(askQuestions, 1000);
}

const askQuestions = () => {
    ballImg.classList.remove("shake-animation");
    if(input.value !=="" && input.value.includes("?")){
        const index = Math.floor(Math.random() * answears.length);
        const choosenAnswear = answears[index];
        answearInfo.textContent = `Odpowiedź to ${choosenAnswear}`;
        input.value = "";
        errorInfo.style.display = "none";
    } else if (input.value === ""){
        errorInfo.style.display = "flex";
        //zabawa z flex - wystarczy dać appendchild na nowo i się wyczyści
        errorInfo.textContent = "Najpierw zadaj pytanie";
        answearInfo.textContent = ""
    } else if (!input.value.includes("?")) {
        errorInfo.textContent = "Każde pytanie musi być zakończone znakiem -?-"
        questionArea.appendChild(errorInfo);

    }
}

ballImg.addEventListener("click", shakeAnimation);