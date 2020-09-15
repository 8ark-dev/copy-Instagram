const recommend_txt = document.querySelector('.aside-recommend-txt');


const recommend_list = document.querySelector('.aside-recommend-acount');

const recommend_acount = ['sooyaaa__', 'lalalalisa_m', 'minn.pan_8288', 'rose_are_rosie', 'minjae_lee0222'];
const recommend_status = [0, 1, 2];

//모두보기
recommend_txt.children[1].addEventListener('click', function() {
    location.href = "https://www.instagram.com/explore/people/suggested/";
});

//추천계정
for(let i =0; i<5; i++) {
    // /.aside-recommend-photo .aside-recommend-id
    let cnt = parseInt(Math.random()*3);
    let status_cnt = "";

    if(recommend_status[cnt]==1) {
        status_cnt = "인기";
    }
    else if(recommend_status[cnt] == 2) {
        status_cnt ="회원님을 팔로우합니다";
    }
    else status_cnt = " ";


    recommend_list.innerHTML += "<li><img src='../img/aside_"+(i+1)+".jpg' class='aside-recommend-photo'> <div> <p class='aside-recommend-id'>"+recommend_acount[i]+"</p> <p class='aside-recommend-status'>"+status_cnt+"</p></div> <p class='aside-recommend-follow'>팔로우</p></li>";
}


//소개란 추가

const aside_inform = document.querySelector('.aside-help-list');
const aside_inform_list = ['소개', '도움말', '홍보 센터', 'API', '채용 정보', '개인정보처리방침', '약관', '위치', '인기 계정', '해시태그' ,'언어'];

const aside_inform_url = ['https://about.instagram.com/', 'https://help.instagram.com/', 'https://about.instagram.com/blog/', 'https://www.instagram.com/developer/', 'https://www.instagram.com/about/jobs/', 'https://help.instagram.com/519522125107875', 'https://help.instagram.com/581066165581870', 'https://www.instagram.com/explore/locations/', 'https://www.instagram.com/directory/profiles/','https://www.instagram.com/directory/hashtags/'];

for(let i=0; i<aside_inform_list.length; i++) {
    aside_inform.innerHTML += "<li>"+aside_inform_list[i]+"</li>";
    if(i!=aside_inform_list.length-1) aside_inform.innerHTML+= "&nbsp;&nbsp;·&nbsp;&nbsp;";
}

for(let i = 0; i< aside_inform.children.length-1; i++) {
    aside_inform.children[i].addEventListener('click', function() {
        location.href = aside_inform_url[i];
    });
}