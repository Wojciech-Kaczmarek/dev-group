const div = document.querySelector(".bartek")
const push = () => {

    if (div.style.display === "none") {
        div.style.display = "inline"

    } else { div.style.display = "none" }

}





document.querySelector("button").addEventListener("click", push)
