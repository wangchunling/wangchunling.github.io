/**
 * Created by fxtrip on 2014/12/1.
 */
define('waterfall',function(require,exports,module){
    var $=require('zepto');
    var waterfall=function(){
        var $box = $('.main>div');
        var w = $box.eq(0).width();
        var cols = 2;
        $('.main').css('margin', '0 auto');
        var harry = [];
        $box.each(function (index, value) {
            var h = $box.eq(index).height();//取每个div的高度
            if (index < cols) {
                harry.push(h);
            } else {
                var minH = Math.min.apply(null, harry); //获取数组里最小高度的值
                console.log(minH)
                var minHindex = $.inArray(minH, harry);//获取数组里最小高度的索引
                console.log(minHindex);
                $(value).css({
                    'position': 'absolute',
                    'top': minH + 'px',
                    'left': minHindex * w + 'px'
                });
            }
            harry[minHindex] += $box.eq(index).height()
        });
    };
    waterfall();
    addEventListener('resize',function(){
        waterfall()
    });
});



