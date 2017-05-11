(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.monkey_drawing0005 = function() {
	this.initialize(img.monkey_drawing0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1263,984);


(lib.up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-108.15,-38.85,216.3,77.7,15.8);
	this.shape.setTransform(94.4,38.9,0.872,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.7,77.7);


(lib.hover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AubGFQidAAAAieIAAnNQAAidCdAAIc3AAQCdAAAACdIAAHNQAACeidAAg");
	this.shape.setTransform(94.4,38.9,0.872,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AslHDQiJAAgBi3IAAoXQABi3CJAAIZLAAQCKAAAAC3IAAIXQAAC3iKAAg");
	this.shape_1.setTransform(94.4,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AslIBQiJAAgBjQIAAphQABjQCJAAIZLAAQCKAAAADQIAAJhQAADQiKAAg");
	this.shape_2.setTransform(94.4,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AslI/QiJAAgBjpIAAqsQABjpCJAAIZLAAQCKAAAADpIAAKsQAADpiKAAg");
	this.shape_3.setTransform(94.4,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AslJ+QiJAAgBkDIAAr2QABkCCJAAIZLAAQCKAAAAECIAAL2QAAEDiKAAg");
	this.shape_4.setTransform(94.4,57.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AslK8QiJAAgBkcIAAs/QABkcCJAAIZLAAQCKAAAAEcIAAM/QAAEciKAAg");
	this.shape_5.setTransform(94.4,62.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AslL7QiJgBgBk1IAAuJQABk2CJAAIZLAAQCKAAAAE2IAAOJQAAE1iKABg");
	this.shape_6.setTransform(94.4,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AslM5QiJAAgBlPIAAvTQABlPCJAAIZLAAQCKAAAAFPIAAPTQAAFPiKAAg");
	this.shape_7.setTransform(94.4,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AslN3QiJAAgBlnIAAweQABloCJAAIZLAAQCKAAAAFoIAAQeQAAFniKAAg");
	this.shape_8.setTransform(94.4,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleY:1,y:38.9}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{scaleY:2.444,y:81.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.7,77.7);


(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Hi!", "12px 'HP Simplified'", "#594A41");
	this.text.lineHeight = 15;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(-284.8,-130.8,14.091,14.091);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AaagnQAAGIjoE/QhGFhE1DsQDBCUEsBOQioAtiugLQisgJiUg+QiahAhnhtQhuh0gniYQo4GzsjAAQsjAAo5mzQo4myAApmQAApmI4mzQI5myMjAAQMjAAI4GyQI4GzAAJmg");
	this.shape.setTransform(-166,-28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ac4XxQisgJiUg+QiahAhnhtQhuh0gniYQo4GzsjAAQsjAAo5mzQo4myAApmQAApmI4mzQI5myMjAAQMjAAI4GyQI4GzAAJmQAAGIjoE/QhGFhE1DsQDBCUEsBOQiIAkiMAAQghAAghgCg");
	this.shape_1.setTransform(-166,-28.5);

	this.instance = new lib.monkey_drawing0005();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.332,0.332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.9,-181.8,805.8,508.9);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.hover();
	this.instance.parent = this;
	this.instance.setTransform(94.4,81.3,1,1,0,0,0,94.4,81.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_1 = new lib.up("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.4,38.9,1,1,0,0,0,94.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.7,77.7);


// stage content:
(lib.MaiVo_Final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(775.2,46);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn1(), 3);

	this.instance_1 = new lib.btn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(535.7,46);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn1(), 3);

	this.instance_2 = new lib.btn1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(301.2,46);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btn1(), 3);

	this.instance_3 = new lib.btn1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.2,46);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btn1(), 3);

	this.Home = new lib.home();
	this.Home.parent = this;
	this.Home.setTransform(744,604.6,1,1,0,0,0,210,163.6);
	new cjs.ButtonHelper(this.Home, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594A41").s().p("EhP5A76MAAAh3zMCfzAAAMAAAB3zg");
	this.shape.setTransform(511.4,383.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.Home},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:775.2}}]}).to({state:[{t:this.shape},{t:this.Home},{t:this.instance,p:{x:64.2}}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1022.8,768.1);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/monkey_drawing0005.png", id:"monkey_drawing0005"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;