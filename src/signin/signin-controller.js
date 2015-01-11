"format es6";

class SignInController {
	constructor () {
		function doge (segment) {
			return `http://doge2048.com/img/212/doge-${segment}-212.gif`;
		}
		this.avatars = [
			{ url: doge('wink')        },
			{ url: doge('shake-space') },
			{ url: doge('peepers')     },
			{ url: doge('prizza')      },
			{ url: doge('hat')         },
			{ url: doge('gradient')    },
			{ url: doge('fat')         },
			{ url: doge('sunglasses')  },
			{ url: doge('rainbow')     },
			{ url: doge('derp')        },
			{ url: doge('shake')       }
		];
		this.selectAvatar(this.avatars[0]);
	}
	selectAvatar(avatar) {
		this.selectedAvatar = avatar;
	}
}
SignInController.__name__ = 'SignInController';

export default SignInController;
