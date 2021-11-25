let data = [
    {
        "language": "HTML5",
        "proficiency":  90
    },
    {
        "language": "CSS3",
        "proficiency":  80
    },
    {
        "language": "JS",
        "proficiency": 86
    },
    {
        "language": "React",
        "proficiency":  70
    },
    {
        "language": "Swift",
        "proficiency":  72
    }
]


let skillGenerator = () => 
{
    let skillSection = document.getElementById("skills-container");
    data.forEach((skill) => {
        let row = document.createElement("div");
        row.className = "row center";
        let container = document.createElement("div");
        container.className = "col-md-2 col-sm-6";
        let skillName = document.createElement("p");
        skillName.style = " margin: auto; font-size: 16px;"
        skillName.className = "text-center";
        skillName.textContent = skill.language;
        container.appendChild(skillName);
        let progreesWrapper = document.createElement("div");
        progreesWrapper.className = "col-md-10 col-sm-6"
        let progressContainer = document.createElement("div")
        progressContainer.className = "progress ";
        let progressBar = document.createElement("div");
        progressBar.className ="progress-bar bg-danger"
        progressBar.ariaValueMin = 0;
        progressBar.ariaValueMax = 100;
        progressBar.role = "progressbar"
        progressBar.textContent = skill.proficiency + "%";
        progreesWrapper.appendChild(progressContainer);
        progressContainer.appendChild(progressBar);
        row.appendChild(container);
        row.appendChild(progreesWrapper);
        skillSection.appendChild(row);
        animateProgress(progressBar, skill.proficiency);
    })
}

let animateProgress = (bar, progress) =>
{
   bar.style.width = "0%";
   setTimeout(() => {
       bar.style.width = progress + "%";
   },1000)
}

skillGenerator()

// animateProgress(progess)

