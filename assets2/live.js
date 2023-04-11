/* 
    Connect to websocket.
    Code From Since04.
*/
var ws = '';
let cref = function () {
    let newid = az(50);
    setCookie('keycode', newid, 99);
    return newid;
}
let UsersId = getCookie('keycode') == null ? cref() : getCookie('keycode'); /// Order By ID
let id = 0;
function StartServer() {
    ws = new WebSocket('wss://since04.clmm.me/ws');
    ws.onopen = function () {
        // subscribe to some channels
        Send({
            users: {
                users: {
                    login: {
                        keycode: UsersId,
                    }
                }
            }
        })
        $("#chat").html(``);
    };

    ws.onmessage = function (e) {
        togame(e.data);
    };

    ws.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e);
        setTimeout(function () {
            StartServer();
        }, 1000);
    };
    ws.onerror = function (err) {
        console.log(err)
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
    };
}

let togame = function (data) {
    this.reader = new FileReader();
    this.reader.readAsBinaryString(new Blob([data],
        { type: 'application/json' }));
    this.reader.onload = function (event) {
        result = JSON.parse(event.target.result);
        writeln(result)
    };
}
let writeln = function (data) {
    if (!!data.error) {
        alert(data.error);
    }
    if (!!data.login) {
        id = data.uid;
        Send({
            users: {
                getchat: true,
            }
        });
    }
    if (!!data.list) {
        xulysms(data.list);
    }
}
let xulysms = function (data) {
    data.forEach(e => {
        Newchat(e.from, e.text, e.thoigian);
    });
}
let Newchat = function (uid, text, thoigian) {
    if (uid != id) { /// admin
        $("#chat").append(` <div data-id="x" class=" sb-thumb-active"><div class="sb-cnt"><div class="sb-message">`+ text + `</div><div class="sb-time">`+ thoigian + `</div></div></div>`);
    }
    else {
        $("#chat").append(`<div data-id="x" class="sb-right">
        <div class="sb-cnt">
            <div class="sb-message">`+ text + `</div><div class="sb-time">`+ thoigian + `</div></div></div>
`);
    }
    scrollSmoothToBottom("getchat");

}
let Revice = function (data) {
    return new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
}

let Send = function (data) {
    ws.send(Revice(data));
}

StartServer();


function az(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


$(function () {
    $("#addClass").click(function () {
        $('#sidebar_secondary').addClass('popup-box-on');
    });

    $("#removeClass").click(function () {
        $('#sidebar_secondary').removeClass('popup-box-on');
    });
})
$('#sidebar_secondary').addClass('popup-box-on');








let submit_chat = function()
{
    let text = $("#submit_message").val();
    if(text.length >=1)
    {
        Send({
            users : {
                SendChat : {
                    chat : $("#submit_message").val()
                }
            }
        })
        $("#submit_message").val(``);
        doibutton()
    }
}

let nhaptruoc = function(text)
{
    $("#submit_message").val(text);
    submit_chat();
}


function scrollSmoothToBottom(id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
        scrollTop: div.scrollHeight - div.clientHeight + 30
    }, 1);
}

function scrollSmoothToBottomname(id) {
    var div = document.getElementsByName(id);
    $('#' + id).animate({
        scrollTop: div.scrollHeight - div.clientHeight + 30
    }, 1);
}

function encodeImageFileAsURL() {
  
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
  
      var fileReader = new FileReader();
  
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
  
        var newImage = document.createElement('img');
        newImage.src = srcData;

        Send({
            users : {
                SendChat : {
                    img : srcData
                }
            }
        })
        $("#inputFileToLoad").val(``);
        Newchat(id,'Đang gửi ảnh','...');
        doibutton()
        
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  function batchat(t)
  {
      $('#modal_thongbao').modal('hide')

      if(t ==1)
      {
        $("#nuttat").show();
        $("#nutbat").hide();
        $( "#bodychat" ).addClass( "sb-active" )
        scrollSmoothToBottom("getchat");
      }
      else 
      {
          $("#nutbat").show();
          $("#nuttat").hide();
          $( "#bodychat" ).removeClass( "sb-active" )
      }
  }
  
  
  function doibutton()
  {
      if($("#submit_message").val().length >=1)
      {
          $("#nuttonbutton").html(` <div class="sb-btn-attachment"> <label class="">
           <i onclick="submit_chat()" class="fa fa-paper-plane" aria-hidden="true"></i>


            
</label></div>            `);
      }
      else 
      {
          $("#nuttonbutton").html(` <div class="sb-btn-attachment"> <label class="">
            <i class="fa fa-picture-o" aria-hidden="true"></i>

            <input  type="file" value="Ảnh" id="inputFileToLoad" onchange="encodeImageFileAsURL()">
</label></div>            `);
      }
  }