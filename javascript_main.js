(function (document){
	//alert("javascript is ready and loaded");
	
	var counter = 0;
	var $galleryItems = document.querySelectorAll('.gallery .gallery-item');
	var numItems = $galleryItems.length;
	
	var showCurrent = function(){
		var itemToShow = Math.abs(counter%numItems);
		[].forEach.call($galleryItems, function(el){
			el.classList.remove('show');
		});
		
		$galleryItems[itemToShow].classList.add('show');
	};
	
	document.querySelector('.next').addEventListener('click', function(){
		//alert("click funtion working");
		counter++;
		showCurrent();
	}, false);
	
	document.querySelector('.prev').addEventListener('click', function(){
		//alert("click funtion working");
		counter--;
		showCurrent();
	}, false);
	
	document.querySelector('.to-top').addEventListener('click', function(){
		//alert("ive been clicked");
		window.scroll(0,0);
	})



	
})(document);