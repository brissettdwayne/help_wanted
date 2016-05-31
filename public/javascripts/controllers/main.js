angular
  .module('mainController', ['PostingsAPI'])
  .controller('MainController', ['$scope', '$http', 'postingsAPI',
    function($scope, $http, postingsAPI) {
      $scope.name = ''
      $scope.contactInfo = ''
      $scope.skills = ''
      $scope.options = ['Email','Text','Call']
      $scope.formData = {};

      $scope.getAll = function(){
      postingsAPI.getAll().then(function(response){
        console.log(response);
        $scope.postings = response.data.postings;
      })
    }
    $scope.getAll();

      $scope.createPost = function() {
        console.log($scope.formData);
        var newPost = { posting: $scope.formData }

        postingsAPI.save(newPost).then(function(response){
          console.log("POSTED");
          console.log(response);
          $scope.postings = response.data.postings;
        })
          $scope.getAll();
          $scope.reset();
      }

      $scope.deletePosting = function(post) {
        postingsAPI.remove(post._id).then(function(response){
          console.log("DELETE");
          if(response.status == 203){
            $scope.postings = $scope.postings.filter(function(p){
              return p._id != p._id;
            })
          }
        })
      $scope.getAll();
      $scope.reset();
      }

      $scope.reset = function(){
        $scope.formData = ''
      }
}])
