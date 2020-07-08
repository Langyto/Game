// scripts here:
var a = document.innerHTML=('<form action="quiz.html"><button class="btn waves-effect waves-light red darken-4">Play Again&nbsp<i class="material-icons right">play_circle_filled</i></button></form>');
var hora = new Date();



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
    var calcScore = (answerScore('q1 group1') + answerScore('q2 group1') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore); // it works!

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return ("A resposta correcta para a questão " + qNumber + ":&nbsp é &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
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

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score as "score/possible score"
var showScore = "<div style='font-family: arial; color:blue;font-size:14px;'>Acertou:" + calcScore +""+"&nbsp;perguntas" +"&nbsp;em&nbsp" + hora.toLocaleTimeString()+"&nbsp"+"&nbspde&nbsptempo</div>" /*+ questionCounter*/ + a ;
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

var intervalo;

function tempo(op) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
	document.getElementById('parar').style.display = "none";
	document.getElementById('comeca').style.display = "block";
}

function volta() {
	document.getElementById('voltas').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data + "<br>";
}

function limpa() {
	document.getElementById('voltas').innerHTML = "";
}
window.onload=tempo;
