// A node that draws an Element inside a tile
var Element = cc.Node.extend({

    ctor:function (elementName) {
		//
		this._super();
        this._name = elementName;
        this._background = new cc.Sprite(res.Tile_normal_png);
        this._background.setAnchorPoint(0, 0);
		this.addChild(this._background);

        var size = this._background.getContentSize();
        this.setContentSize(size);

        this._name = new cc.LabelTTF(elementName, "Arial", size.width*0.7);
        this._name.setAnchorPoint(0.5, 0.5);
        this._name.setNormalizedPosition(0.5, 0.5);
        this._name.setColor({r:32, g:32, b:32});
        this.addChild(this._name);

        this._number = new cc.LabelTTF("1", "Arial", size.width*0.2);
        this._number.setAnchorPoint(0.5, 0.5);
        this._number.setNormalizedPosition(0.15, 0.75);
        this._number.setColor({r:64, g:64, b:64});
        this.addChild(this._number);

    },

    highlight:function(enabled) {
        if (enabled) {
            this._background.setTexture(res.Tile_highlight_png);
        } else {
            this._background.setTexture(res.Tile_normal_png);
        }
    }
});
