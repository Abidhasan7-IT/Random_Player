
const img1 = document.getElementById('random-image');
const Button1 = document.getElementById('btn1');
const Button2 = document.getElementById('btn2');
const Button3 = document.getElementById('btn3');

const random1=['n1.jpg', 'n2.jpg','n3.jpg','n4.jpg','n5.jpg'];
const random2=['m1.jpg', 'm2.jpg','m3.jpg','m4.jpg','m5.jpg'];
const random3=['r1.jpg', 'r2.jpg','r3.jpg','r4.jpg','r5.jpg'];

let imageRoll;
Button1.addEventListener('click', () => 
{
    randomImage();
    imageRoll= "Image Roll: " + Math.floor(Math.random() * random1.length +1);
    document.getElementById('roll').innerHTML=imageRoll;
});

Button2.addEventListener('click', () => {
    randomImage1();
    imageRoll= "Image Roll: " + Math.floor(Math.random() * random2.length +1);
    document.getElementById('roll').innerHTML=imageRoll;
});

Button3.addEventListener('click', () => {
    randomImage2();
    imageRoll= "Image Roll: " + Math.floor(Math.random() * random3.length +1);
    document.getElementById('roll').innerHTML=imageRoll;
});

randomImage();
function randomImage(){
    const randomindex= Math.floor(Math.random() * random1.length);
    img1.src= random1[randomindex];
}

randomImage1();
function randomImage1(){
    const randomindex1= Math.floor(Math.random() * random2.length);
    img1.src= random2[randomindex1];

}

randomImage2();
function randomImage2(){
    const randomindex2= Math.floor(Math.random() * random3.length);
    img1.src= random3[randomindex2];
}