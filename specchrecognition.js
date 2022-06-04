recognition.onstart = function() { 
    instructions.text('Activated. Speak!!!!');
  }
  recognition.onspeechend = function() {
    instructions.text('Now is off');
  } 
  recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
      instructions.text('We do not hear you.');  
    };
  }
  recognition.onresult = function(event) {

    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
  
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }

try{
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recog = new SpeechRecognition();
}
catch(e){
    console.error(e);
    $('no support').show();
}