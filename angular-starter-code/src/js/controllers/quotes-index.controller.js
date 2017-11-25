angular
  .module('inspiring-app')
  .controller('QuotesIndexCtrl', QuotesIndexCtrl);

QuotesIndexCtrl.$inject = ['Quote'];
function QuotesIndexCtrl(Quote) {
  const vm = this;
  vm.quotes = Quote.query();
}
