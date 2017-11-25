angular
  .module('inspiring-app')
  .controller('CategoriesIndexCtrl', CategoriesIndexCtrl);

CategoriesIndexCtrl.$inject = ['Category'];
function CategoriesIndexCtrl(Category) {
  const vm = this;
  vm.categories = Category.query();
}
