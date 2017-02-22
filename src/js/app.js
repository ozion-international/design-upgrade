// Animations are made using scriptaculous.js

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

function victorShadowBox(content){
  // Set the background layer  
  var dark_layer = document.createElement('div');
  dark_layer.id = 'victor-shadow-box';
  dark_layer.style.opacity = "0";

  // Close victorShadowBox when clicking on the background layer
  dark_layer.addEventListener('click', function(e, callback){
    var _this = e.target;
    if (_this !== dark_layer) return;

    Effect.Fade(_this.id, {duration: 0.5});
    setTimeout(function () {
      _this.parentNode.removeChild(_this);
      document.body.style.left = "";
      document.body.style.marginLeft = "auto";
      document.body.style.overflowY = 'auto';
    }, 500);
  });

  // Set the close button
  var close_icon = document.createElement('img');
  close_icon.src = '/images/fermer.png';
  close_icon.id = 'close-icon'
  // Trigger box closing on click on the close button
  close_icon.addEventListener("click", function(e){
    var event = new CustomEvent("click");
    e.target.parentNode.parentNode.dispatchEvent(event);
  });

  // Set the container and content
  var container = document.createElement('div');
  container.id = "shadow-box-container"
  container.innerHTML = content;
  container.appendChild(close_icon);

  // Insert shadow box in dom 
  dark_layer.appendChild(container);
  document.body.appendChild(dark_layer);
  
  // Center the content box
  container.style.marginTop = -Math.floor(container.clientHeight / 2) + 'px';
  container.style.marginLeft = -Math.floor(container.clientWidth / 2) + 'px';
  // HACK: for some reasons, container.clientWidth returns a different value
  // when called a second time. And the second time is the real width...
  container.style.marginLeft = -Math.floor(container.clientWidth / 2) + 'px';

  // Fade in the awesome victor's shadow box
  Effect.Appear(dark_layer.id, {from: 0.0, to: 1.0, duration: 0.5});

  // Hide body scrollbar
  setTimeout(function () {
    document.body.style.overflowY = 'scroll';
  }, 500);
}
