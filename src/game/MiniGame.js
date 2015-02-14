var MiniGame = cc.Node.extend({

	ctor:function () {

		this._super();

		// constants
		var tile = new cc.Sprite(res.Tile_normal_png);
		this.tileSize = tile.getContentSize();
		this.ROWS = 5;
		this.COLS = 5;

		// variables
		this.tiles = [];
		this.currentTileIdx = -1;
		this.previousTileIdx = -1;
		this.currentCombination = [];
		
		cc.eventManager.addListener({
			event: cc.EventListener.MOUSE,

			onMouseMove: function(event) {
				if (event.getButton() === cc.EventMouse.BUTTON_LEFT) {
					
					var pos = event.getLocation();
					var target = event.getCurrentTarget();
						
					var localPos = target.convertToNodeSpace(pos);
					var tile_x = Math.floor(localPos.x / target.tileSize.width);
					var tile_y = Math.floor(localPos.y / target.tileSize.height);
					var tile_idx = tile_x + target.COLS * tile_y;
					target.tileHighlighted(tile_idx);
				}
			},
			onMouseUp: function(event) {
				var target = event.getCurrentTarget();
				target.endWord();
			},
		}, this);
	},
	
	tileHighlighted:function(tile_idx) {
		var idx = this.currentCombination.indexOf(tile_idx);
		if (idx === -1) {
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
          tile.setPosition(x * this.tileSize.width, y * this.tileSize.height);
          
          this.tiles.push(tile);
        }
      }
  }
});
