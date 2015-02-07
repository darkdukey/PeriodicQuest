var GameLayer = cc.Layer.extend({
	
	ctor:function () {
		//
	}
});

var GameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});