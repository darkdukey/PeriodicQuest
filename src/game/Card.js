var Card = cc.Node.extend({
	card:null,
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
	sp_attack:null,
	
	ctor:function() {
		this._super();
		
		this.card = ccs.load(res.Card_json);
		this.addChild(this.card.node);
		
		this.txt_name = findChildByName(this.card.node, "name");
		this.txt_level = findChildByName(this.card.node, "level");
		this.bar_hp = findChildByName(this.card.node, "hp");
		this.bkg_normal = findChildByName(this.card.node, "bkg_normal");
		this.bkg_highlight = findChildByName(this.card.node, "bkg_highlight");
		this.origin_y = this.bar_hp.y;
		this.focus_y = this.origin_y + 6;
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
	},
	
	attack:function(target) {
		//Play attack animation
		this.card.node.runAction(this.card.action);
		this.card.action.gotoFrameAndPlay(0, 30, false);
		
//		this.sp_attack = new cc.ParticleSystem(res.default_particle);
//		this.sp_attack.x = 0;
//		this.sp_attack.y = 0;
//		this.sp_attack.setGlobalZOrder(1);
//		this.addChild(this.sp_attack);
		
		var self = this;
		//Play attack effects
		
		//TODO make the particle effects moving in the world coord
		//TODO create particle pool
		if((target !== undefined) && (target !== null)){
			this.sp_attack = new cc.ParticleSystem(res.default_particle);
			this.sp_attack.x = 0;
			this.sp_attack.y = 0;
			this.sp_attack.setGlobalZOrder(1);
			this.addChild(this.sp_attack);
			
			var move = new cc.moveTo(0.5, target.x, target.y);
			
			var cleanup = new cc.CallFunc(function() {
				self.sp_attack.removeFromParent();
			});
			
			var action = new cc.Sequence(move, cleanup);
			this.sp_attack.runAction(action);
		}
		
		//Send attack message
		
	}
});







