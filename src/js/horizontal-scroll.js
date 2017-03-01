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

