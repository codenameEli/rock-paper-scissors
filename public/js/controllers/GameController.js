app.controller("GameController", GameController);
function GameController($scope, $mdDialog, $mdMedia) {
	$scope.choices = [
		{
			id: 1,
			name: 'Rock',
			winsTo: 3,
			losesTo: 2,
		},
		{
			id: 2,
			name: 'Paper',
			winsTo: 1,
			losesTo: 3,
		},
		{
			id: 3,
			name: 'Scissors',
			winsTo: 2,
			losesTo: 1,
		},
	];

	function getRandomChoice() {
		var x = Math.floor( ( Math.random() * $scope.choices.length ) );
		return $scope.choices[x];
	}

	function isaTie(choice1, choice2) {
		return choice1.id === choice2.id;
	}

	function userWins(choice1, choice2) {
		return choice1.winsTo === choice2.id;
	}

	function userLoses(choice1, choice2) {
		return choice1.losesTo === choice2.id;
	}

	$scope.showAlert = function(ev, message) {
		$mdDialog.show(
			$mdDialog.alert()
			.parent(angular.element(document.querySelector('#popupContainer')))
			.clickOutsideToClose(true)
			.title(message)
			.textContent('You can specify some description text in here.')
			.ariaLabel('Alert Dialog Demo')
			.ok('Got it!')
			.targetEvent(ev)
		);
	};

	function determineWinner(ev, choice1, choice2) {

		console.log(choice1, choice2 );

		if ( isaTie( choice1, choice2 ) ) {
			$scope.showAlert(ev, "You tied!");
		}
		if ( userWins( choice1, choice2 ) ) {
			$scope.showAlert(ev, "You win!");
		}
		if ( userLoses( choice1, choice2 ) ) {
			$scope.showAlert(ev, "You lose!");
		}
	}

	$scope.playGame = function(ev, choice) {
		var opponentsChoice = getRandomChoice();
		var usersChoice = choice;

		determineWinner( ev, usersChoice, opponentsChoice );
	}
}