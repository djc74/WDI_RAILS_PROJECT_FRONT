angular
  .module('inspiring-app')
  .factory('Category', Category);

Category.$inject = ['API', '$resource'];
function Category(API, $resource) {
  return $resource(`${API}/categories/:id`, { id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
