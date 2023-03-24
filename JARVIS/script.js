const button=document.querySelector(".talk");
const textContent=document.querySelector(".content")

function speak(sentence){
    const textSpeak = new SpeechSynthesisUtterance(sentence);
    textSpeak.rate= 1;
    textSpeak.pitch=  1;
    window.speechSynthesis.speak(textSpeak);
}

function wishMe(){
    var day=new Date();
    var hours=day.getHours();

    if(hours>=0 && hours<12){
        speak("Good Morning Aditya")

    }
    else if(hours==12){
        speak("Good Noon Aditya")

    }
    else if(hours>12 && hours<=17){
        speak("Good AfterNoon Aditya")

    }
    else{
        speak("Good Evening Aditya")
    }
}
window.addEventListener('load',()=>{
    speak("Activating Wintech");
    speak("Going Online");
    wishMe();

})
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
const recognition=new SpeechRecognition();
recognition.onresult = (event)=>{
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    textContent.textContent=transcript;
    speakThis(transcript.toLowerCase());
}
button.addEventListener('click',()=>{
    recognition.start();
})
function speakThis(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text="I dont Understand What you Say pleaase try Again";

    if(message.includes('hii') || message.includes('hello')){
        const finalText="Hello I am Wintech an AI Built by Aditya Nagwanshi";
        speech.text=finalText;
    }
    else if(message.includes('how are you') || message.includes('how are')){
        const finalText="I am Fine currently status hundred percent ";
        speech.text=finalText;
    }

    
    else if(message.includes('open instagram') || message.includes('Instagram')){
        window.open(`https://www.instagram.com`,"_blank");
        const finalText="Opening Instagram";
        speech.text=finalText;
    }
   
    else if(message.includes('my chat') || message.includes('my messages')){
        window.open('whatsapp:///');
        const finalText="Opening whatsaap";
        speech.text=finalText;
    }
    else if(message.includes('calculator') || message.includes('calculation')|| message.includes('arithmetic')){
        window.open('calculator:///');
        const finalText="Opening Calculator";
        speech.text=finalText;
    }
    else if(message.includes('open google') || message.includes('hii google')){
        window.open(`https://www.google.com`,"_blank");
        const finalText="Opening Google";
        speech.text=finalText;
    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText="I Found Some Information For " + message + " On Google";
        speech.text=finalText;
    }
    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);

}
// =============================
let image1=document.getElementById("image")
let image2=document.getElementById("image5")
function displaynone(){
    image1.style.display="none";
    image2.style.display="none";
}
