function translateWithPreload(language) {
    var $preloader = $('#preloader');
    $preloader.show();
    setLanguage(language);
    $preloader.delay(1500).fadeOut('slow');

}

function setLanguage(language) {
    var x = getCookie('lang');
    if (x) {
        if (x != language) {
            eraseCookie('lang');
            setCookie('lang', language, 7);
        }
    } else {
        setCookie('lang', language, 7);
    }
    document.documentElement.lang = language;
    var currentLanguage = getCookie('lang');

    app.lang = app.translations[currentLanguage] || app.translations.ru;
    //changeLogo(currentLanguage);
    for (const property in app.lang) {
        // console.log(`${property}: ${app.lang[property]}`);
        if (document.body.querySelector('[data-translate="'+property+'"]') != null) {
            document.body.querySelector('[data-translate="'+property+'"]').innerHTML = app.lang[property];
        }
    }

}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// function changeLogo(lang) {
//     var img = document.getElementById("logo_img");
//     if (lang == 'en') {
//         img.src = "img/logo_en.png";
//     } else if (lang == 'ru') {
//         img.src = "img/logo_ru.png";
//     } else if (lang == 'tj') {
//         img.src = "img/logo_tj.png";
//     }
// }
