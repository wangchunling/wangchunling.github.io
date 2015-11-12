参数
this.option = {
        resourceType : 'image', //资源类型，默认为图片
        baseUrl : './', //基准url
        resources : [], //资源路径数组
        onStart : null, //加载开始回调函数，传入参数total
        onProgress : null, //正在加载回调函数，传入参数currentIndex, total
        onComplete : null //加载完毕回调函数，传入参数total
 };

调用
var loader = new resLoader({
        resources : arr,
        onStart : function(total){

        },
        onProgress : function(current, total){

        },
        onComplete : function(total){

        }
});

