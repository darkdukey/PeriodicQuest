
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var bkg = new cc.LayerColor(cc.color.WHITE, size.width, size.height);
        this.addChild(bkg);

        var ui = ccs.load(res.MainScene_json);
        this.addChild(ui.node);

        var btn = findChildByName(ui.node, "btn_start");
        if (btn) {
        	btn.addClickEventListener(function(){
                var scene = new GameScene();
//        		var scene = new TestScene();
                cc.director.runScene(new cc.TransitionFade(1, scene));
        	});
		}

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        // var layer = new MiniGame();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
