app.factory('postsSvc', ['$http', function($http){
  return {
    getAll: function(){
      return $http.get('/api/posts');
    },
    getPost: function(postId){
      return $http.get('/api/posts/' + postId);
    },
    createPost: function(post){
      return $http.post('/api/posts', post);
    },
    updatePost: function(postId, post){
      return $http.put('/api/posts/' + postId, post)
    },
    deletePost: function(postId){
      return $http.delete('/api/posts/' + postId);
    }
  };
}]);