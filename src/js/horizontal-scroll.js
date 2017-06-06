function horizontalSlide(event){
  var screenWidth = event.currentTarget.parentElement.offsetWidth;
  var menu = event.currentTarget.parentElement.querySelector("ul");
  var menuFullWidth = menu.offsetWidth;
  var left = parseInt(window.getComputedStyle(menu, null).getPropertyValue("left"));
  var right = menuFullWidth - screenWidth + left;

  if(event.currentTarget.className == "nextSlider"){
    if(right >= screenWidth){
      left -= screenWidth;
    }else if(right < screenWidth && right > 0){
      left -= right; 
    }
  }else{
    if(-left >= screenWidth){
      left += screenWidth;
    }else{
      left = 0; 
    }
  }

  new Effect.Move(menu.id, {x: left, y: 0, mode: "absolute"}); 
}

function slideMenuToActiveElement(){
  var activeMenuElement = document.getElementById("active-menu-element"); 
  var menu = activeMenuElement.parentElement;
  var activeWidth = activeMenuElement.offsetWidth;
  var activeLeft = activeMenuElement.offsetLeft;
  var gap = activeLeft + activeWidth;
  var screenWidth = activeMenuElement.parentElement.parentElement.parentElement.offsetWidth;
  var menuFullWidth = menu.offsetWidth;

  if(gap > screenWidth){
    var left = parseInt(window.getComputedStyle(menu, null).getPropertyValue("left"));
    var right = menuFullWidth - screenWidth + left;
    var slideXtimes = parseInt(gap / screenWidth) 

    if(right >= (slideXtimes * screenWidth)){
      left -= (slideXtimes * screenWidth);
    }else if(right < (slideXtimes * screenWidth) && right > 0){
      left -= ((slideXtimes - 1) * screenWidth + right); 
    }

    new Effect.Move("slider-list", {x: left, y: 0, mode: "absolute"}); 
  }
}


window.addEventListener("DOMContentLoaded", function(){
  slideMenuToActiveElement();
}, false);
