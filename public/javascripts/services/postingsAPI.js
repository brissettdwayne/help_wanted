angular
  .module('PostingsAPI', [])
  .factory('postingsAPI', ['$http',
    function($http) {
      return {
        getAll: function(){
          return $http.get('/api/postings')
        },
        save: function(newPost){
          return $http.post('/api/postings', newPost)
        },
        remove: function(id){
          return $http.delete('/api/postings/' + id)
        }
      }
    }
  ])
