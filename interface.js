function openNav(){
   document.getElementById('mysidenav').style.width="180px";
    document.getElementById('main').style.width="180px";

}
function closeNav(){
   document.getElementById('mysidenav').style.width="0px";
    document.getElementById('main').style.width="0px";
}















var img_content = document.getElementById('box');
var image = ['imgs/fac','imgs/1','imgs/2','imgs/3','imgs/4','imgs/5','imgs/6','imgs/7','imgs/8','imgs/12'];
var i=image.length;


function nextimge(){
   if (i<image.length) {
       i=i+1;
   }else{
     i=1;  
   }
  img_content.innerHTML = "<img src="+image[i-1]+".jpg>";  
    
}

function prewimge(){
   if (i<image.length+1 && i>1) {
       i=i-1;
   }else{
     i=image.length;  
   }
  img_content.innerHTML = "<img src="+image[i-1]+".jpg>";  
    
}

setInterval( nextimge , 2000);










/*var buttom = document.getElementById("btn"),
 myimage = document.getElementById("imgs"),
 imagelist=[
    "imgs/12.jpeg",
    "imgs/fac.png",
    "imgs/12.jpeg",
    "imgs/12.jpeg",
    "imgs/12.jpeg",
    "imgs/12.jpeg"
 ]
 buttom = function() {
     i=0;
     var show = setInterval(function(){

     
     setInterval(function(){
    myimage.src=imagelist[1];
    i++;
    if(i>=imagelist.length)
    clearInterval(show)
     })
    }, 1000);
 }
*/