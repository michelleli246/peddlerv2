$(document).ready(function () {
    $(document).keypress(function (event) {
        console.log(String.fromCharCode(event.which));

        if ('q'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but0") != null && document.getElementById("but0").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but0").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        } else if ('w'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but1") != null && document.getElementById("but1").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but1").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        } else if ('e'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but2") != null && document.getElementById("but2").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but2").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        } else if ('a'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but3") != null && document.getElementById("but3").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but3").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        } else if ('s'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but4") != null && document.getElementById("but4").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but4").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        } else if ('d'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("but5") != null && document.getElementById("but5").parentNode.parentNode.parentNode.style.display != "none") {
                document.getElementById("but5").click();
            }
            else if (document.getElementById("any") != null) {
                document.getElementById("any").click();
            }
        }

    });
});