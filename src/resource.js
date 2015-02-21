var res = {
    MainScene_json : "res/MainScene.json",
    GameScene_json : "res/GameScene.json",
    TestScene_json : "res/TestScene.json",
    Card_json : "res/Card.json",
    Tile_png : "res/assets/img/tile.png",
    Tile_normal_png : "res/assets/img/tile_normal.png",
    Tile_highlight_png : "res/assets/img/tile_highlight.png",
    sp_attack : "res/assets/particle/attack.plist",
    default_particle : "res/Default/defaultParticle.plist"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
