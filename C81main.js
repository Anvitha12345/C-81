canvas = document.getElementById("myCanvas");
colour ="red";

ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(500, 500, 100, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

    colour = document.getElementById("Colour").value;

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;




circle(mouse_x,mouse_y);

}

function circle(mouse_x, mouse_y){

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x,mouse_y, 50, 0, 2 * Math.PI);
    ctx.stroke();





}
function Clear(){


ctx.clearRect(0,0,canvas.width,canvas.height);



}