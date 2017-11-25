angular
  .module('inspiring-app')
  .controller('CategoriesEditCtrl', CategoriesEditCtrl);

CategoriesEditCtrl.$inject = ['Category', '$stateParams', '$state'];
function CategoriesEditCtrl(Category, $stateParams, $state) {
  const vm = this;
  vm.category = Category.get($stateParams);
  vm.submit = category => {
    Category
      .update({id: category._id})
      .$promise
      .then(category => {
        $state.go('categoriesShow', {id: category._id});
      });
  };
}
