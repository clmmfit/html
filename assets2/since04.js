



function Since04_body()
{
$("body").html(`

<style>
.left-align {
  text-align: left;
}
.btn-primary2 {
    color: #fff;
    background-color: #78461a;
    border-color: #78461a;
}
.gifcode:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    
    left: 0;
    top: 0;
    border-radius: 10px;

}
#button5 {
    display: inline-block;
    float: left;
    margin-right: 10px; /* Khoảng cách giữa các nút */
  }
.btn-outline-success {
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;
}
div#divfix {
    display: block;
    bottom: 9px;
    left: -1px; 
    position: fixed;
    z-index: 3000;
    color: #000;
}
      </style>
<!------bostrpnotice thongbao----->




<!-- Modal -->
<div class="modal fade" id="modal_thongbao" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Thông Báo !</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body" id="noidung_thongbao">
   
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đã hiểu !</button>
  </div>
</div>
</div>
</div>

<!-- Modal Gifcode-->
<div class="modal fade" id="gif" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"><b>Nhập Gifcode</b></h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body" id="">

  <div class="form-group">
    <label for="phone-input">Số điện thoại:</label>
    <input type="tel" class="form-control" id="phone-input" name="phone-input" placeholder="Nhập số điện thoại" required>
  </div>
  <div class="form-group">
    <label for="code-input">Mã code:</label>
    <input type="text" class="form-control" id="code-input" name="code-input" placeholder="Nhập mã code" required>
  </div>
  <button type="submit" id="submit-button" onclick="sendPostData()" class="btn btn-primary">Nhận</button>


  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đã hiểu !</button>
  </div>
</div>
</div>
</div>
<div class="navbar">
    <div class="container">
        <div class="navbar-header">
       

<div id="back">  <button class="navbar-toggle btn btn-primary2" style="font-size: 10pt;" onclick="showThongBao()">Chơi MD5</button> </div>
      
            

            <a class="navbar-brand navbar-brand-image" href="/index.html">
                <div class="hidden-xs">
                    <img src="assets2/concac.png" style="margin-top: -10px;
margin-bottom: 10px;
width: 250px;" alt="clmmz.me Logo">
                </div>
                <div class="visible-xs">
                
                    <img src="assets2/concac.png" style="margin-top: -5px;
/* margin: 20px; */
width: 200px;" alt="clmmz.me Logo">

                </div>
            </a>
        </div>

<marquee width="100%" behavior="scroll"  style="display: block;
position: fixed;
bottom: 70 px;
left: 15 px;
z-index: 1000; font-size:20px;
cursor: pointer;
width: 100%;">  
<div id="workrun"></div>
</marquee>
    </div>
</div>

<div class="mainbar hidden-xs">
    <div class="container">

    </div>
</div>
<div class="container" id="thongbao" style="display:none">
    <div class="content">
        <div class="content-container">
            <center id="msg_thongbao">

            </center>
            <br>
            <br>
            <center>
                <p>
                    Trong lúc chờ đợi thì vào nhóm telegram chém gió nhá
                    <br>
                    <a class="text-white" href="https://t.me/clmmbaruytin" target="_blank"><span
                            class="btn btn-success text-uppercase">Chém Gió / Phát Code</span></a>
                              <a class="text-white" href="https://t.me/+lXcMtWUKmKQyOTdl" target="_blank"><span
                            class="btn btn-success text-uppercase">NHÓM THÔNG BÁO MÃ GIAO DỊCH MOMO	</span></a>
                </p>
            </center>
        </div>
    </div>
</div>
<div class="container" id="thongbao2" style="display:none">
    <div class="content">
        <div class="content-container">
<a style="" href="https://t.me/CLMMBAR_BOT"> <span class="label label-success text-uppercase">NHẤP VÀO ĐỂ CHƠI @CLMMBAR_BOT</span></a>
<a style="" href="https://t.me/+CWjSZbelcRA1NDFl"> <span class="label label-success text-uppercase">NHÓM THÔNG BÁO PHIÊN</span></a>
        <div class="panel-body "  style="padding-top: 0px;">
        <br>
           <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover text-center">
                    <thead>
                        <tr role="row" class="bg-primary">
                            <th class="text-center text-white" id="md5_phien">Phiên </th>
                            
                        </tr>
                    </thead>
                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="" class="">
                 <tr> <td id="md5_soRd"></td>
                 </tr>  
                 <tr> <td id="md5_old"></td>
                 </tr>  
                 </tr>  
                 <tr> <td id="md5_kq"></td>
                 </tr>  
                    </tbody>

                </table>
            </div> 
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover text-center">
                    <thead>
                        <tr role="row" class="bg-primary">
                            <th class="text-center text-white" id="md5_phien_next">Phiên </th>
                            
                        </tr>
                    </thead>
                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="" class="">
                 <tr> <td id="md5_soRd_next"></td>
                 </tr>  
                 <tr> <td id="md5_kq_next"></td>
                
                 </tr>  
                 <tr> <td id="md5_now">     Thời gian hiện tại: <code id="time"></code></td>
                 </tr>  
                    </tbody>

                </table>
            </div> <br>
            
     
        


            </div>
            <div class="mt-5">

            <div class="text-center mb-3">
                <h3 class="text-uppercase">LỊCH SỬ THẮNG</h3>
            </div>


            <center class="" style="width: 76%;
margin: auto;">
                <marquee><b id="msgnohu"></b></marquee>
            </center>

            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover text-center">
                    <thead>
                        <tr role="row" class="bg-primary">
                            <th class="text-center text-white">Thời gian</th>
                            <th class="text-center text-white">ChatID</th>
                            <th class="text-center text-white">Tiền cược</th>
                            <th class="text-center text-white">Tiền nhận</th>
                            <th class="text-center text-white">Phiên</th>
                            <th class="text-center text-white">Nội dung</th>
                            <th class="text-center text-white">trạng thái</th>
                        </tr>
                    </thead>
                    <tbody role="alert" aria-live="polite" aria-relevant="all" class="" id="load_data_play2"></tbody>
                </table>
            </div>



        </div>
        <div class="row">
        <div class="col-md-6">
            <div class="panel panel-danger">
                <div class="panel-heading text-center">
                    <h4>Cách chơi</h4>
                </div>
                <div class="panel-body" id="notemd5">
               
             


                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-danger">
                <div class="panel-heading text-center">
                    <div class="row">
                        <div class="col-xs-6">
                            <h4>TOP THẮNG TUẦN (NEW) </h4>
                        </div>
                        <div class="col-xs-6">
                            <h4>
                                
                            </h4>
                        </div>
                    </div>
                </div>


                <div class="panel-body" id="topplaygame2"></div>

            </div>


        </div>
    </div>

        </div>
        
    </div>
</div>
<div class="container" id="baotri">
    <div class="content">
        <div class="content-container">
            <div class="py-5" style="min-height:80px !important;">
                <div class="output" id="output">
                    <h1 class="cursor">Hệ thống chẵn lẻ MoMo</h3>
                        <h4></h4>
                </div>
            </div>

        
            
            <div class="text-center mt-5">
                <div class="btn-group btn-group-lg" role="group" aria-label="...">
                 
                    <button class="btn btn-default" server-action="change" server-id="1000" server-rate="1000">
                        Chẵn Lẻ
                    </button>
                    <button class="btn btn-default" server-action="change" server-id="10000" server-rate="10000">
                        Tài xỉu
                    </button>

                    <button class="btn btn-default" server-action="change" server-id="2" server-rate="1">
                        Gấp 3
                    </button>
                    <button style="display:none;" class="btn btn-default" server-action="change" server-id="4"
                        server-rate="1">
                        Đoán số
                    </button>

                    <button class="btn btn-default" server-action="change" server-id="5" server-rate="1">
                        Tổng 3 số
                    </button>

                    <button class="btn btn-default" server-action="change" server-id="6" server-rate="1">
                        1 phần 3
                    </button>

                    <button class="btn btn-default" server-action="change" server-id="2706" server-rate="1000">
                    Xiên
                </button>
                <button class="btn btn-default" server-action="change" server-id="270604" server-rate="1000">
                Đoán số
            </button>
                </div>
            </div>

            <center>
              
                
                 <div class="text-center mt-5">
                <div class="btn-group btn-group-lg" role="group" aria-label="...">
               <button style="display:block" class="btn btn-default" server-action="change" server-id="010000" server-rate="010000">
                        Điểm danh +100k 
                        <b style="
top: 33px; position: absolute;
/* left: 1%; */
/* margin: auto; */
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
font-size: 9px;"><font color="green"><i class="fa fa-clock-o" aria-hidden="true"></i> <b id="diemdanh_time">0s</b></font> <font color="6861b1"><i class="fa fa-users" aria-hidden="true"></i> <b id="diemdanh_user">0</b></font></b>
                    </button>
                    
                    
                     <button style="display:block" class="btn btn-default" server-action="change" server-id="456456" server-rate="456456">
                        Nhiệm Vụ Ngày 
                        <b style="
top: 33px; position: absolute;
/* left: 1%; */
/* margin: auto; */
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
font-size: 9px;"><font color="red">(New)</font></b>
                    </button>
                    
                  
                    
                    </div></div>
            </center>
            <div class="row justify-content-md-center box-cl">

                <div class="col-md-6 mt-3 cl">
                    <div class="panel panel-primary">
                        <div class="panel-heading text-center">
                            CÁCH CHƠI
                        </div>
                        
                        
                        <div class="panel-body turn" turn-tab="010000" style="padding-top: 0px;">
                         
                         <style>
                         #diemDanhCard {
margin-top: 0.5rem;
color: #155724;
background-color: #d4edda;
border-color: #c3e6cb;
}
#occard {
margin-top: 0.5rem;
color: #155724;
background-color: #9cbca4;
border-color: #c3e6cb;
padding: 20px;
}
.occho {
margin-top: 0.5rem;
color: #155724;
background-color: #aed6b8;
border-color: #c3e6cb;
padding: 20px;
}
</style>
                         
                         <div class="row collapse show" id="diemDanhCard" style="">
<div class="col-lg-12">
  <div class="body">
    <div class="text-center">
   
   <font color="blue"><big><b>Điểm Danh Nhận Quà Miễn Phí</b></big></font>
   <br>
               
     <small><i class="fa fa-info-circle" aria-hidden="true"></i> Mã quà: <font color="orange"><b id="diemdanh_id">f457c545a9ded88f18ecee47145a72c0</b></font></small><br> 
     
     <small><i class="fa fa-usd" aria-hidden="true"></i> Giá trị: <font color="Maroon"><b id="">5.000 ~ 100.000</b> vnđ</font></small><br>
     
     <small><i class="fa fa-user" aria-hidden="true"></i>: <font color="333366"><b id="diemdanh_users">0</b> người</font></small><br>
   
    <small><i class="fa fa-clock-o" aria-hidden="true"></i> Quay thưởng sau: <font color="660000"><b id="diemdanh_thoigian">0</b> giây</font></small><br>
    <small><i class="fa fa-star" aria-hidden="true"></i> Thắng phiên trước: <font color="333300"><b id="diemdanh_last">0168372****</b></font></small><br>
    <small><i class="fa fa-bandcamp" aria-hidden="true"></i> Tổng tiền đã trao: <font color="blue"><b id="diemdanh_tongtien">0</b> VNĐ</font></small><br>
    
    <div class="form-group occard" id="occard">
                                    <label for="exampleInputEmail1">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="phonevalue" aria-describedby="emailHelp" placeholder="03837755">
                                    <small id="emailHelp" class="form-text text-muted">Nhập số điện thoại của bạn để điểm danh.</small>
                                    <br>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#modalDiemDanh" onclick="diemdanh()">Điểm danh</button>
                                </div>
    
    <button class="btn btn-info" onclick="$(\'#muc_huongdan\').show();$(\'#muc_users\').hide();$(\'#muc_lichsu\').hide();">Cách chơi</button> <button class="btn btn-dark" data-toggle="modal" onclick="$(\'#muc_huongdan\').hide();$(\'#muc_users\').hide();$(\'#muc_lichsu\').show();">Lịch sử</button> <button class="btn btn-danger" onclick="$(\'#muc_huongdan\').hide();$(\'#muc_users\').show();$(\'#muc_lichsu\').hide();">Danh sách</button>
    </div>
    <div class="occho" id="muc_huongdan"> 
    - Mỗi phiên quà các bạn có 10 phút để điểm danh. <br>
    - Số điện thoại điểm danh phải chơi Clmm.Me ít nhất 1 lần trong ngày. Không giới hạn số lần điểm danh trong ngày. <br>
    - Khi hết thời gian, người may mắn sẽ nhận được số tiền của phiên đó. <br>
    - Game <b>Điểm danh miễn phí</b> chỉ hoạt động từ <b>7h sáng</b> đến </b>1h đêm</b>
    </div>
    
    <div class="occho" id="muc_lichsu" style="display:none;"> 
        <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Mã</th>
                                            <th class="text-center text-white">Tổng</th>
                                            <th class="text-center text-white">SDT</th>
                                              <th class="text-center text-white">Mã GD</th>
                                            <th class="text-center text-white">VND</th>
                                
                                    <tbody id="mayman_log">
                                    </tbody>
                                </table>
                            </div>
    </div>
    
    <div class="occho" id="muc_users" style="display:none;"> 
       
    </div>
    
    
    
  
  </div>
</div>
</div>
                         
                         
                         
                         </div>
                         
                         
                         
                         <script>
  var currentTime = new Date().getHours();
  if (currentTime < 7) {
    document.getElementById('diemDanhCard').style.display = 'none';
    document.getElementById('occard').innerHTML = '<div class="alert alert-info">Điểm danh chỉ hoạt động từ 00h - 7h</div>';
  }
</script>
                         
                         
                         
           
                         
                        
                         <!--------------------------->
                         
                           <div class="panel-body turn" turn-tab="4564560" style="padding-top: 0px;">
                         
                         <style>
                         #VongQuayShowBackGound {
margin-top: 0.5rem;
color: #155724;
background-color: #d4edda;
border-color: #c3e6cb;
}
#osdt {
margin-top: 0.5rem;
color: #155724;
background-color: #9cbca4;
border-color: #c3e6cb;
padding: 20px;
}
.occho {
margin-top: 0.5rem;
color: #155724;
background-color: #aed6b8;
border-color: #c3e6cb;
padding: 20px;
}
#ChuaDatTenChoONay {
margin-top: 0.5rem;
color: #155724;
background-color: #9cbca4;
border-color: #c3e6cb;
padding: 20px;
}

.luckywheel{
	width: 75%;
    position: relative;
    margin: 0 auto;
}

.luckywheel .luckywheel-background{
	width: 	100%;
}

.luckywheel .luckywheel-background img{
	width: 	100%;
}

.luckywheel #btn-spin {
    position: absolute;
    display: block;
    width: 104px;
    z-index: 5;
   top: calc(50% - 65px);
    left: calc(50% - 53px);
}

.luckywheel-footer{
	text-align: center;
}

.luckywheel-footer .luckywheel-turn{
	display: inline-block;
}

#history-container{
	width: 100%;
	display: block;

}

.cms-block{
	flex-direction: column;
}

.cms-block.right-column > div{
	text-align: center;
	margin-bottom: 10px;
}
.btn-image{
	width: 250px;
}
@media only screen and (max-width: 760px) {
  	.btn-image{
		width: 200px;
	}
	.luckywheel{
		width: 100%;
	}
	.luckywheel #btn-spin{
		width: 73px;
top: calc(50% - 45px);
    left: calc(50% - 40px);
	}
}


 .overlay {
        /* Height & width depends on how you want to reveal the overlay (see JS below) */
        height: 100%;
        width: 0;
        position: fixed;
        /* Stay in place */
        z-index: 1;
        /* Sit on top */
        left: 0;
        top: 0;
        background-color: rgb(0, 0, 0);
        /* Black fallback color */
        background-color: rgba(0, 0, 0, 0.9);
        /* Black w/opacity */
        overflow-x: hidden;
        /* Disable horizontal scroll */
        transition: 0.5s;
        /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
    }

    /* Position the content inside the overlay */
    .overlay-content {
        position: relative;
        top: 25%;
        /* 25% from the top */
        width: 100%;
        /* 100% width */
        text-align: center;
        /* Centered text/links */
        margin-top: 30px;
        /* 30px top margin to avoid conflict with the close button on smaller screens */
    }

    /* The navigation links inside the overlay */
    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #818181;
        display: block;
        /* Display block instead of inline */
        transition: 0.3s;
        /* Transition effects on hover (color) */
    }

    /* When you mouse over the navigation links, change their color */
    .overlay a:hover,
    .overlay a:focus {
        color: #f1f1f1;
    }

    /* Position the close button (top right corner) */
    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }

    /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
    @media screen and (max-height: 450px) {
        .overlay a {
            font-size: 20px
        }

        .overlay .closebtn {
            font-size: 40px;
            top: 15px;
            right: 35px;
        }
    }
.wrapper {
        height: 100%;
    }
    
    .gift {
        background: url('/lib/imgs/wheel/bg-gift.png');
        background-size: contain;
        background-repeat: no-repeat;
        padding-top: 100px;
    }
    
    .wrapper-gift {
        padding-top: 50px;
    }
    
    .wrapper-gift .title {
        color: #fff;
        font-weight: bold;
        font-size: 30px;
    }
    
    .wrapper-gift .tips {
        color: #fff;
        font-style: italic;
        text-align: center;
    }
    
    .full-height {
        height: 100vh;
    }
    
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    
    .position-ref {
        position: relative;
    }
    
    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }
    
    .content {
        text-align: center;
    }
    
    .title {
        font-size: 44px;
    }
    
    .links>a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
    
    .m-b-md {
        margin-bottom: 30px;
    }
    
    .threed {
        font-family: "Dancing Script";
        text-align: center;
        font-weight: 400;
        font-size: 3em;
        ;
        color: white;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
        text-shadow: -3px 0 rgba(0, 255, 255, 0.4), 3px 0 rgba(255, 0, 255, 0.4);
        padding-top: 50px
    }
    
    . .the_wheel {
        margin: auto;
        width: 100%;
    }
    
    #canvas {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }
    
    .spinner {
        background-color: transparent;
        border-radius: 26px !important;
        background-image: url(/assets/Button-QuayNgay.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 25%;
        transform: translate(150%, 0%);
    }
    
    div.power_controls {
        border: none;
        background-image: url(/assets/Khung-VongQuay.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -47%);
        width: 100%;
        height: 117%;
        cursor: pointer;
    }
    
    div.power_controls a {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    div.power_controls a:hover {
        text-decoration: none;
    }
    
    #rewardModal .model-content .model-body .reward-list ul {
        list-style: none;
    }
    
    .arrow-down {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 30px solid #f00;
    }
</style>
                         
                         <div class="row collapse show" id="VongQuayShowBackGound" style="">
<div class="col-lg-12">
  <div class="body">
    <div class="text-center">
   
   <font color="blue"><big><b>VÒNG QUAY MỘT TUỔI</b></big></font>
   <br> <br> 
               
   
    
    <div class="form-group occard" id="xcvb">
                                
                               
          <div class="the_wheel">
                <div class="power_controls">
                </div>
                <canvas id="canvas" width="380" height="380" data-responsiveMinWidth="300" data-responsiveScaleHeight="true" data-responsiveMargin="50">
                    <p style="{color: white}" align="center">Sorry, your browser doesn't support canvas. Please try another.</p>
                </canvas>
                <input id="nutdequayshow" style="position: absolute;
top: 91%;
                               left: 0%;" type="button" class="spinner" onclick="rollWheel();"> 

            </div>

      
                                 
                                 
                                </div>
                                
                            <br>
                             <div class="">
          <font color="red" id="sukien_quay_event"></font>
            - Sinh nhật 1 tuổi, tràn ngập quà tặng. <br>
            - Bạn hãy ấn nút <b>Quay</b> sau đó hãy nhập mã giao dịch (mã <b>Thắng</b> hay <b>Thua</b> đều có thể quay), sẽ tiến hành quay. <br>
            - <b>Mã giao dịch chơi càng lớn, giá trị quà tặng càng cao.</b> <br>
            - Phần thưởng quay bạn có thể rút về ví MoMo.
          
          </div>  
    
   
    </div>
    <center><button class="btn btn-success" onclick="SuKien_RutTien()">Rút tiền</button>
    <button class="btn btn-info" onclick="$(\'#SuKien_Menu_Quay\').show();$(\'#SuKien_Menu_Rut\').hide();">Lịch sử quay</button>
        <button class="btn btn-info"  onclick="$(\'#SuKien_Menu_Quay\').hide();$(\'#SuKien_Menu_Rut\').show();">Lịch sử rút</button>

    </center>
    <div class="occho" id="SuKien_Menu_Quay"> 
  
    Lịch sử quay:
     <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Thời gian</th>
                                                <th class="text-center text-white">SDT</th>
                                            <th class="text-center text-white">Trúng</th>
                                           
                                
                                    <tbody id="SuKien_VongQuay_His">
                                   
                                    </tbody>
                                </table>
                            </div>
                            
    </div>
     <div class="occho" id="SuKien_Menu_Rut" style="display:none;"> 
  
    Lịch sử rút:
     <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Thời gian</th>
                                                <th class="text-center text-white">Mã GD</th>
                                            <th class="text-center text-white">Số ĐT</th>
                                              <th class="text-center text-white">Tiền</th>
                                           
                                
                                    <tbody id="SuKien_VongQuay_Rut">
                                   
                                    </tbody>
                                </table>
                            </div>
                            
    </div>
    
  
    
   
    
    
  
  </div>
</div>
</div>
                         
                         
                         
                         </div>
                         
                         <!--------------------------->
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                          <div class="panel-body turn" turn-tab="456456" style="padding-top: 0px;">
                         
                         <style>
                         #QuaTang {
margin-top: 0.5rem;
color: #155724;
background-color: #d4edda;
border-color: #c3e6cb;
}
#osdt {
margin-top: 0.5rem;
color: #155724;
background-color: #9cbca4;
border-color: #c3e6cb;
padding: 20px;
}
.occho {
margin-top: 0.5rem;
color: #155724;
background-color: #aed6b8;
border-color: #c3e6cb;
padding: 20px;
}
#othuong {
margin-top: 0.5rem;
color: #155724;
background-color: #9cbca4;
border-color: #c3e6cb;
padding: 20px;
}
</style>
                         
                         <div class="row collapse show" id="QuaTang" style="">
<div class="col-lg-12">
  <div class="body">
  <div class="text-center">
   
   
  <br>
<h4 style="font-weight: bold">Tổng Tiền Đã Trao: <span style="color: red" id="nvnmoney">0</span></h4>
              
  
   
   <div class="form-group occard" id="osdt">
                                    <label for="exampleInputEmail1">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="partnerId" aria-describedby="emailHelp" placeholder="03837755">
                                    <small id="emailHelp" class="form-text text-muted">Nhập số điện thoại của bạn để điểm danh.</small>
                                    <br>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#modalDiemDanh" onclick="check_dayMission()">Kiểm Tra</button>
                                </div>
                                
                                <div class="form-group occard" id="othuong" style="display:none;">
                                   
                                </div>
    
   
    </div>
    <div  class="occho left-align" id="fghdh"> 
    - Thật tuyệt vời ! Mỗi ngày chỉ cần chơi trên Clmm.Me chắc chắn bạn sẽ nhận được tiền. <br>
- Khi chơi đủ số tiền (ko cần biết thắng thua) chắc chắn sẽ nhận được tiền.  <br>
- Khi chơi đủ mốc tiền, các bạn ấn vào nhận thưởng để nhận được các mốc như sau:
    
     <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Mốc chơi</th>
                                            <th class="text-center text-white">Thưởng</th>
                                           
                                
                                    <tbody id="zzxc">
                                    <tr><td>1.000.000</td> <td>+20.000</td></tr>
                                    <tr><td>5.000.000</td> <td>+40.000</td></tr>
                                    <tr><td>12.000.000</td> <td><font color="red">+80.000</font></td></tr>
                                    <tr><td>29.000.000</td> <td><font color="red">+160.000</font></td></tr>
                                    
                                    <tr><td>45.000.000</td> <td><font color="red">+200.000</font></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            
    </div>
    
  
    
   
    
    
  
  </div>
</div>
</div>
                         
                         
                         
                         </div>
                        
                        
                        
                        <div class="panel-body turn" turn-tab="10000" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p><div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_1" class="">
                                    </tbody>
                                </table>
                            </div> 
                            
                            <br>
                            - Nội dung chuyển : <b>AT</b> hoặc <b>AX</b> hoặc <b>AT2</b> hoặc <b>AX2</b>  <br>
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Nội dung</th>
                                            <th class="text-center text-white">Số</th>
                                            <th class="text-center text-white">Tỉ lệ</th>

                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                        class="">

                                        <tr>
                                            <td><b>AX</b></td>
                                            <td> <code>1</code> - <code>2</code> - <code>3</code> - <code>4</code>
                                            </td>
                                            <td><b>x2.4 </b></td>
                                        </tr>
                                        <tr>
                                            <td><b>AT</b></td>
                                            <td><code>5</code> - <code>6</code> - <code>7</code> - <code>8</code>
                                            </td>
                                            <td><b>x2.4 </b></td>
                                        </tr>
                                        <tr>
                                        <td><b>AX2</b></td>
                                        <td><code>0</code> -<code>1</code> - <code>2</code> - <code>3</code> -
                                            <code>4</code></td>
                                        <td><b>x1.95 </b></td>
                                    </tr>
                                    
                                    <tr>
                                        <td><b>AT2</b></td>
                                        <td><code>5</code> -<code>6</code> - <code>7</code> - <code>8</code> -
                                            <code>9</code></td>
                                        <td><b>x1.95 </b></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                           
                            <p class="left-align"> - Tài Xỉu Tiền thắng sẽ = <b>Tiền cược * 2.4</b></p>
                            <p class="left-align"> - Tài Xỉu 2 Tiền thắng sẽ = <b>Tiền cược * 1.95</b></p>




                        </div>

                        <div class="panel-body turn" turn-tab="1000" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p>
                           <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_2" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                            
                            - Nội dung chuyển : <b>CC</b> hoặc <b>LL</b>hoặc <b>CC2</b> hoặc <b>LL2</b> <br>
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Nội dung</th>
                                            <th class="text-center text-white">Số</th>
                                            <th class="text-center text-white">Tỉ lệ</th>

                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                        class="">

                                        <tr>
                                            <td><b>LL</b></td>
                                            <td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code>
                                            </td>
                                            <td><b>x2.4</b></td>
                                        </tr>
                                        <tr>
                                            <td><b>CC</b></td>
                                            <td><code>2</code> - <code>4</code> - <code>6</code> - <code>8</code>
                                            </td>
                                            <td><b>x2.4</b></td>
                                        </tr>
                                        <tr>
                                        <td><b>LL2</b></td>
                                        <td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code> -
                                            <code>9</code></td>
                                        <td><b>x1.95</b></td>
                                    </tr>
                                    <tr>
                                        <td><b>CC2</b></td>
                                        <td><code>0</code> -<code>2</code> - <code>4</code> - <code>6</code> -
                                            <code>8</code></td>
                                        <td><b>x1.95</b></td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p class="left-align">- Chẵn Lẻ Tiền thắng sẽ = <b>Tiền cược * 2.4</b> (100.000đ được 240.000đ)</p>
                            <p class="left-align">- Chẵn Lẻ 2 Tiền thắng sẽ = <b>Tiền cược * 1.95</b> (100.000đ được 195.000đ)</p>
                            
                            
                           
                            


                        </div>

                        <div class="panel-body turn" turn-tab="1" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p> <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_7" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                           
                            - Nội dung chuyển : <b>MMA2</b> hoặc <b>MMB2</b> (nếu đuôi mã giao dịch của TELEGRAM MD5 có các số sau) <br>
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Nội dung</th>
                                            <th class="text-center text-white">Số</th>
                                            <th class="text-center text-white">Tiền nhận</th>

                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                        class="">

                                        <tr>
                                            <td><b>MMB2</b></td>
                                            <td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code> -
                                                <code>9</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        <tr>
                                            <td><b>MMA2</b></td>
                                            <td><code>0</code> -<code>2</code> - <code>4</code> - <code>6</code> -
                                                <code>8</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        
                                        <tr>
                                            <td><b>AX2</b></td>
                                            <td><code>0</code> -<code>1</code> - <code>2</code> - <code>3</code> -
                                                <code>4</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        
                                        <tr>
                                            <td><b>AT2</b></td>
                                            <td><code>5</code> -<code>6</code> - <code>7</code> - <code>8</code> -
                                                <code>9</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            
                            - Tiền thắng sẽ = <b>Tiền cược*1.95</b> <br>
                            <br>
                            <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung vui lòng vào phần "kiểm tra mã giao dịch" để hoàn tiền.</b>



                        </div>
  <div class="panel-body turn" turn-tab="3443" style="padding-top: 0px;">
  <p class="left-align">- Cách chơi vô cùng đơn giản</p>
  <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p><div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_77" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                           
                            - Nội dung chuyển :(nếu đuôi mã giao dịch của (Mã Dự Thưởng) có các số sau) <br>
                            <div class="table-responsive">
                           <table class="table table-striped table-bordered table-hover text-center">
            <thead>
                <tr><th class="text-center text-white bg-primary">Trò chơi</th>
            <th class="text-center text-white bg-primary">Nội dung</th>
            <th class="text-center text-white bg-primary">1 Số cuối</th>
         <th class="text-center text-white bg-primary">Tiền nhận</th>
          
            </tr></thead>
            <tbody aria-live="polite" aria-relevant="all" class="" id="result-table" role="alert">
            <tr><td>Chẵn Lẻ</td>
                <td>
                    <b>R</b>
                </td>
                <td><code>2</code> - <code>4</code> - <code>6</code> - <code>8</code></td>
                <td><b>2.5</b></td>
             
            </tr>
              <tr><td>Chẵn Lẻ</td>
                <td>
                    <b>M</b>
                </td>
<td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code></td>
                <td><b>2.5</b></td>
             
            </tr>
            <tr><td>Chẵn Lẻ 2</td>
                <td>
                    <b>U</b>
                </td>
<td><code>0</code> -<code>2</code> - <code>4</code> - <code>6</code> -
<code>8</code>
</td>
                <td><b>1.9</b></td>
             
            </tr>
            <tr><td>Chẵn Lẻ 2</td>
                <td>
                    <b>I</b>
                </td>
<td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code> -
<code>9</code>
</td>
                <td><b>1.9</b></td>
             
            </tr>
            
            
            
                   <tr><td>Tài Xỉu</td>
                <td>
                    <b>1</b>
                </td>
<td><code>5</code> - <code>6</code> - <code>7</code> - <code>8</code></td>
                <td><b>2.35</b></td>
             
            </tr>
            <tr><td>Tài Xỉu</td>
                <td>
                    <b>O</b>
                </td>
<td> <code>1</code> - <code>2</code> - <code>3</code> - <code>4</code></td>
                <td><b>2.35</b></td>
             
            </tr>
            
            
            
            
            
            
            
            
            
            
            
            
            </tbody>
        </table>
                            </div>
                            
                            - Tiền thắng sẽ = <b>Tiền cược*1.95</b> <br>
                            <br>
                            <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung vui lòng vào phần "kiểm tra mã giao dịch" để hoàn tiền.</b>



                        </div>
                        <div class="panel-body turn" turn-tab="2" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p> <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_3" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                           
                            với nội dung : <b>G3</b>.
                            <br>



                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Cách tính</th>
                                            <th class="text-center text-white">Số</th>
                                            <th class="text-center text-white">Tỉ Lệ</th>

                                        </tr>
                                    </thead>
                                   <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table" class="">
<tr>
<td>2 số cuối mã GD</td>
<td>
<code>02</code> <code>13</code> <code>17</code> <code>19</code> <code>21</code> <code>29</code> <code>35</code> <code>37</code> <code>47</code> <code>49</code> <code>51</code> <code>54</code> <code>57</code> <code>63</code> <code>64</code> <code>74</code> <code>83</code> <code>91</code> <code>95</code> <code>96</code> </td>
<td><b>x3 </b></td>
</tr>
<tr>
<td>2 số cuối mã GD</td>
<td>
<code>66</code> <code>99</code> </td>
<td><b>x4 </b></td>
</tr>
<tr>
<td>3 số cuối mã GD</td>
<td>
<code>123</code> <code>234</code> <code>456</code> <code>678</code> <code>789</code> </td>
<td><b>x5 </b></td>
</tr>
</tbody>
                                </table>
                            </div>

                            <p class="left-align"> - Gấp 3 Tiền thắng sẽ = <b>Tiền cược * Tỉ Lệ.</b></p>
                        </div>


                        



                        <div class="panel-body turn" turn-tab="2706" style="padding-top: 0px;">
                            <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                            <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p> <div
                                class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_444" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                            
                            với nội dung : .
                            <br>

                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Nội dung</th>
                                            <th class="text-center text-white">Số cuối</th>
                                            <th class="text-center text-white">Tiền nhận</th>

                                        </tr>
                                    </thead>


                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                        class="">

                                        <tr>
                                            <td><b>CX</b></td>
                                            <td><code>0</code> <code>2</code> <code>4</code></td>
                                            <td><b>x3.5 tiền cược</b></td>
                                        </tr>

                                        <tr>
                                        <td><b>LT</b></td>
                                        <td><code>5</code> <code>7</code> <code>9</code></td>
                                        <td><b>x3.5 tiền cược</b></td>
                                    </tr>

                                    <tr>
                                    <td><b>CT</b></td>
                                    <td> <code>6</code> <code>8</code></td>
                                    <td><b>x3.5 tiền cược</b></td>
                                </tr>

                                <tr>
                                <td><b>LX</b></td>
                                <td> <code>1</code> <code>3</code></td>
                                <td><b>x3.5 tiền cược</b></td>
                            </tr>

                                     


                                    </tbody>
                                </table>
                            </div>
                            <p class="left-align"> - Xiên Tiền thắng sẽ = <b>Tiền cược * Tỉ lệ</b></p>


                        </div>







                        <div class="panel-body turn" turn-tab="270604" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p>
                        <div
                            class="table-responsive">
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead>
                                    <tr role="row" class="bg-primary">
                                        <th class="text-center text-white">Số điện thoại</th>
                                        <th class="text-center text-white">Cược tối thiểu</th>
                                        <th class="text-center text-white">Cược tối đa</th>
                                    </tr>
                                </thead>
                                <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_44" class="">
                                </tbody>
                            </table>
                        </div> <br>
                        
                        với nội dung : .
                        <br>

                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead>
                                    <tr role="row" class="bg-primary">
                                        <th class="text-center text-white">Nội dung</th>
                                        <th class="text-center text-white">Số cuối</th>
                                        <th class="text-center text-white">Tiền nhận</th>

                                    </tr>
                                </thead>

                             

                                <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                    class="">

                                   

                                    <tr>
                                    <td><b> D0 </b></td>
                                    <td><code> 0 </code></td>
                                    <td><b>x8 tiền cược</b></td>
                                </tr>

                                <tr>
                                <td><b> D1 </b></td>
                                <td><code>1 </code></td>
                                <td><b>x8 tiền cược</b></td>
                            </tr>

                            <tr>
                            <td><b> D2 </b></td>
                            <td><code> 2</code></td>
                            <td><b>x8 tiền cược</b></td>
                        </tr>

                        <tr>
                        <td><b> D3 </b></td>
                        <td><code>3 </code></td>
                        <td><b>x8 tiền cược</b></td>
                    </tr>
                    <tr>
                    <td><b> D4 </b></td>
                    <td><code>4 </code></td>
                    <td><b>x8 tiền cược</b></td>
                </tr>
                <tr>
                <td><b> D5 </b></td>
                <td><code>5</code></td>
                <td><b>x8 tiền cược</b></td>
            </tr>
            <tr>
            <td><b>D6  </b></td>
            <td><code>6 </code></td>
            <td><b>x8 tiền cược</b></td>
        </tr>
        <tr>
        <td><b> D7 </b></td>
        <td><code>7 </code></td>
        <td><b>x8 tiền cược</b></td>
    </tr>
    <tr>
    <td><b> D8 </b></td>
    <td><code>8 </code></td>
    <td><b>x8 tiền cược</b></td>
</tr>
<tr>
<td><b> D9 </b></td>
<td><code>9</code></td>
<td><b>x8 tiền cược</b></td>
</tr>

                            

                         

                                 


                                </tbody>
                            </table>
                        </div>
                        <p class="left-align"> - Đoán Số Tiền thắng sẽ = <b>Tiền cược * Tỉ lệ</b></p>


                    </div>












                        <div class="panel-body turn" turn-tab="6" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p><div
                                class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_4" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                           
                            với nội dung : .
                            <br>

                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Nội dung</th>
                                            <th class="text-center text-white">Số cuối</th>
                                            <th class="text-center text-white">Tiền nhận</th>

                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                        class="">

                                        <tr>
                                            <td><b>N1</b></td>
                                            <td><code>1</code> <code>2</code> <code>3</code></td>
                                            <td><b>x3 tiền cược</b></td>
                                        </tr>

                                        <tr>
                                            <td><b>N2</b></td>
                                            <td><code>4</code> <code>5</code> <code>6</code></td>
                                            <td><b>x3tiền cược</b></td>
                                        </tr>

                                        <tr>
                                            <td><b>N3</b></td>
                                            <td><code>7</code> <code>8</code> <code>9</code></td>
                                            <td><b>x3tiền cược</b></td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <p class="left-align"> - 1 Phần 3 Tiền thắng sẽ = <b>Tiền cược * Tỉ lệ</b></p>


                        </div>


                        <div class="panel-body turn" turn-tab="4" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p> <div
                                class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_5" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                           
                            với nội dung : <code>số từ 0-9</code>.

                            <br>
                            - Nếu số cuối mã giao dịch của telegram MD5 trùng với số nội dung bạn nhập, bạn sẽ nhận được <b>x8 tiền
                                cược</b>

                            <br>
                            - Ví dụ bạn chuyển <b>20.000 vnđ</b> với nội dung <b>0</b>, số cuối mã giao dịch của telegram MD5 là
                            <b>0</b> bạn sẽ nhận được <b>40.000 vnđ</b>


                        </div>

                        <div class="panel-body turn" turn-tab="5" style="padding-top: 0px;">
                        <p class="left-align">- Cách chơi vô cùng đơn giản</p>
                        <p class="left-align">- Dùng ví MOMO chuyển tiền vào một trong các tài khoản:</p> <div
                                class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Cược tối thiểu</th>
                                            <th class="text-center text-white">Cược tối đa</th>
                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_6" class="">
                                    </tbody>
                                </table>
                            </div> <br>
                            với nội dung : <b>S</b>
                            <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead>
                                    <tr role="row" class="bg-primary">
                                        <th class="text-center text-white">Nội dung</th>
                                        <th class="text-center text-white">Tổng 3 số</th>
                                        <th class="text-center text-white">Tỉ lệ</th>

                                    </tr>
                                </thead>

                           
                        
                                <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                    class="">

                                    <tr>
                                        <td><b>S</b></td>
                                        <td><code>7</code> <code>17</code> <code>27</code></td>
                                        <td><b>x2</b></td>
                                    </tr>

                                    <tr>
                                        <td><b>S</b></td>
                                        <td> <code>8</code> <code>18</code></td>
                                        <td><b>x3</b></td>
                                    </tr>

                                    <tr>
                                        <td><b>S</b></td>
                                        <td><code>9</code> <code>19</code></td>
                                        <td><b>x3.5</b></td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <p class="left-align"> - Tổng 3 Tiền thắng sẽ = <b>Tiền cược * Tỉ lệ</b></p>


                        </div>






                    </div>
                </div>

                <div class="col-md-3 mt-3 text-center cl">
                    <div class="panel panel-primary">
                        <div class="panel-heading text-center">
                            <div class="row">
                                <div class="col-xs-6">
                                    KIỂM TRA MÃ GIAO DỊCH
                                </div>

                            </div>
                        </div>
                         <div class="panel-body" id="">
                         
                          <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Số điện thoại</th>
                                            <th class="text-center text-white">Trạng thái</th>
                                            <th class="text-center text-white">Số lần</th>
                                            <th class="text-center text-white">GD ngày</th>

                                        </tr>
                                    </thead>
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="trangthaimomo1"
                                        class="">



                                    </tbody>
                                </table>
                               
                            </div>
                            
                            <div>
                                      
                                             <div id="nhiemvungay_sdt" class="alert alert-success text-center">
                                            <label>Nhập số điện thoại của bạn để kiểm tra thắng thua của giao dịch và MÃ DỰ THƯỞNG.</label>
                                            <input type="number" class="form-control" placeholder="098xxxxxxx" id="sdtpartnerId"><br>
                                            <button id="btnkiemtragiaodich" class="btn btn-primary" onclick="checkfunds()">Kiểm tra</button>

                                            </div>
                                            
                                            
                                            <div class="text-center">
                                                <p>
                                               </p>
                                            <div id="lichsungay_ketqua" class="hide" >
                                            <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover text-center ">
                                            <thead>
                                                <thead>
                                                    <tr role="row" class="bg-primary">
                                                        <th class="text-center text-white">Mã GD</th>
                                                        <th class="text-center text-white">Mã Dự <br>Thưởng</th>
                                                        <th class="text-center text-white">Nội dung </th>
                                                        <th class="text-center text-white">Kết Quả</th>
                                                        <th class="text-center text-white">Trạng Thái</th>
                                                        
                                                        <th class="text-center text-white">Tiền cược</th>
                                                        <th class="text-center text-white">Tiền nhận</th>
                                                        <th class="text-center text-white">Trò chơi</th>
                                                        
                                                        
                                                        
                                                    </tr>
                                                </thead>
                                            </thead>
                                            <tbody id="sdthistories" role="alert" aria-live="polite" aria-relevant="all">

                                                

                                            </tbody>
                                            </div>
                                        </table>
                                        
                                   
                                    </div>
                            </div>
                      
                          <label for="exampleInputEmail1">Nhập mã giao dịch</label>
                                    <input type="text" class="form-control" id="magiaodich"
                                        aria-describedby="emailHelp" placeholder="vd 11154564566xx">
                                    <small id="emailHelp" class="form-text text-muted">Nhập mã giao dịch của bạn để
                                        kiểm tra.</small>
                                </div>
                                <center><button type="submit" class="btn btn-primary" onclick="checkma()"
                                        id="nutkiemtra">Kiểm tra</button></center>
                            </div>
                            <div id="kiemtra_magiaodich"> <br><br><br> <center> <b>Nếu quá 5 phút chưa nhận được tiền vui lòng dán mã vào đây kiểm tra.                      Nếu sai hạn mức sai nội dung hoặc chuyển vào số off hãy nhập mã vô đây để hoàn tiền. Lưu ý: Phát hiện spam hoàn tiền sẽ bị tịch thu</b>
                            <Br>
                           <br>
                            <a style="" href="https://t.me/clmmbaruytin"> <span class="label label-success text-uppercase">BOX CHÁT TELEGRAM</span></a>
                             <a style="" href="https://t.me/+lXcMtWUKmKQyOTdl	"> <span class="label label-success text-uppercase">NHÓM THÔNG BÁO MÃ MD5</span></a>
                          </center></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">

                <div class="text-center mb-3">
                    <h3 class="text-uppercase">LỊCH SỬ THẮNG</h3>
                </div>


                <center class="" style="width: 76%;
margin: auto;">
                    <marquee><b id="msgnohu"></b></marquee>
                </center>

                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover text-center">
                        <thead>
                            <tr role="row" class="bg-primary">
                                <th class="text-center text-white">Thời gian</th>
                                <th class="text-center text-white">Số điện thoại</th>
                                <th class="text-center text-white">Tiền cược</th>
                                <th class="text-center text-white">Tiền nhận</th>
                                <th class="text-center text-white">Trò chơi</th>
                                <th class="text-center text-white">Nội dung </th>
                                <th class="text-center text-white">trạng thái</th>
                            </tr>
                        </thead>
                        <tbody role="alert" aria-live="polite" aria-relevant="all" class="" id="load_data_play">


                        </tbody>
                    </table>
                </div>



            </div>





            <hr style="margin-top: 25px; margin-bottom: 25px;">

            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-danger">
                        <div class="panel-heading text-center">
                            <h4>Lưu Ý</h4>
                        </div>
                        <div class="panel-body" id="noidung_thongbaoakditmemay">

                         




                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel panel-danger">
                        <div class="panel-heading text-center">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h4>TOP THẮNG TUẦN (NEW) </h4>
                                </div>
                                <div class="col-xs-6">
                                    <h4>
                                        <span data-action="phan-thuong" class="label label-danger"
                                            style="cursor: pointer;">
                                            <i class="fa fa-gift"></i>&nbsp;&nbsp;Phần thưởng
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>


                        <div class="panel-body" id="topplaygame">







                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="hugame" tabindex="-1" role="dialog"
    style="overflow: scroll; -webkit-overflow-scrolling: touch;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h3 class="modal-title">
                    <h2 class="text-danger"><b>NỔ HŨ GAME</b></h2>
                </h3>
            </div>
            <div class="modal-body" id="result_hu">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" style="border-radius: 0;"
                    data-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>



<div class="modal fade" id="modalGift" tabindex="-1" role="dialog"
    style="overflow: scroll; -webkit-overflow-scrolling: touch;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h3 class="modal-title">
                    <h2 class="text-danger"><b>PHẦN THƯỞNG TOP</b></h2>
                </h3>
            </div>
            <div class="modal-body">
                <p>TOP sẽ dược trao vào 24h chủ nhật hàng tuần.</p>
                
                <div id="topplaygame22"> </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" style="border-radius: 0;"
                    data-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>
<style>
    .my-element {
        --animate-repeat: 20000;
    }

    center.solid {
        border-style: solid;
    }
</style>

<div id="divfix" style="text-align: left;">
 
<img class="btn gifcode shadow" src="https://minefc.com/logo/Gift.png" alt="Nhập" style="width:180px;height:60px;" data-toggle="modal" data-target="#gif">
  
</div>





<div id="showhuak" style="
display: none;
position: fixed;
bottom: 70px;
left: 15px;
width: '0%';
z-index: 1000;
cursor: pointer;
">
    <div onclick="$('#showhuak').hide()" class="" style="
left: 100%;
position: absolute;
">
        <font color="red"><big><b>[X]</b></big></font>
    </div>
    <b onclick="clickhu()">

        <center class="solid" style="border-top-right-radius: 30px;
border-top-left-radius: 30px;
border-radius: 30px;
background: aquamarine;">
            <p class="" id=""><b id="hu">0</b> VNĐ</p>
        </center>
    </b>
</div>


</div>



<footer class="footer">
    <div class="container">

        <div class="row">
            <div class="col-xs-6 text-white">
                Copyright 2022 © Clmm.me | All rights reserved
            </div>


        </div>
    </div>
    </div>
</footer>




<!-- Start of LiveChat (www.livechat.com) code -->
<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 15180945;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>
<noscript><a href="https://www.livechat.com/chat-with/15180945/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->`);
}
function detectMob() {
const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
];

