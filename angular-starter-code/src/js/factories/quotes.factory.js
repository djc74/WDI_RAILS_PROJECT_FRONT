angular
  .module('inspiring-app')
  .factory('Quote', Quote);

Quote.$inject = ['API', '$resource'];
function Quote(API, $resource) {
  return $resource(`${API}/quotes/:id`, { id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
