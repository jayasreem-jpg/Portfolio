const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}
/*=========================================
  PROJECT IMAGE SLIDER
=========================================*/

const projectImages = {
    food: [
        "images/food-overview.png",
        "images/food-analysis.png"
    ],

    bank: [
        "images/Executive-Overview.png",
        "images/Customer-Risk-Analysis.png"
    ],

    hr: [
        "images/Overview.png",
        "images/Drill-Through.png"
    ]
};

const currentIndex = {
    food: 0,
    bank: 0,
    hr: 0
};

function startSlider(project, imageId){

    setInterval(() => {

        currentIndex[project]++;

        if(currentIndex[project] >= projectImages[project].length){
            currentIndex[project] = 0;
        }

        document.getElementById(imageId).src =
            projectImages[project][currentIndex[project]];

    },3000);

}

startSlider("food","food-slider");
startSlider("bank","bank-slider");
startSlider("hr","hr-slider");