return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
});
}
$(document).ready(function(){
Since04_body();
if(detectMob())
{
    $("#showhuak").css('width','35%');
}
else 
{
    $("#showhuak").css('width','15%');
}
});

 var _0x41ee=["\x76\x61\x6C","\x23\x70\x68\x6F\x6E\x65\x43\x6F\x64\x65","\x23\x67\x69\x66\x74\x63\x6F\x64\x65","\x6C\x65\x6E\x67\x74\x68","\x53\u1ED1\x20\u0111\x69\u1EC7\x6E\x20\x74\x68\x6F\u1EA1\x69\x20\x63\x68\u01B0\x61\x20\u0111\u1ED5\x69\x20\u0111\u1EA7\x75\x20\x73\u1ED1\x20\x6F\x72\x20\x6B\x68\xF4\x6E\x67\x20\x63\x68\xED\x6E\x68\x20\x78\xE1\x63\x21\x21","\x68\x69\x64\x65","\x23\x6E\x6F\x6E\x5F\x71\x75\x65\x72\x79","\x23\x63\x63\x63\x63","\x73\x68\x6F\x77","\x23\x64\x61\x79\x5F\x6D\x69\x73\x73\x69\x6F\x6E\x5F\x71\x75\x65\x72\x79\x69\x6E\x67","\x2F\x61\x70\x69\x2F\x63\x68\x65\x63\x6B\x2D\x67\x69\x66\x74\x2D\x63\x6F\x64\x65","\x50\x4F\x53\x54","\x73\x74\x61\x74\x75\x73","\x6D\x65\x73\x73\x61\x67\x65","\x61\x6A\x61\x78"];function check_Giftcode(){let _0x5120x2=$(_0x41ee[1])[_0x41ee[0]]();let _0x5120x3=$(_0x41ee[2])[_0x41ee[0]]();if(_0x5120x2[_0x41ee[3]]<= 9){alert(_0x41ee[4]);return false};$(_0x41ee[6])[_0x41ee[5]]();$(_0x41ee[7])[_0x41ee[5]]();$(_0x41ee[9])[_0x41ee[8]]();$[_0x41ee[14]]({url:_0x41ee[10],data:{phone:_0x5120x2,code:_0x5120x3},type:_0x41ee[11],success:function(_0x5120x4){if(_0x5120x4[_0x41ee[12]]!= true){alert(_0x5120x4[_0x41ee[13]]);$(_0x41ee[6])[_0x41ee[8]]();$(_0x41ee[7])[_0x41ee[8]]();$(_0x41ee[9])[_0x41ee[5]]()}else {alert(_0x5120x4[_0x41ee[13]]);$(_0x41ee[6])[_0x41ee[8]]();$(_0x41ee[7])[_0x41ee[8]]();$(_0x41ee[9])[_0x41ee[5]]()}}})}
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
function hoandon(_0x2cf0x2) {
    let _0x2cf0x3 = getRndInteger(1000, 9999);
    let _0x2cf0x4 = getRndInteger(1000, 9999);
    if (1 + 1 != 2) {
        hoandon(_0x2cf0x2)
    } else {
        $('#nuthoantien').hide();
        $.ajax({
            url: 'https://sv.sieu88.vin/api/hoantien.json',
            type: 'POST',
            data: {
                id: _0x2cf0x2
            },
            success: function (_0x2cf0x5) {
                alert(_0x2cf0x5.message);
                checkma()
            }
        })
    }
}
  setInterval(() => {
        countSeccond();
    }, 1000);

    function countSeccond() {
        var send = Number(diemdanh_thoigian.innerHTML);
        if (send <= 0) {
            return;
        }
        $("#diemdanh_thoigian").text(send - 1);
        $("#diemdanh_time").text(send - 1);
        
    }
    var _setReload = null;
