

function CryptoJSAesDecrypt(passphrase,encrypted_json_string){

try 
{
    var obj_json = JSON.parse(encrypted_json_string);
}
catch(e)
{
    var obj_json = (encrypted_json_string);
}

var encrypted = obj_json.since04;
var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
var iv = CryptoJS.enc.Hex.parse(obj_json.iv);   

var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999});


var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv});

return decrypted.toString(CryptoJS.enc.Utf8);
}

function CryptoJSAesEncrypt(passphrase, plain_text){

var salt = CryptoJS.lib.WordArray.random(256);
var iv = CryptoJS.lib.WordArray.random(16);
//for more random entropy can use : https://github.com/wwwtyro/cryptico/blob/master/random.js instead CryptoJS random() or another js PRNG

var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999 });

var encrypted = CryptoJS.AES.encrypt(plain_text, key, {iv: iv});

var data = {
    since04 : CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
    salt : CryptoJS.enc.Hex.stringify(salt),
    iv : CryptoJS.enc.Hex.stringify(iv)    
}

return JSON.stringify(data);
}
let passwordx = 'ducnghia';


function Since04_body()
{
$("body").html(`



<!------bostrpnotice thongbao----->


<div id="since04_notice" style="display:none;position: fixed;
margin-left: auto;
margin-right: auto;
left: 0;
top: 20%;
right: 0;
text-align: center;z-index:99999;"><div class="sprite_2" style="position: relative;
margin-left: auto;
margin-right: auto;
left: 0;
top: 20%;
right: 0;
text-align: center;"></div><p class="">Chúc mừng <b id="phone_thang">since04</b> vừa chiến thắng <b id="tienthang">since04</b> Vnđ. <Br> <small><font color="red" onclick="tatnotie()">[Tắt]</font></small></p></div>


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

<div class="navbar">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand navbar-brand-image" href="/index.html">
                <div class="hidden-xs">
                    <img src="assets/fhf.png" style="margin-top: -15px;
margin-bottom: 10px;
width: 250px;" alt="clmm.me Logo">
                </div>
                <div class="visible-xs">
                    <img src="assets/fhf.png" style="margin-top: -10px;
/* margin: 13px; */
width: 200px;" alt="clmm.me Logo">
                </div>
            </a>
        </div>

<marquee width="100%" behavior="scroll"  style="display: block;
position: fixed;
bottom: 70 px;
left: 15 px;
z-index: 1000;
cursor: pointer;
width: 100%;">  
<font color="white" style="text-shadow: 0 0 0.2em #ff0000, 0 0 0.2em #ff0000,  0 0 0.2em #ff0000"><b>Hiện nay có rất nhiều Website giả mạo, fake Clmm.Me hay quảng cáo trong Box chát,... Tất cả các website đó đều là lừa đảo, wen chỉ có 1 tên miền duy nhất, các bạn không nên thử tránh mất tiền oan.</b></font>
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
                    Trong lúc chờ đợi thì vào nhóm zalo chém gió nhá
                    <br>
                    <a class="text-white" href="https://zalo.me/g/wyutth431" target="_blank"><span
                            class="btn btn-success text-uppercase">Chát Box </span></a>
                </p>
            </center>
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
                    <button class="btn btn-default" server-action="change" server-id="1" server-rate="1">
                        Chẵn Lẻ 2
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
font-size: 9px;"><font color="green"><i class="fa fa-clock-o" aria-hidden="true"></i> <b id="thoigian_head">0s</b></font> <font color="6861b1"><i class="fa fa-users" aria-hidden="true"></i> <b id="users_head">0</b></font></b>
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
                    
                    
                     <button style="display:block" class="btn btn-default" server-action="change" server-id="4564560" server-rate="4564560">
                        Vòng quay 1 tuổi
                        <b style="
top: 33px; position: absolute;
/* left: 1%; */
/* margin: auto; */
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
font-size: 9px;"><font color="red">(HOT)</font></b>
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
            - Sinh nhật một tuổi, tràn ngập quà tặng. <br>
            - Bạn hãy ấn nút <b>Quay</b> sau đó hãy nhập mã giao dịch (mã <b>Thắng</b> hay <b>Thua</b> đều có thể quay), sẽ tiến hành quay. <br>
            - Số tiền chơi càng lớn, giá trị quà tặng càng cao. <br>
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
   
   <font color="blue"><big><b>Nhiệm Vụ Ngày</b></big></font>
   <br>
               
   
    
    <div class="form-group occard" id="osdt">
                                    <label for="exampleInputEmail1">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="PhoneChoi" aria-describedby="emailHelp" placeholder="03837755">
                                    <small id="emailHelp" class="form-text text-muted">Nhập số điện thoại của bạn để điểm danh.</small>
                                    <br>
                                    <button class="btn btn-success" data-toggle="modal" data-target="#modalDiemDanh" onclick="choilanhan()">Kiểm Tra</button>
                                </div>
                                
                                <div class="form-group occard" id="othuong" style="display:none;">
                                   
                                </div>
    
   
    </div>
    <div class="occho" id="fghdh"> 
    - Thật tuyệt vời ! Mỗi ngày chỉ cần chơi trên Clmm.Me chắc chắn bạn sẽ nhận được tiền. <br>
- Khi chơi đủ số tiền (ko cần biết thắng thua) chắc chắn sẽ nhận được tiền.  <br>
- Hãy nhập số điện thoại của bạn vào mục bên trên để kiểm tra đã chơi bao nhiêu nhé. Chú ý : Phải nhập sdt là số cũ vd: 082xxx -> 0129xxx , 03xxx -> 016... <br>
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
                                    </tbody>
                                </table>
                            </div>
                            
    </div>
    
  
    
   
    
    
  
  </div>
</div>
</div>
                         
                         
                         
                         </div>
                        
                        
                        
                        <div class="panel-body turn" turn-tab="10000" style="padding-top: 0px;">
                            Cách chơi vô cùng đơn giản : <br>
                            - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            - Nội dung chuyển : <b>T</b> hoặc <b>X</b> (nếu đuôi mã giao dịch có các số sau) <br>
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
                                            <td><b>X</b></td>
                                            <td> <code>1</code> - <code>2</code> - <code>3</code> - <code>4</code>
                                            </td>
                                            <td><b>x2.3 tiền cược</b></td>
                                        </tr>
                                        <tr>
                                            <td><b>T</b></td>
                                            <td><code>5</code> - <code>6</code> - <code>7</code> - <code>8</code>
                                            </td>
                                            <td><b>x2.3 tiền cược</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <b> - Chơi chẵn lẻ tài xỉu 2 (C2, L2, T2, X2) tối đa 500.000.</b> <br>
                            
                            - Tiền thắng sẽ = <b>Tiền cược*2.3</b> <br>
                           <b> Đặc biệt</b>: bạn có 10% cơ hội được trả thưởng 2 lần. <Br>

                            - <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung vui lòng vào phần "kiểm tra mã giao dịch" để hoàn tiền.</b>




                        </div>

                        <div class="panel-body turn" turn-tab="1000" style="padding-top: 0px;">
                            Cách chơi vô cùng đơn giản : <br>
                            - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            - Nội dung chuyển : <b>C</b> hoặc <b>L</b> (nếu đuôi mã giao dịch có các số sau) <br>
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
                                            <td><b>L</b></td>
                                            <td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code>
                                            </td>
                                            <td><b>x2.3 tiền cược</b></td>
                                        </tr>
                                        <tr>
                                            <td><b>C</b></td>
                                            <td><code>2</code> - <code>4</code> - <code>6</code> - <code>8</code>
                                            </td>
                                            <td><b>x2.3 tiền cược</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            - Tiền thắng sẽ = <b>Tiền cược*2.3</b> <br>
                             -<b> Đặc biệt</b>: bạn có 10% cơ hội được trả thưởng 2 lần. <Br>

                            <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung vui lòng vào phần "kiểm tra mã giao dịch" để hoàn tiền..</b>



                        </div>

                        <div class="panel-body turn" turn-tab="1" style="padding-top: 0px;">
                            Cách chơi vô cùng đơn giản : <br>
                            - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            - Nội dung chuyển : <b>C2</b> hoặc <b>L2</b> (nếu đuôi mã giao dịch có các số sau) <br>
                            - <font color="red">LƯU Ý</font> <b>C2, L2, T2, X2</b> chỉ chơi <b>TỐI ĐA</b> <font color="red">500.000</font> VNĐ. Chuyển quá sẽ bị mất.
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
                                            <td><b>L2</b></td>
                                            <td> <code>1</code> - <code>3</code> - <code>5</code> - <code>7</code> -
                                                <code>9</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        <tr>
                                            <td><b>C2</b></td>
                                            <td><code>0</code> -<code>2</code> - <code>4</code> - <code>6</code> -
                                                <code>8</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        
                                        <tr>
                                            <td><b>X2</b></td>
                                            <td><code>0</code> -<code>1</code> - <code>2</code> - <code>3</code> -
                                                <code>4</code></td>
                                            <td><b>x1.95 tiền cược</b></td>
                                        </tr>
                                        
                                        <tr>
                                            <td><b>T2</b></td>
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

                        <div class="panel-body turn" turn-tab="2" style="padding-top: 0px;">
                            - <b>Gấp 3</b> là một game vô cùng dễ, tính kết quả bằng <b>2 số cuối mã giao dịch</b>.
                            <br>
                            - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            với nội dung : <code>G3</code>.
                            <br>



                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover text-center">
                                    <thead>
                                        <tr role="row" class="bg-primary">
                                            <th class="text-center text-white">Cách tính</th>
                                            <th class="text-center text-white">Số</th>
                                            <th class="text-center text-white">Tiền nhận</th>

                                        </tr>
                                    </thead>
                                   <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table" class="">
<tr>
<td>2 số cuối mã GD</td>
<td>
<code>02</code> <code>13</code> <code>17</code> <code>19</code> <code>21</code> <code>29</code> <code>35</code> <code>37</code> <code>47</code> <code>49</code> <code>51</code> <code>54</code> <code>57</code> <code>63</code> <code>64</code> <code>74</code> <code>83</code> <code>91</code> <code>95</code> <code>96</code> </td>
<td><b>x3 tiền cược</b></td>
</tr>
<tr>
<td>2 số cuối mã GD</td>
<td>
<code>66</code> <code>99</code> </td>
<td><b>x4 tiền cược</b></td>
</tr>
<tr>
<td>3 số cuối mã GD</td>
<td>
<code>123</code> <code>234</code> <code>456</code> <code>678</code> <code>789</code> </td>
<td><b>x5 tiền cược</b></td>
</tr>
</tbody>
                                </table>
                            </div>


                        </div>


                        



                        <div class="panel-body turn" turn-tab="2706" style="padding-top: 0px;">
                            - <b>Xiên</b> là một game vô cùng dễ, tính kết quả bằng <b>1 số cuối mã giao
                                dịch</b>. <br>
                            - Cách chơi rất đơn giản, - Chuyển tiền vào một trong các tài khoản : <div
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
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
                                            <td><b>x3.3 tiền cược</b></td>
                                        </tr>

                                        <tr>
                                        <td><b>LT</b></td>
                                        <td><code>5</code> <code>7</code> <code>9</code></td>
                                        <td><b>x3.3 tiền cược</b></td>
                                    </tr>

                                    <tr>
                                    <td><b>CT</b></td>
                                    <td> <code>6</code> <code>8</code></td>
                                    <td><b>x3.3 tiền cược</b></td>
                                </tr>

                                <tr>
                                <td><b>LX</b></td>
                                <td> <code>1</code> <code>3</code></td>
                                <td><b>x3.3 tiền cược</b></td>
                            </tr>

                                     


                                    </tbody>
                                </table>
                            </div>
                            <br> - Nếu mã giao dịch có số cuối trùng với 1 trong 3 số trên, bạn sẽ chiến thắng.


                        </div>









                        <div class="panel-body turn" turn-tab="270604" style="padding-top: 0px;">
                        - <b>Đoán số</b> là một game vô cùng dễ, tính kết quả bằng <b>1 số cuối mã giao
                            dịch</b>. <br>
                        - Cách chơi rất đơn giản, - Chuyển tiền vào một trong các tài khoản : <div
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
                        - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
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
                                    <td><b>x6.6 tiền cược</b></td>
                                </tr>

                                <tr>
                                <td><b> D1 </b></td>
                                <td><code>1 </code></td>
                                <td><b>x6.6 tiền cược</b></td>
                            </tr>

                            <tr>
                            <td><b> D2 </b></td>
                            <td><code> 2</code></td>
                            <td><b>x6.6 tiền cược</b></td>
                        </tr>

                        <tr>
                        <td><b> D3 </b></td>
                        <td><code>3 </code></td>
                        <td><b>x6.6 tiền cược</b></td>
                    </tr>
                    <tr>
                    <td><b> D4 </b></td>
                    <td><code>4 </code></td>
                    <td><b>x6.6 tiền cược</b></td>
                </tr>
                <tr>
                <td><b> D5 </b></td>
                <td><code>5</code></td>
                <td><b>x6.6 tiền cược</b></td>
            </tr>
            <tr>
            <td><b>D6  </b></td>
            <td><code>6 </code></td>
            <td><b>x6.6 tiền cược</b></td>
        </tr>
        <tr>
        <td><b> D7 </b></td>
        <td><code>7 </code></td>
        <td><b>x6.6 tiền cược</b></td>
    </tr>
    <tr>
    <td><b> D8 </b></td>
    <td><code>8 </code></td>
    <td><b>x6.6 tiền cược</b></td>
</tr>
<tr>
<td><b> D9 </b></td>
<td><code>9</code></td>
<td><b>x6.6 tiền cược</b></td>
</tr>

                            

                         

                                 


                                </tbody>
                            </table>
                        </div>
                        <br> - Nếu mã giao dịch có số cuối trùng với 1 trong 3 số trên, bạn sẽ chiến thắng.


                    </div>












                        <div class="panel-body turn" turn-tab="6" style="padding-top: 0px;">
                            - <b>1 phần 3</b> là một game vô cùng dễ, tính kết quả bằng <b>1 số cuối mã giao
                                dịch</b>. <br>
                            - Cách chơi rất đơn giản, - Chuyển tiền vào một trong các tài khoản : <div
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
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
                                            <td><b>x3 tiền cược</b></td>
                                        </tr>

                                        <tr>
                                            <td><b>N3</b></td>
                                            <td><code>7</code> <code>8</code> <code>9</code></td>
                                            <td><b>x3 tiền cược</b></td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <br> - Nếu mã giao dịch có số cuối trùng với 1 trong 3 số trên, bạn sẽ chiến thắng.


                        </div>


                        <div class="panel-body turn" turn-tab="4" style="padding-top: 0px;">
                            - Đoán số là một game vô cùng đơn giản, tỉ lệ ăn khá cao. <br>
                            - Cách chơi rất đơn giản, - Chuyển tiền vào một trong các tài khoản : <div
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            với nội dung : <code>số từ 0-9</code>.

                            <br>
                            - Nếu số cuối mã giao dịch trùng với số nội dung bạn nhập, bạn sẽ nhận được <b>x8 tiền
                                cược</b>

                            <br>
                            - Ví dụ bạn chuyển <b>20.000 vnđ</b> với nội dung <b>0</b>, số cuối mã giao dịch là
                            <b>0</b> bạn sẽ nhận được <b>40.000 vnđ</b>


                        </div>

                        <div class="panel-body turn" turn-tab="5" style="padding-top: 0px;">
                            - Cách chơi rất đơn giản, Chuyển tiền vào một trong các tài khoản : <div
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
                            - <b>CHẴN LẺ 2 - TÀI XỈU 2 (C2, L2, T2, X2) chỉ chơi tối đa 500.000, chuyển quá sẽ bị mất.</b> <br>
                            với nội dung : <code>S</code>.

                            <br>
                            - Kết quả là tính tổng 3 số cuối của mã giao dịch. <br>

                            - Nếu tổng 3 số cuối bằng <b>7</b>, <b>17</b>, <b>27</b> => Nhận <b>x2 tiền cược</b>
                            <br>
                            - Nếu tổng 3 số cuối bằng <b>8</b>, <b>18</b> => Nhận <b>x3 tiền cược</b> <br>

                            - Nếu tổng 3 số cuối bằng <b>9</b>, <b>19</b> => Nhận <b>x3.5 tiền cược</b> <br>
                            <br>



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
                            <div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Nhập mã giao dịch</label>
                                    <input type="text" class="form-control" id="magiaodich"
                                        aria-describedby="emailHelp" placeholder="vd 11154564566xx">
                                    <small id="emailHelp" class="form-text text-muted">Nhập mã giao dịch của bạn để
                                        kiểm tra.</small>
                                </div>
                                <center><button type="submit" class="btn btn-primary" onclick="checkma()"
                                        id="nutkiemtra">Kiểm tra</button></center>
                            </div>
                            <div id="kiemtra_magiaodich"> <br><br><br> <center>Nếu quá 15 phut chưa nhận được tiền vui lòng dán mã vào đây kiểm tra.
                            Nếu sai hạn mức sai nội dung hoặc chuyển vào số off hãy nhập mã vô đây để hoàn tiền.
                            <Br>
                            <a target="_blank" href="https://www.youtube.com/watch?v=K40Ek7cYbr8" style="border-color: #ad4105;
border: solid;">VIDEO HƯỠNG DẪN KIỂM TRA</a>
                           <br>
                            <a style="" href="https://zalo.me/g/wyutth431"> <span class="label label-success text-uppercase">BOX CHÁT ZALO</span></a>
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
                            <h4>TRẠNG THÁI MOMO</h4>
                        </div>
                        <div class="panel-body">

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
                                    <tbody role="alert" aria-live="polite" aria-relevant="all" id="trangthaimomo"
                                        class="">



                                    </tbody>
                                </table>
                                <center>
                                    <font color="red"><b>Lưu ý: Mỗi sdt 1 ngày chỉ giao dịch được 150 lần và 30tr.
                                            Khi đạt 130 gd hoặc 25tr hệ thống sẽ tự đổi số.</b></font>
                                </center>
                            </div>





                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel panel-danger">
                        <div class="panel-heading text-center">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h4>TOP THẮNG TUẦN</h4>
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
                <p>Phần thưởng top :</p>
                <p>- TOP 1 : 2.000.000 VNĐ</p>
                <p>- TOP 2 : 1.500.000 VNĐ</p>
                <p>- TOP 3 : 1.00.000 VNĐ</p>
                <p>- TOP 4 : 500.000 VNĐ</p>
                <p>- TOP 5 : 200.000 VNĐ</p>
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




<div id="showhuak" style="
display: block;
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
        <center><img class="animate__animated animate__heartBeat animate__infinite infinite"
                src="/assets/62551503_433013057277205_8789669713933238272_n.png" class="" width="100%" style="">
        </center>
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
                Copyright 2021 © Clmm.me | All rights reserved
            </div>


        </div>
    </div>
    </div>
</footer>`);
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

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}

