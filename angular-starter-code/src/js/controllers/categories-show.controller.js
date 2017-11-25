angular
  .module('inspiring-app')
  .controller('CategoriesShowCtrl', CategoriesShowCtrl);

CategoriesShowCtrl.$inject = ['Category', 'Quote', '$stateParams', '$state'];
function CategoriesShowCtrl(Category, Quote, $stateParams, $state) {
  const vm = this;
  vm.category = Category.get($stateParams);
  vm.quote = Quote.get($stateParams);

  vm.delete = category => {
    Category
      .remove({ id: category._id})
      .$promise
      .then(() => {
        $state.go('categoriesIndex');
      });
  };
}
