angular
  .module('inspiring-app')
  .controller('QuotesShowCtrl', QuotesShowCtrl);

QuotesShowCtrl.$inject = ['Quote', '$stateParams', '$state'];
function QuotesShowCtrl(Quote, $stateParams, $state) {
  const vm = this;
  vm.quote = Quote.get($stateParams);

  vm.delete = quote => {
    Quote
      .remove({ id: quote._id})
      .$promise
      .then(() => {
        $state.go('quotesIndex');
      });
  };
}