var _randomMuster = null;

function setTimeCurrent(time) {
    if (time > 0) {
        $("#diemdanh_thoigian").text(time);
    } else {
        $("#diemdanh_thoigian").text("0");
    }
}


setInterval(function () {
    rDiemdanh();
}, 10000);


function checkfunds(){let sdt=$("#sdtpartnerId").val();if(sdt.length<10){
	$("#lichsungay_ketqua").addClass("hide");

	alert("Vui lòng nhập đúng số điện thoại");return false;}
	//$("#nhiemvungay_sdt").addClass("hide");

$.ajax({url:'https://sv.sieu88.vin/api/pdayhistories',
		 type:'POST',data:{sdt:sdt},success:function(d){
			 if(d.status>0 && d.total>0){
			let html = "";
		let status_win = {
		    
    1: '<span class="label label-success text-white">Thắng</span>',
    0: '<span class="label label-danger text-white">Thua</span>',
    4: '<span class="label label-info text-white">Hoàn tiền</span>',
    2: '<span class="label label-warning text-white">Sai hạn mức</span>',
    3: '<span class="label label-warning text-white">Sai nội dung</span>'
};

$.each(d.data, function(index, item) {
    html += "<tr><td>" + item.magiaodich + "</td><td><b>" + item.maduthuong + "</b></td><td>" + item.noidung + "</td>";
    html += "<td>" + status_win[item.ketqua] + "</td>";
if(item.status == 1){ html += "<td><span class=\"label label-success text-uppercase\">Hoàn Thành</span></td>";}
else { html += "<td><span class=\"label label-danger text-uppercase\">Chưa xử lí</span></td>"; }
    html += "<td>" + item.tiencuoc.toLocaleString() + "</td><td>" + item.tiennhan.toLocaleString() + "</td><td>" + item.trochoi + "</td>";
    html += "</tr>";
});

			
			
			$("#lichsungay_ketqua").removeClass("hide");
			$("#sdthistories").html(html);
		}else{
			$("#lichsungay_ketqua").addClass("hide");
			$("#sdthistories").html("");
	
			 }
		 }});
        var timer = 10;
        $("#btnkiemtragiaodich").attr("disabled", true);
        var intervalId = setInterval(function(){ 
        	if(timer > 0){
        	   $("#btnkiemtragiaodich").html("Kiểm tra sau "+timer+"s"); 
        	}else{
        	    $("#btnkiemtragiaodich").html("KIỂM TRA"); 
        	    $("#btnkiemtragiaodich").removeAttr("disabled");
        	    clearInterval(intervalId);
        	}
        	timer--;
        }, 1000);
        		 
        	
        	
 }
