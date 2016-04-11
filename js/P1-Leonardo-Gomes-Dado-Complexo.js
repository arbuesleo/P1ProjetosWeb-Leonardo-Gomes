var app = angular.module ("dadoComplexo",[]);
app.controller("p1DadoComplexo", function ($scope, $timeout, $interval) {
	
	var imgSorteado;
	var num;
	$scope.soma = 0;
	$scope.dados;
	
	var num;

	$scope.soteiaNum = function (){
		num = Math.floor(Math.random() * 6 + 1);
		imgSorteado = "img/dado-" + num + ".jpg";
	}

	$scope.startJogo = function ()
	{
		$scope.soma = 0;

		$scope.dados = new Array($scope.tamVet);
		for (var i = 0; i < $scope.tamVet; i++) {
			$scope.soteiaNum();
			$scope.soma += num;
			$scope.dados[i] = imgSorteado;
		}
	}

});