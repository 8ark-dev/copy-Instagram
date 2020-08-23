const list = document.querySelectorAll('.list-item');

const url_list = ['https://about.instagram.com/', 'https://help.instagram.com/', 'https://about.instagram.com/blog/', 'https://www.instagram.com/developer/', 'https://www.instagram.com/about/jobs/',
'https://help.instagram.com/519522125107875', 'https://help.instagram.com/581066165581870', 'https://www.instagram.com/explore/locations/', 'https://www.instagram.com/directory/profiles/', 'https://www.instagram.com/directory/hashtags/',  ];

for(let i =0; i<list.length-1; i++) {
    list[i].addEventListener('click', function() {
        location.href = url_list[i];
    });
}

//언어 

list[10].addEventListener('click', function() {
    let lang = document.querySelector('.lang-select');

});