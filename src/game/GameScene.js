var GameLayer = cc.Layer.extend({

	ctor:function () {
		//
		this._super();

		var bkg = new cc.LayerColor(cc.color.WHITE);
		this.addChild(bkg);

		var gameLayer = ccs.load(res.GameScene_json);
		this.addChild(gameLayer.node);

		var board = findChildByName(gameLayer.node, "board");
		var minigame = new MiniGame();
		board.addChild(minigame);
		
		//Init Battle field
		var field = findChildByName(gameLayer.node, "battle_field");
		var battle = new BattleField();
		battle.setNode(gameLayer.node);
		field.addChild(battle);
	}
});

var GameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});
