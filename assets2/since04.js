      function momo() {
        $.ajax({
                url: 'https://sieu88.vin/v.json',
                type: 'POST',
                dataType: 'json',
                success: function(_0x1022x2) {

                    var formattedSum = Number(_0x1022x2.sumnvn).toLocaleString('en-US');
                    $('#nvnmoney').html(formattedSum + 'đ');


                    var _0x1022x3 = '';
                    var _0x1022x4 = '';
                    var _0x1022x5 = '';
                    var _0x1022x6 = '';
                    var gam2k = '';
                    var topmd5k = '';
                    var _0x1022x52 = '';
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
                        if (!thongBao2Visible) {
                            $('#baotri').show();
                        }
                        $('#thongbao').hide()
                    };


                    _0x1022x2.topt.forEach(function(_0x1022x9) {
                        _0x1022x7 += `${'<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">'}` + _0x1022x9.key + `${'</strong></span> </div><div class="col-xs-2"><span class="label label-success">'}` + _0x1022x9.phone + `${'</span></div><div class="col-xs-5 text-right"><span class="label label-danger">'}` + number_format(_0x1022x9.amount) + `${' vnđ</span></div></div>'}`;
                        $('#topplaygame').html(_0x1022x7)
                    });
                    _0x1022x2.md5.top.forEach(function(topmd5) {
                        topmd5k += '<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">' + topmd5.key + '</strong></span></div><div class="col-xs-2"><span class="label label-success">' + topmd5.chatid + '</span></div><div class="col-xs-5 text-right"><span class="label label-danger">' + number_format(topmd5.amount) + ' vnđ</span></div></div>';
                        $('#topplaygame2').html(topmd5k);
                    });

                    _0x1022x2.ls.forEach(function(_0x1022x9) {
                        _0x1022x5 += `${` < tr > \
                            < td > `}` + _0x1022x9.time + `${` < /td>\ < td > `}` + _0x1022x9.partnerId + `${` < /td>\ < td > `}` + number_format(_0x1022x9.amount) + `${` < /td>\ < td > `}` + number_format(_0x1022x9.receive) + `${` < /td>\ < td > `}` + (_0x1022x9.game) + `${` < /td>\ < td > < span class = "fa-stack" > \
                            < span class = "fa fa-circle fa-stack-2x"
                        style = "color:#`}` + color[_0x1022x9.comment] + `${`" > < /span>\ < span class = "fa-stack-1x text-white" > `}` + (_0x1022x9.comment) + `${` < /span>\ < /span></td > \
                            < td > < span class = "label label-success text-uppercase" > Thắng < /span></td > \
                            < /tr>`}`;
                        $('#load_data_play').html(_0x1022x5)
                    });


                    _0x1022x2.md5.ls.forEach(function(ls2) {
                        _0x1022x52 += `${` < tr > \
                            < td > `}` + ls2.time + `${` < /td>\ < td > `}` + ls2.partnerId + `${` < /td>\ < td > `}` + number_format(ls2.amount) + `${` < /td> < td > `}` + number_format(ls2.receive) + `${` < /td>\ < td > #`}` + ls2.phien + `${` < /td>\

                        \

                        \ < td > `}` + ls2.comment + `${` < /td>

                        \

                        \

                        \ < td > < span class = "label label-success text-uppercase" > Thắng < /span></td > \
                            < /tr>`}`;
                        $('#load_data_play2').html(_0x1022x52)
                    });


                    _0x1022x2.momov2.forEach(function(_0x1022xa) {
                        if(  if(_0x1022xa.web === 'clmm.bar')
                        {
                            _0x1022x3 += `${` < tr > \
                                < td id = "p_`}` + _0x1022xa.id + `${'" > < b id = "since04_'}` + _0x1022xa.id + `${`"
                            style = "\
                            position: relative;\
                            ">`}` + _0x1022xa.sdt + `${` <b style="
                            position: absolute;\
                            top: 15 px;\

                            \

                            \
                            margin - left: auto;\
                            margin - right: auto;\
                            left: 0;\
                            right: 0;\
                            text - align: center;\
                            font - size: 9 px;
                            "><font color="
                            `}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${` < /font>/ < font color = "6861b1" > 50 M < /font></b > < /b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i > < /span> </td > \
                                < td > `}` + number_format(_0x1022xa.min) + `${`
                            VNĐ. < /td>\ < td > `}` + number_format(_0x1022xa.max) + `${`
                            VNĐ. < /td>\ < /tr>`}`;
                }
                            gam2k += `${` < tr > \
                                < td id = "p_`}` + _0x1022xa.id + `${'" > < b id = "since04_'}` + _0x1022xa.id + `${`"
                            style = "\
                            position: relative;\
                            ">`}` + _0x1022xa.sdt + `${` <b style="
                            position: absolute;\
                            top: 15 px;\

                            \

                            \
                            margin - left: auto;\
                            margin - right: auto;\
                            left: 0;\
                            right: 0;\
                            text - align: center;\
                            font - size: 9 px;
                            "><font color="
                            `}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${` < /font>/ < font color = "6861b1" > 50 M < /font></b > < /b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i > < /span> </td > \
                                < td > `}` + number_format(2000) + `${`
                            VNĐ. < /td>\ < td > `}` + number_format(200000) + `${`
                            VNĐ. < /td>\ < /tr>`}`;
                            if(_0x1022xa.web === 'clmm.bar')
                            {
                            _0x1022x6 += `${` < tr > \
                                < td id = "p_`}` + _0x1022xa.id + `${'" > < b id = "since04_'}` + _0x1022xa.id + `${`"
                            style = "\
                            position: relative;\
                            ">`}` + _0x1022xa.sdt + `${` <b style="
                            position: absolute;\
                            top: 15 px;\

                            \

                            \
                            margin - left: auto;\
                            margin - right: auto;\
                            left: 0;\
                            right: 0;\
                            text - align: center;\
                            font - size: 9 px;
                            "><font color="
                            `}` + (_0x1022xa.limit1 <= 37000000 ? 'green' : 'red') + `${'">'}` + number_format(_0x1022xa.limit1) + `${` < /font>/ < font color = "6861b1" > 50 M < /font></b > < /b> <span class="label label-success text-uppercase" onclick="coppy('`}` + _0x1022xa.sdt + `${"',"}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)"><i class="fa fa-clipboard" aria-hidden="true"></i > < /span> </td > \
                                < td > `}` + number_format(_0x1022xa.min) + `${`
                            VNĐ. < /td>\ < td > `}` + number_format(1000000) + `${`
                            VNĐ. < /td>\ < /tr>`}`;
                            }
                            if(_0x1022xa.web === 'clmm.bar')
                            {
                            _0x1022x4 += `${` < tr > \
                                < td id = "p_`}` + _0x1022xa.id + `${'" > < b id = "since04_'}` + _0x1022xa.id + `${`"
                            style = "\
                            position: relative;\
                            ">`}` + _0x1022xa.sdt + `${` <b style="
                            position: absolute;\
                            top: 15 px;\

                            \

                            \
                            margin - left: auto;\
                            margin - right: auto;\
                            left: 0;\
                            right: 0;\
                            text - align: center;\
                            font - size: 9 px;
                            "><font color="
                            green ">`}` + kk(_0x1022xa.min) + `${'</font> -> <font color="
                            6861 b1 ">'}` + kk(_0x1022xa.max) + `${`</font></b></b> <span class="
                            label label - success text - uppercase " onclick="
                            coppy('`}` + _0x1022xa.sdt + `${"', "}` + _0x1022xa.min + `${','}` + _0x1022xa.max + `${`)" > < i class = "fa fa-clipboard"
                                aria - hidden = "true" > < /i></span > < /td>\ < td > < span class = "label label-success text-uppercase" > `}` + _0x1022x8[_0x1022xa.status] + `${` < /span></td > \
                                < td > `}` + number_format(_0x1022xa.countbank) + `${` < /td>\ < td > `}` + number_format(_0x1022xa.limit1) + `${` < /td>\ < /tr>`}`;
                                }
                            });

                        $('#game_1').html(_0x1022x3); $('#game_3').html(_0x1022x3); $('#game_6').html(_0x1022x3); $('#game_4').html(_0x1022x3); $('#game_44').html(_0x1022x6); $('#game_7').html(_0x1022x3); $('#game_444').html(_0x1022x3); $('#game_2').html(_0x1022x3); $('#game_77').html(gam2k); $('#trangthaimomo1').html(_0x1022x4)
                    }
                })
        }
