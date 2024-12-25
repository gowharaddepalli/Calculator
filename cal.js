const Answer = document.getElementById('ans');
// let samevalue = null;

function demo(data) {
    const lastChar = Answer.innerText.slice(-1);

  if ((lastChar !== '+' || data !== '+') &&
    (lastChar !== '-' || data !== '-') &&
    (lastChar !== '/' || data !== '/') &&
    (lastChar !== '*' || data !== '*') &&
    (lastChar !== '%' || data !== '%')) {
    Answer.innerText += data;
  }
}
function del(){
    Answer.innerText = Answer.innerText.slice(0,-1)
}
function clr(){
    Answer.innerText = "";
}
function resl(){
    const result = eval(Answer.innerText);
    console.log(result);
    Answer.innerText = result;
}
