var Card = cc.Node.extend({
	bkg_normal:null,
	bkg_highlight:null,
	txt_name:null,
	txt_level:null,
	bar_hp:null,
	hp_max:1,
	hp_curr:1,
	focus_y:1,
	origin_y:1,
	id:0,
	
	ctor:function() {
		this._super();
		
		var ui = ccs.load(res.Card_json);
		this.addChild(ui.node);
		
		
		this.txt_name = findChildByName(ui.node, "name");
		this.txt_level = findChildByName(ui.node, "level");
		this.bar_hp = findChildByName(ui.node, "hp");
		this.bkg_normal = findChildByName(ui.node, "bkg_normal");
		this.bkg_highlight = findChildByName(ui.node, "bkg_highlight");
		this.origin_y = this.bar_hp.y;
		this.focus_y = this.origin_y + 5;
	},
	
	setData:function(data) {
		this.txt_name.string = data.name;
		this.txt_level.string = data.level;
		this.hp_max = data.hp_max;
		this.hp_curr = data.hp_curr;
		this.bar_hp.percent = this.hp_curr;
	},
	
	setFocus:function(isFocus) {
		if (isFocus) {
			this.bkg_normal.visible = false;
			this.bkg_highlight.visible = true;
			this.bar_hp.y = this.focus_y;
		}else{
			this.bkg_highlight.visible = false;
			this.bkg_normal.visible = true;
			this.bar_hp.y = this.origin_y;
		}
	}
});