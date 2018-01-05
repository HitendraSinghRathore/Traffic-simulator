angular.module('application', ['ngMaterial', 'ngRoute', 'firebase'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: "partials/home.html" })
            .when('/gameHome', { templateUrl: "partials/gameHome.html" })
            .when('/developers', { templateUrl: "partials/developers.html" })
            .when('/quiz', { templateUrl: "partials/quiz.html" })
            .when('/simulator', { templateUrl: "partials/simulator.html" })
            .otherwise({ templateUrl: "partials/home.html" })
    })
    .controller('toolbarCtrl', function($location) {

        var tool = this;
        tool.clicked1 = function() {
            $location.path("/home");

        }
        tool.clicked2 = function() {
            $location.path("/gameHome");

        }
        tool.clicked3 = function() {
            $location.path("/developers");

        }

    })
    .controller('gameHomeCtrl', function($location) {

        var gameCtrl = this;
        gameCtrl.quiz = function() {
            $location.path("/quiz");
        }
        gameCtrl.simulator = function() {
            window.location.href = 'projectGame/index.html';
        }
    })
    .controller('quizCtrl', function($location, $firebaseArray) {
        var quiz = this;
        quiz.up = false;
        var questionsRef = firebase.database().ref('questions');
        quiz.questions = $firebaseArray(questionsRef);
        quiz.questions.$loaded().then(function() {
            quiz.up = true;
        })

    })