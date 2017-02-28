var jsCommon = {
	script:{
		async:"表示应该下载脚本，但不妨碍页面其他操作，比如下载其他资源或等待加载其他脚本，只对外部脚本有效",
		charset:"通过src属性指定的代码字符集，大部分浏览器忽视",
		defer:"表示脚本可以延迟到文档完全被解析和显示后再执行，只对外部脚本文件有效",
		src:"表示要执行的外部代码文件",
		type:"language替代品，表示编写代码脚本语言的内容类型",
		js:".js文件名不是必须的"
	},
	XHTML:function () {
		//比html文件严格的多
		//可用HTML实体（&lt;）替换<
		//或包含在<![CDAATA[..js代码]]>中如果浏览器不支持
		//可用//<![CDATA[
			//..js代码
		//]]>
	},
	
	identifier:function(){//标示符
		//第一个字符必须是一个字母，下划线_或美元$;
		//其他字符可以多加个数字
	},
	strictPattern:function(){//严格模式
		"use strict"
		//八进制会报错
		//不能把函数或参数命名为eval或argument，会报错
		//函数参数同名会报错
		//用arguments[i]重写参数会报错，
	},
	typeof:{
		"undefined":"值未定义",
		"boolean":"是布尔值1或0",
		"string":"是字符串",
		"number":"是数值",
		"object":"是对象或null",
		"function":"是函数",
		example:function(){
			var message = undefined;
			alert(message == undefined);//true
			alert(age);//产生错误
			alert(typeof message);//undefined
			alert(typeof age);//undefined
			alert(null == undefined);//true
		}
	},
	number:{
		example:function(){
			var intNum = 55;//整数
			var octal = 070;//八进制，严格模式下会报错
			var hexNum = 0xA;//10进制（0-9）（a-f）a=10

		}
		isNaN:function(){
			//也适用与对象，在基于对象调用isNaN时，会先调用对象的valueof方法，然后确定该返回值是否可转化为数值，如果不能则基于这个返回值再调用toString方法再测试返回值
			alert(isNaN("10"));//true
			alert(isNaN(true));//false
		},
		Number:function(){
			//Boolean变成0和1
			//数值不变
			//null返回0
			//undefined返回NaN
			//字符串
				//1.如果只有数值包括正负，转化10进制
				//2.浮点转化为浮点
				//3.16进制转化为10进制
				//4.空为0
				//5.除上面之外全部为NaN
			var num = Number("hello world");//NaN
			var num1 = Number(true);1
		},
		parseInt:function(){
			parseInt("  123blue");//123
			parseInt("");//NaN
			//ECMAscript中已经不能解析八进制，可传参
			var num = parseInt("0xAF",16);//175
			var num1 = parseInt("AF",16);//175
			var num1 = parseInt("AF");//NaN
		},
		parseFloat:function(){
			var num1 = parseFloat("1234bkus");//1234
			var num2 = parseFloat("0xA");//0
			var num3 = parseFloat("22.34.5");//22.34
			var num4 = parseFloat("3.125e7");//31250000

		}
	},
	string:{
		"\unnnn":function(){
			//字符字面量可以在任何位置出现，并且作为字符串解析
			var text = "This is the letter sigma: \u03a3";
			alert(text.length);//28,6个字符长转义序列表示一个字符
			//length返回的字符数包括16位字符数目，如果包含双字节字符，则length属性可能不能精确返回字符串中的字符数目
		},
		"值":"字符串的值是不可变的，改变首先要销毁原来的字符串",
		toString:function(){
			//数值，布尔，对象，字符串值都能toString但null和undefined没有
			//可传参，可输出任意有效字符进制表示字符串值
			var num = 10;
			alert(num.toString(16));//a
			var value = null;
			var value1;
			alert(String(value));//null
			alert(String(value1));//undefined
		}
	},
	object:{//object类型是她所有实例的基础，即每个object都有下列属性和方法
		Constructor:"保存着用于创建多钱对象的函数如new object（）就是object",
		hasOwnProperty(propertyName):"用于检查给定属性在当前对象实例中（而不是在实例的原型中）是否存在，参数必须是字符串",
		isPrototypeof(object):"检查传入的对象是否是另一个对象的原型",
		propertyIsEnumerable(propertyName):"检查给定属性能否用for-in，参数必须是字符串",
		toLocaleString():"返回对象的字符串表示，该字符串与执行环境的地区对应",
		toString():"返回对象的字符串表示",
		valueOf():"返回对象的字符串、数值或布尔值表示。通常与toString方法返回值相同"
	},
	//操作符
	caozuo：function(){
		//--,++操作符
			//在应用一个只含有效数字字符的字符串时，先转化为数字值，再减1，字符串变量变成数值变量
			//如果不是只有有效数字的字符串，为NaN
			//如果是false -1；true 0
			//对象先调用valueOf（）方法如果结果是NaN，则调用toString
		var o = {
			valueOf:function(){
				return -1;
			}
		};
		o--;//-2

		//一元加操作 +a；会像Number（）一样对值进行转化，对象先调用valueOf和toString方法
		//一元减，与加相同

		// ! 操作符
			//对象false，空字符串true，非空字符串false，0true，非0 false，null true；NaN true，undefined，true
			// !!会模拟Boolean（）转型函数

		//&&与||操作符
			//有一个null，返回null，有一个NaN返回NaN，有一个undefined返回undefined

		//*,/,%,非数值会被转化为数值
			//有NaN为NaN，
			//（/）0被整除为NaN，
			//(%)被除数为无限大除数有限大NaN；Infinity除Infinity是NaN;被除有限大，除数无限大，结果是被除数，被除数0,结果0

		//+
			//有NaN为NaN，Infinity+Infinity=Infinity，Infinity-Infinity=NaN
			//+0+(+0)=+0,负同；+0+（-0）=+0
			//如果有一个是对象、数值或布尔，则掉用toString方法
			//undefined和null，调用String（）得到undefined和null
		//-
			//大部分同+；Infinity-Infinity=NaN；-Infinity-Infinity=NaN
			//Infinity+Infinity=Infinity；-Infinity-Infinity=-Infinity

		//<,>,<=,>=
			//都是字符串比较字符串编码
			//一个是数值则将另一个转化为数
			//一个是对象则valueOf，如果没有valueOf方法，则调用toString
			//布尔转化为数值
			//不能转化为数值NaN，结果为false

		// ==,!=
			//布尔转化为数值
			//一个字符串一个数字，先字符串转数字
			//一个是对象，一个不是，先调用valueOf
			//null == undefined
			//有一个NaN则为false
			//对象如果不是指向同一个对象则为false

		//=== !==
			//null === undefined;false
	},
	//语句
	yuju:function(){
		do{
			statement
		}while(expression);
		var i=0;
		while(i<10){
			i+=2
		}
		//使用while循环做不到，for也做不到
		for(property in expression) statement;//对象值是null或undefined则会停止循环

		//label,在代码中添加标签，
		start:for(var i=0;i<count;i++){
			alert(i)
		}
		//start可以由break或continue引用加标签语句一般与for循环配合使用
		//break会立刻退出循环，强制执行循环后面的语句，continue退出循环后会从循环顶部继续执行
		//只是退出一次循环，加标签label可以跳到指定位置

		//with将代码作用域设置到特定对象
		var qs = location.search;
		with(location){
			var qs = search;
		};

		//switch 可以使用任何数据类型
		var num = 25
		switch(true){
			case num <0;
			num++;
			break;
			default:
			num ++
		}
	},
	//函数
	functions:function(){
		//arguments[i]访问参数，arguments.length访问长度
		//arguments[i]能始终与命名参数值同步，但影响是单向的，修改命名参数不会影响arguments中对应的值
		//如果只有一个参数，那arguments[1]的值不会反应到命名参数中，因为长度是由传入参数决定的
		//没有传递值的参数自动赋予undefined
		//同名函数后一个会覆盖迁移个
		//函数名也是个指向函数的指针，不会与某个函数绑定
		var sum = new Function("num1","num2","return num1 + num2");//不推荐，会两次解析代码，一次时解析常规ECMAScript代码，第二次是解析传入构造函数的字符串
		//因此，就像字符串，一个函数可以有几个名字
		//没有重载，后面第一的会覆盖前面定义的
		//解析器会率先读取函数声明，并使其在执行任何代码之前可用，函数表达式会等到解析器执行到它所在代码行，才会被真正解析执行

		//因为函数名本身就是变量，所以函数也可以当作值来使用，也就是说函数能当参数传递
		//arguments,this,arguments主要用途使保存函数参数，但这对象还有名叫callee的属性，是一个指针，指向拥有arguments对象的函数

		//下面阶乘函数,函数的执行与函数名factorial紧紧耦合，为了消除这种耦合
		function factorial(num){
			if(num <= 1){
				return 1
			}else{
				return num*factorial(num-1)
			}
		}
		function factorial(num){
				if(num <= 1){
				return 1
			}else{
				return num*arguments.callee(num-1)
			}
		}
		//this是引用的是函数据以执行的环境对象，全局中是window
		//caller ECMAScript5中规范了另一个函数对象属性，保存着当前函数的函数引用，如果是在全局作用域中调用当前函数，他的值为null
		function outer(){
			inner()
		}
		function inner(){
			alert(inner.caller)
		}
		outer();//会显示outer源码
		//为了实现更松散耦合
		function inner(){
			alert(arguments.callee.caller)
		}
		//ECMAScript5还定义了arguments.caller属性，不过在严格模式下会报错，而在非严格模式下这个属性始终是undefined
		//严格模式下不能为函数的caller属性赋值，会报错

		//每个函数都有length和prototype两个属性，length表示函数希望接收命名参数个数
		//每个函数都包含两个非继承而来的方法：apply（）和call（），都是在特定作用域中调用函数，实际上等于设置函数体内this对象的值，
		//apply方法接收两个参数：在其中运行函数的作用域，另一个是参数数组，第二个可以是Array实例，也可以是arguments对象
		function sum (num1,num2){
			return num1+num2
		}
		function callSum1(num1,num2){
			return sum.apply(this,arguments)
		}
		function callSum2(num1,num2){
			return sum.apply(this,[num1,num2])
		}
		alert(callSum1(10,10));//20
		//因为是全局模式下调用的，所以传入的是window，严格模式下为指定环境对象而调用函数，则this值不会转型为window，除非明确把函数添加到某个对象或调用apply（）或call（），否则this值为undefined
		//call与apply作用相同，就是传递参数必须一一列举一下
		function callSum2(num1,num2){
			return sum.call(this,num1,num2)
		}
		//apply和call真正作用，是能扩充函数运行的作用域
		window.color = "red";
		var o = {color:"blue"};
		function sayColor(){
			alert(this.color)
		}
		sayColor();//red
		sayColor.call(this);//red
		sayColor.call(window);//red
		sayColor.call(o);//blue
		//使用他们降低了函数的耦合

		//ECMAScript5还定义了bind函数，创建严格函数实例，其this值会绑定到传给bind（）的函数值
		window.color = "red";
		var o = {color:"blue"};
		function sayColor(){
			alert(this.color)
		}
		var objectSay  = sayColor.bind(o)
		objectSay();//blue

		//函数声明和函数表达式的区别
		//不要这么做,在js中属于无效语法，js引擎会尝试修正这个错误，将其转换为合理状态，但浏览器尝试修正错误的做法不一致，大部分会返回第二个声明，忽略condition
		if(condition){
			function sayHi(){
				alert("Hi")
			}
		}else{
			function sayHi(){
				alert("Yo!")
			}
		}
		//递归
		function factorial(num){
			if(num <= 1){
				return 1;
			}else{
				return num*factorial(num - 1);
			}
		}
		//这是个经典的递归函数，虽然看起来没什么问题，但下面的代码可能会导致它出错
		var anotherFactorial = factorial;
		factorial = null;
		alert(anotherFactorial(4));//出错
		//因为调用anotherFactorial时会调用factorial().而它已经不是函数了
		//arguments.callee可以，是一个指向正在执行的函数指针，可以用来实现递归
		function factorial(num){
			if(num <= 1){
				return 1;
			}else{
				return num*arguments.callee(num - 1);
			}
		}
		//严格模式下arguments.callee是会导致错误。，不过可以使用命名函数表达式来达成相同的结果
		var factorial = (function f(num){
			if(num<=1){
				return 1;
			}else{
				return num*f(num-1);
			}
		})
		//创建一个名为f()的命名函数表达式，然后将它赋值给变量factorial。即使把函数赋值给了另一个变量，函数名f依然有效，

		//闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的常见方式，就是在一个函数内部创建另一个函数
		function createComparisonFunction(propertyName){
			return function(object1,object2){
				var value1 = object1[prototypeName];
				var value2 = object2[prototypeName];
				if(value1 < valueOf){
					return -1;
				}else if (value1 > value2){
					return 1 ;
				}else{
					return 0;
				}
			}
		}
		//当一个函数第一次被调用时，会创建一个执行环境及相应的作用域链，并把作用域链赋值给一个特殊的内部属性（即[[Scope]]）。然后使用this、arguments和其他命名参数的值来初始化函数的活动对象。但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位。。。直至作为作用域终点的全局执行环境
		//在函数执行过程中，读取和写入变量值，就需要在作用域链中查找变量
		function compare(value1,value2){
				if(value1 < valueOf){
					return -1;
				}else if (value1 > value2){
					return 1 ;
				}else{
					return 0;
				}
		}
		var result = compare(5,10);
		//后台的每个执行环境都有一个表示变量的对象--变量对象。全局环境的变量对象始终存在，而像compare()函数的局部环境的变量，则只在执行过程中存在
		//在创建compare()函数时，会创建一个预先包含全局变量对象的作用域链，这个作用域链被保存在内部的[[Scope]]属性中。当调用compare()函数时，会为函数创建一个执行环境，然后通过复制函数的[[Scope]]属性中的对像构建起执行环境的作用域链，此后又有一个活动对象（在此作为变量对象使用）被创建和被推入执行环境作用域链的前端
		//对于compare()函数的执行环境而言，其作用域链包含两个变量对象：本地活动对象和全局变量对象，显然，作用域链本质上时一个指向变量对象的指针列表，它只引用但不实际包含变量对象
		//无论什么时候在函数中访问一个变量时，就会从作用域中搜索具有相应名字的变量。一般来讲，当函数执行完毕后，局部活动对象就会被销毁，内存中仅仅保存全局作用域（全局执行环境的变量对象）。但是闭包情况又有所不同
		//有闭包的函数在执行完后，其活动对象也不会被销毁，因为闭包的作用域链还在引用这个活动对象，直到闭包被销毁，解除对宝宝的引用，设置为null
		//因为闭包会携带包含它的函数作用域，因此会比其他函数占用更多内存
		//闭包一个副作用，即闭包只能取得包含函数中任何变量的最后一个值
		function createFunctions(){
			var result = new Array();
			for(var i=0;i<10;i++){
				result[i] = function(){
					result i;
				}
			}
			result result;
		}
		//这个函数会返回一个数值，并且每个函数都返回10，每个函数作用域链中都保存着createFunctios()函数的活动对象，所以他们引用的都是同一个变量i。但是可以通过匿名函数强制让闭包的行为符合预期
		function createFunctions(){
			var result = new Array();
			for(var i=0;i<10;i++){
				result[i] = function(num){
					result function(){
						result num;
					};
				}(i)
			}
			result result;
		}
		//在这个函数中没有直接把闭包赋值给数值，而是定义了一个匿名函数，把匿名函数的结果赋值给数组，在调用匿名函数时，我们传入了变量i。由于参数是按值传递的，所以变量i的当前值复制给num，而在匿名函数内部又创建一个访问num的闭包，这样一来，result数组中的每个函数都有自己num变量的一个副本，就可以返回不同值了
		//在闭包中，this对象也可能会导致一些问题。this对象是在运行时基于函数的执行环境绑定的：在全局函数中，this等于window，而当函数作为某个对象方法调用时，this等于哪个对像
		//不过匿名函数的执行环境具有全局性，因此，this对象通常指向window。但有时由于编写闭包的方式不同，这一点可能不会那么明显
		var name = "The Windoe";
		var object = {
			name :"My Oject",
			getNameFunc:function(){
				return function(){
					return this.name;
				}
			}
		}
		alert(object.getNameFunc()());//"The Window"(在非严格模式下)
		//为什么没有取得其包含作用域（或外部作用域）的this对象呢？前面提到过，每个函数在被调用时，其活动对象都会自动取得两个特殊变量：this和arguments。内部函数在搜索这两个变量时，只会搜索到其活动对象为止，，因此永远不可能直接访问外部函数中的这两个变量
		//可以把外部作用域中的this对象保存在一个闭包能访问的变量里
		var name = "The Windoe";
		var object = {
			name :"My Oject",
			getNameFunc:function(){
				var that = this;
				return function(){
					return that.name;
				}
			}
		}
		alert(object.getNameFunc()());//My Object
		//arguments和this一样的情况
		//几种特殊情况，this可能会意外改变，比如下面
		var name = "The Windoe";
		var object = {
			name :"My Oject",
			getNameFunc:function(){
				return this.name;
			}
		}
		object.getName();//"My Objet"
		(object.getName)();//"My Objet"
		(object.getName = object.getName)();//"The Window"

		//内存泄漏，ie9之前对JScript对象和COM对象使用不同垃圾收集例程，因此闭包会在IE这些版本会导致一些特殊问题，比如，在闭包作用域链中有HTML元素，意味着该元素无法销毁
		function assignHandler(){
			var element = document.getElementById("someElement");
			element.onclick = function(){
				alert(element.id)
			}
		}
		//由于匿名函数保存了一个对assugnHandler()的活动引用，，因此无法减少element引用数，只要匿名函数存在，element的引用数至少是1，所以内存就永远不会收回
		function assignHandler(){
			var element = document.getElementById("someElement");
			var id = element.id;
			element.onclick = function(){
				alert(id)
			}
			element = null;
		}
		//通过element.id的一个副本保存在变量中，消除了循环引用，但只是这样还不能解决内存泄漏，闭包会引用包含函数的整个活动对象，而其中包含着element。即使闭包不使用element，包含函数的活动对象也仍然会保存一个引用，因此要把element变量设置为null，这样就能解除对DOM对象引用，减少引用数，确保正常回收。

	},
	//数据类型
	numberType:function(){
		//基本类型，简单的数据段，undefined,null,Boolean,number,String,这五种是按值访问的
		//引用类型，指可能由多个值组成的对象
		//引用类型值是报春在内存中的对象，与其他语言不同，js不允许直接访问内存中的位置，也就是说不能直接操控对象的内存空间操作对象实际上是操作对象引用，故，引用类型的值是按引用访问的

		//对于引用类型，我们能添加属性和方法，也可改变其属性和方法
		var person = new Object();
		person.name = "jiang";
		//不能给基本类型添加属性，虽然不会导致错误
		var name = "jiang";
		name.age = 27;
		alert(name.age);//undefined

		//当一个变量向另一个变量复杂引用类型的值时，同样也将储存在对象中的值复制一份放到为新变量分配的空间中，不同的事这个值的副本是一个指针，复制后两个值实际上还是引用同一对象，因此，改变一个，另一个也会变

		//函数参数是按值传递的，把值从一个变量复制到另一个变量，所以对象变化会反应到函数外部
		function setName(obj){
			obj.name = "jiang";
			obj = new Object();
			obj.name = "dd"
		}
		var person = new Object();
		setName(person);
		alert(person.name);//jiang

		//instanceof,什么类型的对象
		result= variable instanceof Constructor
		alert (person instanceof Object);//是对象吗
		alert (person instanceof Array);//是数组吗
		alert (person instanceof RegExp);//是正则吗

		//typeof会返回function，检查正则时返回function，在ie和火狐会返回object

		//执行环境定义了变量或函数有权访问的其他数据，每个执行环境都有与之相关联的变量对象，环境中所有定义的变量和函数都保存在这个对象中
		//最外围的是全局执行环境，在web浏览器中执行环境是window对象，某个执行环境中所有代码执行完毕后，该环境销毁，保存在其中的所有数据和函数定义都会随之销毁
		//每个函数都有自己的执行环境，执行流进入一个函数时，函数环境会被推入一个栈环境中，执行完后，栈将其环境弹出，把控制权返回给之前的执行环境
		//当代码在环境中执行时，会创建变量对象的一个作用域链，以保证执行环境有权访问的所有变量和函数的有序访问，作用域的前端，是当前执行代码所在环境的变量对象，如果这个环境是函数，则将其活动对象作为变量对象，
		//活动变量在最开始的时候只有一个对象，即arguments（这个对象在全局环境中是不存在的），作用域中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境，这样一直延续到全局执行环境，
		//全局执行环境的变量对象始终都是作用域链中最后一个对象
		//标示符解析是沿着作用域链一级一级地搜索标示符的过程，搜索过程始终从作用域前端开始，然后一级级向后回溯，直到找到为止，如果找不到，通常会报错
	
		//延长作用域链，执行环境类型只有全局和局部（函数），但有些语句能延长作用域链，可以在作用域前端临时加一个变量对象，会在代码执行后移除
			//try-catch的catch块和with语句都能加长作用域链
			//catch会创建一个新的变量对象，包含的是被抛出的错误声明

		//var 声明的变量会自动添加到最接近的环境中
		//查询标示符，当某个环境中为了读取或写入而引用一个标示符时，必须通过搜索来确定标示符代表声明，从作用域前段开始，向上逐级查询，一旦查到，立刻停止查询

		//垃圾收集
			//找出不再使用的变量，释放其内存空间，会以固定周期执行
			//标记不再有用的变量

			//标记清除，当变量进入环境，就标记为进入环境，不能清除，当离开环境则标记为离开环境，最后销毁带标记的值，回收他们的内存空间
			//引用计数，跟踪引用次数，被引用一次加1，包含这个值的变量又取得另一个值，减一，当为0时，双方内存
				//问题，相互引用永远不会回收

		//内存问题，为了让一面面获得更好性能，不用的数据设置为null来释放引用，这个方法适合大多数全局变量和全局对象属性，局部变量会在离开执行环境时自动解除引用，方便垃圾回收器回收
	},
	//引用类型
	yinyong:function(){
		//引用类型的值（对象）是引用类型的一个实例，是一种数据结构，用于将数据和功能组合在一起，也常被叫做类，也被称为对象定义，
		//描述的是一类对象所具有的属性和方法
		//[]比.的优点是可以通过变量访问属性，或者包含会导致语法错误的字符，或属性名为关键字，保留字，也可用[]

		//Array
			var colors = new Array(3);	//长度为3
			var colors = new Array("3");	//长度为1
			var names = new Array("Greg");//包含一项，即字符串Greg
			var values = [1,2,];//会创建包含2或3项的数组ie3个其他2个
			var values = [,,,,,];//会创建或6项

		//instanceof检查是否为数组，问题是它假设单一的全局执行环境，如果网页包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数，如果从一个框架向另一个框架传递数组，那么传入的数组与第二个框架的原生数组有不同的构造函数
		if(value instanceof Array);
		//ECMAScript5新增Array.isArray（）
		if(Array.isArray(value))

		//所有对象都有toLocaleString(),toString(),valueOf()方法，toString返回由每个值的字符串拼接而成的一个以逗号分隔的字符串，valueOf返回还是数组
		//toLocaleString也经常返回与toString，valueOf相同的值
		//Array.join
		//栈是一种后进先出的结构栈中的插入叫推入，移除叫弹出，只发生在栈的顶部
		//push()接收任意数量参数，推入数组末尾，pop()移除并返回最后一项
		//队列先进先出，在末尾添加，前端移除，shift()移除并返回第一项，unshift()添加任意项并返回新数组长度，数值显示顺序和添加顺序一样
		var colors = [];
		colors.unshift("red","green");//[red,green]
		//Array.reverse，反转数组
		//Array.sort（），排序数组不传参数是按字符串比较方法，如果第一个参数应该位于第二之前，则传负
		function compare(value1,value2){
			if(value1<value2){
				return -1
			}else if(value1>value2){
				return 1
			}else{
				return 0
			}
		}
		//concat 基于当前数组所有项创建一个新的数组，如果传递给concat()是一个或多个数组，则会将这些数组中每一项都添加到结果数组中
		//slice 基于当前数组中的一个或多个项创建一个新的数组，接收一个或两个参数，只有一个参数情况下，slice()返回从参数指定位置到数组末尾的所有项，两个值是开始位置到结束位置之间项，不包括结束位置项
		var colors = ["red","green","blue","yellow","purple"];
		var colors2 = colors.slice(1);//green,blue,yellow,purple	
		var colors3 = colors.slice(1,4);//green,blue,yellow
		//splice()
			//删除，splice(0,2)删除数组前两项
			//插入，splice(2,0,"red","green");从位置2开始插入字符串
			//替换，splice(2,1,"red",green),从位置2删除一个，再插入
		var colors = ["red","green","blue"];
		var removed = colors.splice(1,0,"yellow");//red,yellow,green,blue

		//位置方法：indexOf，lastIndexOf（），都接收两个参数，要查找的项和查找起点索引，indexOf从数组开头往后，lastIndexOf相反
		//没找到会返回-1，用===操作符
		var number = [1,2,3,4,5,4,3,2,1];
		alert(number.indexOf(4));//3
		alert(number.indexOf(4,4));//5
		alert(number.lastIndexOf(4));//5
		var person = {name:"Nicholas"}
		var people = [{name:"Nicholas"}]
		var morePeople = [person]
		people.indexOf(person);//-1
		morePeople.indexOf(person);//0

		//ECMAScript5为数组定义了五个迭代方法，每个 方法都接收两个参数：要在每一项运行的函数和（可选）运行该函数的作用域对象--影响this的值，传入的方法函数会接收三个参数，数组项的值，该项在数组中的位置，数组对象本身，根据方法的不同，执行后的返回值可能会也可能不会影响访问的返回值
			//every(),对数组每一项运行给定函数，如果每一项都是true则返回true
			//filter（）：。。。返回该函数会返回true的项组成的数组
			//forEach（）：。。。。没有返回
			//map（）：。。。返回每次函数调用返回的数组
			//some（）：。。。任意一项返回true则返回true
			//都不会修改数组中的值
		var number = [1,2,3,4,5,4,3,2,1];
		var everyResult = number.every(function(item,index,array){
			return (item > 2)
		});//false	
		var everyResult = number.some(function(item,index,array){
			return (item > 2)
		});//false
		var everyResult = number.filter(function(item,index,array){
			return (item > 2)
		});//[3,4,5,4,3]
		var everyResult = number.map(function(item,index,array){
			return (item * 2)
		});//[2,4,6,8,10,8,6,4,2]
		number.forEach(function(item,index,array))

		//缩小数组方法，reduce();reduceRight()迭代数组所有项，构建最终返回，reduce()是从头开始，reduceRight相反
		//都接收两个参数，在每一项调用的函数和（可选）缩小基础的初始值，传入的函数接收4个参数，前一个值，当前值，项的索引，数组对象，函数返回的任何值都会座第一个参数自动传给下一项，第一次迭代发生在数组第二项上，因此第一个参数是数组第一项，第二个参数是数组第二项
		var values = [1,2,3,4,5];//求和
		var sum = values.reduce(function(prev,cur,index,array){
			return prev+cur;
		})
		//reduceRight类似，只是方向相反

		//Date
			//Date.parse（）接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应的日期毫秒数
			//Date.UTC()就是经常写的符合我们自己习惯
			//ECMAScript5添加了Data.now（）方法，返回调用这个方法时日期和时间毫秒数
			var start = Date.now()//于下面相同
			var start = +new Date()
			//Date的value方法返回日期的毫秒数
		//日期格式化
			//toDateString（）--以特定实现的格式返回星期几，月，日，年
			//toTimeString。。时，分，秒，时区
			//toLocleDateString。。星期几，月，日，年；
			//toLocaleTimeString。。时分，秒
			//toUTCString。。。实现UTC日期

			//getTime，毫秒，与valueOf相同
			//setTime（毫秒），以毫秒数设置日期

		//RrgExp
		var expression = /pattern/flags;
			//g：用于所有字符串，而非发现第一个匹配时停止
			//i：不区分大小写
			//m:多行，到达一行末尾时继续查找下一行
			var pat = /at/g;//匹配所有at实例
			var pst = new RegExp("[bc]at","i");//与下面意义一样
			var pat = /[bc]at/i;//匹配第一个bat或cat，不分大小写
			var pat = /.at/gi;//匹配所有以at结尾的三个字符组合，不分大小写
			//{[\^$|)?*+.]}这些在正则中都有特殊用途，因此想匹配，得用\转义
			//EegExp类型105

	},
	//基本包装类型
	jibeng:function(){
		//为了操作基本类型值，js还提供啦个特殊的引用类型：Boolean、Number和String，与其他引用类型相同，但也具有各自与基本类型相应的特殊行为
		//实际上，每读取一个基本类型值时，后台就会创建一个对应的基本包装类型对象，从而让我们能调用一些方法来操作这些数据
		var s1 = "some text";
		var s2 = s1.substring(2)
		//基本类型值不是对象，逻辑上讲他们不应该有方法，其实为了让我们实现这种直观的操作，后台已经自动完成了一系列处理，当第二行代码访问s1时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值，
		//而在读取模式中访问字符串时，后台会自动完成下列处理
			//创建String类型的一个实例
			//在实例上调用指定的方法
			//销毁这个方法，如下
			var s1 = new String("some text");
			var s2 = s1.substring(2);
			s1 = null;
		//经过这些处理，基本字符串值就变得跟对象一样了，而且上面这三个步骤也分别适用于Boolean和Number类型对应的布尔值和数字值
		//引用类型与基本包装类型的主要区别就是对象的生存期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存。而自动创建的基本包装类型的对象，只存在一行代码执行的瞬间，然后被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法
		var s1 = "some text";
		s1.color = "red";
		alert(s1.color);//undefined
		//所有基本包装类型对象都会被转换为布尔值true
		//可以显式地调用Boolean、Number、String来创建基本包装类型对象，不过应该在绝对必要的情况下再做，因为这样容易让人分不清是在处理基本类型还是引用类型，对其调用typeof会返回object，而且所有基本包装类型的对象都会被转化为true
		//Object构造函数也会像工厂方法一样，根据传入类型返回相应基本包装类型实例
		var　obj = new Object("some text");
		alert(obj instanceof String);//true
		//使用new调用基本包装类型的构造函数与直接调同名转型函数是不一样的
		var value = "25";
		var number = Number(value)
		alert(typeof number);//"number"
		var obj = new Number(value);//构造函数
		alert(typeof obj);//"object"

		//Boolean重写了valueOf方法返回true，false，重写了toString方法，返回“true”，“false”
		//可是布尔对象经常造成人们误解
		var falseObject = new Boolean(false);
		var result = falseObject && true;
		alert(result);//true
		var falseValue = false;
		var result = falseValue && true;
		alert(result);//false
		//上面是对falseObject而不是它的值进行求值，而布尔表达式所有对象都会被转化为true，所有基本包装类型的对象都会被转换为布尔值true
		//基本类型与引用类型的布尔值还有两个区别，typeof对基本类型返回“boolean”，引用类型返回“object”
		//由于Boolean对象是boolean类型实例，所以使用instanceof操作符测试Bolean对象会返回true，而测试基本类型的布尔值则返回false
		alert(typeof falseObject);//Object
		alert(typeof falseValue);//boolean
		alert(falseObject instanceof Boolean);//true
		alert(falseValue instanceof Boolean);//false

		//number，也重写了valueOf方法，返回基本类型数值，toLocalString和toString返回字符串形式数值，除了继承方法外，Number类型还提供将数值格式化为字符串方法
		var num = 10;
		alert(num.toFixed(2));//"10.00"，按指定的小数位返回字符串表示，如果包含小数位比指定的多，最大小数位值会舍入
		var num = 10.005;
		alert(num.toFixed(2));//"10.01";一般可以表示20位以内的小数位值
		//toExponential（）返回指数表示法，参数也是指定输出的小数位数
		var num = 10;
		alert(num.toExponential(1));//"1.0e+1"
		//toPrecision()方法可能返回固定大小（fixed）格式，也可能返回指数（exponential）格式，具体看哪种更合适，接收一个参数表示数值所有数字的位数
		var num = 99;
		alert(num.toPrecision(1));//"1e+2"
		alert(num.toPrecision(2));//"99"
		alert(num.toPrecision(3));//"99.0"
		//Number,显式创建和基本类型有区别
		var numberObject = new Number(10);
		var numberValue = 10;
		alert(typeof numberObject);//"object"
		alert(typeof numberValue);//"number"
		alert(numberObject instanceof Number);//true
		alert(numberValue instanceof Number);//false

		//String对象的方法在所有基本的字符串值中访问到，继承valueOf、toLocaleString和toString（）方法都返回对象所表示的基本字符串值，含有length属性
		//charAt(),charCodeAt()接收一个基于0的参数，其中charAt以单字符字符串返回给定位置字符，charCodeAt返回字符串编码
		var stringValue = "hello world";
		alert(stringValue.charAt(1));//"e"
		alert(stringValue.charCodeAt(1));//"101"
		//ECMAScript5还有下面的方法
		alert(stringValue[1]);//"e"
		//concat拼接字符串
		var stringValue = "hello ";
		var result = stringValue.concat("world");//hello world
		var result = stringValue.concat("world","!");//hello world!
		stringValue;//hello
		//slice,substr,substring,返回操作字符串的一个子字符串,slice,substring第一次参数开始位置，第二个结束位置，substr第二个是字符串长度,如果没有第二个参数，则他们都将字符串长度作为结束位置
		var stringValue = "hello world";
		stringValue.slice(3);//"lo world"
		stringValue.substring(3);//"lo world"
		stringValue.substr(3);//"lo world"
		stringValue.slice(3,7);//"lo w"
		stringValue.substring(3,7);//"lo w"
		stringValue.substr(3,7);//"lo worl"
		//参数是负的，slice会将负值与字符串长度相加，substr将第一个参数加上字符串长度，将负的第二个参数变成0，substring会把所有负值变成0
		stringValue.slice(-3);//"rld"
		stringValue.substring(-3);//hello world
		stringValue.substr(-3);//rld
		stringValue.slice(3,-4);//lo w
		stringValue.substring(3,-4);//hel
		stringValue.substr(3,-4);//""

		//indexOf,lstIndexOf(),从一个字符串中搜索给定的字符串，返回位置，indexOf从头开始，lastIndexOf相反
		var stringValue = "hello world";
		stringValue.indexOf("o");//4
		stringValue.lastIndexOf("o");//7
		//接收第二个参数。，从哪开始
		stringValue.indexOf("o",6);//7
		var stringValue = "Lorem ipsum dolor sit amet,consectetur adipisicing elit"
		var positions = new Array();
		var pos = stringValue.indexOf("e");
		while(pos>-1){
			positions.push(pos);
			pos= stringValue.indexOf("e",pos+1);
		}
		positions;//3,24,32,35,52
		//trim(),创建字符串副本，删除前置及后缀所有空格
		var stringValue = "   hello world   ";
		var trimmedSreingValue = stringValue.trim();//hello worlo
		stringValue ;// "   hello world   ";

		//大小写，toLowerCase(),toLocaleLowerCase(),toUpperCase(),toLocaleUpperCase()
		var stringValue = "hello world";
		stringValue.toLocaleUpperCase();//"HELLO WORLD"
		stringValue.toUpperCase();//"HELLO WORLD"
		stringValue.toLocaleLowerCase();//hello world
		stringValue.toLowerCase();//hello world
		//在不知道具体语言环境，针对地区的方法稳妥

		//match,字符串匹配模式方法，本质上与调用RegExp的exec方法相同，match只接受一个参数，要么是正则表达式要么是一个RegExp对象
		var text = "cat,bat,sat,fat";
		var pattern = /.at/;
		//与pattern.exec(text)相同
		var matchs = text.match(pattern);
		matchs.index;//0
		matchs[0];//"cat"
		pattern.lastIndex;//0
		//match返回了一个数组，如果调用RegExp对象的exec方法，并传递本例的字符串做为参数，那么也会得到相同数组
		//数组第一项是与整个模式匹配的字符串，之后保存着正则表达式中捕获匹配的字符串
		//search参数与natch相同，返回匹配的第一个索引，没有则返回-1
		var pos = text.search(/at/);//1
		//replace替换字符串操作，第一个参数是一个RegExp对象或一个字符串（这个字符串不会转化为正则），第二个参数可以是一个字符串或者一个函数，如果第一个参数是字符串，那么只会替换第一个字符串，想要替换所有字符串，唯一办法就是提供一个正则表达式，而且要指定全局（g）标志
		var result = text.replace("at","ond");//"cond,bat,sat,fat"
		result = text.replace(/at/g,"ond");//"cond,bond,sond,fond"
		//split基于指定的分隔符将一个字符串分割成多个子字符串，并放在数组中，第二个参数可以指定数组大小
		var colorText = "red,blue,green,yellow";
		var color1 = colorText.split(",");//["red","blue","green","yellow"]
		var color2 = colorText.split(",",2);//["red","blue"]
		//localeCompare()比较两个字符串，返回一个
			//如果字符串在字母表中 应该排在字符串参数前面，则返回一个负数，大部分是返回-1
			//如果两个相等，返回0
			//排在之后，返回正数，大部分情况下是1
		var stringValue = "yellow";
		stringValue.localeCompare("brick");//1;b在y前
		stringValue.localeCompare("yellow");//0
		stringValue.localeCompare("zoo");//-1
		function determineOrder(value){
			var result = stringValue.localeCompare(value);
			if(result<0){

			}else if(result >0){

			}else{

			}
		}
		//fromcharCode()接受一个或多个字符编码，转化为字符串，从本质来看，与方法charCodeAt（）是执行相反操作
		String.fromcharCode(104,101,108,108,111);//"hello"

		//单体内置对象：ECMA-262对内置对象的定义，由ECMAScript实现提供的、不依赖于宿主环境的对象，这些对象在ECMAScript程序执行之前就已经存在了。意思就是说，开发人员不必显式实例化内置对象，因为他们已经实例化了，如Object,Array,String
		//ECMA-262还定义了两个单体内置对象：Global和Math
		//Global对象可以说是ECMAScript中最特别的一个对象了，因为不管从什么角度看，这个对象都是不存在的，在某种意义上是作为一个终极兜底儿对象来定义，换句话说，不属于任何其他对象的属性和方法，最终都是它的属性和方法，事实上没有全局变量或全局函数，所有在全局作用域中定义的属性和方法，都是Global对象的属性
		//URI编码方法，Global的encodeURI（）和encodeURIComponent（）方法可以对URI进行编码，以便发送给浏览器，有效的URI不能包含某些字符，例如空格，他们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器接收，理解
		//encodeURI()主要作用于整个URI（如http://www.wrox.com/illegal value.html）
		//URIComponent()主要作用于URI的某一段，（如：illegal value.html）;
		//区别是encodeURI不会对本身属于URI的特殊字符进行编码，如冒号、正斜杠、问号和＃，而encodeURIComponent（）会对任何非标准字符编码
		var uri = "http://www.wrox.com/illegal value.html"
		encodeURI(uri);//http://www.wrox.com/illegal%20value.htm#start
		encodeURIComponent(uri);//http%3A%2F%2Fwww.wrox.com%2Filegal%20value.htm%23strt
		//encodeURI()和encodeURIComponent()方法对应的是decodeURI()和decodeURIComponent()解码

		//eval()大概是ECMAScript语言中最强大的一个方法,eval()方法就像是一个完整的ECMAScript解析器，它只接收一个参数，即要执行的ECMAScript（或js）字符串
		//通过eval执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链，这意味着通过eval执行的代码可以引用在包含环境中定义的变量，
		var msg = "hello world";
		eval("alert(msg)");
		eval("function sayHi(){alert('hi')}");
		sayHi();
		eval("var msg = 'hello world");
		alert(msg);//"hello world"
		//在eval创建的任何变量和函数都不会提升，只在eval执行的时候创建
		//严格模式下，外部访问不到eval（）中创建的任何变量或函数，同样为eval赋值也会报错

		//window：ECMAScript虽然没有指出如何访问Global对象，但Web浏览器都是将这个全局对象作为window对象的一部分实现的，因此，在全局作用域中声明的所有变量和函数就都成为了window对象属性
		var color = "red";
		function sayColor(){
			alert(window.color)
		}		
		window.sayColor();//red
		//另一种取得Global对象方法是使用以下代码：
		var Global = function(){
			return this;
		}();
		//Math对象
			//min()和max(),都接收任意多数值参数，返回最小和最大值
			var values = [1,2,3,4,5,6,7,8];
			var max = Math.max.apply(Math,values)
			//Math.ceil(),向上舍入，Math.floor(),乡向下舍入，Math.round()四舍五入
			//Math.random(),o到1之间的随机数，不包括0和1
			function selectFrom(lowerValue,upperValue){
				var choices = upperValue - lowerValue +1;
				return Math.floor(Math.random*choices + lowerValue)
			};//slectFrom(2,10)介于2和10（包括2和10）



	},
	objects:function(){
		//工厂模式创建对象
		function createPerson(name,age,job){
			var o = new Object();
			o.name = name;
			o.age = age;
			o.job = job;
			o.sayName = function(){
				alert(thi.name)
			}
			return o;
		}
		var person1 = createPerson("Nicholas",29,"Software Engineer")
		var person1 = createPerson("Greg",29,"Doctor")
		//工厂模式虽然解决了创建多个相似对象的问题，但没有解决对象识别问题（即怎样知道一个对象的类型）

		//构造函数模式
		function Person(name,age,job){
			this.name = name;
			this.age = age;
			this.job = job;
			this.sayName = function(){
				alert(this.name);
			}
		}
		var person1 = new Person("Nicholas",29,"Software Engineer")
		var person1 = new Person("Greg",29,"Doctor")
		//与工厂模式不同的是，没有显式创建对象，直接将属性和方法赋予给this对象，没有return语句
		//new 操作符会经历四个步骤，创建一个新对象，将构造函数作用域赋给新对象（因此this就指向这个新对象），执行构造函数中的代码（为这个新对象添加属性）；返回新对象
		person1.constructor == Person;//true
		person2.constructor == Person;//true
		//constructor属性最初是标识对象类型的，但是检测对象类型还是instanceof更加可靠
		person1 instanceof Object;//true
		person1 instanceof Person;//true
		person2 instanceof Object;//true
		person2 instanceof Person;//true
		//创建自定义构造函数意味着将来可以将它的实例标识为一种特定的类型；这就是构造函数胜过工厂模式的地方

		//将构造函数当作函数，任何函数，只要通过new操作符调用，那它就是构造函数，而任何函数，如果不通过new操作符调用，那就是普通函数
		//当作构造函数
		var person = new Person("Nicholas",29,"Software Engineer");
		person.sayName();//Nicholas
		//作为普通函数
		Person("Greg",29,"Software Engineer");
		window.sayName();//Greg
		//在另一个对象作用域中调用
		var　o = new Object();
		Person.call(o,"kristen",25,"Nurse");
		o.sayName();//"Kristen"
		//构造函数的问题，就是每个方法都要在每个实例上重新创建一遍，前面person1和person2都有一个名为sayName（）的方法，但那两个方法不是同一个Function的实例，ECMAScript中函数也是对象，因此没定义一个函数就是实例化一个对象，构造函数也可以这样定义
		function Person(name,age,job){
			this.name = name;
			this.age = age;
			this.job = job;
			this.sayName = new Function("alert(this.name)")
		},
		//因此不同实例上的同名函数是不相等的
		person1.sayName == person2.sayName;//false
		//可以把函数定义在外面来解决问题所以不同对象就共享了一个全局作用域中定义的全局函数，但问题是全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域名不副实，再有，如果对象需要定义很多方法，那就要定义很多全局函数，那自定义引用类型就没有丝毫封装性了

		//原型模式：创建的每个函数都有prototype（原型）属性，是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型所有实例共享的属性和方法
		//prototype就是通过调用构造函数而创建的哪个对象实例的原型对象，好处是可以让所有对象实例共享它所包含的属性和方法
		function Person(){
		}
		Person.prototype.name = "Nichola";
		Person.prototype.age = 29;
		Person.prototype.job = "Software Engineer"
		Person.prototype.sayName = function(){
			alert(this.name)
		};
		var person1 = new Person();
		person1.sayName();//"Nichola"
		var person2 = new Person();
		person2.sayName();//"Nichola"
		//理解原型对象：无论什么时候，只要创建一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象，在默认的时候，所有原型对象都会自动获得contructor，前面的例子。Peron.prototype.constructor指向Person。通过这个构造函数，我们可以继续添加其他属性和方法
		//创建了自定义构造函数之后，其他原型对象默认只会取得constructor属性，其他方法都是从Object继承来的
		//当用构造函数创建一个新实例后，该实例内部包含一个指针，指向构造函数的原型对象，虽然脚泵中没有标准的方式访问，但Firefox、Safari和Chrome在每个对相上都支持一个属性_proto_
		//判断[[Prototype]]指向调用isPrototypeOf（）方法的对象，那就发挥true
		Person.prototype.isPrototypeOf(person1);//true
		//ECMAScript5新增了getPrototyprOf()方法，获得原型对象
		Object.getPrototypeOf(person1) == Person.prototype;//true
		Object.getPrototypeOf(person1).name;//"Nicholas"
		//每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性，搜索首先从对像实例开始，再搜索指针指向的原型对象
		//虽然可以通过对象实例访问保存在原型中的值，但却不能重写，如果添加一个同名属性，会屏蔽原型中的属性，只有通过delete删除实例属性，才能重新访问原型属性
		//hasOwnProperty()可以检测属性是存在实例中，还是存在原型中
		person1.hasOwnProperty("name");//false
		person1.name = "Greg";
		person1.hasOwnProperty("name");//true

		//in操作符，for-in和单独使用，单独使用时，in操作符会在通过对象能访问给定属性时返回true，不管是不是实例中的
		"name" in person1;//true
		//for-in返回的是能在对象访问的、可枚举的属性
		//要取得对象上所有可枚举的实例属性，可以用ECMAScript5中的Object.keys()方法
		var keys = Object.keys(Person.prototype);//[name,age,job,sayName]
		//简但的原型语法
		function Person(){};
		Person.prototype = {
			name:"Nicholas",
			age:29,
			job:"Software Engineer",
			sayName:function(){
				alert(this.name)
			}
		}
		//但这种写法完全重写了默认的prototype属性，，而没创建一个函数，就会同时创建它的prototype对象，也会自动获得constructor属性，重写之后，constructor属性就变成了新对象的constructor属性，指向Object构造函数，不再指向Person函数，尽管instanceof还能返回正确结果
		//可以自定义constructor，但会把这个属性变为咳枚举属性,或者用Object.defineProperty重设构造函数
		Person.prototype = {
			constructor:Person,
			name:"Nicholas",
			age:29,
			job:"Software Engineer",
			sayName:function(){
				alert(this.name)
			}
		}
		//原型的动态性，对原型对象做任何修改都会立刻从实例上反应出来
		//但重写整个原型对象情况就不一样了，调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针，而把原型修改为另一个对象就等于切断了构造函数与最初原型之间的关系，实例中的指针指向原型，而不是构造函数
		function Person(){
		}
		var friend = new Person();
		Person.prototype = {
			name:"Nicholas",
			age:29,
			job:"Software Engineer",
			friend:["1",2]
			sayName:function(){
				alert(this.name)
			}
		}
		friend.sayName();//error
		//原生对象的原型
		typeof Array.prototype.sort;//function
		typeof String.prototype.substring;//function
		//修改原生对象原型
		//原型模式缺点
			//共享本性决定的缺点
			var person1 = new Person(;)
			var person2 = new Person(;)
			Person1.friend.push(3)
			person1.friend;//1,2,3
			person2.friend;//1,2,3
			person1.friend === person2.friend;//true

		//组合使用构造函数和原型模式，每个实例都会有自己的一份实例属性副本，但同时共享着对方法的引用，最大限度的节省内存，还支持向构造函数传递参数
		function Peson(name,age,job){
			this.name = name;
			this.age = age ;
			this.job = job;
			this.friends = ["shelby","Court"]
		}
		Person.prototype = {
			constructor : Person,
			sayName : function(){
				alert(this.name)
			}
		}
		var person1 = new Person("Nicholas",29,"Software Engineer");
		var person2 = new Person("Greg",27,"Doctor");
		person1.friends.push("van");
		person1.friends;//"shelby,Count,van"
		person2.friends;//"Shelby,Count"
		person1.friends === person2.friends;//false
		person1.sayName === person2.sayName;//true
		//动态原型，通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型
		function Peson(name,age,job){
			this.name = name;
			this.age = age ;
			this.job = job;
			this.friends = ["shelby","Court"];
			if(typeof this.sayName != "function"){
				Person.prototype.sayName = function (){
						alert(this.name)
				}
			}
		}
		//寄生构造函数
		function Person(name,age,job){
			var o = new Object();
			o.name = name;
			o.age = age;
			o.job = job;
			o.sayName = function (){
				alert(this.name)
			};
			return o
		}
		var friend = new Person("Nicholas",29,"Software Engineer");
		friend.sayName();//"Nicholas"
		//创建一个由特殊方法的数组，但又不能直接修改Array构造函数
		function SpecialArray(){
			var values  = new Array();
			//添加值
			values.push.apply(values,arguments);
			//添加方法
			values.toPipedString = function (){
				return this.jion("|")
			}
			return values
		}
		var colors = new SpecialArray("red","blue","green");
		alert(colors.toPipedString());//"red|blue|green"

		//稳妥构造函数
		function Person(name,age,job){
			var o = new Object();
			//定义私有变量和函数
			o.sayName = function (){
				alert(name)
			};
			//除了sayName不能用任何别的方法得到name
			return o
		}

		//继承，原型链是主要继承方法
		//默认 的原型，所有的引用类型都默认继承了Object
		//instanceof测试实例与原型链中出现的构造函数，isPrototype，主要是原型链中出现的原型，都可以说是该原型派生的实例原型
		//借用构造函数，在子类构造函数内部调用超类型构造函数，通过使用call和apply方法在新创建的对象上执行构造函数
		function SuperType(){
			this.colors = ["red","blue","green"]
		}
		function SubType(){
			//继承了SuperType
			SuperType.call(this)
		}
		var instance1 = new SubType();
		instance1.colors.push("black");
		instance1.colors;//"red,blue,green,black"
		var instance2 = new SubType();
		instance2.colors;//"red,blue,green"
		//通过call方法，实际上是在新创建的SubType实例的环境下调用了SuperType构造函数，就会在新SubType对象上执行SuperType（）函数中定义的所有对象初始化代码
		//传递参数，相对原型链而言，借用构造函数有个很大优势，就是传递参数
		function SuperType(name){
			this.name = name ;
		}
		function SubType(){
			SuperType.call(this."Nicholas")
			this.age = 29;
		}
		var instance = new SubType();
		instance.name;//"Nicholas"
		//问题，函数不能复用，超类型原型中定义的方法，对子类型也是不可见的

		//组合继承，将原型链和借用构造函数一起用
		function SuperType(name){
			this.name = name;
			this.colors = ["red","blue","green"]
		}
		SuperType.prototype.sayName = function(){
			alert(this.name)
		}
		function SubType(name,age){
			//继承属性
			SuperType.call(this,name);
			this.age = age;
		}
		//继承方法
		SubType.prototype = new SuperType();
		SubType.prototype.sayAge = function (){
			alert(this.age)
		}
		var instance1 = new SubType("Nicholas",29);
		instance1.colors.push("black");//"red,blue,green,black"
		instance1.sayName():
		instance1.sayAge():

		//原型式继承，借助原型基于已有对象创建新对象
		function object(o){
			function F(){}
			F.prototype =o;
			return new F();
		}
		//本质上讲，object对传入其中的对象执行了一次浅复制
		var person = {
			name: "Nicholas",
			friends:["shelby","Court","Van"]
		}
		var anotherPerson = object(person);
		anotherPerson.name = "Greg";
		anotherPerson.friends.push("Rob")

		var yetAnotherPerson = object(person);
		yetAnotherPerson.name = "Linda";
		yetAnotherPerson.friends.push("Barbie");

		person.friends;//"shelby,Court,Van,Rob,Barbie"
		//Object.create()规范化了原型式继承，一个是作用新对象原型的对象和（可选）一个为新对象定义额外属性的对象
		//在传入一个参数时与上面object（）方法行为相同
		var anotherPerson = Object.create(person)
		//Object.create()方法第二个参数与Object.defineProperties()方法第二个参数格式相同
		var anotherPerson = Object.create(person,{
			name:{
				value:"Greg"
			}
		})
		//寄生式继承，创建一个仅用于封装继承过程的函数
		function createAnother(original){
			var clone = object(original);//调用函数创建一个新对象
			clone.sayHi = function(){//以某种方式增强这个对象
				alert("hi")
			};
			return clone
		}
		var anotherPerson = createAnother(person);
		anotherPerson.sayHi();//"hi"
		//寄生组合式继承
		//组合继承是js最常用的继承模式，但也有自己的不足，最大的问题是无论上面情况下都会调用两次超类型构造函数，一次是创建子类型原型的时候，另一次是在子类型构造函数内部
		function SuperType(name){
			this.name = name;
			this.colors = ["red","blue","green"];
		}
		SuperType.prototype.sayName = function (){
			alert(this.name)
		}
		function SubType(name,age){
			SuperType.call(this,name);//第二次调用SuperType（）
			this.age = age
		}
		SubType.prototype = new SuperType();//第一次调用SuperType()
		SubType.prototype.constructor = SubType;
		SubType.prototype.sayAge = function(){
			alert(this.age)
		}
		//在第一次调用的时候，SubType.prototype会得到name和colors属性，他们都是SuperType的实例属性，只不过位于SubType的原型中，当调用SubType构造函数时，又会调用SuperType构造函数，这一次又在新对象上创建了实例属性name和colors，就屏蔽了原型中的两个同名属性

		//寄生组合式继承，通过构造函数来继承属性，通过原型链混合形式来继承方法。
		function inheritPrototype(subType,superType){
			var prototype = object(superType.prototype);//创建对象
			prototype.constructor = subType;//增强对象
			subType.prototype = prototype;//指定对象
		}
		function SuperType(name){
			this.name = name;
			this.color = ["red","blue","green"];
		}
		SuperType.prototype.sayName = function(){
			alert(this.name)
		}
		function SubType(name,age){
			SuperType.call(this.name)
			this.age = age
		}
		inheritPrototype(SubType,SuperType);
		SubType.prototype.sayAge = function(){
			alert(this.age)
		}
		//这个例子高效率体现在它只调用了一次SuperType构造函数，并且避免了在SubType.prototype上面创建不必要的，多余的属性，与此同时，原型链还能保存不变，开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式


	}

}