const comment_num_txt = document.querySelector('.comment-number');
const comment = document.querySelector('.comment');
const comment_ul = document.querySelector('.comment-ul');

const comment_cnt = 8;

function Person(author, author_comment) {
    this.author = author;
    this.author_comment = author_comment;
} 

let person1 = new Person('__8ark', '20200915');
let person2 = new Person('jennierubyjane', '23:25');

const person_arr = [person1, person2];

//댓글 개수
comment_num_txt.innerHTML = '댓글 '+comment_cnt +'개 모두 보기';


for(let i = 0; i<person_arr.length; i++) {
    console.log(i);
    comment_ul.innerHTML += "<li> <a class='author'>"+ person_arr[i].author +" </a><a class='author-comment'> "+ person_arr[i].author_comment +" </a> </li>";
}



