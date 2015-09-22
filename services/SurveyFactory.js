survey.factory("SurveyFactory", function SurveyFactory(){
  var factory = {};
  factory.answers = [];
  factory.showResults = false;

  factory.addAnswer = function(){
    var answer = {favoriteColor: factory.favoriteColor, favoriteFood: factory.favoriteFood};
    factory.answers.push(answer);
    factory.favoriteColor = null;
    factory.favoriteFood = null;
  };

  factory.answersAtFive = function() {
    if(factory.answers.length >= 5) {
      return true;
    } else {
      return false;
    }
  };
  return factory;
});
