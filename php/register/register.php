<?php
    //当前php页面的编码
    header('Access-Control-Allow-Origin: *;Content-Type:text/html; charset=utf-8');
    //链接数据库
    $con = mysqli_connect('localhost','root','','memebox');
    //指定往数据库添加数据的编码
    mysqli_query($con,'set names utf8');


    $username = $_REQUEST['username'];

    $sql = "select * from meme-list where phonenum = '$username'";
    $query = mysqli_query($con,$sql);

    if($query && mysqli_num_rows($query) ){
        echo '已经有人注册了';

    }
    else{
        $sql = "insert into meme-list(phonenum) values('$username')";
        $query = mysqli_query($con,$sql);
        if($query){
            echo '可以注册！！！';
            // echo '<script> setTimeout(function(){ window.location.href = "login.html" },1000); </script>';
        }

    }


    //echo '接收到的用户名：' . $username .' 密码：' . $password;



?>