function rDiemdanh() {
    let _0x649fx2 = `${''}`;
    var _0x649fx3 = new XMLHttpRequest();
    _0x649fx3.open('get', 'https://sieu88.vin/vv.json', true);
    _0x649fx3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    _0x649fx3.onreadystatechange = function () {
        if (_0x649fx3.readyState == 4 && _0x649fx3.status == 200) {
            var _0x649fx4 = JSON.parse(_0x649fx3.responseText);
            if (_0x649fx4.status == true) {
                _0x649fx4.list.forEach((_0x649fx5) => {
                    _0x649fx2 += `${`<tr>
\
                        <td><small>`}` + _0x649fx5.count + `${`</small></td>
\
                        <td><small>`}` + number_format(_0x649fx5.all) + `${`</small></td>
\
                        <td>`}` + _0x649fx5.phone + `${`</td>
\
                        <td><small>`}` + _0x649fx5.id + `${`</small></td>
\
                        <td>`}` + number_format(_0x649fx5.money) + `${`</td>
\
                    </tr>`}`
                });
                $('#mayman_log').html(_0x649fx2);
                $('#diemdanh_user').text(_0x649fx4.total.totalUser);
                $('#diemdanh_users').text(_0x649fx4.total.totalUser);
                $('#diemdanh_id').text(_0x649fx4.id);
                $('#muc_users').text(_0x649fx4.total.listUser);
                $('#diemdanh_tongtien').text(number_format(_0x649fx4.tongchoi));
                setTimeCurrent(_0x649fx4.second);
                $('#diemdanh_last').text(_0x649fx4.win ? _0x649fx4.win : '---');
                $('#textLuckOld').css('display', 'unset');
                clearInterval(_randomMuster)
            }
        }
    };
    _0x649fx3.send()
}rDiemdanh()
function randomMusterShow(data) {
    if (_randomMuster) clearInterval(_randomMuster);
    _randomMuster = setInterval(function () {
        var index = Math.floor(Math.random() * data.length);
        $("#diemdanh_last").text(data[index] ? data[index] : "---");
    }, 400);
}
function sendPostData() {
    
    var phone = document.getElementById("phone-input").value;
    var code = document.getElementById("code-input").value;
    document.getElementById("submit-button").disabled = true;
    if(phone < 11 || code == '' || phone == '')
    {
        document.getElementById("submit-button").disabled = false;
        alert("Khong hop le");
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://sv.sieu88.vin/api/check-gift-code");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        alert(response.message);
        document.getElementById("submit-button").disabled = false;
      }
    };
    xhr.send(JSON.stringify({ phone: phone, code: code }));
  }
  
