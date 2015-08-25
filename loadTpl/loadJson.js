/**
 * Created by wcl_fxtrip on 2015/8/25.
 */
var load = (function (id){
    var _this = this ;
    var obj = document.getElementById(id);
    _this.loadTpl = function(){
        var tpl = obj.dataset.tpl,
            clone = document.importNode(document.getElementById(tpl).content,true);
        obj.appendChild(clone);
         },
        _this.ajax = function(url,fnBefore,fnSucc, fnFaild){
            var oAjax = null;
            if(window.XMLHttpRequest){
                oAjax = new XMLHttpRequest();
            }else{
                oAjax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            oAjax.open('GET', url, true);
            oAjax.send();
            oAjax.onreadystatechange = function(){
                if(oAjax.readyState == 2){
                    fnBefore = fnBefore() || {}
                }else if(oAjax.readyState == 4){
                    if(oAjax.status == 200){
                        fnSucc(oAjax.responseText)
                    }else{
                        if(fnFaild){
                            fnFaild();
                        }
                    }
                }
            };
        },
        _this.loadJson=function(data){
            var json = obj.dataset.json;
            _this.ajax(json,function(){
                console.log('before')
            },function(data){
                var data = JSON.parse(data);
                var div = document.createElement('div');
                div.textContent = data
                document.body.appendChild(div)
                console.log(data)
            })
        };
    return _this
});
