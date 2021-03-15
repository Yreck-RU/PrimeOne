//ОБЬЕВление переменных
const parent_original = document.querySelector('.heder-top');
const parent = document.querySelector('.heder-menu');
const item = document.querySelector('.heder-top-lang');

const parent_origina2 = document.querySelector('#heder-bottom__column-1');
const parent2 = document.querySelector('.heder-menu');
const item2 = document.querySelector('#heder-bottom-memu-1');

const parent_origina3 = document.querySelector('#heder-bottom__column-2');
const parent3 = document.querySelector('.heder-menu');
const item3 = document.querySelector('#heder-bottom-memu-2');



const viewport_width_n1 =Math.max(document.documentElement.clientWidth);
if (viewport_width_n1 <= 757) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add("done");
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item , parent_original.children[0]);
			item.classList.remove('done');
		}
	}
	if (viewport_width_n1 <= 757) {
		if (!item2.classList.contains('done')) {
			parent2.insertBefore(item2, parent2.children[2]);
			item2.classList.add("done");
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_origina2.insertBefore(item2 , parent_origina2.children[2]);
			item2.classList.remove('done');
		}
	}
	if (viewport_width_n1 <= 757) {
		if (!item3.classList.contains('done')) {
			parent3.insertBefore(item3, parent3.children[2]);
			item3.classList.add("done");
		}
	} else {
		if (item3.classList.contains('done')) {
			parent_origina3.insertBefore(item3 , parent_origina3.children[2]);
			item3.classList.remove('done');
		}
	}


//Слушаем зменения размера браузера
window.addEventListener('resize' , function (event){

	const viewport_width =Math.max(document.documentElement.clientWidth);

	if (viewport_width <= 757) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add("done");
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item , parent_original.children[0]);
			item.classList.remove('done');
		}
	}

//=========================================================

	if (viewport_width <= 757) {
		if (!item2.classList.contains('done')) {
			parent2.insertBefore(item2, parent2.children[2]);
			item2.classList.add("done");
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_origina2.insertBefore(item2 , parent_origina2.children[2]);
			item2.classList.remove('done');
		}
	}

//============================================================

	if (viewport_width <= 757) {
		if (!item3.classList.contains('done')) {
			parent3.insertBefore(item3, parent3.children[2]);
			item3.classList.add("done");
		}
	} else {
		if (item3.classList.contains('done')) {
			parent_origina3.insertBefore(item3 , parent_origina3.children[2]);
			item3.classList.remove('done');
		}
	}

});
//КОД для бургера=====================================================================================
$(document).ready(function() {
	$('.heder-menu__icon').click(function(event) {
		$('.heder-menu__icon,.heder-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

let map;

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
