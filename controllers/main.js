// Creación del módulo
var rulesApp = angular.module('rulesApp', ['ngRoute']);

// Configuración de las rutas
rulesApp.config(function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        })
        .when('/listarDominios', {
            templateUrl : 'views/listarDominios.html',
            controller  : 'domainController'
        })
        .when('/agregarDominio', {
            templateUrl : 'views/agregarDominio.html',
            controller  : 'addDomainController'
        })
        .when('/listarReglas', {
            templateUrl : 'views/listarReglas.html',
            controller  : 'ruleController'
        })
        .when('/agregarRegla', {
            templateUrl : 'views/agregarRegla.html',
            controller  : 'addRuleController'
        })
        .when('/listarComponentes', {
            templateUrl : 'views/listarComponentes.html',
            controller  : 'componentController'
        })
        .when('/agregarComponente', {
            templateUrl : 'views/agregarComponente.html',
            controller  : 'addComponentController'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

rulesApp.controller('homeController', function($scope) {
  $scope.message = 'Versión 0.0.1';
});

rulesApp.controller('domainController', function($scope, $http) {
  $scope.title = 'Dominios';
  $scope.message = 'Listado de Dominios de Aplicación';

  $http.get('http://localhost:8080/api/rules/domains')
  .then(function(response) {
      $scope.data = response.data;
  });
});
rulesApp.controller('addDomainController', function($scope) {
  $scope.title = 'Dominios';
  $scope.message = 'Agregar Dominio de Aplicación';
});

rulesApp.controller('ruleController', function($scope, $http) {
  $scope.title = 'Reglas';
  $scope.message = 'Listado de Reglas de Aplicación';

  $http.get('http://localhost:8080/api/rules/rules')
  .then(function(response) {
      $scope.data = response.data;
  });
});
rulesApp.controller('addRuleController', function($scope) {
  $scope.title = 'Reglas';
  $scope.message = 'Agregar Regla de Aplicación';
});

rulesApp.controller('componentController', function($scope, $http) {
  $scope.title = 'Componentes';
  $scope.message = 'Listado de Componentes de Reglas de Aplicación';

  $http.get('http://localhost:8080/api/rules/components')
  .then(function(response) {
      $scope.data = response.data;
  });
});
rulesApp.controller('addComponentController', function($scope) {
  $scope.title = 'Componentes';
  $scope.message = 'Agregar Componentes de Reglas de Aplicación';
});

rulesApp.controller('aboutController', function($scope) {
  $scope.message = 'Esta es la página "Acerca de"';
});

rulesApp.controller('parserMenu', function($scope, $http) {
  $http.get('models/menu.json')
       .then(function(res){
          $scope.menu = res.data.menu;
        });
});
