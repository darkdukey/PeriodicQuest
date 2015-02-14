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
		if ("touch" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ALL_AT_ONCE,

				onTouchesBegan: function(touches, event) {
					this.onTouchesMoved(touches, event);
				},
				onTouchesMoved: function(touches, event) {
					var event = touches[0];
					var pos = event.getLocation();
					var target = event.getCurrentTarget();
					var localPos = target.convertToNodeSpace(pos);
					target.selectTileAtPosition(localPos);
				},
				onTouchesEnded: function(touches, event) {
					this.onTouchesCacelled(touches, event);
				},
				onTouchesCancelled: function(touches, event) {
					var event = touches[0];
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
		this.tileHighlighted(tile_idx);
	},

	tileHighlighted:function(tile_idx) {
		var idx = this.currentCombination.indexOf(tile_idx);
		if (idx === -1 && tile_idx>=0 && tile_idx<this.ROWS*this.COLS) {
			var spr = this.tiles[tile_idx];
			spr.setTexture(res.Tile_highlight_png);
			this.currentCombination.push(tile_idx);
		}
	},
	endWord: function() {
		for (var i=0; i<this.ROWS*this.COLS; i++)
			this.tiles[i].setTexture(res.Tile_normal_png);
		this.currentCombination = [];
	},

  onEnter:function() {
      this._super();
      this.createBoard();

      var label = new cc.LabelTTF("hello", "Arial", 48);
      this.addChild(label);
      var size = cc.director.getWinSize();
      label.setPosition(size.width/2, size.height/2);
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
