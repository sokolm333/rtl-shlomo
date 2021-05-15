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
				$(this).addClass('login__input--empty');
			} else {
				$(this).removeClass('login__input--empty');
			}
		});
		if ($('.login__input').hasClass('login__input--empty')) { } else {
			var url = "some.html";
			$(location).attr('href', url);
		}
	});
});