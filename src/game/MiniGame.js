var MiniGame = cc.Node.extend({

  onEnter:function() {
      this._super();
      this.createBoard();

      var label = new cc.LabelTTF("hello", "Arial", 48);
      this.addChild(label);
      var size = cc.director.getWinSize();
      label.setPosition(size.width/2, size.height/2);
  },

  createBoard:function() {
      for (var y=0; y<5; y++) {
        for (var x=0; x<5; x++) {
          var tile = new cc.Sprite(res.Tile_png);
          var tileWidth = tile.getContentSize().width;
          var tileHeight = tile.getContentSize().height;

          this.addChild(tile);
          tile.setPosition(x * tileWidth, y * tileHeight);
        }
      }
  }
});
