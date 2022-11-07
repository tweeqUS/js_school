"use strict";

const p = document.querySelectorAll('p');
console.log(p);




function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);  //Cкрипт заработает, когда мы его поместим в верстку
}

loadScript('js/script_35_test.js');
loadScript('js/script_35_test.js');
loadScript('js/script_35_test.js');