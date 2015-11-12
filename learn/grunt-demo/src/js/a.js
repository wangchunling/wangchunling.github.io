  window.onload = function(){

            var oUl = document.getElementById('ul1');
            var oDiv = document.getElementById('div1');

            oDiv.ondragenter = function(){
                this.innerHTML = 'eeee中文';
            };

            oDiv.ondragover = function(ev){
                ev.preventDefault();
            };

            oDiv.ondragleave = function(){
                this.innerHTML = 'ddddddd';
            };

            oDiv.ondrop = function(ev){

                ev.preventDefault();

                var fs = ev.dataTransfer.files;

                for(var i=0;i<fs.length;i++){

                    var fr = new FileReader();

                    if( fs[i].type.indexOf('image')!=-1 ){

                        fr.readAsDataURL( fs[i] );

                        fr.onload = function(){
                            var oLi = document.createElement('li');
                            var oImg = document.createElement('img');
                            oImg.src = this.result;
                            oLi.appendChild( oImg );
                            oUl.appendChild( oLi );
                        };
                    }
                    else{
                        alert('gagagag');
                    }

                }

            };

        };