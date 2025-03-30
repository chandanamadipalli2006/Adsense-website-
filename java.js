let content = document.getElementById('navItem2');
let policy = document.getElementById('navItem3');
let terms = document.getElementById('navItem4');
let disclaimer = document.getElementById('navItem5');
let about = document.getElementById('navItem6');
let follow = document.getElementById('navItem7');
let contentcon = document.getElementById('contentssection');
let policycon = document.getElementById('policiessection');
let termscon = document.getElementById('termssection');
let disclaimercon = document.getElementById('disclaimersection');
let aboutcon = document.getElementById('aboutussection');
let followcon = document.getElementById('followUsSection');

policycon.classList.add("d-none");
termscon.classList.add("d-none");
disclaimercon.classList.add("d-none");
aboutcon.classList.add("d-none");

policy.onclick = function () {
    policycon.classList.remove("d-none");
    contentcon.classList.add("d-none");
    termscon.classList.add("d-none");
    disclaimercon.classList.add("d-none");
    aboutcon.classList.add("d-none");
};

terms.onclick = function () {
    termscon.classList.remove("d-none");
    contentcon.classList.add("d-none");
    policycon.classList.add("d-none");
    disclaimercon.classList.add("d-none");
    aboutcon.classList.add("d-none");
};

disclaimer.onclick = function () {
    disclaimercon.classList.remove("d-none");
    contentcon.classList.add("d-none");
    policycon.classList.add("d-none");
    termscon.classList.add("d-none");
    aboutcon.classList.add("d-none");
};

about.onclick = function () {
    aboutcon.classList.remove("d-none");
    contentcon.classList.add("d-none");
    policycon.classList.add("d-none");
    disclaimercon.classList.add("d-none");
    termscon.classList.add("d-none");
};

content.onclick = function () {
    contentcon.classList.remove("d-none");
    termscon.classList.add("d-none");
    policycon.classList.add("d-none");
    disclaimercon.classList.add("d-none");
    aboutcon.classList.add("d-none");
};