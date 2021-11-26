let data = [
    {
        "language": "HTML5",
        "proficiency":  75
    },
    {
        "language": "CSS3",
        "proficiency":  65
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
    },
    {
        "language": "Java",
        "proficiency": 44
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
        progressContainer.style.height = "1.5rem";
        progressContainer.style.marginLeft = "10px"
        let progressBar = document.createElement("div");
        progressBar.className ="progress-bar bg-danger"
        progressBar.ariaValueMin = 0;
        progressBar.ariaValueMax = 100;
        progressBar.role = "progressbar";
        progressBar.textContent = skillLevel(skill.proficiency) ;
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

let skillLevel = (level) => {
    if(level < 45)
    {
        return "beginner"
    }
    else if ( level > 45 && level < 65){
        return "intermidiate"
    }
    else if (level > 65 && level < 75)
    {
        return "proficient"
    }
    else{
        return "advanced"
    }
}

skillGenerator()

// animateProgress(progess)

