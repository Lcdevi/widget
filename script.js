const btn = document.querySelectorAll('.button');

function changeBackgroundWhenClicked (color) {
    const mainDiv = document.getElementById("main-div");
    console.log(mainDiv);
    mainDiv.style.background = color;
}

function changeFontColorWhenClicked (color) {
  const a = document.getElementById('a1');
  const b = document.getElementById('a2');
  console.log(a1)
  console.log(a2)
  a.style.color = color;
  b.style.color = color;
}

function createRulesDiv() {
    const newDiv = document.createElement('div');
    const mainDiv = document.getElementById("main-div");
    newDiv.classList.add("rules");
    newDiv.classList.add("scale-in-center");
    newDiv.innerHTML += 
    `<img src="./images/times-solid.svg" alt="black-cross" width='28px' class='black-cross'>
    <h1> GAME OVER </h1>
    <br>
    <p>
        Ce chapitre décrit le thème du jeu quand il en existe un. Dans le cadre d'un jeu thématique, l'auteur y explique éventuellement l'esprit qu'il souhaite voir les joueurs adopter.
        Dans le cas du jeu de rôle, s'y ajoute fréquemment une explication de ce qu'est ce type de jeu, parfois sous la forme d'un exemple de partie.
    </p>`
    mainDiv.appendChild(newDiv);
    const crossImg = document.querySelector('.black-cross');
    crossImg.addEventListener('click', event => {
      mainDiv.removeChild(newDiv);
      });

}
/*
 Array.prototype.forEach.call(btn, function(element) {
    let eachBtn = element;
    console.log(element)
    eachBtn.addEventListener('click', event => {
        changeBackgroundWhenClicked('black');
        changeFontColorWhenClicked ('white');

      });
});
*/
const rulesBtn = document.getElementById("a2");
rulesBtn.addEventListener('click', event => {
    changeBackgroundWhenClicked('black');
    changeFontColorWhenClicked ('white');
    createRulesDiv()
  });

const menuBtn = document.getElementById("a1");
menuBtn.addEventListener('click', event => {
    changeBackgroundWhenClicked('black');
    changeFontColorWhenClicked ('white');
  });


