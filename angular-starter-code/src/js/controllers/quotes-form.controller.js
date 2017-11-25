angular
  .module('inspiring-app')
  .controller('QuotesFormCtrl', QuotesFormCtrl);

QuotesFormCtrl.$inject = ['Quote', '$state'];
function QuotesFormCtrl(Quote, $state) {
  const vm = this;
  vm.submit = quote => {
    Quote
      .save(quote)
      .$promise
      .then(() => {
        $state.go('quotesIndex');
      });
  };
}
