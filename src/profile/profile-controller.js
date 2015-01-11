"format es6";

class ProfileController {
	constructor (UserService, $location) {
		function doge (segment) {
			return `http://doge2048.com/img/212/doge-${segment}-212.gif`;
		}
		var user = UserService.getCurrentUser();

		this.UserService = UserService;
		this.$location = $location;

		this.avatars = [
			doge('wink'),
			doge('shake-space'),
			doge('peepers'),
			doge('prizza'),
			doge('hat'),
			doge('gradient'),
			doge('fat'),
			doge('sunglasses'),
			doge('rainbow'),
			doge('derp'),
			doge('shake')
		];
		
		this.nickname = user ? user.nickname : '';
		this.selectedAvatar = user ? user.avatar : this.avatars[0];
	}
	selectAvatar(avatar) {
		this.selectedAvatar = avatar;
	}
	signin() {
		this.UserService.createUser({
			nickname: this.nickname,
			avatar: this.selectedAvatar
		});
		this.$location.path('/rooms');
	}

}
ProfileController.__name__ = 'ProfileController';

export default ProfileController;
