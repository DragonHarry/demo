var phonenum = document.getElementById('inputname');
var loginprove= document.getElementById('loginprove');
var btn= document.getElementById('loginbtn');
phonenum.onblur = function(){
        var val = this.value.trim();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                loginprove.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET','http://localhost/demo/dist/php/login.php?username='+val,true);
        xhr.send(null);

    };
    btn.onclick=function(){
         if(loginprove.innerHTML==''&&phonenum){
            window.location.href = 'index.html';
        }
        else if(phonenum.value==''){
           loginprove.innerHTML='请输入用户名！'
        }
        else{
            loginprove.innerHTML='请输入用户名！'
        }
    }