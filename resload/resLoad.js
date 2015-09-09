/**
 * Created by wcl_fxtrip on 2015/8/26.
 * onStart(total) 总共数量
 * onProgress(current,total) current 已经加载数量   total 总共数量
 * onComplete 加载完成
 * author wcl
 */
;(function(root,factory){
    if(typeof define ==='function' && define.amd ){
        define(factory)
    }else if(typeof exports ==='object'){
        module.exports = factory()
    }else{
        root.resLoader = factory()
    }
}(this, function(){
    var isFunc = function(f){
        return typeof f === 'function';
    }
    var resLoader = function(config){
        this.option = {
            resourceType : 'image', //资源类型，默认为图片
            baseUrl : './', //基准url
            resources : [], //资源路径数组
            onStart : null, //加载开始回调函数，传入参数total
            onProgress : null, //正在加载回调函数，传入参数currentIndex, total
            onComplete : null //加载完毕回调函数，传入参数total
        };

        for(var i in config){
            this.option[i]=config[i]
        }
        this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
        this.total = this.option.resources.length || 0; //资源总数
        this.currentIndex = 0; //当前正在加载的资源索引
    }
    resLoader.prototype.start = function(){
        this.status = 1;
        var _this = this;
        var baseUrl = this.option.baseUrl;
        for(var i=0,l=this.option.resources.length; i<l; i++){
            var r = this.option.resources[i];
            if(r.indexOf('http://')===0 || r.indexOf('https://')===0){
                url = r;
            }
            else{
                url = baseUrl + r;
            }
            var image = new Image();
            image.onload = function(){_this.loaded();};
            image.onerror = function(){_this.loaded();};
            image.src = url;
            console.log(image)

        }
        isFunc(this.option.onStart) && this.option.onStart(this.total) || {}
    };
    resLoader.prototype.loaded = function(){
        if(isFunc(this.option.onProgress)){
            this.option.onProgress(++this.currentIndex, this.total);
        }
        //加载完毕
        if(this.currentIndex===this.total){
            if(isFunc(this.option.onComplete)){
                this.option.onComplete(this.total);
            }
        }
    }
    return resLoader
}))