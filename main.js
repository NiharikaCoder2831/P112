Webcam.set({
    width:'300', height: '250', image_format: 'png', png_quality:90
})
camera = document.getElementById('camera')
Webcam.attach('#camera')

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='pic' src="+data_uri+">"
    })
}
function speech(){
    var synth= window.speechSynthesis;
    speak_data1='The first prediction is '+ prediction_1;
    speak_data2='And, the second prediction is ' +prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis)
}

function predict1() {
    if (error) {
        console.error(error);
    } else 
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_nam2e").innerHTML = results[1].label;
        prediction_1=results[0].label;
        prediction_2 = results[0].label;
        speak();
        if (results[0].label == "happy"){
            document.getElementById("update_emoji").innerHTML = "&#128584;"
        }
        if (results[0].label == "sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532;"
        }
        if (results[0].label == "angry"){
            document.getElementById("update_emoji").innerHTML = "&#128548;"
        }
        if (results[1].label == "happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522;"
            
            if (results[1].label == "sad"){
                document.getElementById("update_emoji").innerHTML = "&#128532;"

                if (results[1].label == "angry"){
                    document.getElementById("update_emoji").innerHTML = "&#128548;"
        }
    }
}
}