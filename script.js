// projectpage toggle areas
const projects = document.querySelectorAll(".projectset > div");
const details = document.querySelectorAll(".project-details");

// Convert to array for easier control
    const classes = ["superpet", "coffeeshop", "bytequiz", "ecobloom"];

    projects.forEach((proj) => {
        proj.addEventListener("click", () => {

            let projectName = classes.find(c => proj.classList.contains(c));
            let targetDetail = document.querySelector(`.${projectName}-details`);

            // If the clicked one is open → hide it
            if (targetDetail.classList.contains("active")) {
                targetDetail.classList.remove("active");
                return;
            }

            // Hide all others
            details.forEach(d => d.classList.remove("active"));

            // Show target
            targetDetail.classList.add("active");
        });
    });

// typing animation homepage intro 
const frontEl = document.querySelector(".typed-front");
const frontText = "<Front-End Web Developer | UI Designer>";

let j = 0;
let forwardFront = true;

function typeFrontLoop() {
  if (forwardFront) {
    frontEl.textContent = frontText.slice(0, j);
    j++;

    if (j > frontText.length) {
      forwardFront = false;
      setTimeout(typeFrontLoop, 1200); // pause when finished
      return;
    }
  } else {
    frontEl.textContent = frontText.slice(0, j);
    j--;

    if (j < 0) {
      forwardFront = true;
    }
  }

  setTimeout(typeFrontLoop, 80);
}

typeFrontLoop();




