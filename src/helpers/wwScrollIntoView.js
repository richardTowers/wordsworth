"format es6";

function wwScrollIntoView ($timeout) {
	function link (scope, element, attrs) {
		if (angular.isDefined(attrs.initially)) {
			$timeout(() => element[0].scrollIntoView(), 300);
		}
		scope.$on(attrs.on, function () {
			element[0].scrollIntoView();
		});
	}
	return {
		link: link,
		template: '<div class="wwScrollIntoView"></div>'
	};
}
wwScrollIntoView.__name__ = 'wwScrollIntoView';

export default wwScrollIntoView;