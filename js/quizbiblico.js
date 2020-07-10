// scripts here:
var a = document.innerHTML=('<form action="SNE2019.html"><button style="houver[background: #680f11]">Play Again</button></form>');




function submitQuiz() {
    console.log('submitted');

// get each answer score
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q2') + answerScore('q13') + answerScore('q14') + answerScore('q15') + answerScore('q16') + answerScore('q17') + answerScore('q18') + answerScore('q19') + answerScore('q20')+ answerScore('q21')+ answerScore('q22')+ answerScore('q23')+ answerScore('q24')+ answerScore('q25')+ answerScore('q26')+ answerScore('q27')+ answerScore('q28')+ answerScore('q29')+ answerScore('q30')+ answerScore('q31')+ answerScore('q32')+ answerScore('q33')+ answerScore('q34')+ answerScore('q35')+ answerScore('q36')+ answerScore('q37')+ answerScore('q38') + answerScore('q39')+ answerScore('q40')+ answerScore('q41')+ answerScore('q42')+ answerScore('q43')+ answerScore('q44')+ answerScore('q45')+ answerScore('q46')+ answerScore('q47')+ answerScore('q48')+ answerScore('q49')+ answerScore('q50')+ answerScore('q51')+ answerScore('q52')+ answerScore('q53')+ answerScore('q54')+ answerScore('q55')+ answerScore('q56')+ answerScore('q57')+ answerScore('q58')+ answerScore('q59')+ answerScore('q60'));
    console.log("CalcScore: " + calcScore); // it works!

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return (`A resposta correcta para a questão ${qNumber}:&nbsp é &nbsp;<strong>${document.getElementById(correctStringNo).innerHTML}</strong>`);
        }

