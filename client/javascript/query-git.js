(function () {
	var search = document.querySelector('.container__search-block__button');
	var inputSearch = document.querySelector('.container__search-block__input');
		
	search.addEventListener("click", function(){
		var ajax = new XMLHttpRequest();
		ajax.open('GET', '/resultSearch', true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var data = ajax.responseText;
				console.log(data);
				document.getElementsByClassName('conteudo-render')[0].innerHTML = data;
		}
	}});

})();