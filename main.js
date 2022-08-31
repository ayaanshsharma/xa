Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/p4FUq4c6T/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


  function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}


function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      
      document.getElementById("result_emoji_name").innerHTML = results[0].label;
  
      gesture = results[0].label;
      
      toSpeak = "";
      
      if(gesture == "Amazing")
      {
        toSpeak = "This is looking amazing";
        document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      else if(gesture == "Best")
      {
        toSpeak = "All the best";
        document.getElementById("update_emoji").innerHTML = "&#128077;";
      }
      else if(gesture == "Victory")
      {
        toSpeak = "That was the marvelous victory";
        document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
      else if(gesture == "Swag")
      {
        toSpeak = "Always be in swag";
        document.getElementById("update_emoji").innerHTML = "&#129304;";
      }
  
      speak();
    }
  }
  

        
        

       

