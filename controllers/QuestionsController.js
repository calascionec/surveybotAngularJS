survey.controller('QuestionsCtrl', function FavoriteFoodCtrl($scope, SurveyFactory) {
  $scope.showVariable = true;
  $scope.showThankYouVariable = false;
  $scope.SurveyFactory = SurveyFactory;
  $scope.showThankYou = function() {
    $scope.showVariable = false;
    $scope.showThankYouVariable = true;
  };
  $scope.showForm = function() {
    $scope.showVariable = true;
    $scope.showThankYouVariable = false;
  };
});
