app.factory('notificationSvc', ['toastr', function(toastr){
  return {
    success: function(text){
      toastr.success(text, 'success');
    },
    error: function(text){
      toastr.error(text, 'error');
    }
  };
}]);