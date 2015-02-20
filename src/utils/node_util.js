function findChildByName(node, name) {
	var result = node.getChildByName(name);
	if(!result){
		//
		var children = node.getChildren();
		for (var i = 0; i < children.length; i++) {
			result = findChildByName(children[i], name);
			
			if(result)
				return result;
		}
	}
	
	return result;
}

function hitTest(node, point) {
	var pos = node.convertToNodeSpace(point);
	var s = node.getContentSize();
	var rect = cc.rect(0,0,s.width, s.height);
	return cc.rectContainsPoint(rect, pos);
}