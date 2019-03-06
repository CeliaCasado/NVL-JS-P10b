	//Declaro las variables arrays que tendré
	var impares = new Array();
	var pares = new Array();
	//Defino el bucle for necesario 
	for (i = 0; i <= 50; i++){
		var aleatorios = Math.floor((Math.random() * 100) + 1);
		if (aleatorios % 2 == 0) {
			pares.push(aleatorios);
  		}else {
    		impares.push(aleatorios);
    	}
	}
	window.alert(pares);
	window.alert(impares);s







	