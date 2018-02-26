    var main = document.getElementById('main1mid');
    var list = document.getElementById('mainlist');
    var listLi = list.getElementsByTagName('li');
    var rightlist=document.getElementById('rightlist');
    var backtop = document.getElementById('backtop');

    var num = 0;
    var timer;

    // for(var i=0;i<listLi.length;i++){

    //     btnLi[i].index = i;

    //     btnLi[i].onclick = function(){
    //         // for(var i=0;i<btnLi.length;i++){
    //         //     btnLi[i].className = '';
    //         // }
    //         // this.className = 'active';
    //         list.style.left = - this.index * 255 + 'px';
    //         num = this.index;
    //     };
    // }

    main.onmouseover = function(){
        clearInterval(timer);
    };
    main.onmouseout = function(){
        timer = setInterval(run,2000);
    };

    timer = setInterval(run,2000);

    function run(){

        // for(var i=0;i<btnLi.length;i++){
        //     btnLi[i].className = '';
        // }
        if(num == listLi.length-4){
            num = 0;
        }
        else{
            num++;
        }
        // btnLi[num].className = 'active';

        list.style.left = - num * 255 + 'px';
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
