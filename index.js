//dependencies 
var i = 0; 
var image = []; //creating an array of images
var time = 3000; //3 seconds

//image list
image[0]='1.png';
image[1]='2.png';
image[2]='3.png';
image[3]='4.png';
image[4]='5.png';
image[5]='6.png';
image[6]='7.png';
image[7]='8.png';
image[8]='9.png';
image[9]='10.png';
image[10]='11.png';
image[11]='12.png';
image[12]='13.png';


//change images automatically 
function changingImage() {
    document.slide.src = image[i]; // setting to first picture
    if (i<image.length -1) {
        i++; 
    } else {
        i = 0; 
    }

    setTimeout("changingImage()", time); //calls change Image as well as pulls in the time variable
    console.log(123);
    }

window.onload = changingImage; 