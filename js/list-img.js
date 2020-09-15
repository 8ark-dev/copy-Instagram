const btn_list = document.querySelector('.list-container');
const img = ['../icon/home2.png', '../icon/dm.png', '../icon/compass.png', '../icon/like.png', ''];

let i =0;
for(i =0; i<4; i++) {
   btn_list.innerHTML += '<li><img src =' + img[i] + '></li>';
}


//마지막 css 설정
btn_list.innerHTML += '<li><img class="account-btn" src="../img/img1.jpg"></li>';
