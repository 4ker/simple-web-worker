var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

var mainmsg = document.querySelector('#mainmsg');
var workermsg = document.querySelector('#workermsg');

if (!!window.Worker) {
	var myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]); // ==> worker.js/onmessage(e), e.data
	  console.log('>main  >> Message posted to worker');
	};

	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('>main  >> Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
        workermsg.textContent = JSON.stringify(e);
		console.log('>main  >> Message received from worker');
	};
}

/**
 * worker.js
 *
 *     onmessage = function(e) {
 *       console.log('>worker>> Message received from main script');
 *       var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
 *       console.log('>worker>> Posting message back to main script');
 *       postMessage(workerResult);
 *     };
 *
**/
