var app = angular.module("ClientApp", []);

app.controller("Register_Client", function($scope,$window, $http) {
  $scope.regClient= function(regData){
    $http.post('/client/signup',regData).then(function successCallback(response){

      console.log(response.data.success);

    }, function errorCallback(response) {//needs handling

      console.log(response.data.success);

  })

  }
})


app.controller("Login_Client", function($scope,$window, $http) {
  console.log("hi");
  $scope.regClient= function(regData){
    $http.post('/client/login',regData).then(function successCallback(response){

      $scope.client=response.data.user;
      var c = $scope.client.firstName;
      console.log($scope.client.firstName);
    localStorage.setItem("identifier", Json.stringify(c));
      $window.location.href = "/hell"

    }, function errorCallback(response) {//needs handling

      console.log(response.data.success);


  })

  }
})
