// enter in console
// NOTE: you need to scroll down to load all the images before using this script

arr = document.querySelectorAll('.zao-image');
n = 1;

for (i of arr) {
    const img = new Image();
    img.src = i.src

    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
    
        const c = canvas.getContext("2d");
        c.drawImage(img, 0, 0);
    
        n >= 10 ? g = n : g = `0${n}`;
    
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        a.download = `${g}.png`;
    
        a.click();
        n++
    }
}
