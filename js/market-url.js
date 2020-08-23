const appStore = document.querySelector('#img-appstore');
const googlePlay = document.querySelector('#img-googleplay');

appStore.addEventListener('click', function() {
    location.href='https://apps.apple.com/app/instagram/id389801252?vt=lo';
});

googlePlay.addEventListener('click', function() {
    location.href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8A8351C3-D883-40BF-8D4D-43D8AC6E871E%26utm_content%3Dlo%26utm_medium%3Dbadge';
});