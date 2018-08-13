(function () {
	var search = document.querySelector('.container__search-block__button');
		
	search.addEventListener("click", function(){
		var nomeUser = document.querySelector('.container__search-block__input').value;
		var createaLi = document.createElement("li");
		var createaLiTwo = document.createElement("li");
		var createaLithree = document.createElement("img");

		var ajax = new XMLHttpRequest();
		ajax.open('GET', '/result?search=' + nomeUser, true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var gitConsult = JSON.parse(ajax.responseText);
				createaLi.innerHTML = "Nome: " + gitConsult.name;
				createaLi.className = "conteudo-render__nome";
				createaLiTwo.innerHTML = "Login: " + gitConsult.login;
				createaLiTwo.className = "conteudo-render__user";
				createaLithree.src = gitConsult.avatar_url;
				createaLithree.className = "conteudo-render__avatar";
				createaLithree.innerHTML = "Avatar: " + createaLithree.src; 
				document.getElementsByClassName('conteudo-render')[0].appendChild(createaLi);
				document.getElementsByClassName('conteudo-render')[0].appendChild(createaLiTwo);
				document.getElementsByClassName('conteudo-render')[0].appendChild(createaLithree);
			}
			else {
				var renderText = 'Usuário não encontrado';
				createaLi.innerHTML = renderText;
				document.getElementsByClassName('conteudo-render')[0].appendChild(createaLi);
			}
		}
	});
})();