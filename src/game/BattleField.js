var BattleField = cc.Layer.extend({
	card_pos:[],
	enemy_pos:[],
	cards:[],
	
	ctor:function(node){
		this._super();
	},
	
	setNode: function(node){
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
			this.enemy_pos[i].addChild(enemy);
		}
		
		//Create player
		for(i = 0; i < 4; i++){
			var player = new Card();
			this.card_pos[i].addChild(player);
		}
	}
});