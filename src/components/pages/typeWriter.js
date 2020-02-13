import React from 'react';
let i = 0;
let text = "Hi, My name is Dean Krotzer. I am a Software Developer.";
let speed = 100;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById("typeWriterTag").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
 export default typeWriter;