var  returnVersion   = function(fs) {
	var json = JSON.parse(fs);	
 	return json.version;
}
module.exports = returnVersion;