//ОБЬЕВление переменных"use strict"
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();










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
/*$(document).ready(function() {
	$('.heder-menu__icon').click(function(event) {
		$('.heder-menu__icon,.heder-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});*/
const iconMenu = document.querySelector('.heder-menu__icon');
const menuBody = document.querySelector('.heder-menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
/*
let map;

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}*/



//==================================================================================================================================================
//==================================================================================================================================================
//Линивая загрусска - "Формы"
//==================================================================================================================================================
//==================================================================================================================================================






document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
});









//===========================================================================================










document.addEventListener("DOMContentLoaded", function () {
	const forms = document.querySelectorAll("._form");

	for (let i = 0; i < forms.length; i++) {
		let form = forms[i];

		form.addEventListener("submit", function (e) {
			e.preventDefault();
			let error = formValidate(form);

			if (error === 0) {
				form.submit();
			}
		});

		let formFeqInputs = form.querySelectorAll("._req");

		for (let i = 0; i < formFeqInputs.length; i++) {
			let formFeqInput = formFeqInputs[i];

			formFeqInput.parentElement.addEventListener( 'click', (e) => {
				for (let i = 0; i < formFeqInputs.length; i++) {
					let formFeqInput = formFeqInputs[i];
					if (formFeqInput.classList.contains('_error')) {
						formRemoveError(formFeqInput);
					}
				}
			})
		}

		function formValidate(form) {
			let error = 0;
			let formFeq = form.querySelectorAll("._req");

			for (var i = 0; i < formFeq.length; i++) {
				let input = formFeq[i];
				formRemoveError(input);

				if (input.classList.contains('_email')) {
					if (emailTest(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else if (input.getAttribute("type") === "tel" && input.value != '') {
					if (!nomerTest(input.value)) {
						formAddError(input);
						error++
					}
				} else if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add("_error");
			input.classList.add("_error");
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove("_error");
			input.classList.remove("_error");
		}
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
		function nomerTest(nomer) {
			if (true) {
				if (nomer[0] === "8" && nomer.length == 17) {
					return true;
				} else if (nomer[0] === "+" && nomerTestSimvol(nomer) === "7" && nomer.length > 17) {
					return true;
				}
			}
		}
		function nomerTestSimvol(nomer) {
			for (let i = 1; i < nomer.length; i++) {
				let simvol = nomer[i];

				if (+simvol > 0) {
					return simvol;
				}
			}
		}
	}
});




const animItems = document.querySelectorAll('._anim-items');
const loadMapBlock = document.querySelector('._load-map');
let loadMapBlockBulen = true;

let timerinAniItem = setTimeout(function tick() {
	if (animItems.length > 0 && loadMapBlock) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll () {
			for (let index = 0; index < animItems.length; index++) {
				//console.log(getCoords(animItems[index]));
				const animItem = animItems[index];
				const animItemOffset = offset(animItem).top;

				window.addEventListener('scroll', function(){
					if ((animItemOffset - ((window.innerWidth / 45) * 25) ) < window.scrollY && loadMapBlockBulen) {
						loadMapBlockBulen = false;
						loadMapBlock.insertAdjacentHTML('beforebegin', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d163930.61560902974!2d14.327942420312501!3d50.059772900000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sru!4v1681465458738!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
					}
				});
				if ((animItemOffset - ((window.innerWidth / 45) * 25) ) < window.scrollY && loadMapBlockBulen) {
					loadMapBlockBulen = false;
					loadMapBlock.insertAdjacentHTML('beforebegin', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d163930.61560902974!2d14.327942420312501!3d50.059772900000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sru!4v1681465458738!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
				}
			}

		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollleft = window.pageXOffset || document.documentElement.scrollleft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollleft}
		}
		animOnScroll();
	}
}, 500);





// =================================================================
// Начало - "Линивая загруска"
// =================================================================

const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
			ibg();
		}
	});
}

window.addEventListener("scroll", lazuScroll);
function lazuScroll() {
	if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
		lazyScrollCheck();
		ibg();
	}
}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);

	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}

// =================================================================
// Конец - "Линивая загруска"
// =================================================================