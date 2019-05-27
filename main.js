const div = document.querySelector(".bartek")
const push = () => {

    if (div.style.display === "inline") {
        div.style.display = "none";

    } else { div.style.display = "inline" }

}





document.querySelector("button").addEventListener("click", push)
