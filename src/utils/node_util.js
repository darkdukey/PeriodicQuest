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