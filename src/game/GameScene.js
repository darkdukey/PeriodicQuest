var GameLayer = cc.Layer.extend({

	ctor:function () {
		//
		this._super();
		
		var gameLayer = ccs.load(res.GameScene_json);
		this.addChild(gameLayer.node)
	}
});

var GameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});
