var phonenumber = document.getElementById('inputphone');
var prove= document.getElementById('prove');
phonenumber.onblur = function(){
        var val = this.value.trim();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                prove.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET','http://localhost/demo/dist/php/register.php?username='+val,true);
        xhr.send(null);
    };