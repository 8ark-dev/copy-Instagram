const img = document.getElementsByClassName('story');
const push_img = ['../img/img1.jpg', '../img/img2.jpg'];

for(let i =0; i<img.length; i++) {
    img[i].style.background = push_img[i];
    console.log(push_img[i]);
    console.log(img[i].style.background);
}