function hoandon(iddon)
{
let num1 = getRndInteger(1000,9999);
let num2 = getRndInteger(1000,9999);
//let person = prompt("Xác minh bạn là học sinh giỏi toán "+num1+"+"+num2+"= ?:", "");
if (1+1 !=2) {
hoandon(iddon);
} else {
    $("#nuthoantien").hide();
    $.ajax({
        url : '/v2/hoandon.json',
        type : 'POST',
        data : {id : iddon, catpcha : 4444},
        success : function(d)
        {
            alert(d);
            checkma();
        }
    })
}
}

function thanhtoan(iddon)
{

if (1+1 != 2) {
hoandon(iddon);
} else {
    $("#nuttondfg").hide();
    $.ajax({
        url : '/v2/thanhtoan.json',
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
        let ma = $("#magiaodich").val();
        let phone = $("#sodienthoai").val();
        $("#nutcheckphone").hide();
        $.ajax({
            url: '/v2/checkphone.json',
            type: 'POST',
            data: { ma: ma, phone: phone },
            success: function (d) {
                $("#nutcheckphone").show();
                if (d == 1) {
                    checkma();
                }
                else
                    if (d == 2) {
                        alert('Số '+phone+' là số điện thoại của bạn mà, bạn phải nhập số của web.');
                    }
                    else
                        if (d == 3) {
                            alert('Không thể tìm thấy mã giao dịch ' + ma + ' trên số ' + phone + ' hãy kiểm tra lại.');
                        }
                        else
                            if (d == 4) {
                                alert('' + phone + ' Đang hoạt động, vui lòng chờ.');
                            }
                            else {
                                alert('Có lỗi xẩy ra.');
                            }
            }
        })
    }
    function checkma() {
        let ma = $("#magiaodich").val();
        $("#nutkiemtra").hide();
        if (ma.length <= 7) {
            $("#kiemtra_magiaodich").html('<font color="red">Vui lòng nhập mã giao dịch hợp lệ</font>');
            $("#nutkiemtra").show();
            return false;
        }
        $.ajax({
            url: '/v2/checkma.json',
            type: 'POST',
            data: { ma: ma },
            success: function (d) {
                $("#kiemtra_magiaodich").html(d);
                $("#nutkiemtra").show();
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
    $(document).ready(function () {
        socket()
    });



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



    function checkaddhu() {
        let datamsg = $("#phoneme").val();
        if (datamsg.length < 10) {
            return false;
        }
        $.ajax({
            url: '/v2/phonenew.json',
            data: { k: datamsg },
            type: 'POST',
            success: function (e) {
                if (e == 1) {
                    // chưa tham gia
                    $("#msg_hu").html('<button type="text" class="btn btn-success" onclick="addhu()">Tham gia</button>');
                }
                else {
                    $("#msg_hu").html('<button type="text" class="btn btn-danger" onclick="addhu()">Hủy tham gia</button>');
                }
            }
        })
    }

    function addhu() {
        $.ajax({
            url: '/v2/e.json',
            type: 'POST',
            data: { k: $("#phoneme").val() },
            success: function (e) {
                checkaddhu();
                alert(e);

            }
        })
    }
    function clickhu() {

        $("#result_hu").html(`<center><img class="animate__animated animate__heartBeat animate__infinite infinite" src="/assets/62551503_433013057277205_8789669713933238272_n.png" width="30%" style=""></center>
<center class="solid" style="border-top-right-radius: 30px;
border-top-left-radius: 30px;
border-radius: 30px;
background: aquamarine;"><p class="animate__animated animate__shakeX animate__infinite infinite animate__slow 2" id="tiencuahu"></p></center>
<br>
<div style="padding:15px">
<div class="form-group row">
<label for="inputEmail3" class="col-sm-2 col-form-label">Số điện thoại</label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="phoneme" placeholder="Số điện thoại">
</div>
</div>

<div class="form-group row">
<div class="col-sm-10">
  <center id="msg_hu">Vui lòng nhập số điện thoại để tiếp tục</center>
</div>
</div>
</div>
<hr><center>Hưỡng dẫn </center>
- Để tham gia chức năng này, bạn cần nhập số điện thoại của bạn chơi vào mục bên trên, sau đó ấn nút <b>Tham gia</b>, (Để hủy thì làm lại tương tự). <Br>
- Khi tham gia, mỗi khi bạn chiến thắng sẽ bị trừ <b>10.000 VNĐ</b> cho vào Quỹ Hũ. <br>
-  Nếu bạn <b> chiến thắng </b> và số cuối mã giao dịch là <b>111, 222, 333, 444, 555, 666, 777, 888, 999</b> thì bạn sẽ nhận được toàn bộ số tiền trong hũ <br> - Nếu bạn nổ hũ, vui lòng chờ 0h sẽ tự thanh toán.`);
        $("#hugame").modal();
        socket();
        $('#phoneme').on('input', function () {
            checkaddhu();
        });
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
            url : '/v2/quay.json',
            data : {phone : $("#phonevalue").val(),captcha : person },
            type : 'POST',
            success : function(d)
            {
                alert(d);
                $("#phonevalue").val(``)
            }
        })
    }
    function socket() {
        $.ajax({
            url: '/decode.json?'+Date.now(),
            success: function (data) {

                onMessage(data)
                setTimeout(function(){ socket() }, 1000);

            },
            error :function(data)
            {
                setTimeout(function(){ socket() }, 1000);
            }
        })
    }
    let dulieuphu = '';
    let noticefing = 0;
    let tatnotie = function() {
        noticefing = 0;
    }
                let old = 0;
    let timenew = 0;
    let timelast = 0;
    setInterval(function(){
        timelast--;
        
        let checktime = Math.abs(timelast-timenew);
        if(checktime > 10)
        {
            timelast = timenew;
        }
        if(timelast < 0) timelast = 0;
        $("#diemdanh_thoigian").html(timelast);
        $("#thoigian_head").html(timelast);
        
    }, 1000);

    function onMessage(evt) {
        
       
        let data = CryptoJSAesDecrypt(passwordx,evt);
        data = JSON.parse(data);
        if(dulieuphu != data.thongbao)
        {
            dulieuphu = data.thongbao;
            $("#noidung_thongbao").html(data.thongbao);
            $("#modal_thongbao").modal();
        }
        if (data.baotri == 1) {
            $("#baotri").hide();
            $("#thongbao").show();
            $("#msg_thongbao").html(data.msg);

        }
        else {
            $("#baotri").show();
            $("#thongbao").hide();
        }
        
        //      ###############################################
        
        if(!!data.phiendiemdanh)
        {
            numanimate_2($('#diemdanh_tongtien'), data.diemdanh_tong, 17);
            let array = ``;
            let gg = 0;
            let list_dd = ``;
            data.diemdanh_data.forEach(e => {
                list_dd+=' '+e.phone+',';
            })
            $("#muc_users").html(list_dd);
            $("#diemdanh_users").html(data.diemdanh_data.length);
            $("#users_head").html(data.diemdanh_data.length);
            data.phiendiemdanh.forEach(e => {
                gg++;
                if(gg == 1) 
                {
                    $("#diemdanh_id").html(e.id);
                    $("#diemdanh_tien").html(number_format(e.vnd));
                    timenew = e.time;
                }
                else 
                if(gg == 2)
                {
                    $("#diemdanh_last").html(e.win);
                    array+= `<tr>
                        <td><small>`+e.id+`</small></td>
                        <td><small>`+e.users+`</small></td>
                        <td>`+e.win+`</td>
                         <td><small>`+e.magiaodich+`</small></td>
                        <td>`+number_format(e.vnd)+`</td>
                    </tr>`;
                }
                else
                {
                    array+= `<tr>
                        <td><small>`+e.id+`</small></td>
                        <td><small>`+e.users+`</small></td>
                        <td>`+e.win+`</td>
                        <td><small>`+e.magiaodich+`</small></td>
                        <td>`+number_format(e.vnd)+`</td>
                    </tr>`;
                }
            });
            $("#mayman_log").html(array);
        }
        //      ###############################################
        let SuKien_VongQuay_His = ``;
        let SuKien_VongQuay_Rut = ``;
         data.sukien_quay.forEach(e => {
            SuKien_VongQuay_His += `<tr>
                <td>`+e.thoigian+`</td>
                <td>`+e.phone+`</td>
                <td>`+e.vnd+`đ</td>
            </tr>`;
        });
        data.sukien_rut.forEach(e => {
            SuKien_VongQuay_Rut += `<tr>
                <td>`+e.thoigian+`</td>
                <td>`+e.magiaodich+`</td>
                <td>`+e.phone+`</td>
                <td>`+e.vnd+`đ</td>
            </tr>`;
        });
        $("#SuKien_VongQuay_His").html(SuKien_VongQuay_His)
        $("#SuKien_VongQuay_Rut").html(SuKien_VongQuay_Rut)
        let html = ``;
        data.nohu.forEach(e => {
            html += 'Chúc mừng <font color="blue">' + e.phone + '</font> nổ hũ nhận <font color="green">' + number_format(e.vnd) + '</font> VNĐ. | ';
        });
        if ($("#msgnohu").html() != html) {
            $("#msgnohu").html(html)
        }
        if (!!data.hu) {
            numanimate_2($('#hu'), data.hu, 17);
            numanimate_2($('#tiencuahu'), data.hu, 17);
        }
        let stringto = '';
        let string2 = '';
        let statsmomoo = '';
        if(data.phone.length <=0)
        {
            string2 += `<tr>
            <td id="p_d"><b id="since04_x"><font color="red"><big>Hết số</big></font></b></td>
            <td>Chơi <b>Điểm danh</b> tạm nhé</td>
            <td> 0h đêm quay lại nha ae.</td>
            </tr>`;
            stringto += `<tr>
    <td id="p_d"><b id="since04_x"><font color="red"><big>Hết số</big></font></b></td>
    <td>Chơi <b>Điểm danh</b> tạm nhé</td>
    <td> 0h đêm quay lại nha ae.</td>
    </tr>`;
        }
        data.phone.forEach(e => {
            stringto += `<tr>
    <td id="p_`+ e.id + `"><b id="since04_` + e.id + `" style="
position: relative;
                       ">` + e.phone + ` <b style="position: absolute;
top: 15px;
/* left: 1%; */
/* margin: auto; */
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
font-size: 9px;"><font color="`+ (e.max <= 20000000 ? 'green' : 'red') + `">`+ number_format(e.max) + `</font>/<font color="6861b1">30M</font></b></b> <span class="label label-success text-uppercase" onclick="coppy('` + e.phone + `',`+e.cuoc_min+`,`+e.cuoc_max+`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
    <td> `+ number_format(e.cuoc_min) + ` VNĐ.</td>
    <td> `+ number_format(e.cuoc_max) + ` VNĐ.</td>
    </tr>`;
            statsmomoo += `<tr>
    <td id="p_`+ e.id + `"><b id="since04_` + e.id + `">` + e.phone + `</b> <span class="label label-success text-uppercase" onclick="coppy('` + e.phone + `',`+e.cuoc_min+`,`+e.cuoc_max+`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
    <td> <span class="label label-success text-uppercase">`+ e.thoigian + `</span></td>
    <td> `+ number_format(e.solan) + `</td>
    <td> `+ number_format(e.max) + `</td>
    </tr>`;
            if (e.cuoc_max <= 500000) {
                string2 += `<tr>
    <td id="p_`+ e.id + `"><b id="since04_` + e.id + `">` + e.phone + `</b> <span class="label label-success text-uppercase" onclick="coppy('` + e.phone + `',`+e.cuoc_min+`,`+e.cuoc_max+`)"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
    <td> `+ number_format(e.cuoc_min) + ` VNĐ.</td>
    <td> `+ number_format(e.cuoc_max) + ` VNĐ.</td>
    </tr>`;
            }
        });
        if ($("#game_2").html() !== stringto) {
            $("#game_2").html(stringto)
        }
        $("#game_1").html(stringto)
        $("#game_3").html(stringto)
        $("#game_6").html(stringto)
        $("#game_4").html(stringto)
        $("#game_44").html(stringto)

        $("#game_444").html(stringto)

        $("#game_7").html(string2);
        $("#trangthaimomo").html(statsmomoo);

        let playgame = '';
        let i = 0;
        data.play.forEach(e => {
            i++;
            if(i == 1)
            {
                /*
                if(old != e.id && noticefing == 1 && e.tienthang >= 100000)
                {
                    old = e.id;
                    $("#phone_thang").html(e.phone);
                    $("#tienthang").html(number_format(e.tienthang));
                    $("#since04_notice").show();
                    setTimeout(function(){ $("#since04_notice").hide(); }, 2000);

                }
                */
            }
            playgame += `<tr>
    <td>`+ e.thoigian + `</td>
    <td>`+ e.phone + `</td>
    <td>`+ number_format(e.tien) + `</td>
    <td>`+ number_format(e.tienthang) + `</td>
    <td>`+ (e.game) + `</td>
    <td><span class="fa-stack">
<span class="fa fa-circle fa-stack-2x" style="color:#`+color[e.text]+`"></span>
<span class="fa-stack-1x text-white">`+ (e.text) + ` </span>
</span></td>
    <td>`+ (e.tienthang <= 0 ? '<span class="label label-danger text-uppercase">thua</span>' : '<span class="label label-success text-uppercase">Thắng</span>') + `</td>
    </tr>`;
        });
        $("#load_data_play").html(playgame);
        let topplay = '';
        data.top.forEach(e => {
            topplay += `<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">` + e.i + `</strong></span> </div><div class="col-xs-2"><span class="label label-success">` + e.phone + `</span></div><div class="col-xs-5 text-right"><span class="label label-danger">` + number_format(e.win) + ` vnđ</span></div></div>`;
        });
        $("#topplaygame").html(topplay)


    }



    function onError(evt) {
        window.location.reload();

    }
    function coppy(text,min,max) {
        var textArea = document.createElement("textarea");

        // Place in the top-left corner of screen regardless of scroll position.
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';

        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;

        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

        // Avoid flash of the white box if rendered for any reason.
        textArea.style.background = 'transparent';


        textArea.value = text;

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            alert('Đã sao chép số: ' + text+' chơi từ '+number_format(min)+' VNĐ đến '+number_format(max)+' VNĐ. Nếu bạn chuyển nhỏ hơn hoặc lớn thua sẽ mất tiền. '+(max > 500000 ? 'Số này không thể chơi C2, L2, T2, X2.' : '')+' ');
        } catch (err) {
            console.log('Oops, unable to copy');
        }

        document.body.removeChild(textArea);
    }

    /* wssss */


function choilanhan()
{
let phone = $("#PhoneChoi").val();
if(phone.length <=9) 
{
    alert('Số điện thoại không hợp lệ');
    return false;
}
$("#osdt").hide();
$("#othuong").show();
$("#othuong").html(`Đang truy vấn... xin chờ nhé...`);
$.ajax({
    url : '/v2/thamgia.json',
    data : {phone : phone},
    type : 'POST',
    success : function(d)
    {
        d = CryptoJSAesDecrypt(passwordx,d);
        d = JSON.parse(d);
        if(d.error !=2)
        {
            alert('Oh !! Số điện thoại này chưa chơi game nào, hãy kiểm tra lại');
            $("#osdt").show();
            $("#othuong").hide();
        }
        else 
        {
            console.log(d)
            let thuong = [0, 160000, 80000,40000,20000];
            let choi = [0, 29000000, 12000000,5000000,1000000];
            let html = ``;
            html+= `Xin chào, <b>`+d.name+`</b>`;
            html+=`<div class="progress">
<div class="progress-bar" role="progressbar" style="width: `+(d.TongTienChoiNgay/30000000*100)+`%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;
            html+=`Số tiền đã chơi: <font color="red">`+number_format(d.TongTienChoiNgay)+`</font>`;
            html+=`<br>Phần thưởng hiện tại:`;
            if(d.moc <=0)
            {
                html+=`<br><font color="red">Ngày hôm nay bạn đã nhận đủ, hãy quay lại vào ngày mai nhé</font>`;
            }
            else 
            {
                if(d.TongTienChoiNgay >= choi[d.moc])
                {
                    html+=` <font color="red">`+number_format(thuong[d.moc])+`</font> vnđ. <br>`;
                    html+=`<button class="btn btn-success" onclick="NhanQuaNgay()">Nhận Ngay</button><br>`;
                }
                else 
                {
                    html+=` <font color="blue">`+number_format(thuong[d.moc])+`</font> vnđ. <br>`;
                    html+=` <b> hãy chơi đủ thêm <font color="red"> `+number_format(+choi[d.moc] - +d.TongTienChoiNgay)+`</font> vnđ để nhận quà nhé. <b><br>`;
                }
            }
            html+='<b id="textloi"></b>';
            html+=`<br><button class="btn btn-danger" onclick="$(\'#othuong\').hide();$(\'#osdt\').show()">Quay lại</button>`;
            $("#othuong").html(html)
        }
    }
})
}

function NhanQuaNgay()
{
let phone = $("#PhoneChoi").val();
if(phone.length <=9) 
{
    alert('Số điện thoại không hợp lệ');
    return false;
}
$("#osdt").hide();
$("#othuong").hide();
$.ajax({
    url : '/v2/nhanthoi.json',
    data : {phone : phone},
    type : 'POST',
    success : function(d)
    {
        $("#othuong").show();
        $("#textloi").html(d);
    }
})
}




// Create new wheel object specifying the parameters at creation time.
    $( document ).ready(function() {

     luckyWheel = new Winwheel({
        'drawMode': 'image',
        'drawText': true,
        'numSegments': 8,
        'outerRadius': 200,
        'canvasId': 'canvas',
        'animation': {
            'type': 'spinToStop',
            'duration': 10,
            'spins': 3,
            'callbackSound': playSound,
            'soundTrigger': 'pin',
            'callbackAfter': 'drawTriangle2()',
            'callbackFinished': 'alertPrize()'
        },
        'pins': {
            'number': 16,
            'fillStyle': 'while',
            'outerRadius': 6,
            'responsive': true,
        }

    });
    
    
     loadedImg = new Image();
    // Create callback to execute once the image has finished loading.
    loadedImg.onload = function() {
        luckyWheel.wheelImage = loadedImg; // Make wheelImage equal the loaded image object.
        luckyWheel.draw(); // Also call draw function to render the wheel.
    }

    // Set the image source, once complete this will trigger the onLoad callback (above).
    loadedImg.src = "/assets/fd.png";
    // In this example I use raw Javascript to do the AJAX, but if you have jQuery included
    // in your website so might want to use its AJAX features as its a bit less code to write.


    // Usual pointer drawing code.
    drawTriangle2();
    });

    function drawTriangle2() {
        // Get the canvas context the wheel uses.
         ctx2 = luckyWheel.ctx;
        ctx2.strokeStyle = 'navy'; // Set line colour.
        ctx2.fillStyle = 'aqua'; // Set fill colour.
        ctx2.lineWidth = 2;
        ctx2.beginPath(); // Begin path.
        ctx2.stroke(); // Complete the path by stroking (draw lines).
        ctx2.fill(); // Then fill.
    }

     wheelSpinning = false;

    function startSpin() {
        // Ensure that spinning can't be clicked again while already running.
        if (wheelSpinning == false) {

            // Begin the spin animation by calling startAnimation on the wheel object.
            luckyWheel.startAnimation();

            // Set to true so that power can't be changed and spin button re-enabled during
            // the current animation. The user will have to reset before spinning again.
            wheelSpinning = true;
        }
    }

    function resetWheel() {
        luckyWheel.stopAnimation(false);
        luckyWheel.rotationAngle = -20;
        luckyWheel.draw(); // Call draw to render changes to the wheel.
        wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
        // luckyWheel.stopAnimation(false);
        // luckyWheel.rotationAngle=0;
        // luckyWheel.draw(); drawTriangle2();
    }

     audio = new Audio('/assets/tick.mp3'); // Create audio object and load desired file.

    function playSound() {
        // Stop and rewind the sound (stops it if already playing).
        audio.pause();
        audio.currentTime = 0;
        // Play the sound.
        audio.play();
    }
     dataroll = '';

    function rollWheel() {
        
        Swal.fire({
  title: 'Nhập mã giao dịch:',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Quay Ngay',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    quaynow(login)
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
        return false;
       
    }
    let dangquay = false;
    function quaynow(magiaodich) 
    {
        if(magiaodich.length <=4) 
        {
            Swal.fire({
                title: 'Opps!',
                text: 'Mã giao dịch không hợp lệ.',
                type: 'error',
                confirmButtonText: 'Thử lại!'
            });
            return false;
        }
        if(dangquay) return false;
        resetWheel();
        dangquay = true;
        $("#nutdequayshow").hide();
        $.ajax({
            url : '/v2/sukien_quay.json',
            type : 'POST',
            data : {magiaodich : magiaodich},
            success : function(d) 
            {
                d = JSON.parse(d);
                if(d.error == true) {
                    dangquay = false;
                    $("#nutdequayshow").show();
                    Swal.fire({
                title: 'Opps!',
                text: d.data.info,
                type: 'error',
                confirmButtonText: 'Thử lại!'
                });
                    return false;
                }
                everday_data(d)
            }
            
        })
    }
    
    let everday_data = function(response)
{
   
        dataroll = response.data; // The segment number should be in response.
        if (dataroll.key) {
            let stopAt = luckyWheel.getRandomForSegment(dataroll.key);
            // Important thing is to set the stopAngle of the animation before stating the spin.
            luckyWheel.animation.stopAngle = stopAt;
            // Start the spin animation here.
            startSpin();
        }
    
}

function SuKien_RutTien() {
         
        Swal.fire({
  title: 'Nhập số điện thoại của bạn:',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Kiểm tra',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    ConBaoNhieuTien(login)
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
}

function ConBaoNhieuTien(phone) 
{
    $.ajax({
        url : '/v2/sukien_check.json',
        type : "POST",
        data : {phone : phone},
        success : function(d) 
        {
            if(d == "since04") {
                Swal.fire({
                title: 'Opps!',
                text: 'Có vẻ số điện thoại này chưa tham gia sự kiện.',
                type: 'error',
                confirmButtonText: 'Thử lại!'
            });
            }
            else 
            {
                SuKien_ShowNow(phone,d);
            }
        }
    })
}

function SuKien_ShowNow(phone,showtien) 
{
         Swal.fire({
  title: 'Bạn đang có '+showtien+' vnđ. Nhập số tiền muốn rút:',
  input: 'number',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Rút Ngay',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    RutTien_success(phone,login)
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
}

function RutTien_success(phone,vnd) 
{
    if(vnd < 50000) 
    {
       alert('Bạn phải tích đủ 50.000 vnđ mới có thể rút')
            return false;
    }
    $.ajax({
        url: "/v2/sukien_rut.json",
        type : 'POST',
        data : { phone : phone, vnd : vnd},
        success : function(d) 
        {
              Swal.fire({
                title: 'Thông Báo',
                text: ' ' + d,
                type: 'success',
                confirmButtonText: 'Tiếp tục.'
            });
        }
    })
}

    function alertPrize() {
        if (dataroll.type === 'unlucky') {
            Swal.fire({
                title: 'Opps!',
                text: dataroll.info,
                type: 'error',
                confirmButtonText: 'Thử lại!'
            });
        } else {
            Swal.fire({
                title: 'Xin chúc mừng!',
                text: ' ' + dataroll.info,
                type: 'success',
                confirmButtonText: 'Chơi tiếp !'
            });
        }
        luckyWheel.stopAnimation(false);
        dangquay = false;
        $("#nutdequayshow").show();
    }