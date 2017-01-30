(function () {

    var module = angular.module("productPract");


    function fetchProducts($http) {
        return $http.get("product.json").then(function (response) {
            return response.data;
        })
    }


    function prodTablecontroller($http) {
        var model = this;
        model.products = [];

        model.$onInit = function () {
            fetchProducts($http).then(function (products) {
                model.products = products;
            })
            //  moin.products = [1,2,3];

        }
    }

    module.component("prodTable", {
        templateUrl: "prodTable.component.html",
        controllerAs: "model",
        controller: ["$http", prodTablecontroller]

    });




}());