// print correct answers only if wrong (calls correctAnswer function)
    if (answerScore('q1') === 0 ) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    } 
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
    }
    if (answerScore('q6') === 0) {
        document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
    }
    if (answerScore('q7') === 0) {
        document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
    }
    if (answerScore('q8') === 0) {
        document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
    }
    if (answerScore('q9') === 0) {
        document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
    }
    if (answerScore('q10') === 0) {
        document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
    }
    if (answerScore('q11') === 0) {
        document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
    }
    if (answerScore('q12') === 0) {
        document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
    }
    if (answerScore('q13') === 0) {
        document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
    }
    if (answerScore('q14') === 0) {
        document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
    }
    if (answerScore('q15') === 0) {
        document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
    }
    if (answerScore('q16') === 0) {
        document.getElementById('correctAnswer16').innerHTML = correctAnswer('correctString16', 16);
    }
    if (answerScore('q17') === 0) {
        document.getElementById('correctAnswer17').innerHTML = correctAnswer('correctString17', 17);
    }
    if (answerScore('q18') === 0) {
        document.getElementById('correctAnswer18').innerHTML = correctAnswer('correctString18', 18);
    }
    if (answerScore('q19') === 0) {
        document.getElementById('correctAnswer19').innerHTML = correctAnswer('correctString19', 19);
    }
    if (answerScore('q20') === 0) {
        document.getElementById('correctAnswer20').innerHTML = correctAnswer('correctString20', 20);
    }
    if (answerScore('q21') === 0) {
        document.getElementById('correctAnswer21').innerHTML = correctAnswer('correctString21', 21);
    }
    if (answerScore('q22') === 0) {
        document.getElementById('correctAnswer22').innerHTML = correctAnswer('correctString22', 22);
    }
    if (answerScore('q23') === 0) {
        document.getElementById('correctAnswer23').innerHTML = correctAnswer('correctString23', 23);
    }
    if (answerScore('q24') === 0) {
        document.getElementById('correctAnswer24').innerHTML = correctAnswer('correctString24', 24);
    }
    if (answerScore('q25') === 0) {
        document.getElementById('correctAnswer25').innerHTML = correctAnswer('correctString25', 25);
    }
    if (answerScore('q26') === 0) {
        document.getElementById('correctAnswer26').innerHTML = correctAnswer('correctString26', 26);
    }
    if (answerScore('q27') === 0) {
        document.getElementById('correctAnswer27').innerHTML = correctAnswer('correctString27', 27);
    }
    if (answerScore('q28') === 0) {
        document.getElementById('correctAnswer28').innerHTML = correctAnswer('correctString28', 28);
    }
    if (answerScore('q29') === 0) {
        document.getElementById('correctAnswer29').innerHTML = correctAnswer('correctString29', 29);
    }
    if (answerScore('q30') === 0) {
        document.getElementById('correctAnswer30').innerHTML = correctAnswer('correctString30', 30);
    }
    if (answerScore('q31') === 0) {
        document.getElementById('correctAnswer31').innerHTML = correctAnswer('correctString31', 31);
    }
    if (answerScore('q32') === 0) {
        document.getElementById('correctAnswer32').innerHTML = correctAnswer('correctString32', 32);
    }
    if (answerScore('q33') === 0) {
        document.getElementById('correctAnswer33').innerHTML = correctAnswer('correctString33', 33);
    }
    if (answerScore('q34') === 0) {
        document.getElementById('correctAnswer34').innerHTML = correctAnswer('correctString34', 34);
    }
    if (answerScore('q35') === 0) {
        document.getElementById('correctAnswer35').innerHTML = correctAnswer('correctString35', 35);
    }
    if (answerScore('q36') === 0) {
        document.getElementById('correctAnswer36').innerHTML = correctAnswer('correctString36', 36);
    }
    if (answerScore('q37') === 0) {
        document.getElementById('correctAnswer37').innerHTML = correctAnswer('correctString37', 37);
    }
    if (answerScore('q38') === 0) {
        document.getElementById('correctAnswer38').innerHTML = correctAnswer('correctString38', 38);
    }
    if (answerScore('q39') === 0) {
        document.getElementById('correctAnswer39').innerHTML = correctAnswer('correctString39', 39);
    }
    if (answerScore('q40') === 0) {
        document.getElementById('correctAnswer40').innerHTML = correctAnswer('correctString40', 40);
    }
    if (answerScore('q41') === 0) {
        document.getElementById('correctAnswer41').innerHTML = correctAnswer('correctString41', 41);
    }
    if (answerScore('q42') === 0) {
        document.getElementById('correctAnswer42').innerHTML = correctAnswer('correctString42', 42);
    }
    if (answerScore('q43') === 0) {
        document.getElementById('correctAnswer43').innerHTML = correctAnswer('correctString43', 43);
    }
    if (answerScore('q44') === 0) {
        document.getElementById('correctAnswer44').innerHTML = correctAnswer('correctString44', 44);
    }
    if (answerScore('q45') === 0) {
        document.getElementById('correctAnswer45').innerHTML = correctAnswer('correctString45', 45);
    }
    if (answerScore('q46') === 0) {
        document.getElementById('correctAnswer46').innerHTML = correctAnswer('correctString46', 46);
    }
    if (answerScore('q47') === 0) {
        document.getElementById('correctAnswer47').innerHTML = correctAnswer('correctString47', 47);
    }
    if (answerScore('q48') === 0) {
        document.getElementById('correctAnswer48').innerHTML = correctAnswer('correctString48', 48);
    }
    if (answerScore('q49') === 0) {
        document.getElementById('correctAnswer49').innerHTML = correctAnswer('correctString49', 49);
    }
    if (answerScore('q50') === 0) {
        document.getElementById('correctAnswer50').innerHTML = correctAnswer('correctString50', 50);
    }
    if (answerScore('q51') === 0) {
        document.getElementById('correctAnswer51').innerHTML = correctAnswer('correctString51', 51);
    }
    if (answerScore('q52') === 0) {
        document.getElementById('correctAnswer52').innerHTML = correctAnswer('correctString52', 52);
    }
    if (answerScore('q53') === 0) {
        document.getElementById('correctAnswer53').innerHTML = correctAnswer('correctString53', 53);
    }
    if (answerScore('q54') === 0) {
        document.getElementById('correctAnswer54').innerHTML = correctAnswer('correctString54', 54);
    }
    if (answerScore('q55') === 0) {
        document.getElementById('correctAnswer55').innerHTML = correctAnswer('correctString55', 55);
    }
    if (answerScore('q56') === 0) {
        document.getElementById('correctAnswer56').innerHTML = correctAnswer('correctString56', 56);
    }
    if (answerScore('q57') === 0) {
        document.getElementById('correctAnswer57').innerHTML = correctAnswer('correctString57', 57);
    }
    if (answerScore('q58') === 0) {
        document.getElementById('correctAnswer58').innerHTML = correctAnswer('correctString58', 58);
    }
    if (answerScore('q59') === 0) {
        document.getElementById('correctAnswer59').innerHTML = correctAnswer('correctString59', 59);
    }
    if (answerScore('q60') === 0) {
        document.getElementById('correctAnswer60').innerHTML = correctAnswer('correctString60', 60);
    }

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score as "score/possible score"
    var showScore = "Parabêns, teu resultado é: " + calcScore +"/" + questionCounter + a ;
// if 4/4, "perfect score!"
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});