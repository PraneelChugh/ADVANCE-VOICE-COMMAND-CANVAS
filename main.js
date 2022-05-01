x = 0;
y = 0;

screen_width= 0;
screen_height= 0;

draw_apple = "";
speak_data="";
to_number = "Apples Drawn";
content = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
recognition.onresult = function(event) {
 console.log(event); 
 to_number = Number(content)
 if(Number.isInteger(to_number));
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerWidth;
}

function draw() {
  if(draw_apple == "set")
  {
    for(var  i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple,x,y,50,50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
 function createCanvas(){
  screen_width=150;
  screen_height=150;
 }