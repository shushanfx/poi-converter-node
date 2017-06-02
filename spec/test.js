var Exec = require( "../index.js")
describe("test", function(){
	it("Error", function(done){
		Exec.to("./spec/as.doc", "./spec/as.doc.pdf", function(a, b, c){
			console.dir(c);
			console.info(b);
			expect(c.success).toBe(false);
			done();
		});
	});

	it("a.doc 2 a.doc.pdf", function(done){
		Exec.to("./spec/a.doc", "./spec/a.doc.pdf", function(a, b, c){
			console.dir(c);
			console.info(a, b);
			expect(c.success).toBe(false);
			done();
		});
	});

	it("a.docx 2 a.docx.pdf", function(done){
		Exec.to("./spec/a.docx", "./spec/a.docx.pdf", function(a, b, c){
			console.dir(c);
			expect(c.success).toBe(false);
			done();
		});
	});
	it("a.ppt 2 a.ppt.pdf", function(done){
		Exec.to("./spec/a.ppt", "./spec/a.ppt.pdf", function(a, b, c){
			console.dir(c);
			expect(c.success).toBe(false);
			done();
		});
	});
	it("a.pptx 2 a.pptx.pdf", function(done){
		Exec.to("./spec/a.pptx", "./spec/a.pptx.pdf", function(a, b, c){
			console.dir(c);
			expect(c.success).toBe(false);
			done();
		});
	});

})