
var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
var x = 0;
var y = 0;
img.onload = function() {
    ctx.drawImage(img, 0, 0, 50, 50); 
    
};
img.src = 'img/nave.png'; 


 
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, 80, 80); 
        x += 1;
        y+=1;
        if (x < canvas.width - 50) {
            requestAnimationFrame(update);
        }
    }

    update();

