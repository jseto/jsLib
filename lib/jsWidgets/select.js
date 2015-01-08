'use strict';

/**
*  BootstrapSelect Directive
*
* Description
*/

angular.module('jsWidgets.select', [
])

.directive('jswSelect', function(){
	return {
		scope: {
			placeholder: '@',
			ngModel: '=ngModel',
			label: '@',
			options: '@',
			extClass: '@class'
		},
		require: 'ngModel',
		restrict: 'C', 
		
		controller: function( $scope ){
			$scope.click = function( option ){
				$scope.ngModel = option;
			}
		},

		template: function( element, attrs ){
			return '' +
			'	<div class="form-group">				'+
			'	<label ng-if="label">{{label}}</label>	'+
			'	<div class="input-group" ng-class="extClass">				'+
			'		<div class="input-group-btn">		'+
			'			<button type="button" 			'+
			'				class="btn btn-default 		'+
			'				dropdown-toggle" 			'+
			'				data-toggle="dropdown"		'+
			'				>							'+
			'				<span class="caret"></span>	'+
			'			</button>						'+
			'			<ul class="dropdown-menu" role="menu">		'+
			'				<li ng-repeat="option in ' + attrs.options + '">'+
			'					<a ng-click="click(option)">{{option}}</a>	'+
			'				</li>						'+
			'			</ul>							'+
			'		</div>								'+
			'		<input class="form-control"			'+
			'			type="text" 					'+
			'			placeholder="{{placeholder}}" 	'+
			'			ng-model="ngModel"				'+
			'		>									'+
			'	</div>'
		},

		replace: true,
	};
});