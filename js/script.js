let qID = 0;
document.getElementById('intro').style.display = 'block';

function nextQuestion() {
    const questions = document.querySelectorAll('.question-container')
    questions[qID].style.display = 'none';
    qID+1 == questions.length ? qID = 0 : qID++;
    questions[qID].style.display = 'block';
}

function updateTextInput(val, id) {
    document.getElementById(id).innerText = val;
}

function flipButtons() {
  var contenedor = document.querySelector('.botones');
  contenedor.appendChild(contenedor.removeChild(contenedor.firstElementChild));
}