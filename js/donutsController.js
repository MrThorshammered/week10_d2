angular.module('donutApp', [])
  .controller('DonutsController', DonutsController);

DonutsController.$inject = ['$http'];

function DonutsController($http){

	var self = this;

  self.all = [];

  getDonuts();

  function getDonuts(){
    $http
      .get('http://api.doughnuts.ga/doughnuts')
      .then(function(response){     
        self.all = response.data
          	console.log(self.all)
      })
  }

  function addDonut(){
    $http
      .post('http://api.doughnuts.ga/doughnuts', self.newDonut)
      .then(function(response){
      	console.log('addDonut response', response)
        self.all.push(response.data)
      })
      self.newDonut = {};
  }

  function deleteDonut(id){

    $http
      .delete('http://api.doughnuts.ga/doughnuts'+ id)
      .then(function(response){
        self.remove(id)
      })
  }


  function editDonut(id){

    $http
      .get('http://api.doughnuts.ga/doughnuts'+ id)
      .then(function(response){
        console.log(response)
        editDonut();
      })
  }


  function updateDonut(id){

    $http
      .post('http://api.doughnuts.ga/doughnuts'+ id, self.newDonut)
      .then(function(response){
          self.all.push(response.data)
        })
        self.newDonut = {};
  }

  // self.deleteDonut = deleteDonut;
  self.addDonut = addDonut;
  self.newDonut = {};

  


}