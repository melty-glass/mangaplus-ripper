// you don't have to scroll BUT you have to stay on the same page and don't change the inspect toolbar size nor unfullscreen

run = () => {
    arr = document.querySelectorAll('.zao-image');
    n = 1;

    for (i of arr) {
        let img = new Image();
        img.src = i.src;

        img.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            let c = canvas.getContext("2d");
            c.drawImage(img, 0, 0);

            n >= 10 ? g = n : g = `0${n}`;

            let a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = `${g}.png`;

            a.click();
            n++

            a = null;
            c = null;
            canvas = null;
            img = null;
        }
    }
}

pageNumber = parseInt(document.querySelector('.Viewer-module_pageNumber_2Ma3Q').children[0].innerText.slice(-2));
f = document.querySelector('.zao-image').height;
i = 0;

fun = () => {
    document.querySelector('.zao-surface').scroll(0, i * f);
    i++;

    if (i === pageNumber) {
        window.clearInterval(g);
        run();
    };
}; g = setInterval(fun, 750);
