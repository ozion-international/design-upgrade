var documentReady = function () {
	var link = document.getElementById("popup-show");
	var close = document.getElementById("popup-hide");
	var target = document.getElementById("popup");
	var body = document.querySelector('body');
	var isOpen = false;

	function displayToggle() {
		if (isOpen) {
			target.classList.remove('show');
			body.classList.remove('popover-open');
			isOpen = false;
		} else {
			target.classList.add('show');
			body.classList.add('popover-open');
			isOpen = true;
		}
	}

	link.addEventListener("click", displayToggle, false);
	close.addEventListener("click", displayToggle, false);

};

function jsTopSlider(dir) {
    var seletPositionSlider = document.getElementById('curentslider');
    var seletItemSlider = document.getElementsByClassName("boxslider");
    var numberItemsSlider = seletItemSlider.length;
    var curentslider = Number(seletPositionSlider.value);
    
    if(dir == 1){
        if(curentslider>1){
             seletPositionSlider.value = curentslider-1;
        }
    }
    
    if(dir == 2) {
        if(curentslider<numberItemsSlider-2){
        seletPositionSlider.value = curentslider+1;
        }
    }
    
    for(var i = 0, length = seletItemSlider.length; i < length; i++) {
        seletItemSlider[i].style.display = 'none';
    }
    var newPositionslider = Number(seletPositionSlider.value);
    
    document.getElementById('box'+newPositionslider).style.display = 'block';
    document.getElementById('box'+(newPositionslider+1)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+2)).style.display = 'block';

}

document.addEventListener('DOMContentLoaded', documentReady , false);

function jsTopSliderSecurite(dir) {
    var seletPositionSlider = document.getElementById('curentslider-securite');
    var seletItemSlider = document.getElementsByClassName("boxslider-securite");
    var numberItemsSlider = seletItemSlider.length;
    var curentslider = Number(seletPositionSlider.value);
    
    if(dir == 1){
        if(curentslider>1){
             seletPositionSlider.value = curentslider-1;
        }
    }
    
    if(dir == 2) {
        if(curentslider<numberItemsSlider-11){
        seletPositionSlider.value = curentslider+1;
        }
    }
    
    for(var i = 0, length = seletItemSlider.length; i < length; i++) {
        seletItemSlider[i].style.display = 'none';
    }
    var newPositionslider = Number(seletPositionSlider.value);
    
    document.getElementById('box'+newPositionslider).style.display = 'block';
    document.getElementById('box'+(newPositionslider+1)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+2)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+3)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+4)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+5)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+6)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+7)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+8)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+9)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+10)).style.display = 'block';
    document.getElementById('box'+(newPositionslider+11)).style.display = 'block';

}

document.addEventListener('DOMContentLoaded', documentReady , false);


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
