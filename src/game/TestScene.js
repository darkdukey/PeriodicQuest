var TestLayer = cc.Layer.extend({
	
	ctor:function () {
		this._super();
		
		var scene = ccs.load(res.TestScene_json);
		this.addChild(scene.node);
		
		var self = this;
		if ("mouse" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,
				onMouseUp: function(event) {
					var point = event.getLocation();
					var pos = self.convertToNodeSpace(point);

					var p = new cc.ParticleSystem(res.default_particle);
					p.x = pos.x;
					p.y = pos.y;
					self.addChild(p);			
				}
			}
			, this);
		}
	}
});

var TestScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		
		var layer = new TestLayer();
		this.addChild(layer);
	}
});