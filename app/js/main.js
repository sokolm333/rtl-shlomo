$(function () {
	$('.login__prompt-btn').on('click', function () {
		var max = 10000;
		let rand = Math.round(Math.random() * max);
		alert(`הקוד החדש שלך הוא ${rand}!`);
	});

	$('.login__btn--submit').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.login__input').each(function () {
			if ($(this).val() === "") {
				$(this).addClass('input--empty').addClass('input--empty-focus');
			} else {
				$(this).removeClass('input--empty').removeClass('input--empty-focus');
			}
		});
		if ($('.login__input').hasClass('input--empty')) { } else {
			var url = "offers.html";
			$(location).attr('href', url);
		}
	});

	$('.nav__link--switch').on('click', function () {
		$('.nav__link--switch').removeClass('nav__link--active');
		$(this).addClass('nav__link--active');
	});

	$('.offers__search-btn').on('click', (event) => {
		event.preventDefault();
		event.stopPropagation();
		if ($('.search-form__input').val() == "") {
			$('.search-form__input').addClass('input--empty-focus').focus();
		} else {
			$('.offers__form').submit();
			$('.search-form__input').val("").removeClass('input--empty-focus');
		}
	});
	$('.search-form__input').on('blur', () => {
		if ($('.offers__search-btn:hover').length == 0) {
			$('.search-form__input').val("").removeClass('input--empty-focus');
		}
	});
});