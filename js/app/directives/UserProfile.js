function UserProfile() {
	return {
		transclude: {
      name: 'h4',
      position: '?h6',
      bio: '?p'
    },
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name : <span ng-transclude="name"></span></div>',
        '<div>Position: <span ng-transclude="position">Unknown</span></div>',
        '<div>Description: <span ng-transclude="bio">No Description</span></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
