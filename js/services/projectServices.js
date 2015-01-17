app.factory('Project', function($resource){
	return $resource('http://restservice-projectcafe.rhcloud.com/projects', {}, {
        query: {method: 'GET', isArray: true}
    });
});