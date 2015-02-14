var Card = cc.Node.extend({
	txt_name:null,
	txt_level:null,
	bar_hp:null,
	hp_max:1,
	hp_curr:1,
	
	ctor:function() {
		this._super();
		
		var ui = ccs.load(res.Card_json);
		this.addChild(ui.node);
		
		txt_name = findChildByName(ui.node, "name");
		txt_level = findChildByName(ui.node, "level");
		bar_hp = findChildByName(ui.node, "hp");
	},
	
	setData:function(data) {
		txt_name.string = data.name;
		txt_level.string = data.level;
		hp_max = data.hp_max;
		hp_curr = data.hp_curr;
		bar_hp.percent = hp_curr;
	}
});