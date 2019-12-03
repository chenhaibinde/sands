function SelCity(obj, e) {
    var ths = obj;
    var dal = '<div class="_citys"><span title="关闭" id="cColse" >×</span><div id="_citysheng" class="_citys0">请选择省份</div><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div></div>';
    Iput.show({
        id: ths,
        event: e,
        content: dal,
        width: "470"
    });
    $("#cColse").click(function() {
        Iput.colse()
    });
    var tb_province = [];
    var b = province;
    for (var i = 0,
    len = b.length; i < len; i++) {
        tb_province.push('<a data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '" title="' + b[i]['name'] + '">' + b[i]['name'] + '</a>')
    }
    $("#_citys0").append(tb_province.join(""));
    $("#_citys0 a").click(function() {
		
		
        var g = getCity($(this));
        $("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
        if (document.getElementById("hcity") == null) {
            var hcitys = $('<input>', {
                type: 'hidden',
                name: "hcity",
                "data-id": $(this).data("id"),
                id: "hcity",
                val: lev
            });
            $(ths).after(hcitys)
        } 
		else {
            $("#hcity").val(lev);
            $("#hcity").attr("data-id", $(this).data("id"))
        }
		
		
        $("#_citys1 a").click(function() {
            $("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev = $(this).data("name");
            if (document.getElementById("hproper") == null) {
                var hcitys = $('<input>', {
                    type: 'hidden',
                    name: "hproper",
                    "data-id": $(this).data("id"),
                    id: "hproper",
                    val: lev
                });
                $(ths).after(hcitys)
            } else {
                $("#hproper").attr("data-id", $(this).data("id"));
                $("#hproper").val(lev)
            }
            var bc = $("#hcity").val();
            // ths.value = bc + "/" + $(this).data("name");
			ths.value = bc + $(this).data("name"); //获取省市         
            var levs = bc + $(this).data("name");
			if($(this).data("name") == "全部"){
              	console.log(levs)
				Iput.colse();
              	//$("#city #provinceSpan").html(levs);
              	/*if(window.location.href == "https://www.schjcpt.com/"){
                  ajaxa(levs);
                };*/			
				if(window.location.href == "/sands/index.html"){
					$("#city #provinceSpan").html(levs);
					ajaxa(levs);
				}else{
					$("#city>a").html(levs); //选取的地址写入a标签中
					$("#city").siblings().removeClass("active");
					$("#city").addClass("active");
					var is_special = href[0].split("=")[1];
					if(is_special == 1){
						special("notAll",levs); //调用商砼列表
					}else{
						listInfo('stid',levs); //调用沙石列表
					};
				};
	
				//var levs = levs.replace("全部","");
				//window.location.href='/list/supply?id='+id+'&pitoption='+pitoption+'&province='+levs;
				
			};
            var ar = getArea($(this));
            $("#_citys2 a").remove();
            if (ar == '') Iput.colse();
            $("#_citys2").append(ar);
            $("._citys1").hide();
			
            $("._citys1:eq(2)").show();
			//if(ar=='')
			//{			
			   	//var levs = levs.replace("全部","");
				//window.location.href='/list/supply?id='+id+'&pitoption='+pitoption+'&province='+levs;
				//return;
			//}
			
            $("#_citys2 a").click(function() {
                $("#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                if (document.getElementById("harea") == null) {
                    var hcitys = $('<input>', {
                        type: 'hidden',
                        name: "harea",
                        "data-id": $(this).data("id"),
                        id: "harea",
                        val: lev
                    });
                    $(ths).after(hcitys)
                } else {
                    $("#harea").val(lev);
                    $("#harea").attr("data-id", $(this).data("id"))
                }
                var bc = $("#hcity").val();
                var bp = $("#hproper").val();
                // ths.value = bc + "/" + bp + "/" + $(this).data("name");
				ths.value = bc + bp + $(this).data("name"); //获取省市区
                Iput.colse();
				var value = bc + bp + $(this).data("name");
				/*	if(window.location.href == "https://www.schjcpt.com/"){
                  ajaxa(value);
                };*/
				if(window.location.href == "/sands/index.html"){
					$("#city #provinceSpan").html(value);
					ajaxa(value);
				}else{
					$("#city>a").html(value);
                	$("#city").siblings().removeClass("active");
                	$("#city").addClass("active")
                	var is_special = href[0].split("=")[1];
                	if(is_special == 1){
                		special("notAll",value); //调用商砼列表
                	}else{
                		listInfo('stid',value); //调用沙石列表
                	};
                };
				console.log(value) //获取选取的地址
            })
        })
    })
}
function getCity(obj) {
    var c = obj.data('id');
    var e = province;
    var f = [];
    var g = '';
    for (var i = 0; i < e.length; i++) {
        if (e[i]['id'] == parseInt(c)) {
            f = e[i]['son'];
            break
        }
    }
    for (var j = 0; j < f.length; j++) {
        g += '<a data-id="' + f[j]['id'] + '" data-name="' + f[j]['name'] + '" title="' + f[j]['name'] + '">' + f[j]['name'] + '</a>'
    }
    $("#_citysheng").html('请选择城市');
    return g
}
function getArea(obj) {
    var c = obj.data('id');
    var e = province;
    var f = [];
    var g = '';
    for (var i = 0; i < e.length; i++) {
        for (var j = 0; j < e[i]['son'].length; j++) {
            if (e[i]['son'][j]['id'] == parseInt(c) && e[i]['son'][j]['sec']) {
                f = e[i]['son'][j]['sec'];
                break
            }
        }
    }
    if (f.length) {
        for (var k = 0; k < f.length; k++) {
            g += '<a data-id="' + f[k]['id'] + '" data-name="' + f[k]['name'] + '" title="' + f[k]['name'] + '">' + f[k]['name'] + '</a>'
        }
    }
    $("#_citysheng").html('请选择区县');
    return g
}