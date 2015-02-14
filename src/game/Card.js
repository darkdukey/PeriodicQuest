var Card = cc.Node.extend({
	ctor:function() {
		this._super();
		
		var ui = ccs.load(res.Card_json);
		this.addChild(ui.node);
	}
});