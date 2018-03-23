//this should be in .env
var locale = 'jp'

function translator(obj, key) {
    //convert obj to array 
    var args = obj.split('.');
    //get the set of objects based on the passed obj
    var object = require(__dirname + '/storage/lang/' + locale + '/' + args[0]);
    //get the path as an array for checking
    var path = args.slice(1);

    for (var i = 0; i < path.length; i++) {
        if (object[path[i]] === undefined) return;
        object = object[path[i]];
    }
    //get the search key
    if (key) {
        var numberOfKeys = Object.keys(key).length;
        for (var ctr = 0; ctr < numberOfKeys; ctr++) {
            var searchKey = Object.keys(key)[ctr].toString()
            if (ctr == 0) {
                var newcurr = object.replace(':' + searchKey, key[searchKey]);
            }
            newcurr = newcurr.replace(':' + searchKey, key[searchKey]);
        }
        return newcurr;
    }
    return object  
}

module.exports = translator;
