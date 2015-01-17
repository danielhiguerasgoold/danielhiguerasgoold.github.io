app.controller('ProjectCtrl', function($scope, $translate, Project) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
    NProgress.start();
    NProgress.set(0.4);
    Project.query(function(data) {
        $scope.projects = data;
        window.setTimeout(NProgress.done(), 3000);
    });
});