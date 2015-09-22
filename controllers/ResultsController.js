survey.controller('ResultsCtrl', function FavoriteFoodCtrl($scope, SurveyFactory) {
  $scope.answers = SurveyFactory.answers;
  $scope.SurveyFactory = SurveyFactory;


});
