/**
 * Created by fxtrip on 2015/3/12.
 * drawLine 利用线画形状
 * drawImg  将图片保存在canvas上
 * 构造函数原型设计模式
 * canvas 是按照元素的上下文执行的 内存中只想一个 所以面向对象暂时不可用
 */
(function(){
   var canvas=function(parmas){
       if(!parmas) return false;
       var _this=this;
       _this.id=parmas.id;
       _this.src=parmas.src;
       _this.canvas=_this.$(_this.id);
       _this.ctx=_this.canvas.getContext('2d');
   }
    canvas.prototype={
        $:function(id){
            return document.getElementById(id);
        },
        drawLine:function(x,y,w,h){
            var _this=this;
            var ctx=_this.ctx;
            ctx.fillStyle='yellow';
            return ctx.fillRect(x,y,w,h)
        },
        drawCir:function(){
            var _this=this;
            var ctx=_this.ctx;
            ctx.beginPath();
            ctx.arc(60, 60, 50, 0, Math.PI *1, true);
            ctx.fillStyle='yellow';
            ctx.fill()
        },
        drawImg:function(){
            var _this=this;
            var img=new Image();
            img.src=_this.src;
            img.onload=function() {
                _this.ctx.drawImage(img, 0, 0)
            }
        }
    }
    var canvas1=new canvas({
        id:'demo',
        src:'img/footer-mark.jpg'
    });
    var canvas2=new canvas({
        id:'demo2',
        src:'img/footer-mark.jpg'
    })
    canvas1.drawCir()
    //canvas2.drawImg()
    canvas2.drawLine(0,0,200,100);
}());
