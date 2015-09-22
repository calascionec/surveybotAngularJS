survey.controller('ResultsCtrl', function FavoriteFoodCtrl($scope, SurveyFactory) {
  $scope.favoriteFoods = SurveyFactory.favoriteFoods;
  $scope.SurveyFactory = SurveyFactory;
});
