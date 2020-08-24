//main btn
const btn = document.querySelector('#btn-login');
const loginBox = document.querySelectorAll('.login-item'); // [0] : id , [1] : pw

//for change style
const fb = document.querySelector('#login-fb');
const hidden = document.querySelector('#hidden-login');
const hidden2 = document.querySelector('.hidden-pw');


// regexp
const id_regexr =/[A-Za-z0-9]/;
const email_regexr = /[^[A-Za-z0-9]([_.,]?[A-Za-z0-9])*@[A-Za-z0-9].[A-Za-z]{2,3}$/i; //*은 앞이 없거나 그 이상, ?은 없거나 한개
const pw_regexr =/([A-Za-z0-9])(?=[^A-Za-z0-9]){6,12}/;
const pw_regexr_2 = /[A-Za-z0-9]/;


let id = '';
let pw = '';

loginBox[0].addEventListener('input', function() {
    id = loginBox[0].value;

    if(id.length != 0 && pw.length >= 6) {
        btn.style.backgroundColor = '#0095F6';
        btn.style.opacity = '100%';
  }else {
      btn.style.backgroundColor = '#81BEF7';
      btn.style.opacity = '50%';
  }
});

loginBox[1].addEventListener('input', function() {
    pw = loginBox[1].value;

    if(pw.length > 0) hidden2.style.visibility = 'visible';
    else hidden2.style.visibility = 'hidden';

    if(id.length != 0 && pw.length >= 6) {
        btn.style.backgroundColor = '#0095F6';
        btn.style.opacity = '100%';
  }else {
      btn.style.backgroundColor = '#81BEF7';
      btn.style.opacity = '50%';
  }
});

btn.addEventListener('click', function() {
    let id = loginBox[0].value;
    let pw = loginBox[1].value;

    let flag1 = false;
    let flag2 = false;

    if (id_regexr.test(id) || email_regexr.test(id)) {
        //서버로 아이디 넘기기
        flag1=true;
    }
    if(pw_regexr.test(pw)) {
        //서버로 비밀번호 넘기기
        flag2=true;
    }else if(pw_regexr_2.test(pw)) {
        hidden.innerHTML = '비밀번호는 특수문자가 포함된 6자 이상입니다.'
        hidden.style.display = 'contents';
        fb.style.padding = '0px';
    }else{
        hidden.innerHTML = '잘못된 비밀번호입니다.'
    }

    if(flag1 && flag2) {
        location.href = './main.html';
    }
});


//비밀번호 표시 false:안보임 true:보임
flag3 = false;
hidden2.addEventListener('click', function() {
    flag3 = !flag3;

    if(flag3) loginBox[1].setAttribute('type', 'text');
    else loginBox[1].setAttribute('type', 'password');
});