angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

angular.module('app').config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/layouts", {
		templateUrl : "layouts.htm",
		controller : "LayoutsController"
	})
	.when("/components", {
		templateUrl : "components.htm",
		controller : "ComponentsController"
	})
	.when("/photobooth", {
		templateUrl : "photobooth.htm",
		controller : "PhotoBoothController"
	})
	.otherwise({
		templateUrl: 'main.htm'
	});
}]);

angular.module("app").controller('indexController', ['$scope', function($scope){
	$scope.pageList = [];
	$scope.pageList.push({label: 'Layouts', pageUrl: '#/layouts'});
	$scope.pageList.push({label: 'Components', pageUrl: '#/components'});
	$scope.pageList.push({label: 'Photo Booth', pageUrl: '#/photobooth'});

	$scope.status = [{
		isopen: false
	}];
}]);

angular.module("app").directive('prettyprint', function() {
	return {
		restrict: 'AE',
		link: function postLink(scope, element, attrs) {
			element.html(PR.prettyPrintOne(replaceText(element.html()),'',true));
		}
	};
});

function replaceText(str) {
	var str1 = String(str);
	return str1.replace(/\n/g,"<br/>");
}