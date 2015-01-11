"format es6";

class MainController {
	constructor () {
		function doge (segment) {
			return `http://doge2048.com/img/212/doge-${segment}-212.gif`;
		}
		this.avatars = [
			{ url: doge('wink')        },
			{ url: doge('shake-space') },
			{ url: doge('peepers')     },
			{ url: doge('hat')         },
			{ url: doge('gradient')    },
			{ url: doge('sunglasses')  },
			{ url: doge('shake')       },
			{ url: doge('derp')        },
			{ url: doge('prizza')      },
			{ url: doge('fat')         },
			{ url: doge('rainbow')     }
		];
		this.selectAvatar(this.avatars[0]);
	}
	selectAvatar(avatar) {
		this.selectedAvatar = avatar;
	}
}
MainController.__name__ = 'MainController';

export default MainController;
