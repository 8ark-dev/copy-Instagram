const main_content = document.querySelector('.content-main');

const main_article = document.querySelectorAll('.content-article');
const article_db = ['200819 ©Fairytale 💕\n#여자아이들 #G_I_DLE #GIDLE\n#우기 #YUQI'];

const hidden_article = document.querySelector('.content-hidden');


for(let i = 0; i < main_article.length; i++) {
    main_article[i].innerText = article_db[i];

    if(main_article[i].innerText.length >= 20) {
        hidden_article.style.visibility = "visible";
    }
}


hidden_article.addEventListener('click', function() {
    main_content.style.height = 'auto';
    main_article[0].style.height = 'auto'; //해결방안 고민 중 

    hidden_article.style.display = 'none';
});