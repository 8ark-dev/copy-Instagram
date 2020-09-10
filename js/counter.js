const likeNum = document.querySelectorAll('.content-like-number');
const writeTime = document.querySelectorAll('.content-writed-time');

//좋아요
const cnt = [25, 37];

//댓글시간
const cnt2 = [12, 8];

for(let i =0; i< likeNum.length; i++) {
    likeNum[i].innerHTML = "<p>좋아요 " +cnt[i] +"개</p>";
}

for(let i =0; i< writeTime.length; i++) {
    writeTime[i].innerHTML = "<p>"+cnt2[i]+"시간 전</p>";
}