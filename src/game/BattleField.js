var BattleField = cc.Layer.extend({
	selected_enemy:null,
	node:null,
	card_pos:[],
	enemy_pos:[],
	cards:[],
	enemies:[],
	data:{
		"cards":
		[{
			"name":"H",
			"level":1,
			"attack":30,
			"hp_max":100,
			"hp_curr":100
		},{
			"name":"C",
			"level":1,
			"attack":10,
			"hp_max":300,
			"hp_curr":300
		},{
			"name":"O",
			"level":1,
			"attack":20,
			"hp_max":200,
			"hp_curr":200			
		},{
			"name":"N",
			"level":1,
			"attack":10,
			"hp_max":400,
			"hp_curr":400
		}],
		"enemies":
			[{
				"name":"H",
				"level":1,
				"attack":30,
			"hp_max":100,
			"hp_curr":100
		},{
			"name":"C",
			"level":1,
			"attack":10,
			"hp_max":300,
			"hp_curr":300
		},{
			"name":"O",
			"level":1,
			"attack":20,
			"hp_max":200,
			"hp_curr":200			
		},{
			"name":"N",
			"level":1,
			"attack":10,
			"hp_max":400,
			"hp_curr":400
		}]
	},
	
	
	ctor:function(node){
		this._super();
		self = this;
		
		if ("mouse" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,
				onMouseUp: function(event) {
					var point = event.getLocation();
					if(hitTest(self.node, point)) {
						
						for (var i=0; i<self.enemies.length; i++) {
							var enemy = self.enemies[i];
							if(hitTest(enemy.bkg_normal, point)){
								self.setFocus(enemy);
								break;
							}
						}
					}
				}
			}
			, this);
		}

		if ("touches" in cc.sys.capabilities) {
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				onTouchBegan: function (touch, event) {
					cc.log("onTouchBegin");
					var point = touch.getLocation();
					if (hitTest(self.node, point)) {
						return true;
					}
					return false;
				},
				onTouchEnded: function (touch, event) {
					cc.log("onTouchEnded");
					var point = touch.getLocation();
					for (var i=0; i<self.enemies.length; i++) {
						var enemy = self.enemies[i];
						if(hitTest(enemy.bkg_normal, point)){
							self.setFocus(enemy);
							break;
						}
					}
				}
			}
			, this);
		}
	},
	
	setNode: function(node){
		this.node = node;
		//Load battle field data
		for(i = 0; i < 4; i++){
			var pos = findChildByName(node, "card_" + (i+1));
			this.card_pos.push(pos);

			var e_pos = findChildByName(node, "e_card_" + (i+1));
			this.enemy_pos.push(e_pos);
		}

		//Create enemy
		for(i = 0; i < 4; i++){
			var enemy = new Card();
			enemy.setData(this.data.enemies[i])
			this.enemy_pos[i].addChild(enemy);
			
			this.enemies.push(enemy);
			enemy.id = i;
		}
		
		//Create player
		for(i = 0; i < 4; i++){
			var card = new Card();
			card.setData(this.data.cards[i]);
			this.card_pos[i].addChild(card);
			
			this.cards.push(card);
		}
	},
	
	setFocus: function(enemy){
		for (var i = 0; i < this.enemies.length; i++) {
			var en = this.enemies[i];
			en.setFocus(false);
		}
		
		enemy.setFocus(true);
		
		this.selected_enemy = enemy;
	}
});