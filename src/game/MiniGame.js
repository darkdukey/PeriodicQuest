var MiniGame = cc.Node.extend({

	ctor:function () {

		this._super();

		// constants
		var tile = new cc.Sprite(res.Tile_normal_png);
		this.TILE_SIZE = tile.getContentSize();
		this.ROWS = 5;
		this.COLS = 5;

		// variables
		this.tiles = [];
		this.currentTileIdx = -1;
		this.previousTileIdx = -1;
		this.currentCombination = [];

		this.createBoard();


		if ("mouse" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,

				onMouseDown: function(event) {
					var pos = event.getLocation();
					var target = event.getCurrentTarget();
					var localPos = target.convertToNodeSpace(pos);
					target.selectTileAtPosition(localPos);
				},

				onMouseMove: function(event) {
					if (event.getButton() === cc.EventMouse.BUTTON_LEFT) {
						this.onMouseDown(event);
					}
				},
				onMouseUp: function(event) {
					var target = event.getCurrentTarget();
					target.endWord();
				},
			}, this);
		}

		// No "else" here. some devices (modern notebooks) support both touches and mouse events
		// and if so, it is good to support both input systems
		if ("touches" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ALL_AT_ONCE,

				onTouchesBegan: function(touches, event) {
					this.onTouchesMoved(touches, event);
				},
				onTouchesMoved: function(touches, event) {
					var touch = touches[0];
					var pos = touch.getLocation();
					var target = event.getCurrentTarget();
					var localPos = target.convertToNodeSpace(pos);
					target.selectTileAtPosition(localPos);
				},
				onTouchesEnded: function(touches, event) {
					this.onTouchesCancelled(touches, event);
				},
				onTouchesCancelled: function(touches, event) {
					var target = event.getCurrentTarget();
					target.endWord();
				},

			}, this);
		}
	},

	selectTileAtPosition:function(position) {
		if (position.x<0 || position.x>this.TILE_SIZE.width*this.COLS) {
			return;
		}
		if (position.y<0 || position.y>this.TILE_SIZE.height*this.ROWS) {
			return;
		}

		var tile_x = Math.floor(position.x / this.TILE_SIZE.width);
		var tile_y = Math.floor(position.y / this.TILE_SIZE.height);
		var tile_idx = tile_x + this.COLS * tile_y;

		var idx = this.currentCombination.indexOf(tile_idx);
		if (idx === -1 && (this.currentCombination.length===0 || this.areNeighbors(tile_idx, this.currentCombination[this.currentCombination.length - 1]))) {
			var spr = this.tiles[tile_idx];
			if (this.isInDistanceToCenter(position, spr)) {
				spr.setTexture(res.Tile_highlight_png);
				this.currentCombination.push(tile_idx);
			}
		}
	},

	areNeighbors: function(idx1, idx2) {
		var x1 = idx1 % this.COLS;
		var y1 = Math.floor(idx1 / this.COLS);
		var x2 = idx2 % this.COLS;
		var y2 = Math.floor(idx2 / this.COLS);

		return (Math.abs(x1-x2)<=1 && Math.abs(y1-y2)<=1);
	},

	isInDistanceToCenter: function(position, spr) {
		var sprPos = cc.pAdd(spr.getPosition(), {x:this.TILE_SIZE.width/2, y:this.TILE_SIZE.height/2});
		var distance = cc.pDistance(sprPos, position);
		return (distance < (this.TILE_SIZE.height/2)*0.95);
	},

	endWord: function() {
		for (var i=0; i<this.ROWS*this.COLS; i++)
		this.tiles[i].setTexture(res.Tile_normal_png);
		this.currentCombination = [];
	},

	createBoard:function() {
		for (var y=0; y<this.ROWS; y++) {
			for (var x=0; x<this.COLS; x++) {
				var tile = new cc.Sprite(res.Tile_normal_png);

				this.addChild(tile);
				tile.setAnchorPoint(0,0);
				tile.setPosition(x * this.TILE_SIZE.width, y * this.TILE_SIZE.height);

				this.tiles.push(tile);
			}
		}
	}
});
