var BattleField = cc.Layer.extend({
	card_pos:[],
	enemy_pos:[],
	cards:[],
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
			enemy.setData(this.data.enemies[i])
			this.enemy_pos[i].addChild(enemy);
		}
		
		//Create player
		for(i = 0; i < 4; i++){
			var player = new Card();
			player.setData(this.data.cards[i]);
			this.card_pos[i].addChild(player);
		}
	}
});