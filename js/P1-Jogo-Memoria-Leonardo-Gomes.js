var app = angular.module ("JogoMemoria",[]);
app.controller("p1JogoMemoria", function ($scope, $timeout, $interval) {
	
	var intervalo;
	var cont = 0;
	var posApresentada = -1;
	$scope.level = "1";
	$scope.tempRestante = 600;
	$scope.acertos = 0;
	var contTemp = 40;

	/*	$scope.inicia = function (){
			$timeout(function (){
				$scope.msg = "5s";
			},5000);
		}
		$scope.msg = "Start"; 
		
		
			$interval(function (){
				cont++;
				$scope.msg = cont + " seg";
			},1000,10);
		
		intervalo = $interval(function (){
			cont++;
			$scope.msg = cont + " seg";
		},1000);
		
			$scope.cancela = function(){
			$interval.cancel(intervalo);
		}
	*/
	

	$scope.tab = new Array(8);
	$scope.tab[0] = {valor:"img/1.jpg", show:true};
	$scope.tab[1] = {valor:"img/1.jpg", show:true};
	$scope.tab[2] = {valor:"img/2.jpg", show:true};
	$scope.tab[3] = {valor:"img/2.jpg", show:true};
	$scope.tab[4] = {valor:"img/3.jpg", show:true};
	$scope.tab[5] = {valor:"img/3.jpg", show:true};
	$scope.tab[6] = {valor:"img/4.jpg", show:true};
	$scope.tab[7] = {valor:"img/4.jpg", show:true};
	

	$interval(function (){
			contTemp--;
			$scope.tempRestante = contTemp + " seg";
			if (contTemp < 0) {
				$('#modalTempoEsgotado').modal('show');
			}
	},$scope.tempRestante);

	shuffler($scope.tab);
		
	$timeout(function (){
		for(var i = 0; i < $scope.tab.length; i++){
			$scope.tab[i].show = false;
		}
	},3000);
	
	$scope.joga = function (pos){

		if (posApresentada < 0) {
			posApresentada = pos;
			$scope.tab[pos].show = true;
		} else{
			
			
			if ($scope.tab[pos].valor != $scope.tab[posApresentada].valor) {
				
					var aux = pos;
					$scope.tab[pos].show = true;
					$timeout(function (){
						$scope.tab[aux].show = false;
						$scope.tab[posApresentada].show = false;
						posApresentada = -1;
					},200);
			}else
			{
				$scope.tab[pos].show = true;
				posApresentada = -1;
				$scope.acertos++;
				if ($scope.acertos >= ($scope.tab.length/2) && $scope.level != "3"){
					$('#modalNextLevel').modal('show');					
				}else if ($scope.acertos >= ($scope.tab.length/2) && $scope.level == "3") {
					$('#modalFimLevel').modal('show');	
				};
			}
			
		}

	}

	function shuffler (array){
		var m = array.length, t,i;
		while(m){
			i= Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}
	
	$scope.nextLevel = function(){
		if ($scope.level == "1") 
		{
			$scope.level = "2";
			$scope.acertos = 0;
			contTemp = 50;

			$scope.tab = new Array(12);
			$scope.tab[0] = {valor:"img/1.jpg", show:true};
			$scope.tab[1] = {valor:"img/1.jpg", show:true};
			$scope.tab[2] = {valor:"img/2.jpg", show:true};
			$scope.tab[3] = {valor:"img/2.jpg", show:true};
			$scope.tab[4] = {valor:"img/3.jpg", show:true};
			$scope.tab[5] = {valor:"img/3.jpg", show:true};
			$scope.tab[6] = {valor:"img/4.jpg", show:true};
			$scope.tab[7] = {valor:"img/4.jpg", show:true};
			$scope.tab[8] = {valor:"img/5.jpg", show:true};
			$scope.tab[9] = {valor:"img/5.jpg", show:true};
			$scope.tab[10] = {valor:"img/6.jpg", show:true};
			$scope.tab[11] = {valor:"img/6.jpg", show:true};
			shuffler($scope.tab);
			mostraTab();
			

		}else if($scope.level == "2") {
			$scope.level = "3";
			$scope.acertos = 0;
			contTemp = 60;

			$scope.tab = new Array(12);
			$scope.tab[0] = {valor:"img/1.jpg", show:true};
			$scope.tab[1] = {valor:"img/1.jpg", show:true};
			$scope.tab[2] = {valor:"img/2.jpg", show:true};
			$scope.tab[3] = {valor:"img/2.jpg", show:true};
			$scope.tab[4] = {valor:"img/3.jpg", show:true};
			$scope.tab[5] = {valor:"img/3.jpg", show:true};
			$scope.tab[6] = {valor:"img/4.jpg", show:true};
			$scope.tab[7] = {valor:"img/4.jpg", show:true};
			$scope.tab[8] = {valor:"img/5.jpg", show:true};
			$scope.tab[9] = {valor:"img/5.jpg", show:true};
			$scope.tab[10] = {valor:"img/6.jpg", show:true};
			$scope.tab[11] = {valor:"img/6.jpg", show:true};
			$scope.tab[12] = {valor:"img/7.jpg", show:true};
			$scope.tab[13] = {valor:"img/7.jpg", show:true};
			$scope.tab[14] = {valor:"img/8.jpg", show:true};
			$scope.tab[15] = {valor:"img/8.jpg", show:true};
			shuffler($scope.tab);
			mostraTab();
		}
		else{

		}
	}

	$scope.tentarNovamente = function(){
		if ($scope.level == "1") 
		{
			shuffler($scope.tab);
			$scope.level = "1";
			$scope.acertos = 0;
			contTemp = 40;
		}
		else if($scope.level == "2"){
			shuffler($scope.tab);
			$scope.level = "2";
			$scope.acertos = 0;
			contTemp = 50;
		}else{
			shuffler($scope.tab);
			$scope.level = "3";
			$scope.acertos = 0;
			contTemp = 120;
		}

		mostraTab();
	}
	
	$scope.sair = function  () {
		window.close();
	}	

	function mostraTab () {
		for(var i = 0; i < $scope.tab.length; i++){
			$scope.tab[i].show = true;
		}

		$timeout(function (){
		for(var i = 0; i < $scope.tab.length; i++){
			$scope.tab[i].show = false;
		}
		},3000);
	}

	$scope.reiniciar = function  () {
		window.location.reload();
	}	
});