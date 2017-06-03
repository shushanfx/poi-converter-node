# poi-converter-node
A node package to use poi-converter, which is a tool to convert office file to another format.     
It start a child process to execute a java command, so make sure you have setup the `java` enviroment.

## How to use
Use npm install comand `npm install poi-converter-node [--save]`
```javascript
var poi = require("poi-converter-node");

poi.to("a.doc", "a.doc.pdf", function(err, out, result){
	if(result.success){
		// handle success
	}
	else{
		// handle failure
	}
});
```

## API
**to(srcPath, dstPath, callback)**    
convert a office file to another format.    
srcPath : the path of office file.   
dstPath : the dest path of file.    
callback(err, out, result): a callback function
* err, an Error instance, only the command excute with error, an instance will return, otherwise return null or undefined.
* out, the output of console.
* result, an object to indicate the result.
	* success, whether the operation is success, return false if fail.
	* cost, the time to execute converting operation, passed by java process.
	* src, the absolute path of source file.
	* dst, the absolute path of dest file.

## Test
Use `jasmine` to test.
```javascript
jasmine
```

## Refer
This project is based on `poi-converter`,a java program, refer to [poi-converter](https://github.com/shushanfx/poi-converter.git) for more detail.


