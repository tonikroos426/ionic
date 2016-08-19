angular.module('welcome.controller',[])
.controller('welcomeCtrl',function($scope,$ionicPlatform,$localstorage,$ionicHistory){
	$ionicPlatform.ready(function(){
		try{ 

			$ionicHistory.nextViewOptions({
			disableBack: true
			});
			$ionicHistory.clearHistory();

			$localstorage.set('language', 'EN');
		
		}catch(err){
			console.log(err.message);
		}
	});
});