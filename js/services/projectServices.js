app.factory('Project', function($resource){
	return {
		getProjects: $resource('http://restservice-projectcafe.rhcloud.com/projects'),

	    getProject: $resource('http://restservice-projectcafe.rhcloud.com/projects/:id', {id:'@id'})
	}
});