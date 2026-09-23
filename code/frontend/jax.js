const openAjax = document.getElementById("openAjax");
const closeAjax = document.getElementById("closeAjax");
const ajaxPage = document.getElementById("ajaxPage");
const ajaxContent = document.getElementById("ajaxContent");

openAjax.addEventListener("click", () => {
    ajaxPage.classList.remove("hidden");

    fetch("ajax_data.html")
        .then(res => res.text())
        .then(data => {
            ajaxContent.innerHTML = data;
        });
});

closeAjax.addEventListener("click", () => {
    ajaxPage.classList.add("hidden");
});
