angular
  .module('inspiring-app')
  .controller('CategoriesFormCtrl', CategoriesFormCtrl);

CategoriesFormCtrl.$inject = ['Category', '$state'];
function CategoriesFormCtrl(Category, $state) {
  const vm = this;
  vm.submit = category => {
    Category
      .save(category)
      .$promise
      .then(() => {
        $state.go('categoriesIndex');
      });
  };
}
