function captureMousePosition(e) {
if (document.layers) { // Netscape
    document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = captureMousePosition;
} else if (document.all) { // Internet Explorer
    document.onmousemove = captureMousePosition;
} else if (document.getElementById) { // Netcsape 6
    document.onmousemove = captureMousePosition;
}
// Global variables
xMousePos = 0; // Horizontal position of the mouse on the screen
yMousePos = 0; // Vertical position of the mouse on the screen
xMousePosMax = 0; // Width of the page
yMousePosMax = 0; // Height of the page

if (document.layers) {
        
        xMousePos = e.pageX+"px";
        yMousePos = e.pageY+"px";
        xMousePosMax = window.innerWidth+window.pageXOffset;
        yMousePosMax = window.innerHeight+window.pageYOffset;
    } else if (document.all) {
        //IE  
        xMousePos = window.event.x+document.body.scrollLeft+10+"px";
        yMousePos = window.event.y-20+"px";
        xMousePosMax = document.body.clientWidth+document.body.scrollLeft;
        yMousePosMax = document.body.clientHeight+document.body.scrollTop;
    } else if (document.getElementById) {
        
        xMousePos = e.pageX-30+"px";
        yMousePos = e.pageY-20+"px";
        xMousePosMax = window.innerWidth+window.pageXOffset;
        yMousePosMax = window.innerHeight+window.pageYOffset;
    }

   m= document.getElementById('media_div') 
   if (m){
   m.style.position="absolute";
   m.style.left =xMousePos;
   m.style.top=yMousePos;}

   c= document.getElementById('show_chemin')
  if (c)
  { c.style.position="absolute";
   c.style.left =xMousePos;
   c.style.top=yMousePos;} 
}

 
 function rolling_over_chemin(id, content) {
    document.onmousemove = captureMousePosition;
    c=document.getElementById(id) ;
    c.style.zIndex="1000";
    c.style.marginLeft = "10px"
    c.style.display="block";
    c.style.background="white";
    c.style.padding="10px";
    c.style.textAlign="left";
    c.style.border="2px solid black";
    c.innerHTML = content;
    
  }


 function rolling_out_chemin(id) {
   c=document.getElementById(id) ;
   c.innerHTML = ""
   c.style.background='none';
   c.style.padding='0px';
   c.style.border='none';
   c.style.display='none';

 }


function rolling_over_media(url,id) { 
     document.onmousemove = captureMousePosition; 
     a = new Ajax.Updater('media_div', url , {asynchronous:true, evalScripts:true});
     m= document.getElementById("media_div")
     m.style.display='block';
     m.style.background="#fffdc8";
     m.style.zIndex=5500;
     m.style.border='1px solid black'; 
   
   }


