survey.factory("SurveyFactory", function SurveyFactory(){
  var factory = {};
  factory.answers = [];

  factory.addAnswer = function(){
    var answer = {favoriteColor: factory.favoriteColor, favoriteFood: factory.favoriteFood};
    factory.answers.push(answer);
    factory.favoriteColor = null;
    factory.favoriteFood = null;
  };
  return factory;
});
