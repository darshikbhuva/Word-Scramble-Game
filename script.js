const wordText = document.querySelector(".word");
const hint = document.querySelector(".hint span");
const timetext = document.querySelector(".time span b");
const refreshbtn = document.querySelector(".refresh-word");
const checkbtn = document.querySelector(".check-word");
const input = document.querySelector("#input");
let correctword, timer;

const inintTimer = (maxtime) => {
  timer = setInterval(() => {
    if (maxtime > 0) {
      maxtime--;
      return (timetext.innerText = maxtime);
    }
    clearInterval(timer);
    alert(`Time Off! ${correctword.toUpperCase()} was the  correct word`);
    inintgame();
  }, 1000);
};

const inintgame = () => {
  inintTimer(30);
  let randomobj = words[Math.floor(Math.random() * words.length)];
  console.log(randomobj);
  let wordArray = randomobj.word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  correctword = randomobj.word.toLocaleLowerCase();
  input.value = "";
  input.setAttribute("maxlength", correctword.length);

  hint.innerText = randomobj.hint;
};

inintgame();

const checkword = () => {
  let userword = input.value.toLocaleLowerCase();

  if (!userword) return alert("Please enter a word check");

  if (userword !== correctword)
    return alert(`oops! ${userword} is not a correct word`);

  alert(`Congrats! ${userword.toUpperCase()} is a  correct word`);
};

refreshbtn.addEventListener("click", inintgame);
checkbtn.addEventListener("click", checkword);
