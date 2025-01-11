function evaluate_question(questionIndex, correctAnswerIndex, totalQuestions) {
    // Get the table row for the question
    var row = document.getElementById('t_qn_' + (questionIndex + 1) + '_1').parentNode;
    
    // Get the cell where the correct answer should be displayed
    var answerCell = row.cells[2];
    
    // Get the user's selected answer
    var userAnswer = document.querySelector('input[name="q_qn_' + (questionIndex + 1) + '"]:checked');

    // Find the correct answer index
    var calculatedCorrectAnswerIndex = -1;
    var options = document.getElementsByName('q_qn_' + (questionIndex + 1));
    for (var i = 0; i < options.length; i++) {
        if (options[i].value == '1') {
            calculatedCorrectAnswerIndex = i;
            break;
        }
    }
    
    // Check if the user's answer is correct
    if (userAnswer && userAnswer.value == '1') {
        answerCell.innerHTML = 'Correct';
        answerCell.className = 'correct';
    } else {
        answerCell.innerHTML = 'Wrong, option ' + (calculatedCorrectAnswerIndex + 1);
        answerCell.className = 'wrong';
    }
}