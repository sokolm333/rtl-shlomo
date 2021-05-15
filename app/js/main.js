$(function () {
	$('.login__prompt-btn').on('click', function () {
		var max = 10000;
		let rand = Math.round(Math.random() * max);
		alert(`הקוד החדש שלך הוא ${rand}!`);
	});

	$('.login__btn--submit').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		var url = "some.html";
		$(location).attr('href', url);
	});
});