var prev = document.getElementById('previous');
var next = document.getElementById('next');
var caption = document.getElementById('caption');

var item =["img\/a.jpg","img\/b.jpg","img\/c.jpeg","img\/d.jpg"];

var i = 0;

next.addEventListener('click', function(){
    i--;
    if(i<0)
    {
        (i = item.length-1);
    }
    document.getElementById('image').src = item[i];
    
});

prev.addEventListener('click', function(){
    i++;
   if(i>item.length-1)
   {
       i=0;
   }
    document.getElementById('image').src = item[i];
});