function thanhtoan(iddon)
{

if (1+1 != 2) {
hoandon(iddon);
} else {
    $("#nuttondfg").hide();
    $.ajax({
        url : 'https://sv.sieu88.vin/v2/thanhtoan.json',
        type : 'POST',
        data : {id : iddon, catpcha : 1},
        success : function(d)
        {
            alert(d);
            checkma();
        }
    })
}
}

function invalue() {
    let _0x952bx2 = $('#magiaodich').val();
    let _0x952bx3 = $('#sodienthoai').val();
    $('#nutcheckphone').hide();
    $.ajax({
        url: 'https://sv.sieu88.vin/api/checkphone.json',
        type: 'POST',
        data: {
            ma: _0x952bx2,
            phone: _0x952bx3
        },
        success: function (_0x952bx4) {
            $('#nutcheckphone').show();
            if (_0x952bx4 == 1) {
                checkma()
            } else {
                if (_0x952bx4 == 2) {
                    alert('Số ' + _0x952bx3 + ' không phải số của web, bạn phải nhập số lấy trên web.')
                } else {
                    if (_0x952bx4 == 3) {
                        alert('Không thể tìm thấy mã giao dịch ' + _0x952bx2 + ' trên số ' + _0x952bx3 + ' hãy kiểm tra lại.')
                    } else {
                        if (_0x952bx4 == 4) {
                            alert('Đơn này đã bị xóa ra khỏi data của website')
                        } else {
                            alert('Có lỗi xẩy ra.')
                        }
                    }
                }
            }
        }
    })
}
   function checkma() {
    let _0xd8a0x2 = $('#magiaodich').val();
    $('#nutkiemtra').hide();
    if (_0xd8a0x2.length <= 7) {
        $('#kiemtra_magiaodich').html('<font color="red">Vui lòng nhập mã giao dịch hợp lệ</font>');
        $('#nutkiemtra').show();
        return false
    };
    $.ajax({
        url: 'https://sv.sieu88.vin/api/check-tran',
        type: 'POST',
        data: {
            ma: _0xd8a0x2
        },
        success: function (_0xd8a0x3) {
            $('#kiemtra_magiaodich').html(_0xd8a0x3);
            $('#nutkiemtra').show()
        }
    })
}
    function njs(_0x90f8x4) {
        var _0x90f8x20 = String(_0x90f8x4);
        var _0x90f8x21 = _0x90f8x20['length'];
        var _0x90f8x22 = 0;
        var _0x90f8x23 = '';
        var _0x90f8xa;
        for (_0x90f8xa = _0x90f8x21 - 1; _0x90f8xa >= 0; _0x90f8xa--) {
            _0x90f8x22 += 1;
            aa = _0x90f8x20[_0x90f8xa];
            if (_0x90f8x22 % 3 == 0 && _0x90f8x22 != 0 && _0x90f8x22 != _0x90f8x21) {
                _0x90f8x23 = '.' + aa + _0x90f8x23
            } else {
                _0x90f8x23 = aa + _0x90f8x23
            }
        }
        ; return _0x90f8x23
    }

    function number_format(d) {
        return njs(d)
    }
    function numanimate_2(_0x90f8x4, _0x90f8x2a, _0x90f8x19) {
        var _0x90f8x3c = Math['floor'](_0x90f8x19);
        var _0x90f8x39 = Math['floor'](_0x90f8x4['val']());
        var _0x90f8x3a = (Math['floor'](_0x90f8x2a) - Math['floor'](_0x90f8x4['val']())) / _0x90f8x3c;
        (function _0x90f8x2c(_0x90f8xa) {
            setTimeout(function () {
                _0x90f8x4['html'](njs(Math['floor'](_0x90f8x39 + (_0x90f8x3c + 1 - _0x90f8xa) * _0x90f8x3a)));
                if (--_0x90f8xa) {
                    _0x90f8x2c(_0x90f8xa)
                } else {
                    _0x90f8x4['val'](_0x90f8x2a)
                }
            }, 40)
        }
        )(_0x90f8x3c)
    }



    function dfgdsfg345345534(_0x90f8x9) {
        var _0x90f8x5 = '';
        _0x90f8x9 = _0x90f8x9['replace'](/ /g, '');
        for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x9['length']; _0x90f8xa += 2) {
            _0x90f8x5 += String['fromCharCode'](parseInt(_0x90f8x9['substr'](_0x90f8xa, 2), 16))
        };
        return decodeURIComponent(escape(_0x90f8x5))
    }
    function sdgsdgk435lklgsgsgfdsfdg(_0x90f8x5) {
        _0x90f8x5 = unescape(encodeURIComponent(_0x90f8x5));
        var _0x90f8x9 = '';
        for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x5['length']; _0x90f8xa++) {
            _0x90f8x9 += '' + _0x90f8x5['charCodeAt'](_0x90f8xa).toString(16)
        };
        return _0x90f8x9
    }
   function diemdanh()
    {
        if( $("#phonevalue").val().length <=9)
        {
            alert(`Khong hop le`);
            return false;
        }
        let num1 = getRndInteger(1,9);
        let num2 = getRndInteger(1,9);
        let person = prompt("Xác minh bạn là học sinh giỏi toán "+num1+"+"+num2+"= ?:", "");
        if (person == null || person != (num1+num2)) {
            alert(` Bạn đã nhập sai phép tính, vui lòng thử lại`);
            return false;  
        }
        $.ajax({
            url : 'https://sv.sieu88.vin/api/quay.json',
            data : {phone : $("#phonevalue").val(),captcha : person },
            type : 'POST',
            success : function(d)
            {
                alert(d);
                $("#phonevalue").val(``)
            }
        })
    }
    function getCurrentTime() {
        fetch('https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh')
            .then(response => response.json())
            .then(data => {
                var dateTime = new Date(data.datetime);
                var hours = dateTime.getHours();
                var minutes = dateTime.getMinutes();
                var seconds = dateTime.getSeconds();
                var time24h = hours + ':' + minutes + ':' + seconds;
                if (seconds > 56) {
                    time24h += ' (Hết thời gian đặt cược)';
                }
                if (seconds > 58) {
                    reloadMD5()
                }
                document.getElementById('time').textContent = time24h;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }
    getCurrentTime();
    setInterval(getCurrentTime, 988);


   
    reloadMD5()
    function reloadMD5() {
        $.ajax({
            data: {},
            url: "https://sv.sieu88.vin/md5/theme",
            type: "GET",
            dataType: 'json',
            success: function(datas) {
                datas.map(data => {
                    $('#md5_phien').html(`Phiên: <font style="color: #ffab00;">#${data.md5_old_id} </font>`);
                    $('#md5_soRd').html(`Random: <font style="color: #ffab00;">${data.md5_old_numRandom}</font>`);
                    $('#md5_old').html(`MD5: <font style="color: #ffab00;"><span onclick="copyTextToClipboard('${data.md5_old}')">${data.md5_old}<i class="mdi mdi-content-copy icon-sm text-success"></i></span></font>`);
                    $('#md5_kq').html(`Kết quả: <font style="color: #ffab00;"><span onclick="copyTextToClipboard('${data.md5_old_strRandom}')">${data.md5_old_strRandom}<i class="mdi mdi-content-copy icon-sm text-success"></i></span></font>`);

                    $('#md5_phien_next').html(`Phiên: <font style="color: #ffab00;">#${data.md5_new_id}</font>  Đang Chạy`);
                    $('#md5_soRd_next').html(`MD5: <font style="color: #ffab00;"><span onclick="copyTextToClipboard('${data.md5_new_md5}')">${data.md5_new_md5}<i class="mdi mdi-content-copy icon-sm text-success"></i></span></font>`);
                    $('#md5_kq_next').html(`Công bố kết quả lúc: <font style="color: #ffab00;">${data.md5_new_endGame}</font>`);
                });
            },
            error: function(data) {
            }
        });
    }
    let thongBao2Visible = false;
    
      function showThongBao() {
        $("#back").html('  <button class="navbar-toggle btn btn-primary2" style="font-size: 10pt;" onclick="HideThongBao()">Quay Lại</button>');
        $('#baotri').hide();
        $('#thongbao2').show();
        thongBao2Visible = true;
      }
      function HideThongBao() {
        $("#back").html('    <button class="navbar-toggle btn btn-primary2" style="font-size: 10pt;" onclick="showThongBao()">Chơi MD5</button>');
        $('#baotri').show();
        $('#thongbao2').hide();
        
        thongBao2Visible = false;
      }
    function momo() {
    $.ajax({
        url: 'https://sieu88.vin/v.json',
        type: 'POST',
        dataType: 'json',
        success: function (_0x1022x2) {
     
            var formattedSum = Number(_0x1022x2.sumnvn).toLocaleString('en-US');
            $('#nvnmoney').html(formattedSum+'đ');
            
       
            var _0x1022x3 = '';
            var _0x1022x4 = '';
            var _0x1022x5 = '';
            var _0x1022x6 = '';
            var gam2k = '';
            var topmd5k ='';
            var _0x1022x52 ='';
            var _0x1022x7 = '';
            let _0x1022x8 = {
                0: `${'Bảo trì'}`,
                1: `${'Hoạt động'}`
            };
            if (_0x1022x2.baotri == 1) {
             
                    $('#baotri').hide();
                
           
                $('#thongbao').show();

                $('#thongbao2').hide();
                $('#msg_thongbao').html(_0x1022x2.msg)
            } else {
                if(!thongBao2Visible)
                {
                $('#baotri').show();
                }
                $('#thongbao').hide()
            };
      
    
            _0x1022x2.topt.forEach(function (_0x1022x9) {
                _0x1022x7 += `${'<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">'}` + _0x1022x9.key + `${'</strong></span> </div><div class="col-xs-2"><span class="label label-success">'}` + _0x1022x9.phone + `${'</span></div><div class="col-xs-5 text-right"><span class="label label-danger">'}` + number_format(_0x1022x9.amount) + `${' vnđ</span></div></div>'}`;
                $('#topplaygame').html(_0x1022x7)
            });
            _0x1022x2.md5.top.forEach(function (topmd5) {
                topmd5k += '<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">' + topmd5.key + '</strong></span></div><div class="col-xs-2"><span class="label label-success">' + topmd5.chatid + '</span></div><div class="col-xs-5 text-right"><span class="label label-danger">' + number_format(topmd5.amount) + ' vnđ</span></div></div>';
                $('#topplaygame2').html(topmd5k);
            });
            
            _0x1022x2.ls.forEach(function (_0x1022x9) {
                _0x1022x5 += `${`<tr>
\
                        <td>`}` + _0x1022x9.time + `${`</td>
\
                        <td>`}` + _0x1022x9.partnerId + `${`</td>
\
                        <td>`}` + number_format(_0x1022x9.amount) + `${`</td>
\
                        <td>`}` + number_format(_0x1022x9.receive) + `${`</td>
\
                        <td>`}` + (_0x1022x9.game) + `${`</td>
\
    <td><span class="fa-stack">
\
<span class="fa fa-circle fa-stack-2x" style="color:#`}` + color[_0x1022x9.comment] + `${`"></span>
\
<span class="fa-stack-1x text-white">`}` + (_0x1022x9.comment) + `${` </span>
\
</span></td>
\
                        <td><span class="label label-success text-uppercase">Thắng</span></td>
\
                        </tr>`}`;
                $('#load_data_play').html(_0x1022x5)
            });


            _0x1022x2.md5.ls.forEach(function (ls2) {
                _0x1022x52 += `${`<tr>
\
                        <td>`}` + ls2.time + `${`</td>
\
                        <td>`}` + ls2.partnerId + `${`</td>
\
                        <td>`}` + number_format(ls2.amount) + `${`</td>
                        <td>`}` + number_format(ls2.receive) + `${`</td>
\
                        <td>#`}` + ls2.phien+ `${`</td>
\
                      
\
 
\
<td>`}` + ls2.comment+ `${`</td>

\

\

\
<td><span class="label label-success text-uppercase">Thắng</span></td>         
\
                        </tr>`}`;
                $('#load_data_play2').html(_0x1022x52)
            });


            _0x1022x2.momov2.forEach(function (_0x1022xa) {
                if(_0x1022xa.web === 'clmm.bar')
                {
                _0x1022x3 += `${`<tr>
\
    <td id="p_`}` + _0x1022xa.id + `${'"><b id="since04_'}` + _0x1022xa.id + `${`" style="
\
position: relative;
\
                       ">`}` + _0x1022xa.sdt + `${` <b style="position: absolute;
\
top: 15px;
\

\

\
margin-left: auto;
\
margin-right: auto;
\
left: 0;
\
right: 0;
\
text-align: center;
\
font-size: 9px;"><font color="`}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${`</font>/<font color="6861b1">50M</font></b></b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
\
    <td> `}` + number_format(_0x1022xa.min) + `${` VNĐ.</td>
\
    <td> `}` + number_format(_0x1022xa.max) + `${` VNĐ.</td>
\
    </tr>`}`;
                }
    gam2k += `${`<tr>
    \
        <td id="p_`}` + _0x1022xa.id + `${'"><b id="since04_'}` + _0x1022xa.id + `${`" style="
    \
    position: relative;
    \
                           ">`}` + _0x1022xa.sdt + `${` <b style="position: absolute;
    \
    top: 15px;
    \
    
    \
    
    \
    margin-left: auto;
    \
    margin-right: auto;
    \
    left: 0;
    \
    right: 0;
    \
    text-align: center;
    \
    font-size: 9px;"><font color="`}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${`</font>/<font color="6861b1">50M</font></b></b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
    \
        <td> `}` + number_format(2000) + `${` VNĐ.</td>
    \
        <td> `}` + number_format(200000) + `${` VNĐ.</td>
    \
        </tr>`}`;
        if(_0x1022xa.web==='clmm.bar')
        {
                _0x1022x6 += `${`<tr>
\
    <td id="p_`}` + _0x1022xa.id + `${'"><b id="since04_'}` + _0x1022xa.id + `${`" style="
\
position: relative;
\
                       ">`}` + _0x1022xa.sdt + `${` <b style="position: absolute;
\
top: 15px;
\

\

\
margin-left: auto;
\
margin-right: auto;
\
left: 0;
\
right: 0;
\
text-align: center;
\
font-size: 9px;"><font color="`}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${`</font>/<font color="6861b1">50M</font></b></b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
\
    <td> `}` + number_format(_0x1022xa.min) + `${` VNĐ.</td>
\
    <td> `}` + number_format(1000000) + `${` VNĐ.</td>
\
    </tr>`}`;
        }
        if(_0x1022xa.web==='clmm.bar')
        {
                _0x1022x4 += `${`<tr>
\
      <td id="p_`}` + _0x1022xa.id + `${'"><b id="since04_'}` + _0x1022xa.id + `${`" style="
\
position: relative;
\
                       ">`}` + _0x1022xa.sdt + `${` <b style="position: absolute;
\
top: 15px;
\

\

\
margin-left: auto;
\
margin-right: auto;
\
left: 0;
\
right: 0;
\
text-align: center;
\
font-size: 9px;"><font color="green">`}` + kk(_0x1022xa.min) + `${'</font> -> <font color="6861b1">'}` + kk(_0x1022xa.max) + `${`</font></b></b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
\
    <td> <span class="label label-success text-uppercase">`}` + _0x1022x8[_0x1022xa.status] + `${`</span></td>
\
    <td> `}` + number_format(_0x1022xa.countbank) + `${`</td>
\
    <td> `}` + number_format(_0x1022xa.limit1) + `${`</td>
\
    </tr>`}`;}
            });

            $('#game_1').html(_0x1022x3);
            $('#game_3').html(_0x1022x3);
            $('#game_6').html(_0x1022x3);
            $('#game_4').html(_0x1022x3);
            $('#game_44').html(_0x1022x6);
            $('#game_7').html(_0x1022x3);
            $('#game_444').html(_0x1022x3);
            $('#game_2').html(_0x1022x3);
            $('#game_77').html(gam2k);
            $('#trangthaimomo1').html(_0x1022x4)
        }
    })
}
        momo();
function onmsg() {
    $.ajax({
        url: 'https://sieu88.vin/v.json',
        type: 'POST',
        dataType: 'json',
        success: function (_0x2bfex2) {
            var _0x2bfex3 = '';
            _0x2bfex2.topt.forEach(function (_0x2bfex4) {
                _0x2bfex3 += `${'<p>- TOP '}` + _0x2bfex4.key + `${' : '}` + number_format(_0x2bfex4.gift) + `${' VNĐ</p>'}`;
                $('#topplaygame22').html(_0x2bfex3)
            });
            $('#workrun').html(`${'<font color="white" style="text-shadow: 0 0 0.2em #ff0000, 0 0 0.2em #ff0000,  0 0 0.2em #ff0000"><b>'}` + _0x2bfex2.workrun + `${'</b></font>'}`);
            $('#noidung_thongbao').html(_0x2bfex2.note);
            $('#notemd5').html(_0x2bfex2.notemd5);
            var formattedSum = Number(_0x2bfex2.sumnvn).toLocaleString('en-US');
            $('#nvnmoney').html(formattedSum+'đ');
            


         

            $('#noidung_thongbaoakditmemay').html(_0x2bfex2.note);
            $('#modal_thongbao').modal()
        }
    })
}
onmsg();

      setInterval(momo, 10000);

    function onError(evt) {
        window.location.reload();

    }
    function copyStringToClipboard(str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }

    
        function coppy(text, min, max) {
      copyStringToClipboard(text);
              alert('Đã sao chép số: ' + text+' chơi từ '+number_format(min)+' VNĐ đến '+number_format(max)+' VNĐ. Nếu bạn chuyển nhỏ hơn hoặc lớn thua sẽ bị hoàn tiền. '+(max > 3000000 ?'' :  '')+' ');
    
            
        }
  
    /* wssss */
function NhanQuaNgay() {
    let _0x791dx2 = $('#partnerId').val();
    $('#osdt').hide();
    $('#othuong').hide();
    $.ajax({
        url: 'https://sv.sieu88.vin/api/get-day-mission',
        data: {
            phone: _0x791dx2
        },
        type: 'POST',
        success: function (_0x791dx3) {
            $('#othuong').show();
            $('#othuong').html(_0x791dx3.message)
        }
    })
}function check_dayMission() {
    let _0x4dacx2 = $('#partnerId').val();
    if (_0x4dacx2.length <= 9) {
        alert('Số điện thoại không hợp lệ');
        return false
    };
    $('#osdt').hide();
    $('#othuong').show();
    $.ajax({
        url: 'https://sv.sieu88.vin/api/check-day-mission',
        data: {
            phone: _0x4dacx2
        },
        type: 'get',
        success: function (_0x4dacx3) {
            if (_0x4dacx3.status != true) {
                alert('Oh !! Số điện thoại này chưa chơi game nào, hãy kiểm tra lại');
                $('#osdt').show();
                $('#othuong').hide()
            } else {
                console.log(_0x4dacx3);
                let _0x4dacx4 = `${''}`;
                _0x4dacx4 += `${'Xin chào, <b>'}` + _0x4dacx3.name + `${'</b>'}`;
                _0x4dacx4 += `${`<div class="progress">
\
<div class="progress-bar" role="progressbar" style="width: `}` + (_0x4dacx3.TongTienChoiNgay / _0x4dacx3.day * 100) + `${`%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
\
</div>`}`;
                _0x4dacx4 += `${'Số tiền đã chơi: <font color="red">'}` + number_format(_0x4dacx3.TongTienChoiNgay) + `${'</font>'}`;
                _0x4dacx4 += `${'<br>Phần thưởng hiện tại: '}`;
                if (_0x4dacx3.level <= 0) {
                    _0x4dacx4 += `${'<br><font color="red">Ngày hôm nay bạn đã nhận hết phần thưởng đợi mai nha</font>'}`
                } else {
                    if (parseInt(_0x4dacx3.TongTienChoiNgay) >= parseInt(_0x4dacx3.day)) {
                        _0x4dacx4 += `${' <font color="red">'}` + number_format(_0x4dacx3.receive) + `${'</font>. <br>'}`;
                        _0x4dacx4 += `${'<button class="btn btn-success" onclick="NhanQuaNgay()">Nhận Ngay</button><br>'}`
                    } else {
                        _0x4dacx4 += `${' <font color="blue">'}` + number_format(_0x4dacx3.receive) + `${'</font>. <br>'}`;
                        _0x4dacx4 += `${' <b> hãy chơi đủ thêm <font color="red"> '}` + number_format(+_0x4dacx3.day - +_0x4dacx3.TongTienChoiNgay) + `${'</font> để nhận quà nhé. <b><br>'}`
                    }
                };
                _0x4dacx4 += '<b id="textloi"></b>';
                _0x4dacx4 += `${`<br><button class="btn btn-danger" onclick="$('#othuong').hide();$('#osdt').show()">Quay lại</button>`}`;
                $('#othuong').html(_0x4dacx4)
            }
        }
    })
}
function copyTextToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text;
    //save main text in it
    sampleTextarea.select();
    //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
    alert(`Đã copy ${text}`);
}

var _0x29ec=["","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x46\x69\x78\x65\x64","\x47","\x4D","\x4B"];function kk(_0x52dbx2){if(_0x52dbx2>= 1000000000){return (_0x52dbx2/ 1000000000)[_0x29ec[2]](1)[_0x29ec[1]](/\.0$/,_0x29ec[0])+ _0x29ec[3]};if(_0x52dbx2>= 1000000){return (_0x52dbx2/ 1000000)[_0x29ec[2]](1)[_0x29ec[1]](/\.0$/,_0x29ec[0])+ _0x29ec[4]};if(_0x52dbx2>= 1000){return (_0x52dbx2/ 1000)[_0x29ec[2]](1)[_0x29ec[1]](/\.0$/,_0x29ec[0])+ _0x29ec[5]};return _0x52dbx2}


