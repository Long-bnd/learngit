        var g=function(node){
            if(node.substr(0,1)=="#"){
                return document.getElementById(node.substr(1));
            }
        }
        var banner=g("#banner");
        var controls=g("#controls");
        var controlsLis=controls.getElementsByTagName("li");
        var timer=null;//设置定时器
        var num=0;
        for(var i=0;i<controlsLis.length;i++){
            controlsLis[i].index=i;
            controlsLis[i].onclick=function(){
                clearInterval(timer);
                for(var j=0;j<controlsLis.length;j++){
                    controlsLis[j].className=''//把所有的控制按钮颜色都去掉
                }
                this.className='star';//当前点击的按钮变色
                banner.style.left=-940*this.index+"px";
                num=this.index;
                autoPlay();
            }
        }
        function autoPlay(){
            timer=setInterval(function(){
                if(num>=4){
                    num=0;
                }
                for(var j=0;j<controlsLis.length;j++){
                    controlsLis[j].className=''//把所有的控制按钮颜色都去掉
                }
                controlsLis[num].className='star';
                banner.style.left=-940*num+"px";
                num++;
            },1000)
        }
        autoPlay();