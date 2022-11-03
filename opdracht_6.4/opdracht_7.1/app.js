let budget = 100;
let product = 60;
let h1 = document.getElementById("uitkomst");
if (budget > product) {
    h1.innerText = "ik heb genoeg geld";
    h1.style.color = "green";
} else {
    h1.innerText = "ik heb te weinig geld";
    h1.style.color = "red";
}




