/**
 * Created by jiang on 2017/2/13.
 */
var func = {
     //数据类型
     typeOfDatas : {
        x1 : 1,//数字
        x2: 0.01,//整数和实数共用一种数据类型
        x3:"hello world",//字符串
         x4:'JavaScript',//字符串
         x5:true,//布尔值
         x6:false,//布尔值
         x7:null,//空
         x8:undefined,//undefined
         x9:'object',//对象
         typeConversion:function () {
             10 + "objects";//"10 objects"
             "7"*"4";//28
             var n = 1-"x";//NaN
             n+" objects";//"Nan objects",NaN转化为字符串

             null == undefined;//true
             "0" == 0;//比较之前转化为数字
             0 == false;//比较之前布尔转化为数字
             "0" == false; //比较之前都转化为数字

             "===";//未做任何类型转换
             "+x等价于Number(x),也可以写成x-0"
             "!!x等价于Boolean（x）";



             var n = 123456.789;
             n.toFixed(0);//123457
             n.toExponential(1);//1.2e+5
             n.toPrecision(4);//"1.235e+5"根据有效位数转化字符串如果有效位数小于整数部分，则转化为指数形式

             parseInt("3 blind mice");//3
             parseFloat(" 3.14 blind mice");//3.14
             parseInt("-12.13");//-12
             parseInt("oxFF");//255
             parseInt("oxff");//255
             parseInt("-oxff");//-255
             parseFloat(".1");//0.1
             parseInt("0.1");//0
             parseInt("0.1");//NaN:整数不能以.开始
             parseFloat("$72.47");//NaN:数字不能以$开始
         }
    },
    //数组方法
    arrayMethod:{
         reverse:function () {
             var a=[];
             a.push(1,2,3);
             a.reverse()//数组次序反转
         },
        copy:function () {
            var a = [1,2,3];
            var b = [];
            for(var i = 0; i<a.length;i++){
                b[i] = a[i]
            }
        },
        equalArrays:function (a,b) {//比较两个数组是否相等
            if(a.length != b.length) return false;
            for(var i = 0;i<a.length;i++){
                if(a[i] !== b[i]) return false
            }
            return true
        },
        cre:function () {
            for(i=0;i<a.length;a[i++]=0)/*empty*/;//创建数组
        }
    },
    //对数据的操作
    //算术运算在溢出（正负无穷大），下溢（无限接近0）或被0整除时不会报错返回无穷大NaN
    data:{
        isFinite:isFinite(number),//检查是否为无穷大
        pow:Math.pow(2,53),//2的53次幂
        pow:Math.pow(2,1/2),//2的立方根
        round:Math.round(.6),//四舍五入
        ceil:Math.ceil(.6),//向上求整
        floor:Math.floor(.6),//向下求整
        abs:Math.abs(-5),//求绝对值
        max:Math.max(x,y,z),//返回最大值
        min:Math.min(x,y,z),//返回最小值
        random:Math.round(),//生成一个0<=x<1的随机数
        PI:Math.PI,//π
        E:Math.E,//自然数的底数
        sqrt:Math.sqrt(number),// 计算平方根
        sin:Math.sin(0),//三角函数：还有Math.cos,Math.atan
        log:Math.log(10),//10的自然对数
        log1:Math.log(100)/Math.LN10,//以10为底100的对数
        log2:Math.log(100)/Math.LN2,//以2为底100的对数
        exp:Math.exp(10),//e的三次幂
        toFixed:n.toFixed(number),//四舍五入保留小数点几位
        toExponential:n.toExponential(number),//用指数计数法
        toPrecision:n.toPrecision(number),//转化为字符串
        parseInt:parseInt(number),//转化为数字
        parseFloat:parseFloat(number),//转化为浮点
        NaN:function () {
            //非数字值和任何值都不相等所以不能靠x==NAN判断
            isNan(number);//非数值返回true
        },
        bug:function () {
            //二进制不能精确表示类似.1这样的数
            var x= .3 - .2;
            var y = .2 - .1;
            x == y;//false
            x == .1 ;//false
            y == .1; //true
        }

    },
    //数据保存
    dataSave:{
        localStorage:function save(amount) {
            if (window.localStorage) {  // Only do this if the browser supports it
                localStorage.loan_amount = amount;
            }
            window.onload = function() {
                // 如果浏览器支持本地储存并且上次保存的值是存在的
                if (window.localStorage && localStorage.loan_amount) {
                    document.getElementById("amount").value = localStorage.loan_amount;
                }
            };
        },//没有时间限制的数据存储
        sessionStorage:function save(amount) {
            if (window.sessionStorage) {  // Only do this if the browser supports it
                sessionStorage.loan_amount = amount;
            }
        },//针对一个 session 的数据存储
    },
    //ajax
    ajax:{
         "原生":function getLenders(amount, apr, years, zipcode) {
             // If the browser does not support the XMLHttpRequest object, do nothing
             if (!window.XMLHttpRequest) return;

             // Find the element to display the list of lenders in
             var ad = document.getElementById("lenders");
             if (!ad) return;                            // Quit if no spot for output

             // Encode the user's input as query parameters in a URL
             var url = "getLenders.php" +                // Service url plus
                 "?amt=" + encodeURIComponent(amount)  // user data in query string

             // Fetch the contents of that URL using the XMLHttpRequest object
             var req = new XMLHttpRequest();        // Begin a new request
             req.open("GET", url);                  // An HTTP GET request for the url
             req.send(null);                        // Send the request with no body

             // Before returning, register an event handler function that will be called
             // at some later time when the HTTP server's response arrives. This kind of
             // asynchronous programming is very common in client-side JavaScript.
             req.onreadystatechange = function() {
                 if (req.readyState == 4 && req.status == 200) {
                     // If we get here, we got a complete valid HTTP response
                     var response = req.responseText;     // HTTP response as a string
                     var lenders = JSON.parse(response);  // Parse it to a JS array
                 }
             }
         }
    },
    //词法结构
    lexicalStructure:{
         Unicode:"是用Unicode编写的",
        "区分大小写":"HTML里不区分，但js里必须区分",
        "格式控制符":"空格符（\u0020）,水平制表符（\u0009）,垂直制表符(\u000B)、换行符(\u000c)、不中断空白符(\u00A0)、字节序标记（\ufeff）；将换行符(\u000A)、回车符(\u000D)、行分隔符（\u2028）、段分隔符（\u2029）为行为结束符，回车加换行一起被解析为一个单行结束符",
        "Unicode转义字符":"6个ASCLL字符表示任意16位Unicode内码，如 ‘cafe’=== ‘caf\u00e9’",
        "注释、直接量、标识符和保留字、分号":"数字和字符串直接量"
    },
    //日期时间
    date:{
         news:function () {
             var then = new Date(2011,0,1);//2011,1,1
             var later = new Date(2011,0,1,17,10,30);//2011,1,1,5:10:30
             var myDate = new Date();
             myDate.getYear();        //获取当前年份(2位)
             myDate.getFullYear();    //获取完整的年份(4位,1970-????)
             myDate.getMonth();       //获取当前月份(0-11,0代表1月)
             myDate.getDate();        //获取当前日(1-31)
             myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
             myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
             myDate.getHours();       //获取当前小时数(0-23)
             myDate.getMinutes();     //获取当前分钟数(0-59)
             myDate.getSeconds();     //获取当前秒数(0-59)
             myDate.getMilliseconds();    //获取当前毫秒数(0-999)
             myDate.toLocaleDateString();     //获取当前日期
             var mytime=myDate.toLocaleTimeString();     //获取当前时间
             myDate.toLocaleString( );        //获取日期与时间
         }
    },
    strings:function () {
        "two\nlines";//显示为两行的字符串
      //  \';	单引号
      //  \";	//双引号
      //  \&;	//和号
      //  \\;	//反斜杠
      //  \n;	//换行符
      //  \r;	//回车符
      //  \t;//	制表符
      //  \b;	//退格符
      //  \f;//	换页符
        //只要引用字符串s，js就会调用new String(s),转化为对象，用来处理s.length对象引用，引用结束，对象就会销毁（实际上并不一定是这样，只是效果是这样）
        //数字和布尔值也是Number（）和Boolean（），
        //null和undefined没有包装对象，所以会报错

        s.length;//字符串长度
        strObj.charAt(index);//返回指定索引位置处的字符。如果超出有效范围的索引值返回空字符串。
        strObj.slice(start,[end]);//返回字符串的片段
        strObj.substring(start,end);//返回位于String对象中指定位置的子字符串
        strObj.substr(start,[length]);//返回一个从指定位置开始的指定长度的子字符串。
        strObj.indexOf(substr,[startIndex]);//放回String对象内第一次出现子字符串位置。如果没有找到子字符串，则返回-1
        strObj.lastIndexOf(substr,[startindex]);//返回String对象中字符串最后出现的位置。如果没有匹配到子字符串，则返回-1。
        strObj.search(reExp);//返回与正则表达式查找内容匹配的第一个字符串的位置。
        //str.concat([string1,[string2...]]);//返回字符串值，该值包含了两个或多个提供的字符串的连接。
        strObj.split([separator,[limit]]);//separator字符串或 正则表达式 对象，它标识了分隔字符串时使用的是一个还是多个字符。如果忽略该选项，返回包含整个字符串的单一元素数组。limit该值用来限制返回数组中的元素个数
        str.toLowerCase();//返回一个字符串，该字符串中的字母被转换成小写
        str.toUpperCase();//返回一个字符串，该字符串中的所有字母都被转换为大写字母。


        //包装对象
        var  s = "test"; //创建一个字符串
        s.len = 4;        //给他设置一个属性
        var t = s.len     //返回undefined
        //存取字符串、数字、布尔值属性是创建的临时对象称包对象，只是一种实现细节，不用特别关注，可通过String（），Number（），Boolean（）来显示创建包对象
        var s = "test", n = 1,b = true;
        var S = new String(s); //一个字符串对象
        var N = new Number(n); //一个数值对象
        var B = new Boolean(b); //一个布尔对象
        // ==下是相等的 === 是不等的
    },
    //布尔值
    blue:function () {
        //undefined,null,0,-0,NaN,""会被转化为false,其它所有值都是true
        typeof null == "object";
        typeof undefined == "undefined";
        null == undefined;//true
        null === undefined;//false
        //null undefined都没有任何属性和方法
        
    },
    //全局变量
    globalVariable:function () {
        //在代码的最顶层，一般是window
        var global = this;//定义一个引用全局对象的全局变量
        var truevar = 1;//声明一个不可删除的全局变量
        fakevar = 2;//创建全局对象的一个可删除的属性
        this.fakevar2 = 3;//同上
        delete truevar;//false
        delete fakevar;//true
        delete this.fakevar2;//true变量被删除
        //删除数组元素，数组长度不变，删除部分为undefined
        var o = {x:1,y:2};
        delete o.x;//true
        typeof o.x;//undefined
        delete o.x;//true
        delete 1;//参数不是一个左值，返回true
    },
    originalValue:function () {
        //原始值undefined、null、布尔值、数字和字符串与对象（包括数组与函数）有着本质区别，原始值是任何方法都不能改的
        //对字符串来说，修改他会返回一个新的字符串
        //原始值比较是值比较

        var o = {x:1},p = {x:1};
        o===p;//false两个单独的对象永不相等
        var a = [],b = [];
        a===b;//false两个单独的数值永不相等
        //通常称对象为引用类型，对象值都是引用，对象的比较都是引用比较；当且仅当引用同一个基对象是才能相等
        var a = [];
        var b = a;
        b[0] = 1;
        a[0]    //1 a的值也会变
        a === b; //true

        //对象转化为布尔都为true；对包装对象也是如此 new Boolean（false）是一个对象而不是原始值结果为true，
    },
    toString:function () {
         //1,如果有toString方法，则调用这个方法，如果返回一个原始值并不是字符串，则转化为字符串
        //2,没有toString，或这个方法返回的不是原始值，如果有valueof方法则调用valueof方法，如果返回一个原始值并不是字符串，则转化为字符串
        //3,否则会抛出一个错误
        var n = 17;
        binary_string = n.toString(2);//"10001"
        Octal_string = "0"+n.toString(8);//021
        hex_string = "0x"+n.toString(16);//0x11
        ({x:1,y:2}).toString();//"[object object]"
        [1,2,3].toString();//"1,2,3"
        (function (x) {f(x)}).toString();//"function(x){\nf(x);\n}"
        /\d+/g.toString();//"/\d+/g"
        new Date(2010,0,1).toString();//"Fei Jan 01 2010 00:00:00 GMT-0800(pst)"
    },
    valueof:{//如果存在任意原始值，它就将对象转换为表示它的原始值，对象是复合值或不能转化为原始值，则返回对象本身
        //
         "array":"数组实例对象",
         "Boolean":"数组实例对象",
         "Date":"以毫秒数存储的时间值，从 UTC 1970 年 1 月 1 日午夜开始计算。",
         "Function":"函数本身",
         "Number":"数字值",
         "Object":"对象本身。这是默认设置",
         "String":"字符串值",
        example:function () {
            //1,如果有valueof方法，则调用这个方法，如果返回一个原始值并不是字符串，则转化为字符串
            //2,没有valueof，或这个方法返回的不是原始值，如果有toString方法则调用toString方法，如果返回一个原始值并不是字符串，则转化为字符串
            //3,否则会抛出一个错误

            //对象转化位数字，返回的原始值并不是字符串，会调用toString方法[]=>""=>0，只有一个数字，转化为字符串再转化为数字
        },
        //运算符
        operator:{
             "+与=":"如果其中一个操作数是对象，则js用特殊的方法转化为原始值而不是其他算术符执行对象到数字的转化；其中日期是特殊情形，日期是js语言核心中唯一预先定义的类型，对所有非日期的对象来说到原始值的转化基本是对象到数字的转化，日期则指对象到字符串，但和别的转化不同，valueof或toString返回的原始值会直接被使用，不会被强制转化为字符串或数字；如果最后一个操作符是字符串，或都是字符串进行字符串连接，否则，两个操作数都将转换为数字（或NaN），然后相加",
            "<及其他关系运算符":"对象到原始值转化，先尝试valueof再调toString（）",
            "+、==、!=和关系运算符":"是唯一执行这种特殊操作的运算符",
            example:function () {
                var now = new Date();
                typeof(now + 1);//"string"
                typeof (now - 1);//number
                now == now.toString();//true;隐式的和显式的字符串转化
                now > (now - 1);//true;

                b = (a++)+a;//3;a++为1
                1+{};//“1[object object]：对象转化为字符串连接
                true+true;//2，布尔转化为数字相加
                2+null;//2；null为0
                2+undefined;//NaN：undefined转化为NaN
                //===
                    //类型不同不相等
                    //NaN与任何运算符都不相等包括他本身
                    // 0 === -0
                    //如果两个值是字符串，且对应位上的16位数完全相等，则===相等如果字符串一样但对应位上的16位数不等则==相等
                    //如果两个值指向同一个对象则===相等如果不是则不等，尽管对象属性完全一样
                //==
                    //null==undefined
                    //true，false会先转化为1和0
                    //如果一个是对象一个是数字或字符串，先将对象toString（）或valueof（）转化为原始值js内置语言核心首先尝试使用valueOf（），在尝试toString（）
                    //除了日期类。日期类只使用toString（）转化
                    //其它类型均不相等
                    //("1" = true);//true

                //参照String.localCompare()来获得更多字符串比较信息
                    // "11" < "3" ;true
                    // "11" < 3 ;false
                    // "one" < 3 ;数字比较，”one“转化为NaN，结果为false
                //<=;只是不大于，当一个值是NaN时，均返回false

                //in 运算符 左侧是字符串或可转化为字符串；右侧是对象
                    var point= {x:1,y:1};
                    "x" in point;//true
                    "z" in point;//false
                    "toString" in point;//true;对象中继承了toString属性

                    var data = [7,8,9];
                    "0" in data ;//true,数组包含0
                    1 in data;//true,可在转化为字符串
                    3 in data;//false ,没有索引为3的元素
                    7 in data;//false ,没有索引为3的元素

                //instanceof运算符，希望左边是一个对象，右操作数标识对象的类//原型链
                    var d = new Date();//
                    d instanceof Date;//true;d是由date创建的
                    d instanceof object;//true;所有对象都是object实例
                    d instanceof Number;//计算结果为false；d不是一个Number实例
                    var a = [1,2,3];
                    a instanceof Array;//true
                    a instanceof object;//true
                    a instanceof Regexp;//false

                //一般情况下 a*=b,与a=a*b等价，但是含有副作用运算符的时候就不等价，比如：
                    data[i++]*=2;
                    data[i++] = data[i++]*2;//这两个是不等价的



            }
        },
        //表达式计算
        eval:function () {
            //只有一个参数，如果不是字符串，会直接返回这个参数，如果是字符串，会把字符串当成js代码进行编译，编译失败则抛出语法错误
            //eval字符串执行事的上下文环境和调用函数的上下文环境是一样的，但并不是函数的一部分
            eval("return;");//false
            eval("x=0;");//true
            var geval = eval;//使用别名调用eval将是全局eval
            var x = "global",y = "global";
            function f() {//函数内执行的是局部eval
                var x = "local";
                eval("x+='changed';");//改变局部变量值
                return x;
            }
            function g() {//
                var y = "local";
                geval("y+='changed';");//间接调用改变了全局变量的值
                return y;
            }
            console.log(f(),x);//更改了局部变量的值，输出"local changed global"
            console.log(g(),y);//更改了全局变量的值输出“local globalchanged”
        },
        functions:function () {
            //函数声明用函数声明语句，函数名称和函数体都提前，用var的话，只有函数名提前了
            if(usf == null );//如果 usf是null或undefined
            if(!username);//如果是null。undefined，false，0，“”，或NaN
            //switch 的case语句进行的是===，所以不会进行样式转化
            while(expression){
                statement
            }
            var count = 0;
            while(count <10){
                console.log(count);
                count++;
            };
            do{
                statement
            }while(expression)
            do{
                console.log(a[i]);
            }while (++i<len);

            for (initialize;test;increment){
                statement
            }
            for(var p in o){//将属性名赋值给变量p
                console.log(o[p]);
            }
            //for/in循环中的左边，可以是任意表达式，每次循环它计算的值可能不同
            var o = {x:1,y:2,z:3};
            var a = [],i = 0;
            for (a[i++] in o)/*empty*/;//把对象属性复制到一个数组
            //数组不过是一种特殊对象，因此for/in可以枚举数组索引
            for (i in a) console.log(i);
            //只有可枚举的对象属性才会被遍历到，js语言核心所定义的内置方法就不是“可枚举”的。比如toString()，除了内置方法，还有很多内置对象属性也是不可枚举的
            //代码中定义的所有属性和方法都是可枚举的，也可通过特殊手段变得不可枚举
            //对象可以继承其它对象的属性，继承的自定义属性也可以枚举出来
            //for/in循环删除了还未枚举的属性，那这个属性将不会再枚举到，如果循环体定义了对象的新属性，这些属性也不会被枚举到，（js有些实现是可以枚举那些在循环体重增加的继承属性)
            //简单对象的枚举顺序一般按书写顺序

            //下列条件下，枚举顺序取决于具体的实现
                //对象继承了可枚举属性
                //对象具有整数数组索引的属性
                //使用delete删除了对象已有属性
                //使用Object.defineProperty()或类似方法改变了对象属性

            //continue在不同类循环中，行为也有所区别
                //在while中，在循环开始处指定expression会重复检测，如果为true，则从头开始
                //在do/while中，程序调到循环结尾处，重新判断循环条件，再进行下一次循环
                //for循环中，首先计算自增表达式，然后再次检测test表达式，用以判断是否执行循环体
                //for/in中，循环开始下一个属性名

            //with,扩展作用域链
            with(document.forms[0]){
                //直接访问表单元素
                name.value = '';
            }
            var f = document.forms[0];
            f.name.value = "";
            //只有查找标识符的时候才会用到作用域链，创建新变量时不使用它
            with(o)x=1;
            //如果o有属性x，则是给x赋值，如果没有属性x，那这段代码和不使用with语句x=1一样，并不能创建o的属性

            //debugger,调试断点
            //"use strict"，不必出现在首行，指后续作用域代码为严格模式
                //禁止使用with，变量必须声明
                //调用函数内部this是undefined；
                //call()和apply()this是传入的第一个参数
                //给只读属性和不可扩展对象创建新成员会报错
                //传入eval（）代码不能调用程序所在上下文中定义的方法和变量
                //arguments有传入参数的静态副本
                //delete 后跟随一个非法标识符（变量，函数，函数参数）时报错，非严格模式下只返回false
                //128页

            //js函数是参数化的：函数的定义会包括一个车位形参的标识符列表，这些参数在函数体重想局部变量一样工作，函数调用会为形参提供实参值，还会拥有另一个值，本次调用的上下文，这就是this关键字的值
            //如果函数挂载在对象上，成为对象的一个属性，就称它为对象方法，通过对象调用函数时，该对象就是此次调用的上下文，也就是this值，用于初始化一个新建对象的函数成为构造函数
            //js里函数即对象，程序可以随意操控，比如js可以吧函数赋值个变量，或作为参数传递给其它函数，因为函数就是对象，所以可以给他设置属性，甚至调用它们的方法
            //函数可以镶嵌在其它函数内部定义，可以访问被定义时所处作用域中的任何变量，这余威着js函数构成了一个闭包
            //函数在js中只能做为顶级语句，可以出现在全局代码中，或者镶嵌在其它函数，其它地方都不行，，此限制仅适用于以语句声明的函数，函数定义表达式可以出现在js 任何地方

            //函数在定义时并不会执行，只有在调用时执行，有四种方法
                //作为函数，作为方法，作为构造函数，通过call和apply（）方法间接调用
            //在方法调用的表达式里，this是指向改对象，调用方法如下
            o["m"](x,y);//o.m(x,y)
            o[m](x,y);//o.m(x,y)
            f().m();//调用返回值中的m

            //方法和this关键字是面对对象编程规范的核心，任何函数只要作为方法调用实际上都会传入一个隐式实参--一个对象，方法调用的母体就是这个对象，一般基于那个对象的方法可以执行多种操作，
            //方法链，当方法返回值是一个对象，这个对象还可以再调用它的方法
            //this是一个关键字，不是变量，也不是属性名，js语法不允许给this赋值，和变量不同，关键字this没有作用域限制嵌套的函数不会从调用它的函数继承this，如果嵌套函数作为方法调用，其this值指向调用它的对象
            var o = {
                m:function () {
                    var self = this;
                    console.log(this === o);//true
                    f();
                    function f() {
                        console.log(this === o);//false
                        console.log(self === o);//true
                    }
                }
            }

            //构造函数调用创建一个新的空对象，这个对象继承自构造函数的prototype属性，构造函数试图初始化这个行创建的对象，并将这个对象用做其调用上下文，因此，构造函数可以使用this关键字来引用这个新创建的对象，，尽管构造函数看起来像一个方法调用，它依然会使用这个新对象作为调用上下文。即new o.m()中，调用上下文并不是o
            //构造函数通常不使用return关键字，它们通常初始化新对象，执行完毕时，它会显式返回，在这种情况下，构造函数调用表达式的计算结果就是这个新对象的值，然而如果构造函数显式使用return语句返回一个对象，那么调用表达式的值就是这个对象，如果构造函数调用return语句但没指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果
            //间接调用，call,apply
            //可选形参，如果传入参数比声明时少，那么剩下的形参都为undefined，因此，在调用函数是形参是否可选以及是否可以省略应当保持比较好的适应性
            /**
             * 将对象o中可枚举的属性追加至数组a中，并返回a，如果省略a，则创建一个新数组，并返回
             * optional是强调参数是可选的
             */
            function getPropertyNames(o,/*optional*/ a) {
                if(a === undefined) a = [];//或 a = a || [];
                for (var property in o) a.push(property);
                return a;
            }

            //当传入的参数个数超过函数定义时的形参个数，没办法直接获得未命名值的引用，但通过参数对象arguments可以获得
            //arguments.length
            function max(/*....*/) {
                var max = Number.NEGATIVE_INFINITY;//生成一个比js能表示的最小负数还小的数
                for(var i=0;i < arguments.length; i++){
                    if(arguments[i] > max) max = arguments[i];
                }
                return max;
            }
            //类似这种接收任意个实参的函数，被称为“不定实参函数”，实参个数不能为0
            //实参对象数组元素是函数形参所对应实参别名，通过实参名修改实参值的话，通过arguments[]数组也可以获得更改后的值
            function f(x) {
                console.log(x)
                arguments[0] = null;//修改arguments元素同样会修改x的值，严格模式中不行
                console.log(x);//null
            }
            //callee和caller，在严格模式中，这两个属性读写都会报错
            //callee可用于递归
            var factorial = function (x) {
                if(x<=1) return 1;
                return x*arguments.callee(x-1)
            }
            //将对象属性用做实参
            /**
             * 将原始数组的length元素复制至目标数组
             */
            function easycopy(args) {
                arraycopy(
                    args.from,
                    args.form_start || 0,
                    args.to,
                    args.to_start || 0,
                    args.length
                )
            }
            var a = [1,2,3,4],b=[];
            easycopy({from:a,to:b,length:4})

            //实参类型
            /**
             * 返回数组a元素的累加和，数组a中必须为数字，null和undefined都将忽略
             */
            function sum(a) {
                if(isArrayLike(a)){
                    var total = 0;
                    for(var i = 0;i < a.length;i++){
                        var element = a[i];
                        if(element == null) continue;
                        if(isFinite(element)) total　+= element;
                        else throw new Error("sum():elements must be finite numbers");
                    }
                    return total
                }
                else throw new Error("sum():argument must be array-like")
            }
            //接受任意数量实参，并且递归处理实参是数组的情况
            function flexisum(a) {
                var total = 0;
                for(var i = 0;i < arguments.length;i++){
                    var element = arguments[i],n;
                    if(element == null) continue;
                    if(isArray(element)){
                        n = flexisum.apply(this,element);//递归累加
                    }else if(typeof element === "function"){
                        n = Number(element())//调用它并做类型转换
                    }else {
                        n = Number(element);//否则直接做类型转换
                    }
                    if(isNaN(n)){//如果不能转化为数字
                        throw Error("flexisum():can't convert"+element+"to number")
                    }
                    total += n;
                }
                return total;
            }
            //作为值的函数
            //自定义函数属性，函数是一种特殊的对象，也就是说，可以拥有属性，当函数需要一个静态变量来在调用时保持某个值不变，最方便的就是给函数定义属性，而不是定义全局变量，显然定义全局变量会让命名空间变得更加杂乱无章
            uniqueInteger.counter = 0;
            function uniqueInteger() {
                return uniqueInteger.counter++;//先返回计数器的值，然后计数器自增1
            }
            //使用了自身属性（将自身当数组对待）来缓存上一次计算结果
            function factorial(n) {
                if(isFinite(n) && n>0 && n == Math.round(n)){//有限的正整数
                    if(!(n in factorial)){//如果没有缓存结果
                        factorial[n] = n*factorial(n-1);//计算结果并缓存
                    }
                    return factorial[n];
                }else {
                    return NaN
                }
            }
            //作为命名空间的函数
            //js无法声明只在一个代码块内可见的变量，，所以，我们常常简单定义一个函数用做临时的命名空间，在这个命名空间定义的变量都不会污染到全局
            function mymodule() {
                //模块代码
                //这个模块所有变量都是局部变量而不是污染全局命名空间
            }
            mymodule();
            (function () {
                //模块代码
            }())
            /**
             * 特定场景下返回带补丁的extend（）版本
             * 定义了一个扩展函数，用来将第二个以及后续参数复制到第一个参数，处理了一个IE bug，在多数IE版本中
             * 如果o的属性拥有一个不可枚举的同名属性，则for/in循环
             * 不会枚举对象o的可枚举属性，也就是说，将不会正确处理诸如toString的属性，除非我们显式检查它
             */
            var extend = (function () {
                //先检查是否存在bug
                for(var p in {toString:null}){
                    //如果代码执行到这里，那么for/in循环会正确工作并返回
                    //一个简单版本的extend（）函数
                    return function extend(o) {
                        for(var i=1;i<arguments.length;i++){
                            var source = arguments[i];
                            for (var prop in source) o[prop] = source[prop]
                        }
                        return o;
                    };
                }
                //如果代码执行到这里，说明for/in循环不会枚举到toString属性因此返回另一个版本extend（）函数，这个函数显式测试
                //Object.prototype中不可枚举的属性
                return function patched_extend(o) {
                    for(var i=1;i<arguments.length;i++){
                        var source = arguments[i];
                        for (var prop in source) o[prop] = source[prop];
                        //现检查特殊属性
                        for (var j = 0;j<prototypes.length;j++){
                            prop = prototypes[j];
                            if(source.hasOwnProperty(prop)) o[prop] = source[prop]
                        }
                    }
                    return o;
                }
                //列出需要检查的特殊属性
                var prototypes = ["toString","valueOf","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString"]
            }())

            //函数对象可以通过作用域链相互关联起来，函数体内部变量都可以保存在函数作用域内，这种特性在计算机科学文献中称为闭包
            //从技术的角度讲，所有的js函数都是闭包，他们都是对象，他们都关联到作用域链，定义大多数函数时的作用域链在调用函数的时候依然有效，但这并不影响闭包。当调用函数时闭包所指向的作用域链和定义函数时作用域链不是同一个作用域链时，事情就变得非常微妙了，当一个函数嵌套了另外一个函数，尾部函数将嵌套函数对象作为返回值的时候往往会发生这种事
            var scope = "global scope";
            function checkscope() {
                var scope = "local scope";
                function f() {
                    return scope
                }
                return f();
            }
            checkscope();//"local scope"
            function checkscope() {
                var scope = "local scope";
                function f() {
                    return scope
                }
                return f;
            }
            checkscope()();//"local scope"
            //闭包可以捕捉局部变量和参数，并一直保存下来，看起来像这些变量绑定到了在其中定义他们的外部函数，如果定义了嵌套函数，每个嵌套函数都有各自的作用域链，并且这个作用域链指向一个变量绑定对象，但如果嵌套函数对象在外部函数中保存下来，那么他们也会和所指向的变量绑定对象也会当垃圾回收。但如果这个函数定义了嵌套函数，并将它作为返回值返回或储存在某处的属性里，这时就有一个外部引用指向这个嵌套的函数，它就不会被当做垃圾回收，并且它所指向的变量绑定对象也不会被当做垃圾回收
            //如果不慎用闭包很容易造成循环引用，当DOM对象和js对象之间存在循环引用时要小心，在某些浏览器下会造成内存泄露
            var uniqueInteger = (function () {
              var counter = 0;
              return function () {
                  return counter++;
              }
            }());
            function counter() {
                var n=0;
                return {
                    count:function () {
                        return n++
                    },
                    reset:function () {
                        n = 0;
                    }
                }
            }
            var c = counter(),d = counter();
            c.count();//0
            d.count();//0
            c.reset();//
            c.count();//0
            d.count();//1

            function counter(n) {
                return{
                    //属性getter方法返回并给私有计数器var递增1
                    get count(){return n++;},
                    //属性setter不允许n递减
                    set count(m){
                        if(m>=n) n = m;
                        else throw Error("count can only be set to a larger value")
                    }
                }
            }
            var c = counter(1000);
            c.count;//1000
            c.count;//1001
            c.count = 2000;
            c.count;//2000
            c.count = 2000;//Error!
            /**
             * 利用闭包实现私有属性存取器方法
             * 给对象o增加了属性存取器方法，方法名为get（name），set(name)，如果提供了一个判定函数setter会用它来检测参数的合法性，然后储存它，如果判定函数返回false，setter返回异常
             * 所操作的值并没有储存在对象o中，相反仅仅保存在局部变量中getter和setter也是局部函数，因此可以访问这个局部变量，也就是说对两个存取器方法来说，这个变量是私有的，没有办法来绕过存取器来设置或修改这个值
             */
            function addPrivatePrototy(o,name,predicate) {
                var value;
                //getter方法简单将其返回
                o["get"+name] = function () {
                    return value
                };
                //setter方法先检查是否合理，若不合法就抛出异常，否则将其存储起来
                o["set"+name] = function (v) {
                    if(predicate && !predicate(v)){
                        throw Error("set"+name+":invalid value "+v)
                    }else {
                        value = v;
                    }
                }
            }
            var o ={};
            //增加属性存取器方法getName()和setName()确保只允许字符串值
            addPrivatePrototy(o,"name",function (x) {
                return typeof x == "string"
            })
            o.setName("Frank");
            console.log(o.getName());
            o.setName(o);//试图设置一个错误类型值

            //这个函数总是返回一个返回v的函数
            function constfunc(v) {
                return function () {
                    return v;
                }
            }
            var funcs = [];
            for(var i = 0;i<10;i++) funcs[i] = constfunc(i);
            funcs[5]();//5
            //返回一个函数组成的数组，返回值是0-9
            function constfuncs(){
                var funcs = [];
                for (var i = 0 ;i<10;i++){
                    funcs[i] = function(){ return i;}
                }
                return funcs
            }
            var funcs = constfuncs();
            //所有返回值都是一样的，这些闭包都是在同一个函数调用中定义的，所以可以共享变量i；
            //this不是js关键字，所以闭包在外部函数是无法访问this的，除非this保存在变量里,argrments也是
            var self  = this;
            var outerArguments = arguments

            //arguments.length
            function checks(args) {
                var actual = args.length;
                var expected = args.callee.length;//期望的实参个数
                if(actual !== expected){
                    throw Error("Expected" + expected + "args;got" +actual);
                }
            }
            function f(x,y,z) {
                check(arguments);//检查实参个数和期望的实参个数是否一致
                return x+y+z;
            }
            //call,apply
            f.call(o);
            f.apply(o);
            //代码功能和下面类似，假设o中预先不存在名m的属性
            o.m = f;//将f存储为o的临时方法
            o.m();//调用它，不传入参数
            delete o.m;//将临时方法删除
            //在ECMAScript5严格模式中，call和apply第一个实参都会变成this的值，哪怕传入的实参是原始值甚至是null或undefined
            /**
             * 将对象o中名为m的方法替换为另一个方法，可以在调用原始方法之前和之后记录日志消息
             */
            function trace(o,m) {
                var original = o[m];//保存原始方法
                o[m] = function () {
                    console.log(new Date(),"Entering",m);//输出日志消息
                    var　result = original.apply(this,arguments);//调用原始函数
                    console.log(new Date(),"Exiting",m);//输出日志消息
                    return result;
                }
            }
            //bind()当在函数f（）上调用bind（）方法并传入一个对象o作为参数，这个方法将返回一个新函数，调用新的函数将吧f（）当做o的方法调用
            function f(y) {
                return this.x +y;
            }
            var o = {x:1};
            var g = f.bind(o);//通过g(x)来调用o.f(x)
            g(2);//3
            //返回一个函数，通过调用它来调用o中的方法f（），传递它所有实参
            function bind(f,o) {
                if(f.bind) return f.bind(o);//如果bind方法存在的话，使用bind（）方法
                else return function () {
                    return f.apply(o,arguments)
                }
            }
            //除了第一个实参之外，传入bind（）的实参也会绑定至this
            var sum = function (x,y) {return x+y};
            var succ = sum.bind(null,1);//this绑定到null并把第一个参数绑定到1
            succ(2);//3,2作为实参y
            function f(y,z) {
                return this.x +y+z;
            }
            var g = f.bind({x:1},2);//绑定this和y
            g(3);//6
            //模拟实现标准bind（）方法，，并将这个方法另存为Function.prototype.bind,以便所有函数对象都继承它
            if(!Function.prototype.bind){
                Function.prototype.bind = function (o/*,args*/) {
                    //将this和arguments保存在变量中
                    var self = this,boundArgs = arguments;
                    //bind()方法返回值是一个函数
                    return function () {
                        //创建一个实参列表，将传入bind（）的第二个及后续实参都传入这个函数
                        var args = [],i;
                        for(i=1;i<boundArgs.length;i++) args.push(boundArgs[i])
                        for(i=0;i<arguments.length;i++) args.push(arguments[i])
                        //现在将self作为o的方法调用
                        return self.apply(o,args)
                    }
                }
            }
            //大多数函数toString方法方法都返回函数完整源码，内置函数往往返回一个类似“[native code]”的字符串作为函数体
            //Function()构造函数,传入任意数量的字符串实参，最后一个实参所表示的文本就是函数体。不需要传入参数表示函数名，为匿名函数
            var f = new Function("x","y","return x*y;");
                //Function构造函数允许js在运行时动态创建编译函数。
                //每次调用Function构造函数都会解析函数体，并创建新的函数对象，如果是在循环中或多次调用这个构造函数，执行效率会受影响。相比之下，循环中的嵌套函数和函数定义表达式则不会每次都执行时重新编译
                //所创建的函数并不是使用词法作用域，相反，函数体代码的编译总在顶层函数执行
            var scope = "global";
            function constructFunction() {
                var scope = "local";
                return new Function("return scope");
            }
            constructFunction()();//"global"通过构造函数所返回的函数不是局部作用域
            //我们可以将Function（）构造函数认为是在全局作用域中执行的eval（）

            //可调用对象，，是一个对象，可以在函数表达式中调用，所有函数都是可调用的，但并非所有的可调用对象都是函数
            //检查一个对象是否为真正的函数对象
            function idFunction(x) {
                return Object.prototype.toString.call(x) === "[object Function]"
            }
            //函数式编程
            //使用函数处理数组，
            var data = [1,1,3,5,5];
            var total = 0;
            for(var i = 0;i<data.length;i++) total +=data[i];
            var mean = total/data.length;
            total = 0;
            for(var i = 0;i < data.length;i++){
                var deviation = data[i] - mean;
                total += deviation*deviation;
            }
            var stddev = Math.sqrt(total/(data.length-1));//标准差是2
            //可以用数组方法map（）和reduce（）来实现同样的计算
            var sum =  function  (x,y) {return x+y;}
            var square = function (x) {return x*x;}
            var data = [1,1,3,5,5];
            var mean = data.reduce(sum)/data.length;
            //对每个数组元素使用f（），返回一个结果数组
            var map = Array.prototype.map
            ?function (a,f) {return a.map(f);}
            :function (a,f) {
                    var results = [];
                    for (var i=0,len = a.length;i<len;i++){
                        if(i in a) results[i] = f.call(null,a[i],i,a)
                    }
                    return results;
                }
            //使用f（）和可选初始值将数组a减至一个值
            var reduce = Array.prototype.reduce
            ?function (a,f,initial) {
                if(arguments.length>2){
                    return a.reduce(f,initial);//如果传入了初始值
                }else {
                    return a.reduce(f);
                }
                }
                :function (a,f,initial) {
                    var i = o,len = a.length,accumulator;
                    //以特定的初始值开始，否则第一个值取自a
                    if(arguments.length > 2) accumulator = initial;
                    else{
                        if(len == 0) throw TypeError();
                        while(i<len){
                            if(i in a){
                                accumulator = a[i++];
                                break;
                            }else {
                                i++
                            }
                        }
                        if(i == len ) throw  TypeError();
                    }
                    //对剩下的元素依次调用f（）
                    while (i<len){
                        if(i in a){
                            accumulator = f.call(undefined,accumulator,a[i],i,a)
                        }
                        i++;
                    }
                }
                //高阶函数，操作函数的函数，它将接受一个或多个函数作为参数，并返回一个新函数
            function not(f) {
                return function () {
                    var result = f.apply(this,arguments);
                    return !result;
                }
            }
            var even = function (x) {
                return x%2 ===0
            };
            var odd = not(even);
            [1,1,3,5,5].every(odd);//true;每个元素都是奇数

            //返回f（）的带有记忆功能的版本，只有当f（）的实参的字符串表示都不相同时，它才会工作
            function memorize(f) {
                var cache = {};
                return function () {
                    //将实参转换为字符串形式，并将其用做缓存的键
                    var key = arguments.length + Array.prototype.join.call(arguments,",")
                    if(key in cache) return cache[key];
                    else return cache[key] = f.apply(this,arguments)
                }
            };
            function gcd(a,b) {
                var t;
                if(a<b) t =b,b =a, a=t;//确保a>=b
                while(b != 0) t=b,b=a%b,a=t;//求最大公约数
                return a;
            }
            var gcdmemo = memorize(gcd);
            gcdmemo(85,187);

            //实现记忆功能的递归函数
            var factorial = memorize(function (n) {
                return (n <=1)?1:n*factorial(n-1);
            })
            factorial(5);//120,对4到1的值也有缓存

        },
    },
    //错误
    errs:function () {
        //throw语句抛出异常
        //当出现异常时，js会停止，并跳转就近的异常处理程序，如果抛出异常的代码没有一条相关联的catch，解释器会检查更高层的代码块，看有无想关联的异常处理程序，以此类推，直到找到为止，如果没有异常处理函数，js就会把异常当程序错误来处理，报告给用户
        throw expression
        function factorial(x) {
            //参数非法，则抛出一个异常
            if(x<0) throw new Error("x不能为负数")
        };

        //try,catch,finally.当try异常是调用catch的代码，finally跟随catch，不管是否异常finally中都会执行，catch，finally都是可选的，但是必选一个
        try{
            //通常来讲这里的代码都没有问题
            //但有时会抛出异常，要么是由throw语句直接抛出
            //要么通过调用一个方法间接抛出
        }catch(e){
            //try出现异常才会执行
            //通过e来获得对Error对象或其他值的引用
            //还可以通过throw重新抛出异常
        }finally {
            //都会执行，终止try语块方式
            //正常执行完结束
            //break,continue或return，会跳到finally
            //异常被catch捕获，或抛出异常，异常未被捕获，继续向上传播
        }
    },
    //对象
    objects:function () {
        //除了字符串，数字，true，false，null，undefined，外都是对象
        //常用方法，创建（create），设置（set），查找（query），删除（delete），检测（test），枚举（enumerate）
        //属性名可以是包含空字符串的任意字符串，值可以是任意js值
        //属性可写，可枚举，可配置（删除，修改）、

        //对象有三个对象特性
        //对象原型专项另一个对象，本对象的属性继承自他的原型属性
        //对象的累是标识对象类型的字符串
        //d对象的扩展标记指明了是否可以向改对象添加新属性

        //三类对象和两类属性的区分
        //内置对象是有ECMAScript规定定义的对象或类，如数组，函数，日期和正则表达式，都是内置对象。
        //宿主对象是有js解释器所镶入的宿主环境(浏览器)，定义的如网页结构HTML对象，也可以当内置对象
        //自定义对象，由运行的js代码创建的对象
        //继承属性，在对象原型对象中继承的属性
        //自定义属性，直接在对象中定义的属性

        //原型，除null外，每个对象都有原型，即和其它对象相关联
        Object.prototype;//获得对原型对象的引用
        //通过关键字new和构造函数调用创建的对象的原型，就是构造函数prototype属性的值，因此，同使用{}创建对象一样，通过new Object（）创建的对象也继承自Object。prototype，同样，通过new Array()创建的对象原型就是Array。prototype。

        //没有原型的对象，Object.prototype，不继承任何属性；其它原型对象都是普通对象，所有内置构造函数和大部分自定义的构造函数都具有一个继承自Object.prototype的原型
        //Object.create()创建一个姓对象，其中一个参数是这个对象的原型，第二个对对象属性进一步描述
        var o1 = Object.create({x: 1, y: 2});//o1继承了x，y
        //可以通过传递null来创造一个没有原型的新对象,但不会继承任何东西，包括基础方法，比如toString(),也就是说不能和+运算符一起工作
        var o2 = Object.create(Object.prototype);//和{}和new Object()一样
        //可以通过任意原型创造对象

        //inherit()返回一个继承自原型对象p的属性的新对象；并不能完全代替Object.create();不能传入null，也没有第二个参数
        //这里使用ECECMAscript中的Object.create()函数（如果存在的话）
        //如果不存在Object.create(),则退化使用其他方法
        function inherit(p) {
            if(p == null) throw TypeError();
            if(Object.create){
                return Object.create(p);
            }
            var t = typeof p;
            if(t !== "object" && t !== "function") throw TypeError;
            function f() {};
            f.prototype = p;    //将其原型属性设值为p；
            return new f();  //使用f（）车间p的继承对象
        }
        //inherit()能防止无意间修改那些不受你控制的对象，不受将对象直接传入函数，而是将他的继承对象传入函数，当函数读取继承对像的属性时，实际上是读取继承来的值，如果个继承对象赋值，则这些属性只会影响这个继承对象本身而不是原始对象值
        var o = {x:"don't change this value"};
        library_function(inherit(o));//防止o的意外修改

        //继承，假设要查询属性x，如果o中没有x，则在o的原型对象中查询x，如果没有，继续向上，直到找到或原型为null
        var o = {} //o从Object.prototype继承对象方法
        o.x = 1;
        var p = inherit(o);
        p.y=2;
        var q = inherit(p);
        q.z = 3;
        var s = q.toString();//toString继承自Object.prototype
        q.x+q.y ;//3
        //查询属性才会体会到继承，设置属性和继承无关，并不会影响原型链
        //属性赋值要么失败，要么创建一个属性，要么在原始对象中设置属性；但当o继承自x，而这个属性具有setter方法的accessor属性，你们这时将调用setter方法而不是哥o创建一个属性x，setter方法是由o调用的，而不是定义这个属性的原型对象调用的，因此如果setter方法定义任何属性，这个操作只是针对o本身，不会修改原型链

        //查询一个不存在属性不会报错，返回undefined，但查询不存在对象的属性，会报错，null，undefined值都没有属性，查询会报错
        //给null和undefined设置属性也会报错，只读和不允许新增属性的对象赋值会失败但不会报错
        //内置构造函数的原型只是只读的
        Object.prototrpe = o; //赋值失败但没报错

        //delete删除属性，只是断开属性和宿主对象的联系，不能删除继承属性
            //删除成功和delete后补上一个属性访问表达式，delete返回true
            //不能删除不可配置属性，比如通过变量声明和函数声明创建的全局对象，在严格模式中这种操作会报错
            delete Object.prototype;//false

        //in运算符.hasOwnPreperty()和propertyIsEnumerable()方法判断某个属性是否存在于对象
        var o = {x:1};
        "x" in o;//true
        "y" in o;//false
        "toString" in o;//true
        //hasOwnProperty(),检查自有属性，继承会返回false
        o.hasOwnProperty("toString");//false
        //propertyIsEnumerable()是hasOwnProperty增强版，自有可枚举属性才为true

        //除了in运算符，还能用！==判断是否是undefined
        o.x !== undefined;//true
        o.y !== undefined;//false:o中没有属性y
        o.toString !== undefined;//true:o继承
        //但当 o = {x:undefined}时只能用in

        for(p in o){
            if(!o.hasOwnProperty(p)) continue;//跳过继承的属性
        }
        for(p in o){
            if(typeof o[p] === "function") continue;//跳过方法
        }
        /**
         *把p中的可枚举属性复制到o中，并返回o
         * 如果o和p中含有同名属性，则覆盖o中的属性
         * 这个函数并不处理getter和setter以及复制属性
         * */
        function extend(o,p) {
            for(prop in p){
                o[prop] = p[prop];
            }
            return o;
        }
        /**
         *把p中的可枚举属性复制到o中，并返回o
         * 如果o和p中含有同名属性，则o中的属性不受影响
         * 这个函数并不处理getter和setter以及复制属性
         * */
        function merge(o,p) {
            for(prop in p){
                if(o.hasOwnProperty(prop)) continue;
                o[prop] = p[prop];
            }
            return o;
        }

        /**
         * 如果o中属性在p中没有同名属性，则删除，返回o
         */
        function restrict(o,p) {
            for (prop in o){
                if(!(prop in p)) delete o[prop];
            }
            return o;
        }

        /**
         * o在p中有同名属性，在o中删除
         */
        function subtract(o,p) {
            for (prop in p){
                delete o[prop];
            }
            return o;
        }

        /**
         * 同时有o和p的属性，同名属性选p
         */
        function union(o,p) {
            return extend(extend({},o),p);
        }

        /**
         * 同时拥有o和p都出现的属性，但p中属性的值被忽略
         */
        function intersection(o,p) {
            return restrict(extend({},o),p);
        }

        /**
         * 返回o中可枚举属性数组
         */
        function keys(o) {
            if(typeof o !== "object") throw TypeError();//参数必须是对象
            var result = [];
            for (var prop in o){
                if(o.hasOwnProperty(prop)){
                    result.push(prop);
                }
            }
            return result
        }
        //除了for/in外，ECMAScript5定义了两个枚举函数
        //Object.keys();返回可枚举的自有属性与上面keys（）类似
        //Object.getOwnPropertyNames();返回对象所有自有属性，而不仅仅是可枚举的

        //getter,setter;存取器属性，不同于数据属性，数据属性只有一个简单值，查询存取器属性值时，调getter方法（无参数），返回存取器表达式值，当程序设置一个存取器属性值时setter，参数为表达式又边的值，从某种意义上讲，这个方法设置属性值
        //与数据属性不同，存取器不具有可写性，如果属性同时有getter和setter方法，可读/写属性，只有getter，只读。只有setter，只写属性（数据属性中有一些例外），读取只写属性总返回undefined
        var p = {
            //x,y是普通可读写数据属性
            x:1.0,
            y:1.0,

            //r是可读写存取器属性，有getter，setter，函数体结束后不要忘记带逗号
            get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
            set r(newvalue){
                var olsvalue = Math.sqrt(this.x*this.x+this.y*this.y);
                var ratio = newvalue/oldvalue;
                this.x*=ratio;
                this.y*=ratio;
            },
            //theta是只读存取器属性，只有getter方法
            get tHeta(){return Math.atan2(this.y,this.x);}
        };
        var q = inherit(p);//创建一个继承getter和setter的新对象
        q.x = 1,q.y = 1;
        console.log(q.r);//可以用继承的存取器属性
        console.log(q.theta);

        //除了名字和值外，属性还包含标识他们可写，可枚举，可配置的特性，在ECMAScript3中无法设置这些特性，ECMAScript5中可以查询和设置
            //通过这些API给原型对象添加方法，并设置为不可枚举的，让他们看上去更像内置方法，
            //通过API给对象添加不能修改或删除的属性，借此锁定这个对象
            //getter和setter也可看成属性特性，
        //数据属性的是个特性，值（value），可写性（writable），可枚举（enumerable），可配置性（configurable）。
        // 存取器属性不具有值（value）和可写性（由setter决定），有读取（get）,写入（set），可枚举，可配置
        //通过Object.getOwnPropertyDescriptor()可获得对象自有的特定属性的属性描述
            Object.getOwnPropertyDescriptor({x:1},"x");//{value:1,writable:true,enumerable:true,configurable:true}
            Object.getOwnPropertyDescriptor(random,"octet");//{get:/*func*/,set:undefined,enumerable:true,configurable:true}
        //对于继承和不存在的属性，返回undefined
        //getPrototypeOf()获得继承属性特性，遍历原型链
        //Object.definePeoperty(),设置属性特性，不能修改继承属性
        var o= {};
        Object.definePeoperty(o,"x",{value:1,writable:true,enumerable:false,configurable:true});//属性存在，不可枚举
        Object.definePeoperty(o,"x",{writable:false});//变为可读，修改不会报错；严格模式会报错
        //修改或创建多个属性 Object.defineProperties
        Object.defineProperties(o,{
            "x":{value:1,writable:true,enumerable:false,configurable:true},
            "y":{value:1,writable:true,enumerable:false,configurable:true},
            "r":{
                get :function () {
                    return Math.sqrt(this.x*this.x)
                },
                enumerable:true,
                configurable:true
            }
        });
        //对不可创建或修改的属性来说用 Object.defineProperties()和Object.definePeoperty（）会报错
            //如果属性是可配置的，能修改不可写属性的值，如果属性是不可配置的，仍可将可写属性修改为不可写属性
            //对不可扩展的对象，只能编辑已有属性，不能添加
            //对不可配置的，则不能修改可配置性和可枚举性
            //如果存取器属性是不可配置的，则不能修改getter和setter属性，也不能转化为数据属性
            //如果数据属性是不可配置的，则不能转化为存取器属性
            //如果数据属性是不可配置的，则不能将可写性从false转化为true，但可从true转化为false
            //如果是不可配置不可写，则不能修改值，如果属性是可配置的，能修改不可写属性的值，先转化为可写

        //extend()函数只是单纯复制值，没有复制属性特性，也没有复制getter和setter方法，只能将他们简单的转化为静态的数据属性，下面是改进版，新的extend做为不可枚举属性添加到Object.prototype中，因此它是Object新定义的方法
        /**
         * 给Object.prototype添加一个不可枚举的extend（）方法，这个方法继承自调用它的对象，将作为参数传入的对象属性一一复制
         * 除了值以外，也复制属性的所有特性，除非存在同名属性，参数对象的所有自有对象（包括不可枚举的属性）也会一一复制
         */
        Object.defineProperty(Object.prototype,"extend",{
            writable :true,
            enumerable:false,//不可枚举
            configurable:true,
            value:function (o) {
                //得到所有的自有属性，包括不可枚举属性
                var names = Object.getOwnPropertyNames(o);
                for(var i=0;i<names.length;i++){
                    if(names[i] in this) continue;
                    var desc = Object.getOwnPropertyDescriptor(o,names[i]);//获得属性描述符
                    //用它给this创建一个属性
                    Object.defineProperty(this,names[i],desc);
                }
            }
        })
        //在ECMAScript5中，可以通过Object.OwnPropertyDescriptor()和Object.defineProperty()来查询属性的getter和setter方法，或给已有对象添加新的存取器属性

        //对象都有与之相关的原型（prototype），类（class），和可扩展性（extensibleattribute）
        //对象的原型属性是用来继承的，在对象创建之初就设置好的
        //在ECMAScript5中，将对象传入Object.getPrototypeOf（）可以查询它的原型3中没有
        //o.constructor。prototype来检测对象的原型，通过new创建的对象，通常继承一个constructor属性这个属性指代创建这个对象的构造函数
        //isPrototypeOf(),检测是否为另一个对象原型，与instanceof运算符非常类似
        p.isPrototypeOf(o);//检测p是否为o原型
        //_proto_也可查询/设置对象原型

        //对象类属性是一个字符串，表示对象类信息，目前js未提供这个属性方法，并只有toString（）方法能间接查询他：返回[object class]这样的字符串
        //所以通过提取第8个到倒数第二个位置之间的字符可以获得类
        //很多对象继承toString（）方法重写了，
        function classof(o) {
            if(o === null) return "Null";
            if(o === undefined) return "Undefined";
            return Object.prototype.toString.call(o).slice(8,-1)
        }
        //通过内置的的构造函数（Array，Date）创建的对象包含类属性，于构造函数名称匹配，宿主对象也包含有意义的“类属性”，但与js实现有关，比如通过Object.create创建的对象类属性是“Object”
        classof(null);//"Null"
        classof(1);//"Number"
        classof("");//"String"
        classof(false);//"Boolean"
        classof({});//"Object"
        classof([]);//"Array"
        classof(/./);//"Regexp"
        classof(new Date());//"Date"
        classof(window);//"Window"客户端宿主对象
        function f() {};
        classof(new f());"Object"

        //Object.esExtensible()判断对象是否可扩展如果想把对象转化为可扩展的，Object.preventExtensions(),将待转化的对象作为参数传进去，一旦转化为不可扩展性，就不能转化回来了，但preventExtensions只影响对象本身，如果给他原型添加新属性，这个不可扩展对象同样会继承这些新属性
        //Object.seal()除了preventExtensions的效果，还能把对象所有自有属性都设置为不可配置的，而且不可解封，使用Object.isSealed()来检测对象是否封闭
        //Object.freeze()除了seal的效果，还把所有属性设置为只读，如果对象存储器有setter方法，存储器将不受影响，Object.isFrozen()检测对象是否冻结
        //可以用函数嵌套的方式调用他们
        //创建一个封闭对象，包括一个冻结的原型和一个不可枚举的属性
        var o = Object.seal(Object.create(Object.freeze({x:1}),{y:{value:2,writable:true}}))

        //对象序列化，，指将对象状态转化为字符串，也可将字符串还原为对象
        //JSON.stringify(),JSON.parse();用来序列化和还原js对象
        o = {x:1,y:{z:[false,null,""]}};
        s = JSON.stringify(o);
        p = JSON.parse(s);//p是o的深拷贝
        //JSON支持对象，数组，字符串，无穷大数字，true，false，null，并且它们可以序列化和还原，NaN，Infinity和—Infinity序列化的结果是null，日期对象序列化结果是ISO格式日期字符串，函数，RegExp，Error对象和undefined值不能序列化；只能序列化对象可枚举的自有属性，对一个不能序列化的属性来说，序列化输出字符串会将这个属性省略掉，
        //JSON.stringify(),JSON.parse()都可接受第二个参数

        //toString(),没有参数，将返回一个表示调用这个方法的对象值的字符串，由于默认的方法返回值带有的信息量很少，因此很多类都有自定义的toString（），比如Array.toString(),Date.toString(),Function.toString()
        //toLocaleString(),返回一个表示这个对象本地化的字符串，155
        //toJSON,Object.prototype实际上没这个方法，不过JSON.stringify()会先调用toJSON方法，如果存在就调用，返回值即是序列化结果

        //可以用负数或非整数来索引数组，这时候，数值转化为字符串字符串作为属性名来用，名字不是非负整数，只能做为常规订单对象属性，
        //数组索引只是对象属性名的一种特殊类型，意味着js数组没有“越界”错误概念，当试图查询任何对象中不存在的属性时，不会报错，只会undefined
        //数组是对象，那么他们能在原型中继承元素，数组可以定义元素的getter和setter方法
        //稀疏数组就是包含从0开始的不连续索引的数组，通常数组长度length代表数组元素个数，如果数组是稀疏的，length属性值大于元素个数，可以用Array（）构造函数或简单地指定数组的索引值大于当前数组长度来创建稀疏数组
         var a = new Array(5); //数组没有元素，但长度是5；
        a = [];
        a[1000] = 0 ;//赋值添加一个元素，但是设置length为1001
        //当在数组直接量中省略值时不会创建稀疏数组，省略元素值为undefined，这和元素根本不存在是有一些微妙的区别的
        var a1 = [,,,];
        var a2 = new Array(3);
        0 in a1;//true,在a1上0处有一个元素
        0 in a2;//false,在a2上0处没有元素
        //当省略数组直接量中的值时如[1,,3],也是稀疏数组，省略掉的值是不存在的
        var a1 = [,];
        var a2 = [undefined];
        0 in a1;//false
        0 in a2;//true

        //数组长度使其区别于常规的js对象
        //为了保证数组长度永远大于索引，，当为一个数组赋值时，length自动+1；当length属性为小于当前长度的非负整数n时，当前数组中那些索引大于或等于n的元素删除
        //当将length属性设置为大于当前长度，实际上并不会添加新元素，只是在数组结尾创建一个空的区域
        //Object.defineProperty()能让数组长度变成只读
        a = [1,2,3];
        Object.defineProperty(a,"length",{writable:false});
        a.length = 0;//a不会改变

        //push()尾部压入，unshift()，首部插入一个元素，delete删除数组元素与为其赋值undefined值是类似，如果从数组中删除一个元素，它就会变成稀疏数组
        //pop尾部删除元素并返回删除元素，shift从头部删除元素
        //splice()插入删除，或替换，根据需要修改length，并移动元素到更高或较低的索引处

        for (var i = 0;i <a.length;i++){
            if(!a[i]) continue;//跳过null，undefined和不存在元素
            if(a[i] === undefined)continue;//跳过undefined+不存在元素
            if(!(i in a)) continue;//跳过不存在元素
        }
        //处理稀疏变量
        for(var index in sparseArray){
            var value = sparseArray[index]
        }
        //跳过继承属性
        for(var i in a){
            if(!a.hasOwnProperty(i)) continue
        }
        //for/in遍历数组对象属性通常是升序的，但当数组同时拥有对象属性和数组元素，返回的属性名很可能是按照创建顺序而非数组大小顺序
        //forEach遍历数组新方法
        var data = [1,2,3,4,5];
        var sun = 0;
        data.forEach(function (x) {
            sum += x*x;
        })
        sum;//55,1+4+9+16+25

        //Array.join()所有元素转化为字符串，是String.split()的逆向操作
        var a = [1,2,3];
        a.join();//"1,2,3"
        a.join(" ");//"1 2 3"
        a.join("");//"123"
        var b = new Array(10);
        b.join();//'---------',9个连接符组成的字符串

        //Array.reverse()颠倒元素顺序
        // Array.sort()排序，包含undefined会被排到数组尾部，字符串按字母表顺序进行排序，也可传递一个比较函数假如第一个参数在前，比较函数应该返回一个小于0的数值，相等，顺序不变
        a.sort(function (a,b) {
            return a-b;
        })
        //Array.concat()创建并返回新数组
        var  a = [1,2,3];
        a.concat(4,5);//[1,2,3,4,5]
        a.concat([4,5]);//[1,2,3,4,5]
        a.concat([4,5],[6,7]);//[1,2,3,4,5,6,7]
        a.concat(4,[5,[6,7]]);//[1,2,3,4,5,[6,7]]

        //Array.slice()，返回数组指定片段
        var a = [1,2,3,4,5];
        a.slice(0,3);//[1,2,3]
        a.slice(3);//[4,5]
        a.slice(1,-1);//[2,3,4]
        a.slice(-3,-2);//[3]

        //Array.splice()在数组中插入或删除元素
        var a = [1,2,3,4,5,6,7,8]
        a.splice(4);//[5,6,7,8],a是[1,2,3,4]
        a.splice(1,2);//[2,3],a是[1,4]
        var a = [1,2,3,4,5];
        a.splice(2,0,"a","b");//返回[],a=[1,2,'a','b',3,4,5]
        a.splice(2,2,[1,2],3);//返回['a','b'],a=[1,2,[1,2],3,3,4,5]

        //push()在数组末尾添加元素，pop（）删除数组最后一个元素
        //unshift()在数组头部添加元素，shift在数组头删除一个元素
        //toString,toLocaleString,,toString结果与不传参数的join一样
        [1,[2,"c"]].toString();//'1,2,c'

        //数组中的方法；forEach(),map(),filter(),every(),some(),reduce(),reduceRight(),indexOf(),lastIndexOf;//168

        //数组类型Array.isArray()可以判断,instanceof只能用于简单类型
        Array.isArray([]);//true
        Array.isArray({});//false
        [] instanceof Array;//true
        ({}) instanceof Array;//false
        //instanceof问题是浏览器有很多窗口或窗体存在，每个窗口都有自己的运行环境，全局对象，每个全局对象有自己的一组构造函数
        var isArray = Function.isArray || function (o) {
                return typeof  o === "object" && Object.prototype.toString.call(o) === "[object Array]"
            }
            //这就是Array.isArray()函数所做的事

        //数组有一些特性是其它对象所没有的
            //当有元素添加到列表中时，length自动更新，设置length为一个较小的值会截断数组，从Array.prototype中继承一些有用的方法其类属性为Array
        //但他们不是定义数组的本质特性，可以把拥有一个数值length属性和对应非负整数属性对象看做一种类型的数组
        //虽然不能在他们身上直接调用数组方法或者期望length属性有什么特殊行为，但仍然可用针对真正数组遍历的代码来遍历他们，结论是很多数组算法针对类数组对象工作的很好，就像针对真正的数组一样，如果算法吧数组看成只读或者如果他们至少保持数组长度不变，如下
        var a = {};
        //添加一下属性，称为类数组
        var i= 0;
        while(i<10){
            a[i] = i*i;
            i++
        }
        a.length = i;
        //现在当做真正的数组遍历
        var total = 0;
        for (var j = 0;j<a.length;j++){
            total += a[j];
        }
        //Arguments对象就是一个类数组对象。在客户端js中，一些DOM方法（document.getElementsByTagName）是累数组对象，下面函数可以坚持累数组对象
        /**
         * 判断o是否是一个类数组对象，字符串和函数有length属性，但他们可以用typeof检测排除，在客户端js中，DOM文本节点也有length属性，需要用额外判断o.nodeType != 3 将其排除
         */
        function isArrayLike(o) {
            if(o && //非null、undefined
                typeof o === "object" && //是对象
                isFinite(o.length) && //是有限数组
                o.length >= 0 &&//是非负值
                o.length === Math.floor(o.length) &&//是整数
                o.length < 4294967296){//o.length < 2^32
                return true
            }else {
                return false
            }
        }
        //ECMAScript5中字符串的行为与数组类似（并且有些浏览器在之前已经让字符串变成可索引的了）；但在上述的类数组对象的检测方法针对字符串往往返回false，他们通常最好做字符串处理。而非数组
        //js数组方法特意定义为通用的，因此它们不仅应用在数组上，而且在类数组对象上都能正确工作，在ECMAScript5中，所有数组方法都是通用的（concat()方法是个特例：虽然可以用在类数组对象上，但它没有将那个对象扩充进返回的数组中），既然类数组对象没有继承自Array.prototype,那就不能在它们上面直接调用数组方法，但可以间接使用Function.call调用
        var a = {"0":"a","1":"b","2":"c",length:3};//类数组对象
        Array.prototype.join.call(a,"+");//"a+b+c"
        Array.prototype.slice.call(a,0);//["a","b","c"]真正的数组副本
        Array.prototype.map.call(a,function (x) {
            return x.toUpperCase();
        });//["A","B","C"]

        //在Firefox中
        Array.join.call(a,"+");//"a+b+c"
        Array.slice.call(a,0);//["a","b","c"]真正的数组副本
        Array.map.call(a,function (x) {
            return x.toUpperCase();
        });//["A","B","C"]
        //兼容写法
        Array.join = Array.join || function (a,sep) {
                return Array.prototype.join.call(a,sep)
            }
        Array.slice = Array.slice || function (a,sep) {
                return Array.prototype.slice.call(a,sep)
            }
        Array.map = Array.map || function (a,sep) {
                return Array.prototype.map.call(a,sep)
            }

        //作为数组的字符串，类似于只读数组，除了charAt（）方法外，还可以使用方括号
        var s = "test";
        s.charAt(0);//"t"
        s[1];//e
        //当然，给Array.isArray()传递字符串，返回false
        //字符串行为类似于数组，使得通用数组方法可以运用到字符串上
         var s = "JavaScript"
        Array.prototype.join.call(s,"");//"J a v a S c r i p t"
        Array.prototype.filter.call(s,function (x) {
            return x.match(/[^aeiou]/);//只匹配非元音字母
        }).join("");//"JvScrpt"
        //字符串是不可变值，故当数组看待时，他们是只读的，如push(),sort(),reverse()和splice()等数组方法在字符串上无效，会导致错误，出错没有提示

    },
    //类和模块
    classModule:function () {
        //类的实现基于原型继承机制，共享一些属性和方法，如果两个对象继承同一个原型，往往意味着他们是由同一个构造函数创建并初始化的（但不绝对）
        //返回一个新的范围对象
        function range(from,to) {
            //使用inherit函数来创建对象，这个对象继承自下面定义的原型对象
            //原型对象作为函数的一个属性存储，并定义所有范围对象所共享的方法
            var r = inherit(range.metods);
            //存储新的范围对象的起始位置和结束位置（状态）
            //这两个属性是不可继承的，每个对象都拥有唯一的属性
            r.from = from;
            r.to = to;
            return r;
        };
        range.methods = {
            includes:function (x) {
                return this.from <= x && x <=this.to;
            },
            //对范围内的每个整数都调用一次f
            foreach:function (f) {
                for(var x = Math.ceil(this.from);x<=this.to;x++) f(x);
            },
            toString:function () {return "("+this.from+"..."+this.to+")";}
        }
        var r = range(1,3);
        r.includes(2);//true
        r.foreach(console.log);//输出1 2 3
        console.log(r);//输出（1...3）

        //上面的方法并不常用，它没有定义构造函数，用关键字new，用构造函数的另一个特征就是，prototype属性被用做新对象的原型，同一个构造函数创建的所有对象
        function Range(from,to) {
            //存储起始位置和结束位置，不可继承，每个对象都有唯一属性
            this.from = from;
            this.to = to;
        }
        Range.prototype = {
            includes:function (x) {
                return this.from <= x && x <=this.to;
            },
            //对范围内的每个整数都调用一次f
            foreach:function (f) {
                for(var x = Math.ceil(this.from);x<=this.to;x++) f(x);
            },
            toString:function () {return "("+this.from+"..."+this.to+")";}
        }
        var r = new Range(1,3);
        r.includes(2);//true
        r.foreach(console.log);//输出1 2 3
        console.log(r);//输出（1...3）
        //类名大写,通过new调用

        //构造函数和类的标识，原型对象是累的唯一标识
        r instanceof Range;//如果r继承自Range.prototype，则返回true
        r instanceof Object;//true
        //实际上instanceof不会检查r是否由Range()构造函数初始化而来，而会检查r是否继承自Range.prototype。不过instanceof语法强化了构造函数是类共有的标识概念
        //每个js函数（ECMAScript5中的Function.bind()方法返回的函数除外）都拥有一个prototype属性，这个属性值是一个对象，这个对象包含唯一一个不可枚举属性constructor，值是一个函数对象
        var F = function () {};//这是一个函数对象
        var p = F.prototype;//这是F想关联的原型对象
        var c = p.constructor;//这是与原型相关联的函数
        c === F;//true;对任意函数F.prototype.constructor == F
        //预先定义的constructor属性，指向它们的构造函数，由于构造函数是类的“公共标识”，因此cinstructor属性为对象提供了类；
        var o = new F();
        o.constructor === F;//true,constructor指代这个类
        //上面Range()重写了Range.prototype属性，因此不含constructor属性，我们可以自己添加
        Range.prototype = {
            constructor : Range,//显式设置构造函数反向引用
            includes:function (x) {
                return this.from <= x && x <=this.to;
            },
            //对范围内的每个整数都调用一次f
            foreach:function (f) {
                for(var x = Math.ceil(this.from);x<=this.to;x++) f(x);
            },
            toString:function () {return "("+this.from+"..."+this.to+")";}
        }
        //扩展prototype而不是重写，这样就自动创建Range.prototype.constructor
        Range.prototype.includes = function (x) {return this.from <=x&&x<=this.to};

        //js类继承
        //一个用于定义简单类的函数
        function defineClass(constructor,//用以设置实例的属性的函数
        methods,//实例的方法，复制至原型中
        statics) {//类属性，复制至构造函数中
            if(methods) extend(constructor.prototype,methods);
            if(statics) extend(constructor,statics);
            return constructor;
        }
        //Range的另类实现
        var SimpleRange = defineClass(function (f,t) {this.f = f;this.t = t},
            {
                includes:function (x) {
                    return this.from <= x && x <=this.to;
                },
                //对范围内的每个整数都调用一次f
                foreach:function (f) {
                    for(var x = Math.ceil(this.from);x<=this.to;x++) f(x);
                },
                toString:function () {return "("+this.from+"..."+this.to+")";}
            },
            {upto:function (t) {return new SimpleRange(o,t);}})
        //表示复数的类，复数是实数和虚数的和，并且虚数i是-1的平方根
        function Complex(real,imaginary) {
            if(isNaN(real) || isNaN(imaginary)){
                throw new TypeError();
            }
            this.r = real;
            this.i = imaginary;
        }
        //定义复数相加
        Complex.prototype.add = function (that) {
            return new Complex(this.r+that.r,this.i+that.i);
        };
        //相乘
        Complex.prototype.mul = function (that) {
            return new Complex(this.r*that.r-this.i*that.i,this.r*that.i+this.i*that.r)
        }
        //求模
        Complex.prototype.mag = function () {
            return Math.sqrt(this.r*this.r+this.i*this.i)
        }
        //求负
        Complex.prototype.neg = function () {
            return new Complex(-this.r,-this.i)
        }
        //转化为字符串
        Complex.prototype.toString = function () {
            return "{"+this.r+","+this.i+"}"
        }
        //判断相等
        Complex.prototype.equals = function (that) {
            return that != null && //不能为空
                that.constructor === Complex && //必须是Comolex实例
                this.r === that.r && this.i === that.i;//包含相同的值
        }
        var c = new Complex(2,3);//使用构造函数创建新的对象
        //创建对象之后的原型属性发生改变，也会影响继承这个原型的所有实例对象
        //instanceof运算符，左侧是待检测其类对象，右侧是定义类的构造函数。实际上是继承关系而不是检查创建对象的构造函数
        //isPrototypeOf检查原型链上是否存在特定原型对象
        range.methods.isPrototypeOf(r);//range.method 是原型对象
        //每个窗口和框架子页都具有单独执行上下文，，每个上下文都包含独有的全局变量和一组构造函数，在两个不同框架页面中创建的两个数组继承自两个相同但相互读立的原型对象，其中一个框架页面中的数组不是另一个框架页面的Array构造函数实例，instanceof运算结果是false
        //constructor属性，识别对象是否属于某个类的方法
        function typeAndValue(x) {
            if(x == null) return "";//Null和undefined没有构造函数
            switch (x.constructor){
                case Number:return "Number: "+x;//处理原始类型
                case String:return "String: '"+x +"'";
                case Date:return "Date: "+x;//处理内置类型
                case RegExp:return "Regexp: "+x;
                case Complex:return "Complex: "+x;//处理自定义类型
            }
        }

        /**
         * 如果o是null，返回“null”，是NaN返回“nan”，
         * 如果typeof所返回的值不是“object”，则返回这个值
         * 如果o的类不是Object，则返回这个值
         * 如果o包含构造函数并且这个构造函数具有名称，则返回这个名称
         * 否则，一律返回“Object”
         */
        function type(o) {
            var t,c,n;//type,class,name
            if(o === null) return "null";//处理null特殊情形
            if(o !== o) return "nan";//另一种特殊情况NaN
            //如果值不是object，则使用这个值，可以识别出原始值的类型和函数
            if((t = typeof o) !== "object") return t;
            //返回对象类名，除非值为“object”，可以识别大多数内置函数
            if(c = classof(o) !== "Object") return c;
            //如果对象构造函数名字存在的话，则返回它
            if(o.constructor && typeof  o.constructor === "function" && (n = o.constructor.getName())) return n;
            //其它类型都无法判别，一律返回“Object”
            return "Object"
        }
        //返回对象类
        function classof(o) {
            return Object.prototype.toString.call(o).slice(8,-1)
        };
        //返回函数名字（可能是空字符串），不是函数返回null
        Function.prototype.getName = function () {
            if("name" in this) return this.name;
            return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
        }
        //并不是所有对象都有constructor属性，此外，并不是所有的函数都有名字
        //这个木有名字
        var Complex = function (x,y) {
            this.r = x;
            this.i = y;
        }
        //这个有名字
        var Range = function Range(f,t) {
            this.from = f;
            this.to = t;
        }
        //用鸭式辨型理论定义的，用以检查一个对象是否实现剩下的参数所表示的方法，对了除第一个参数外的每个参数，如果是字符串则直接检查是否存在以它命名的方法，如果是对象的话检查第一个对象中的方法是否在这个对象中也具有同名方法，如果参数是函数，则假定它是构造函数，将检查在第一个对象实现的方法是否在构造函数的原型对象中也具有同名方法
        function quacks(o/*,...*/) {
            for (var i = 1;i<arguments.length;i++){
                var arg = arguments[i];
                switch (typeof arg){
                    case "string":
                        if(typeof o[arg] !== "function") return false;
                        continue;
                    case 'function':
                        arg = arg.prototype;//参数是函数则用它原型，进入下一个case
                    case 'object':
                        for(var m in arg){//遍历对象的每个属性
                            if(typeof arg[m] !== "function") continue;//跳过不是方法的属性
                            if(typeof o[m] !== "function") return false
                        }
                }
            }
            //如果程序执行到这里，说明o实现了所有方法
            return true;
        }
        //实现了js值到唯一字符串的映射
        function Set() {//这是一个构造函数
            this.valus = {};//集合数据保存在对象属性里
            this.n = 0;//集合中值的个数
            this.add.apply(this,arguments);//把所有参数都添加进这个集合
        }
        Set.prototype.add = function () {
            for(var i = 0;i<arguments.length;i++){
                var val = arguments[i];
                var str = Set._v2s(val);//把值转化为字符串
                if(!this.valus.hasOwnProperty(str)){//如果不在集合中
                    this.valus[str] = val;
                    this.n++
                }
            }
            return this;//支持链式方法调用
        }
        Set.prototype.remove = function () {
            for(var i=0;i<arguments.length;i++){
                var str = Set._v2s(arguments[i]);//将字符串和值对应起来
                if(this.valus.hasOwnProperty(str)){
                    delete  this.valus[str];
                    this.n--;
                }
            }
            return this;//支持链式方法调用
        }
        //如果包含这个值，则返回true，否则，返回false
        Set.prototype.contains = function (value) {
            return this.valus.hasOwnProperty(Set._v2s(value));
        }
        //返回集合大小
        Set.prototype.size = function () {
            return this.n;
        }
        //遍历集合所有元素，在指定上下文中调用f
        Set.prototype.foreach = function (f,context) {
            for(var s in this.valus){
                if(this.valus.hasOwnProperty(s)){//忽略继承属性
                    f.call(context,this.valus[s]);//调用f，传入value
                }
            }
        }
        //这是内部函数，用以将任意js值和唯一字符串对应起来
        Set._v2s = function (val) {
            switch (val){
                case undefined: return "u";//特殊的原始值
                case null:      return "n";
                case true:      return "t";
                case false:     return "f";
                default:switch (typeof val){
                    case 'number':return "#"+val;//数字都带有#前缀
                    case 'string':return '"'+val;
                    default:return "@"+objectId(val);//objs and funcs get @
                }
            }
            //对任意对象都会返回一个字符串，对不同对象返回不同字符串，同一对象多次调用返回相同字符串，为了做到这一点，它给o创建了一个属性，在es5中，这个属性是不可枚举且是可读的
            function objectId(o) {
                var prop = "|**objectid**|";//私有属性，用来存放id
                if(!o.hasOwnProperty(prop)){//如果对象没有id
                    o[prop] = Set._v2s.next++;//将下个值赋给他
                }
                return o[prop];//返回这个id
            }
        }
        Set._v2s.next = 100;//设置初始id

        //创建一个新的枚举类型，实参对象表示类的每个实例的名字和值
        //返回值是一个构造函数，它标识这个新类
        //也会抛出异常，不能使用它来创建该类型的新实例
        //返回的构造函数包含名/值对的映射表
        //包括由值组成的数组，以及一个foreach（）迭代器
        function enumeration(namesToValues) {
            //这个虚拟的构造函数是返回值
            var enumeration = function () {throw "Can't Instantiate Enumerations";}
            //枚举值继承自这个对象
            var proto = enumeration.prototype = {
                constructor:enumeration,
                toString:function () {return this.name},
                valueOf:function () {return this.value},
                toJSON:function () {return this.name}
            };
            enumeration.values = [];//用以存放枚举对象的数组
            //现在创建新类型的实例
            for(name in namesToValues){//遍历每个值
                var e = inherit(proto);//创建一个代表它的对象
                e.name = name;//给他一个名字
                e.value = namesToValues[name];//给他一个值
                enumeration[name] = e;//将他设置为构造函数的属性
                enumeration.values.push(e);//将它存储到值数组中
            }
            enumeration.foreach = function (f,c) {
                for(var i = 0;i<this.values.length;i++) f.call(c,this.values[i]);
            };
            return enumeration;
        }
        //使用枚举类型表示一副扑克牌
        function Card(suit,rank) {
            this.suit = suit;//每张牌都有花色
            this.rank = rank;//以及点数
        }
        //使用枚举类型定义花色和点数
        Card.Suit = enumeration({Clubs:1,Diamond:2,Hearts:3,Spades:4});
        Card.Rank = enumeration({Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14});
        Card.prototype.toString = function () {//描述牌面文本
            return this.rank.toString()+"of"+this.suit.toString();
        };
        //比较扑克牌中两张牌的大小
        Card.prototype.compareTo = function (that) {
            if(this.rank < that.rank) return -1;
            if(this.rank > that.rank) return 1;
            return 0 ;
        }
        //以扑克牌的玩法规则对扑克牌进行排序的函数
        Card.orderByRank = function (a,b) {return a.compareTo(b);};
        //以桥牌玩法排序
        Card.orderBySuit = function (a,b) {
            if(a.suit < b.suit) return -1;
            if(a.suit > b.suit) return 1;
            if(a.rank < b.rank) return -1;
            if(a.rank > b.rank) return 1;
        };
        //定义一副表示标准扑克牌的类
        function Deck() {
            var cards = this.cards = [];
            Card.Suit.foreach(function (s) {
                Card.Rank.foreach(function (r) {
                    cards.push(new Card(s,r));
                });
            });
        }
        //洗牌方法，重新洗牌并返回洗好的牌
        Deck.prototype.shuffle = function () {
            //遍历数组中的每个元素，随机找出牌面最小的元素，并与之（当前遍历的元素）交换
            var deck = this.cards,len = deck.length;
            for(var i = len-1;i>0;i--){
                var r = Math.floor(Math.random()*(i+1)),temp;//随机数
                temp = deck[i],deck[i] = deck[r],deck[r]=temp;//交换
            }
            return this;
        }
        //发牌方法：返回牌的数组
        Deck.prototype.deal = function (n) {
            if(this.cards.length <n) throw "Out of Cards";
            return this.cards.splice(this.cards.length - n,n)
        };
        //创建一副新扑克牌，洗牌并发牌
        var deck = (new Deck()).shuffle();
        var hand = deck.deal(13).sort(Card.orderBySuit)
        //将这些方法添加至Set类原型对象中
        extend(Set.prototype,{
            //将集合转换为字符串
            toString:function () {
                var s = "{",
                    i = 0;
                this.foreach(function (v) {s += ((i++>0)?",":"")+v;});
                return s+"}";
            },
            //类似toString，但对所有值将调用toLocaleString
            toLocaleString:function () {
                var s = "{",i=0;
                this.foreach(function (v) {
                    if(i++>0) s+=",";
                    if(v == null) s+=v;//null和undefined
                    else s += v.toLocaleString()
                });
                return s +"}"
            },
            //将集合转化为数组
            toArray:function () {
                var a = [];
                this.foreach(function (v) {
                    a.push(v);
                });
                return a;
            }
        })
        //对于要从JSON转换为字符串的集合都被当做数组来对待
        Set.prototype.toJSON = Set.prototype.toArray;
        //相等比较
        //Range类重写它的constructor属性，现在将它添加进去
        Range.prototype.constructor = Range;
        //一个Range对象和其它不是range的对象均不相等,当且仅当两个范围的端点相等，他们才相等
        Range.prototype.equals = function (that) {
            if(that == null) return false;//处理null和undefined
            if(that.constructor !== Range) return false;
            return this.from == that.from && this.to == that.to;
        }
        //Set类方法稍微复杂，不能简单比较values属性，还要进行更深层次比较
        Set.prototype.equals = function (that) {
            //一些次要情况的快捷处理
            if(this === that) return true;
            //如果that对象不是一个集合，它和this不相等
            //我们用到instanceof，可用于Set的任何子类，可以通过this.constructor == that.constructor来加强检查的严格程度
            //null和undefined不能用于instanceof运算
            if(!(that instanceof Set)) return false;
            if(that.size() !=that.size())return false;
            //检查是否完全相等，不相等则抛出异常来终止foreach循环
            try{
                thia.foreach(function (v) {
                    if(!that.contains(v)) throw false;
                })
                return true
            }catch (x){
                if(x === false) return false;//如果集合中有元素在另一个集合中不存在
                throw x;//重新抛出异常
            }
        }

        //定义子类
        B.prototype = inherit(A.prototype);//子类派生自父类
        B.prototype.constructor = B;//重载继承来的constructor属性
        //这两行代码是js中创建子类的关键，如果不这样做，原型对象仅仅是一个普通对象，它只继承自Object.prototype.这意味着你的类和所有的类一样是Object的子类。如果这两行代码添加至defineClass()函数中，可以将它变成例9-11中的defineSubclass()函数和Function.prototype.extend()方法
        //用一个简单的函数创建简单的子类
        function defineSubcalss(superclass,//父类的构造函数
                                constructor,//新的子类构造函数
                                methods,//实例方法：复制至原型中
                                statics) {//类属性：复制至构造函数中
            //建立子类的原型对象
            constructor.prototype = inherit(superclass.prototype);
            constructor.prototype.constructor = constructor;
            //像对常规类一样复制方法和类属性
            if(methods) extend(constructor.prototype,methods);
            if(statics) extend(constructor,statics);
            //返回这个类
            return constructor;
        }
        //也可以通过父类构造函数的方法来做到这一点
        Function.prototype.extend = function (constructor,methods,statics) {
            return defineSubcalss(this,constructor,methods,statics);
        }
        //一个简单的子类
        function SingletonSet(member) {
            this.member = member;//记住集合中唯一成员
        }
        //创建一个继承自Set的原型的原型对象
        SingletonSet.prototype = inherit(Set.prototype);
        //给原型添加属性，如果有同名属性，则覆盖
        extend(SingletonSet.prototype,{
            //设置合适的construtor属性
            constructor:SingletonSet,
            //这个集合是只读的：调用add()和remove()都会报错
            add:function () {throw "red-only set"},
            remove:function () {throw "red-only set"},
            //SingletonSet实例中永远只有一个元素
            size:function () {return 1;},
            //这个方法只调用一次，传入这个集合的唯一成员
            foreach:function (f,context) {f.call(context,this.member)},
            //contains()：检查传入的值是否匹配这个集合唯一成员
            contains:function (x) {
                return x === this.member;
            }
        })
        //定义自己的equals版本
        SingletonSet.prototype.equals = function (that) {
            return that instanceof  Set && that.size()==1&&that.contains((this.member))
        };

        //定义不可枚举的属性，将代码包装在一个匿名函数中，这样定义的变量就在这个函数作用域内
        (function () {
            //定义一个不可枚举属性objectId，它可以被所有对象继承，当读取这个属性是调用getter函数，没有定义setter，因此它是只读的，它是不可配置的，因此它是不能删除的
            Object.defineProperty(Object.prototype,"objectId",{
                get:idGetter,//取值器
                enumerable:false,
                configurable:false
            });
            //当读取objectId的时候直接调用这个getter函数
            function idGetter() {//getter函数返回该id
                if(!(idprop in this)){//如果对象中不存在id
                    if(!Object.isExtensible(this)){//并且可以增加属性
                        throw Error("Can't define id for nonextensible objects")
                    }
                    Object.defineProperty(this,idprop,{//给他一个值
                        value:nextid++,
                        writable:false,//只读
                        enumerable:false,//不可枚举
                        configurable:false//不可删除的
                    });
                }
                return this[idprop];//返回已有的或新的值
            };
            //idGetter()遇到了这些变量，这些都属于私有变量
            var idprop = "|**objectId**|";//假设这个属性没有遇到
            var nextid = 1;//给他设置初始值
        }())
        //创建一个不可变的类，它的属性和方法都是只读的，可以由new调用，也可以省略new，可以做构造函数也可以做工厂函数
        function Range(from,to) {
            //这些是对from和to只读属性的描述符
            var props = {
                from:{value:from,enumerable:true,writable:false,configurable:false},
                to:{value:to,enumerable:true,writable:false,configurable:false}
            };
            if(this instanceof  Range){//如果作为构造函数来调用
                Object.defineProperties(this,props);//定义属性
            }else {//否则，作为工厂方法来调用
                return Object.create(Range.prototype,props);//创建并返回这个新Range对象，属性有props指定
            }
        }

    }

};