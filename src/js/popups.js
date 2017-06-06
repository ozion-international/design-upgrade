function victorShadowBox(content){
  
var alreadyOpenedPopup = document.getElementById("shadow-box-container");
  if(alreadyOpenedPopup){
    var popupCount = document.getElementsByClassName("popup-sup");
    var dark_layer = alreadyOpenedPopup.parentNode; 
    if(popupCount.length === 0){
    Effect.Appear(alreadyOpenedPopup.id, {from: 1.0, to: 0.0, duration: 0.5});
    }else{
      Effect.Appear(_(popupCount).last().id, {from: 1.0, to: 0.0, duration: 0.5});
    }
    // Set the container and content
    var container = document.createElement('div');
    container.id = "shadow-box-container" + popupCount.length;
    container.className += "popup-sup"
    container.style.opacity = "0";

    // Set the back button
    var back_icon = document.createElement('svg');
    back_icon.id = 'back-icon' + popupCount.length
    back_icon.className += 'arrow-left'

    back_icon.setAttribute("data-active", popupCount.length);
    back_icon.setAttribute("data-prev", popupCount.length - 1);
    
      // Trigger box closing on click on the close button
    back_icon.addEventListener('click', function(e, callback){
    var _this = e.target;
    var toRemove = document.getElementById("shadow-box-container" + _this.getAttribute("data-active"));
      if(_this.getAttribute("data-prev") === "-1"){
        var toShow = document.getElementById("shadow-box-container");
      }else{
        var toShow = document.getElementById("shadow-box-container" + _this.getAttribute("data-prev"));
      }

    Effect.Fade(toRemove, {duration: 0.5});
    setTimeout(function () {
      toRemove.parentNode.removeChild(toRemove);
      Effect.Appear(toShow.id, {from: 0.0, to: 1.0, duration: 0.5});
    }, 500);
  });

  }else{
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
    close_icon.id = 'close-icon';
    // Trigger box closing on click on the close button
    close_icon.addEventListener("click", function(e){
      var event = new CustomEvent("click");
      e.target.parentNode.parentNode.dispatchEvent(event);
    });

    // Set the container and content
    var container = document.createElement('div');
    container.id = "shadow-box-container"
  }

  container.innerHTML = content;
  if(!alreadyOpenedPopup){
    container.appendChild(close_icon);
  }else{
    container.appendChild(back_icon);
  }

  // Insert shadow box in dom 
  dark_layer.appendChild(container);
  if(!alreadyOpenedPopup){
    document.body.appendChild(dark_layer);
  }
  
  // Center the content box
  container.style.marginTop = -Math.floor(container.clientHeight / 2) + 'px';
  container.style.marginLeft = -Math.floor(container.clientWidth / 2) + 'px';
  // HACK: for some reasons, container.clientWidth returns a different value
  // when called a second time. And the second time is the real width...
  container.style.marginLeft = -Math.floor(container.clientWidth / 2) + 'px';

  addResizeListener(container, function(){
    centerShadowBox(container.id); 
  });

  // Fade in the awesome victor's shadow box
  if(!alreadyOpenedPopup){
    Effect.Appear(dark_layer.id, {from: 0.0, to: 1.0, duration: 0.5});
  }else{
    Effect.Appear(container.id, {from: 0.0, to: 1.0, duration: 0.5});
  }

  // Hide body scrollbar
  setTimeout(function () {
    document.body.style.overflowY = 'scroll';
  }, 500);
}

function centerShadowBox(element_id){
  var popup = document.getElementById(element_id);
  // Center the content box
  popup.style.marginTop = -Math.floor(popup.clientHeight / 2) + 'px';
  popup.style.marginLeft = -Math.floor(popup.clientWidth / 2) + 'px';
  // HACK: for some reasons, container.clientWidth returns a different value
  // when called a second time. And the second time is the real width...
  popup.style.marginLeft = -Math.floor(popup.clientWidth / 2) + 'px';
}

function closeVictorShadowBox(){
  var openedPopups = document.getElementsByClassName("popup-sup");

  if(openedPopups.length > 0){
    var lastOpened = openedPopups[openedPopups.length - 1] 

    var event = new CustomEvent("click");
    document.getElementById("back-icon" + (openedPopups.length - 1)).dispatchEvent(event);
  }else{
    closeFullVictorShadowBox(); 
  }
}

function closeFullVictorShadowBox(){
  var popup = document.getElementById('victor-shadow-box');
  Effect.Appear(popup.id, {from: 1.0, to: 0.0, duration: 0.5});
  setTimeout(function () {
    document.body.removeChild(popup);
  }, 500);
}


function removeWidgetPopup(popup){
  Effect.Appear(popup.id, {from: 1.0, to: 0.0, duration: 0.2});
  setTimeout(function () {
    document.body.removeChild(popup);
  }, 200);
}

function showWidgetPopup(content, arrowPointer){
  var popup = document.createElement('div');
  var pointer = document.createElement('div');
  pointer.className = "arrow-up " + arrowPointer;
  popup.id = "widget-popup";
  popup.className = arrowPointer;
  popup.style.opacity = "0";

  popup.innerHTML = content;
  popup.appendChild(pointer);

  document.body.appendChild(popup);
  Effect.Appear(popup.id, {from: 0.0, to: 1.0, duration: 0.2});
}

function widgetPopup(content, arrowPointer){
  
  var opened_popup = document.getElementById("widget-popup");
  
  if(opened_popup != null && arrowPointer == opened_popup.className){
    removeWidgetPopup(opened_popup);
  }else if (opened_popup != null && arrowPointer != opened_popup.className){ 
    removeWidgetPopup(opened_popup);
    setTimeout(function(){
      showWidgetPopup(content, arrowPointer);     
    }, 200);
  }else{
    showWidgetPopup(content, arrowPointer);     
  }
}
