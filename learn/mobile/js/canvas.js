/**
 * Created by fxtrip on 2015/3/12.
 * drawLine 利用线画形状
 * drawImg  将图片保存在canvas上
 */
(function(){
    var canvas={
        $:function(id){
            return document.getElementById(id);
        },
        drawLine:function(obj,x,y,w,h){
            var _this=this;
            var canvas=_this.$(obj.id);
            var ctx=canvas.getContext('2d');
            return ctx.fillRect(x,y,w,h)
        },
        drawImg:function(obj){
            var _this=this;
            var canvas=_this.$(obj.id);
            var ctx=canvas.getContext('2d');
            var img=new Image();
            img.src=obj.src;
            img.onload=function() {
                ctx.drawImage(img, 0, 0)
            }
        }
    };
    canvas.drawImg({
        id:'demo',
        src:'img/m_booklet.jpg'
    });
    canvas.drawImg({
        id:'demo2',
        src:'img/footer-mark.jpg'
    })
}());