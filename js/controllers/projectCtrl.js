app.controller('ProjectCtrl', function($scope, $translate, $routeParams, Project) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $scope.getLanguage = function() {
        return $translate.use();
    }
    
    NProgress.start();
    NProgress.set(0.4);

    


    if($routeParams.id != null) {
        $scope.getProject = Project.getProject.query({id:$routeParams.id}, function(data){
            console.log(JSON.stringify(data[0]));
            $scope.project = data[0];
            
        });   
    } else {
        $scope.getProjects = Project.getProjects.query(function(data) {
            $scope.projects = data;
            
        });
    }
    NProgress.done();
});