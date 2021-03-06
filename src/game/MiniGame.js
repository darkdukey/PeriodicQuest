var MiniGame = cc.Node.extend({

	ctor:function () {

		this._super();

		// constants
		var tile = new Element(0);
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

	endWord: function() {
		for (var i=0; i<this.ROWS*this.COLS; i++) {
			this.tiles[i].highlight(false);
		}

		if (this.currentCombination.length>0) {
			var string = [];

			for (var i = 0; i < this.currentCombination.length; i++) {
				var element = this.tiles[this.currentCombination[i]];
				string.push(element.properties.symbol);
			}
			this.currentCombination = [];

			cc.log("Selected compounds: " + string);
			// validate_string(string)
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

		// touching a new tile
		if (idx === -1) {
			if (this.currentCombination.length===0 || this.areNeighbors(tile_idx, this.currentCombination[this.currentCombination.length - 1])) {
				var spr = this.tiles[tile_idx];
				if (this.isInDistanceToCenter(position, spr)) {
					spr.highlight(true);
					this.currentCombination.push(tile_idx);
				}
			}
		}
		else
		{
			// touching existing tile
			// if it is the previous one, then remove the current one
			if (this.currentCombination.length>1 && tile_idx===this.currentCombination[this.currentCombination.length-2]) {

				var spr = this.tiles[tile_idx];
				if (this.isInDistanceToCenter(position, spr)) {

					// remove last element from array
					var lastIdx = this.currentCombination.pop();
					this.tiles[lastIdx].highlight(false);
				}
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

	createBoard:function() {
		for (var y=0; y<this.ROWS; y++) {
			for (var x=0; x<this.COLS; x++) {
				var tile = new Element(Math.floor(Math.random() * Object.keys(g_ElementsData).length));

				this.addChild(tile);
				tile.setAnchorPoint(0,0);
				tile.setPosition(x * this.TILE_SIZE.width, y * this.TILE_SIZE.height);

				this.tiles.push(tile);
			}
		}
	}
});
