(function () {

    var module = angular.module("productPract", []);


    function fetchProducts($http) {
        return $http.get("product.json").then(function (response) {
            return response.data;
        })
    }


    function prodListcontroller($http) {
        var moin = this;
        moin.products = [];
        moin.selectedArr = [];
        moin.model =[];

        moin.$onInit = function () {
            fetchProducts($http).then(function (products) {
                moin.products = products;
                for (i = 0; i < moin.products; i++) {
                    moin.model[i] = false;
                }
                
            })
          //  moin.products = [1,2,3];

        }
        moin.select = function (val) {
            moin.selectedArr.push(val);
            //console.log(moin.selectedArr);
        }

        moin.deselect = function (val) {
            var i = moin.selectedArr.indexOf(val);
            if (i > -1) {
                moin.selectedArr.splice(i, 1);
                //console.log(moin.selectedArr);
            }
           
        }

        moin.selectAll = function () {
            for ( var i = 0; i < moin.products.length; i++) {
                if(!moin.model[i]){
                    moin.model[i] = true;
                moin.select(moin.products[i].productName);
            }
            }
            //console.log(moin.model);
        }

        moin.deselectAll = function () {
            for (var i = 0; i < moin.products.length; i++) {
                if (moin.model[i]) {
                    moin.model[i] = false;
                    moin.deselect(moin.products[i].productName);
                }
            }

        }

        moin.Itemclicked = function (val,index) {
           // console.log(val +" "+index);
            moin.model[index] = !moin.model[index];
            //console.log(moin.model);
            if (moin.model[index] ) {
                moin.select(val);
            } else {
                moin.deselect(val);
            }
        }

        
       

        }

    module.component("prodList", {
       
        templateUrl: "prodList.component.html",
        controllerAs: "moin",
        controller: ["$http", prodListcontroller]
    });


}());