/**
 * Created by wcl_fxtrip on 2015/3/25.
 * @parma  main 主体div
 * @parma  contenItem 列表样式
 * @parma  header 头部ID
 * @parma  back   返回按钮
 * @parma  pageOutClass  页面退出样式
 * @parma  pageInClass   页面进入样式
 *
 * @author  wcl
 * @demo    http://wangchunling.github.io/pageSlide/
 * QQ  413349974
 */
;(function(){
    $.fn.pageSlide=function(parma){
        var main=$(parma.main),
            header=$(parma.header),
            back=parma.back,
            pageOutClass=parma.pageOutClass,
            pageInClass=parma.pageInClass;

        function pageSlideOver(){
            $('.'+pageOutClass).live('transitionend', function(){
                $(this).removeClass(parma.pageOutClass);
            });
            $('.'+pageInClass).live('transitionend', function(){
                $(this).removeClass(parma.pageInClass);
            });
        }

        main.on('tap',parma.contenItem, function(e){
            var $pageTo = $('.'+$(this).data("page")),
                name = $(this).data("page").substring(5);
            $(this).parents('.page').removeClass('page-active').addClass('page-prev page-out');
            $pageTo.removeClass('page-next').addClass('page-active page-in');
            pageSlideOver();
            $('.'+back).css({display:"block"}).data({"page":"page-index"});
            history.pushState({"page": name}, "" , "?page="+name);
        });
        header.on('tap', '.'+parma.back, function(){
            $('.page-active').removeClass('page-active').addClass('page-next page-out');
            $('.'+$(this).data('page')).removeClass('page-prev').addClass('page-active page-in');
            pageSlideOver();
            $('.'+back).css({display:"none"});
            history.go(-1);
        });
    }
})()