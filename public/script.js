/*let QuoteList=[
    {
        quote:"If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author:"- Nelson Mandela -"

    },
    {
            quote:"Learn the rules like a pro, so you can break them like an artist.",
        author:"- Pablo Picasso"
    },
    {
       quote: "It's not just about being better. It's about being different. You need to give people a reason to choose your business. ",
       author:"- Eric Hoffer -"
    },
    {
        quote:"The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
        author:"- John Maxwell -"
    }

]

let quoteEle=document.getElementById("quote")
let authorEle=document.getElementById("author")

let value=document.getElementById("getQuote");
value.onclick=function getLocalQuotes(){
   let ele= Math.floor(Math.random()*QuoteList.length);
  quoteEle.innerText= QuoteList[ele].quote;
  authorEle.innerText=QuoteList[ele].author;
}*/

/*text to speech converter

let textEle=document.getElementById('text');
let voicesEle=document.getElementById('selectoptions');
let speechBtn=document.getElementById('speak');
let speechsynth=speechSynthesis

speechsynth.addEventListener('voiceschanged',loadvoices);

function loadvoices(){
    let voices=speechsynth.getVoices();
    console.log(voices);
    for(voice of voices){
        let option=document.createElement('option');
        option.value=voice.name;
        option.innerText=`${voice.name} ${voice.lang}`
        voicesEle.appendChild(option)
    }
}

function textToSpeech(text){
    let utterance=new SpeechSynthesisUtterance(text);
    for(let voice of speechsynth.getVoices()){
        if(voice.name===voicesEle.value){
            utterance.voice=voice;
        }

    }
    speechsynth.speak(utterance)
}


speechBtn.addEventListener('click',function(){
    if(textEle.value!==''){
        if(!speechsynth.speaking){
            textToSpeech(textEle.value)
        }
    }
})
*/
/*document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('#container');
    let qrInput = document.querySelector('#text');
    let generateButton = document.querySelector('#generate');
    let img = document.querySelector('#qr-img');
    let prevInput = '';

    generateButton.onclick = function() {
        let input = qrInput.value.trim();

        if (!input || input === prevInput) {
            return;
        } else {
            prevInput = input;
            generateButton.innerText = 'Generating QR code....';
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
            
            img.onload = function() {
                if (container && container.classList) {
                    container.classList.add('active');
                }
                generateButton.innerText = 'Generate QR code';
            };

            img.onerror = function() {
                generateButton.innerText = 'Failed to generate QR code';
                // Optionally handle the error scenario
            };
        }
    };
});*/

// Select the elements
/*const qtyNumber = document.querySelector('.qty-number');
const qtyPlus = document.querySelector('.qty-plus');
const qtyMinus = document.querySelector('.qty-minus');

// Add click event listeners
qtyPlus.addEventListener('click', function() {
  // Increase the value of qtyNumber by 1, within the max limit of 10
  let currentValue = parseInt(qtyNumber.value);
  if (currentValue < 10) {
    qtyNumber.value = currentValue + 1;
  }
});

qtyMinus.addEventListener('click', function() {
  // Decrease the value of qtyNumber by 1, within the min limit of 0
  let currentValue = parseInt(qtyNumber.value);
  if (currentValue > 0) {
    qtyNumber.value = currentValue - 1;
  }
});*/

/*function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Change color when the page loads
changeBackgroundColor();*/

/*document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.button').classList.add('pressed')
    setTimeout(function(){
        document.querySelector('.button').remove('pressed');
    },3000)
}
)*/



let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');

/*for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}*/

$("buttons").on("click",function(){
    let input = $(this).text();
        updateDisplay(input);
})
function updateDisplay(input){
    let currentDisplay = $('#result').text();

    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            $('#result').text("");  // Clear the current display
            $('#result').text(input);  // Set the new input value
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}












