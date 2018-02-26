var list=document.getElementById('maindetailselect');
var btn=list.getElementsByTagName('a');
var div=list.getElementsByTagName('div');
var backtop = document.getElementById('backtop');
for(i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
        for(j=0;j<btn.length;j++){
            btn[j].className='l';
            div[j].style.display='';
        }
        this.className='active l';
        div[this.index].style.display='block';
    }
}
    var img1=document.getElementById('detailmainimg1');
    var bigger=document.getElementById('bigger');
    var show=document.getElementById('biggershow');
    var img=document.getElementById('biggerimg');
    var x=0;
    var y=0;
    var main=document.getElementById('detailmainleft')
    img1.onmouseover=function(ev){
        bigger.style.display='block';
        show.style.display='block';
        console.log(123);
        document.onmousemove=function(ev){

        x=ev.pageX-50-main.offsetLeft;
        y=ev.pageY-50-main.offsetTop;
        if(x<0){
            x=0;
        }
        else if(x>527-50){
            x=img1.offsetWidth-bigger.offsetWidth;
        };
        if(y<0){
            y=0;
        }
        else if(y>512-50){
            y=img1.offsetHeight-bigger.offsetHeight;
        };
        bigger.style.left=x+'px';
        bigger.style.top=y+'px';
        img.style.left=-x*4+'px';
        img.style.top=-y*4+'px';
        }
        return false;
        }


    document.onmouseout=function(){
        bigger.style.display='none';
        show.style.display='none';
    }
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 300){
            backtop.style.display='block';
            console.log(123);
        }
        else{
            backtop.style.display='none';
            console.log(456);
        }
    }