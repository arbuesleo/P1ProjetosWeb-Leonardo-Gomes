var app = angular.module ("dadoSimples",[]);
app.controller("p1DadoSimples", function ($scope, $timeout, $interval) {
	
	$scope.sorteado;
	var num;
	$scope.soteiaNum = function (){
		num = Math.floor(Math.random() * 6 + 1);
		$scope.sorteado = "img/dado-" + num + ".jpg";
	}
});