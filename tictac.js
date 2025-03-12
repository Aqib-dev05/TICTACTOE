let boxes = document.querySelectorAll(".box");
let span=document.querySelector('span');
let para=document.querySelector('p');

let turnX = true;

//condition
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//event
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnX == true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checker();
  });
});

//disabler after winning
const diableBoxes =() => {
  for(let boxx of boxes){
    boxx.disabled=true;
  }
}
//checker the condition
const checker = () => {
  for (let condition of conditions) {
   let pos1Val= boxes[condition[0]].innerText;
   let pos2Val= boxes[condition[1]].innerText;
   let pos3Val= boxes[condition[2]].innerText;

   if(pos1Val !="" && pos2Val !="" && pos3Val !="") {

    if(pos1Val===pos2Val &&pos2Val===pos3Val){
        span.innerText=pos1Val;
        para.classList.remove('hide');
        diableBoxes();
    }
   }
  }
};
