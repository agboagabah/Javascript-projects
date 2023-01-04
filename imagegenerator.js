const pics = [ 'url("https://images.pexels.com/photos/6900713/pexels-photo-6900713.jpeg?auto=compress&cs=tinysrgb&w=600")',
 'url ("https://images.pexels.com/photos/7676308/pexels-photo-7676308.jpeg?auto=compress&cs=tinysrgb&w=600")' ,
 'url ("https://images.pexels.com/photos/5740932/pexels-photo-5740932.jpeg?auto=compress&cs=tinysrgb&w=600")',
'url("https://images.pexels.com/photos/6063469/pexels-photo-6063469.jpeg?auto=compress&cs=tinysrgb&w=600")',
'url ("https://images.pexels.com/photos/4596850/pexels-photo-4596850.jpeg?auto=compress&cs=tinysrgb&w=600")', 
'url("https://images.pexels.com/photos/1546863/nature-milky-way-galaxy-constellations-1546863.jpeg?auto=compress&cs=tinysrgb&w=600")',
'url("https://images.pexels.com/photos/6109101/pexels-photo-6109101.jpeg?auto=compress&cs=tinysrgb&w=600")',
'url("https://images.pexels.com/photos/6943131/pexels-photo-6943131.jpeg?auto=compress&cs=tinysrgb&w=600")' ,
'url("https://images.pexels.com/photos/7723324/pexels-photo-7723324.jpeg?auto=compress&cs=tinysrgb&w=600")' ,
'url("https://images.pexels.com/photos/8152002/pexels-photo-8152002.jpeg?auto=compress&cs=tinysrgb&w=600")'];



const pic = document.querySelector('section');

function showImage() {
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}

setInterval(showImage, 1500);

 