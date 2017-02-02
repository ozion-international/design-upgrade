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



	
