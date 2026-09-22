
// -------------------------------------------ajax page plus------------------------------------------------------




// const openAjax = document.getElementById("openAjax"); // button
// const closeAjax = document.getElementById("closeAjax"); // button
// const ajaxPage = document.getElementById("ajaxPage");
// const ajaxContent = document.getElementById("ajaxContent");

// openAjax.addEventListener("click", () => {
//     ajaxPage.classList.remove("hidden");

//     // 🔥 Charge un fichier HTML ou texte
//     fetch("ajax_data.html")
//         .then(res => res.text())
//         .then(data => {
//             ajaxContent.innerHTML = data;
//         });
// });

// closeAjax.addEventListener("click", () => {
//     ajaxPage.classList.add("hidden");
// });


// -------------------------------------------ajax page plus------------------------------------------------------

const items = [];

for (let i = 1; i <= 30; i++) {
   items.push({
      img: `img/image${i}.png`,
      title: `entreprise ${i}`,
      desc: `modi expedita facere aliquam iure! ${i}`
   });

}


const container = document.querySelector(".liste_de_entreprise_ty ");

items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.img;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    container.appendChild(card);
});







// -------------------------------------------------------------------

const selectDate = document.getElementById("select_type1");
const selectHeure = document.getElementById("select_type2");
const btn = document.getElementById("valider");
const liste = document.querySelector(".liste_de_entreprise_re");
const point = document.getElementById("point"); 
const loader = document.querySelector(".loader"); 




let dejaClique = false;


selectDate.addEventListener("change", () => {
    dejaClique = false;
});


selectHeure.addEventListener("change", () => {
    dejaClique = false;
});




btn.addEventListener("click", () => {



    if (dejaClique) {
        alert("vous avez deja clicke 😜😜😜"); 
        return;
    }

   
    dejaClique = true;


     liste.innerHTML = "";
    
    loader.style.visibility = "visible";

    setTimeout(() => {

        loader.style.visibility = "hidden"; 


       const dateChoisie = selectDate.value;
    const heureChoisie = selectHeure.value;

    point.classList.add("mypoint"); 

    
    const nombreEntreprises = Math.floor(Math.random() * 8) + 3;

    
    // const start = Math.floor(Math.random() * 30) + 1;
    
    let min = 1; 
    let max = 30; 

    let totalDom = Math.floor(Math.random() * (max - min)) + min; 
    
    liste.innerHTML = "";//

    
    for (let i = totalDom; i < totalDom + nombreEntreprises; i++) {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = `./img/image${i}.png`;

        const p = document.createElement("p");
        p.textContent = `Entreprise ${i} Présente le ${dateChoisie} à ${heureChoisie}`;

        card.appendChild(img);
        card.appendChild(p);

        liste.appendChild(card);
    }

    }, 1000);

});
