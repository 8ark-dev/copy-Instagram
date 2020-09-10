const img_tag = document.getElementsByClassName('story');
const push_img = ['../img/img1.jpg', '../img/img2.jpg'];

for(let i =0; i<img_tag.length; i++) {
    img_tag[i].src = push_img[i];
    
}