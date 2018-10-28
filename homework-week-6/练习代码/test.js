//第四章
//4.2  执行环境及作用域
var color = "blue";

function changeColor(){
	if(color === "blue"){
		color = "red";
	} else{
		color = "black";
	}
}

changeColor();
alert("Color is now "+color);

// //-------------------------
// var color = "blue";

// function changeColor(){
// 	var anotherColor = "red";

// 	function swapColors(){
// 		var tempColor = anotherColor;
// 		anotherColor = color;
// 		color = tempColor;
// 	}
// 	swapColors();
// }
// changeColor();

//4.2.1  延长作用域链


// function buildUrl(){
// 	var qs = "?debug=true"

// 	with(location){
// 		var url = href + qs;
// 	}
// 	return url;
// }

//5.2.5  重排序方法


// var values = [1,2,3,4,5];
// values.sort();
// alert(values);

// //6.3.1  原型链
// function SuperType(){
// 	this.property = true;
// }
// SuperType.prototype.getSuperValue = function(){
// 	return this.property;
// };
// function SubType(){
// 	this.subproperty = false;
// }

// SubType.prototype = new SuperType();

// SuperType.prototype.getSuperValue = function(){
// 	return this.subproperty;
// };

// var instance = new SubType();
// alert(instance.getSuperValue());