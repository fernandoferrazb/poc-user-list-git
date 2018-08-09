(function () {
	var search = document.querySelector('.container__search-block__button');
		
	search.addEventListener("click", function(){
		var nomeUser = document.querySelector('.container__search-block__input').value;
		var createtext = document.getElementsByClassName('conteudo-render')[0];

		var ajax = new XMLHttpRequest();
		ajax.open('GET', '/result?search=' + nomeUser, true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var gitConsult = JSON.parse(ajax.responseText);
				createtext.innerHTML = gitConsult.login + gitConsult.id + gitConsult.avatar_url;
			}
			createtext.innerHTML = 'Usuário inexistente';
		}
	});
})();