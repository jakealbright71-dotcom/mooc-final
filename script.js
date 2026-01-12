// Simplified quiz for USA page (only one question)
function checkAnswer(button, result) {
    const feedback = document.getElementById('quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');
    const explanation = document.querySelector('.quiz-explanation');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! Alexander Cartwright wrote the Knickerbocker Rules in 1845.";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite right. The correct answer is Alexander Cartwright.";
        feedback.className = 'quiz-feedback wrong';
        
        // Highlight correct answer
        options[0].classList.add('correct');
    }
    
    // Show explanation
    if (explanation) {
        explanation.style.display = 'block';
    }
}

// Latin America Quiz
function checkAnswerLA(button, result) {
    const feedback = document.getElementById('quiz-feedback-la');
    const options = document.querySelectorAll('.quiz-option');
    const explanation = document.querySelector('.quiz-explanation');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! The Dominican Republic produces the most MLB players per capita.";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite. The correct answer is Dominican Republic.";
        feedback.className = 'quiz-feedback wrong';
        
        // Highlight correct answer
        options[0].classList.add('correct');
    }
    
    // Show explanation
    if (explanation) {
        explanation.style.display = 'block';
    }
}

// Rules Quiz
function checkAnswerRules(button, result) {
    const feedback = document.getElementById('quiz-feedback-rules');
    const options = document.querySelectorAll('.quiz-option');
    const explanation = document.querySelector('.quiz-explanation');
    
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
    });
    
    if (result === 'correct') {
        button.classList.add('correct');
        feedback.textContent = "✓ Correct! Three strikes and the batter is out.";
        feedback.className = 'quiz-feedback correct';
    } else {
        button.classList.add('wrong');
        feedback.textContent = "✗ Not quite. The correct answer is 3 strikes.";
        feedback.className = 'quiz-feedback wrong';
        
        // Highlight correct answer
        options[1].classList.add('correct');
    }
    
    // Show explanation
    if (explanation) {
        explanation.style.display = 'block';
    }
}

// Position info for rules page
function showPositionInfo(position) {
    const infoBox = document.getElementById('position-info');
    const positionInfo = {
        'Pitcher': 'Throws the ball to the batter from the mound. Controls the game pace and uses different pitch types like fastballs and curveballs.',
        'Catcher': 'Catches pitches, calls pitches with hand signals, guards home plate, and throws out runners trying to steal bases.',
        'First Base': 'Covers first base, fields ground balls hit to right side, and catches throws from other infielders for force outs.',
        'Second Base': 'Covers second base, turns double plays with shortstop, has good range for ground balls up the middle.',
        'Third Base': 'Covers third base, fields hard-hit balls down the line, needs strong arm for long throws to first base.',
        'Shortstop': 'Between second and third base, covers largest area, leader of infield, turns double plays, needs strong arm.',
        'Left Field': 'Covers left field, catches fly balls, needs good arm for throws to third base and home plate.',
        'Center Field': 'Covers center field, fastest outfielder, catches most fly balls, directs other outfielders.',
        'Right Field': 'Covers right field, needs strongest arm for long throws to third base and home plate.'
    };
    
    infoBox.innerHTML = `
        <h3>${position}</h3>
        <p>${positionInfo[position] || 'Click on positions to learn about their responsibilities!'}</p>
        <small>Position abbreviation: ${getPositionAbbr(position)} | Click another position to learn more</small>
    `;
}

function getPositionAbbr(position) {
    const abbreviations = {
        'Pitcher': 'P',
        'Catcher': 'C',
        'First Base': '1B',
        'Second Base': '2B',
        'Third Base': '3B',
        'Shortstop': 'SS',
        'Left Field': 'LF',
        'Center Field': 'CF',
        'Right Field': 'RF'
    };
    return abbreviations[position] || '';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Baseball website loaded successfully!');
});
