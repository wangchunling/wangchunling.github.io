/**
 * Created by fxtrip on 2015/1/19.
 */
(function(){
    var calcPrise=function(parmas){
        var _this=this;
        _this.id=_this.$$(parmas.id);
        _this.option={
            leftBtn:_this.$$(parmas.leftBtn),
            rightBtn:_this.$$(parmas.rightBtn),
            count:_this.$$(parmas.count),
            prise:_this.$$(parmas.prise),
            countPrise:_this.$$(parmas.countPrise)
        };
        _this.init(_this.option);
    };
    calcPrise.prototype={
        $$:function(id){
            return document.getElementById(id)
        },
        addEventCheck : function( obj, evt, fn ){
            obj.addEventListener( evt, fn, false);
        },
        countPrise:function(){
            var _this=this;
            if(event.target==_this.option.leftBtn){
                _this.option.count.innerText++;
                _this.option.countPrise.innerText='总价:￥'+_this.option.count.innerText*_this.option.prise.innerText;
                console.log(_this.option.count.innerText,_this.option.prise.innerText)
            }else{
                if(_this.option.count.innerText<1){
                    return false
                }else{
                    _this.option.count.innerText--;
                }
                _this.option.count.innerText--;
            }
        },
        init:function(option){
            var _this=this;
            _this.addEventCheck(_this.option.leftBtn,'click',function(){
                _this.countPrise()
            });
            _this.addEventCheck(_this.option.rightBtn,'click',function(){
                _this.countPrise()
            })
        }
    };
    var calc=new calcPrise({
        id:'ceshi',
        leftBtn:'leftBtn',
        rightBtn:'rightBtn',
        count:'count',
        prise:'prise',
        countPrise:'countPrise'
    })
}());