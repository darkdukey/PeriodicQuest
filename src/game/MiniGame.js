var MiniGame = cc.Node.extend({

	ctor:function () {

		this._super();

		// set tile size, for future reference
		var tile = new cc.Sprite(res.Tile_normal_png);
		this.tileSize = tile.getContentSize();
		this.tiles = [];
		this.ROWS = 5;
		this.COLS = 5;
		
		if ('mouse' in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,
				onMouseDown: function(event) {
					var pos = event.getLocation();
					var target = event.getCurrentTarget();
//					if (event.getButton() === cc.EventMouse.BUTTON_RIGHT)
//						cc.log("onRightMouseDown at: " + pos.x + " " + pos.y );
//					else if(event.getButton() === cc.EventMouse.BUTTON_LEFT)
//						cc.log("onLeftMouseDown at: " + pos.x + " " + pos.y );
					
					var localPos = target.convertToNodeSpace(pos);
					var tile_x = Math.floor(localPos.x / target.tileSize.width);
					var tile_y = Math.floor(localPos.y / target.tileSize.height);
					var tile_idx = tile_x + target.COLS * tile_y;
					var spr = target.tiles[tile_idx];
					spr.setVisible(!spr.isVisible());
				},
//				onMouseMove: function(event){
//					var pos = event.getLocation(), target = event.getCurrentTarget();
//					cc.log("onMouseMove at: " + pos.x + " " + pos.y );
//				},
//				onMouseUp: function(event){
//					var pos = event.getLocation(), target = event.getCurrentTarget();
//					cc.log("onMouseUp at: " + pos.x + " " + pos.y );
//				}
			}, this);
		} else {
			cc.log("MOUSE Not supported");
		}
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
