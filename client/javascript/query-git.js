(function () {
	var search = document.querySelector('.container__search-block__button');
		
	search.addEventListener("click", function(){
		var nomeUser = document.querySelector('.container__search-block__input').value;
		var ajax = new XMLHttpRequest();
		ajax.open('GET', '/result?search=' + nomeUser, true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var gitConsult = JSON.parse(ajax.responseText);
				document.getElementsByClassName('conteudo-render')[0].innerHTML = gitConsult.login;
			}
		}
	});
})();