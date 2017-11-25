angular
  .module('inspiring-app')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('categoriesIndex', {
      url: '/categories',
      templateUrl: '/js/views/categories/index.html',
      controller: 'CategoriesIndexCtrl as vm'
    })
    .state('categoriesNew', {
      url: '/categories/new',
      templateUrl: '/js/views/categories/form.html',
      controller: 'CategoriesFormCtrl as vm'
    })
    .state('categoriesShow', {
      url: '/categories/:id',
      templateUrl: '/js/views/categories/show.html',
      controller: 'CategoriesShowCtrl as vm'
    })
    .state('categoriesEdit', {
      url: '/categories/:id/edit',
      templateUrl: 'js/views/categories/form.html',
      controller: 'CategoriesEditCtrl as vm'
    })
    .state('quotesIndex', {
      url: '/quotes',
      templateUrl: '/js/views/quotes/index.html',
      controller: 'QuotesIndexCtrl as vm'
    })
    .state('quotesNew', {
      url: '/quotes/new',
      templateUrl: '/js/views/quotes/form.html',
      controller: 'QuotesFormCtrl as vm'
    })
    .state('quotesShow', {
      url: '/quotes/:id',
      templateUrl: '/js/views/quotes/show.html',
      controller: 'QuotesShowCtrl as vm'
    })
    .state('quotesEdit', {
      url: '/quotes/:id/edit',
      templateUrl: 'js/views/quotes/form.html',
      controller: 'QuotesEditCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
