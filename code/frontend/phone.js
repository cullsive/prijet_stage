const fr  = document.querySelector(".liste_de_entreprise_ty"); 
const frR  = document.querySelector(".liste_de_entreprise_re"); 
const b2 = document.querySelector(".bad2"); 
const b1 = document.querySelector(".bad1"); 
const btnt = document.getElementById("btnt"); 
const btnt2 = document.getElementById("btnt2"); 



btnt.addEventListener("click" , () => {
   fr.classList.toggle("mtyz"); 
   frR.classList.toggle("mas");
   b1.classList.toggle("bad1_toggle"); 
   b2.classList.toggle("bad2_toggle"); 
})



btnt2.addEventListener("click" , () => {
   fr.classList.toggle("mtyz"); 
   frR.classList.toggle("mas")
   b1.classList.toggle("bad1_toggle"); 
   b2.classList.toggle("bad2_toggle"); 
})
