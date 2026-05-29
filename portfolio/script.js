// Welcome Alert

window.onload = function () {

    alert("Welcome to My Portfolio Website");
};

// Dark Mode Toggle

const darkButton = document.querySelector("#darkModeBtn");

darkButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    // Save Theme

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");
    }
});

// Load Saved Theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
}

// Change Heading Color

const heading = document.querySelector("h1");

heading.addEventListener("click", function () {

    heading.style.color = "yellow";
});

// Form Validation

const form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector("input[type='text']").value;

    const email = document.querySelector("input[type='email']").value;

    const message = document.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields");

    } else {

        alert("Form submitted successfully");

        form.reset();
    }
});

// Skills Hover Animation

const skills = document.querySelectorAll("#skills li");

skills.forEach(function(skill){

    skill.addEventListener("mouseover", function(){

        skill.style.transform = "scale(1.1)";
    });

    skill.addEventListener("mouseout", function(){

        skill.style.transform = "scale(1)";
    });

});