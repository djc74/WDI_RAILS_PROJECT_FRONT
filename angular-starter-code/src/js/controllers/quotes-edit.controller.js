angular
  .module('inspiring-app')
  .controller('QuotesEditCtrl', QuotesEditCtrl);

QuotesEditCtrl.$inject = ['Quote', '$stateParams', '$state'];
function QuotesEditCtrl(Quote, $stateParams, $state) {
  const vm = this;
  vm.quote = Quote.get($stateParams);
  vm.submit = quote => {
    Quote
      .update({id: quote._id})
      .$promise
      .then(quote => {
        $state.go('quotesShow', {id: quote._id});
      });
  };
}
