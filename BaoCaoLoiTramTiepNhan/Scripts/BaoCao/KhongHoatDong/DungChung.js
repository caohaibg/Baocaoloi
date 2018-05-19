/*=================================================================================================================================*/
//Lấy dữ liệu của url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
/*=================================================================================================================================*/
//Panel Title
function Panel_Title(id, title1, title2) {
    var ttt = "#" + id;
    $(ttt).html(title1)// + ' - <span style = "color: red;">' + title2 + '</span>');
}
/*=======================================================CheckBox DropDownList==========================================================================*/
var IsItemChecked = false;
function UpdateIdinHF(obj) {
    var id = $(obj).attr('id');
    var name = $(obj).attr('name');
    var value = parseInt($(obj).attr('value'));
    var IsChecked = $(obj).is(':checked');
    var hf = $("#hf_" + name).get(0);

    if (value !== -1) {
        UpdateIdInHiddenField(hf, value, IsChecked);

        var totalChk = $('input[id*="chk_' + name + '"]').not("#chk_" + name + "_-1").length;
        var sumChk = $('input[id*="chk_' + name + '"]:checked').not("#chk_" + name + "_-1").length;
        var giatritotal = $("#chk_" + name +"_-1").is(':checked');

        if (giatritotal == false && sumChk == totalChk) {
            $("#chk_" + name + "_-1").prop("checked", true);
            UpdateIdInHiddenField(hf, $("#chk_" + name + "_-1").val(), true);
        }

        if (IsChecked == false) {
            $("#chk_" + name + "_-1").prop("checked", false);
        }
        if (totalChk == sumChk) {
            $("#chk_" + name + "_-1").prop("checked", true);
        }
        else {
            $("#chk_" + name + "_-1").prop("checked", false);
        }
    }
    else {
        $('input[id*="chk_' + name + '_"]').each(function () {
            if (parseInt($(this).val()) !== 0) {
                if (IsChecked === true) {
                    $(this).prop("checked", true);
                    UpdateIdInHiddenField(hf, $(this).val(), IsChecked);
                }
                else {
                    $(this).prop("checked", false);
                    UpdateIdInHiddenField(hf, $(this).val(), IsChecked);
                }
            }
        });
    }
    IsItemChecked = true;
}
function onClose(e) {
    var name = $(this.element).attr("id");

    if (IsItemChecked === true) {
        IsItemChecked = false;
        e.preventDefault();
    }
        ShowSelectedItem(name, "spanfabric");
        showSelected("chitietchon", name);
}

function ShowSelectedItem(name, idspan) {
    var ids = "#" + idspan;

    var totalChk = $('input[id*="chk_' + name + '"]').not("#chk_" + name + "_-1").length;
    var sumChk = $('input[id*="chk_' + name + '"]:checked').not("#chk_" + name + "_-1").length;
    $(ids).html(totalChk == sumChk ? "Tất cả" : sumChk);
    console.log(totalChk + " - " + sumChk);
}
function UpdateIdInHiddenField(hf, id, IsAdd) {
    if (hf.value === "") {
        hf.value = ",";
    }

    if (IsAdd === true) {
        if (hf.value.indexOf("," + id + ",") === -1) {
            hf.value = hf.value + id + ",";
        }
    }
    else if (IsAdd == false) {
        if (hf.value.indexOf("," + id + ",") >= 0) {
            hf.value = hf.value.replace("," + id + ",", ",");
        }
    }
}
function onChange(e) {
    e.sender.value(e.value);

    var name = $(this.element).attr("id");

    var giatritotal = $("#chk_" + name + "_-1").is(':checked');
    var totalchk = $('input[id*="chk_' + name + '"]').not("#chk_" + name + "_-1").length;
    var checkedchk = $('input[id*="chk_' + name + '"]:checked').not("#chk_" + name + "_-1").length;
    var hf = $("#hf_" + name).get(0);

    if (giatritotal == true && checkedchk != totalchk) {
        $("#chk_" + name + "_-1").prop("checked", false);
        UpdateIdInHiddenField(hf, $("#chk_" + name + "_-1").val(), false);
    }
    else if (checkedchk != totalchk) {
        $("#chk_fabric_-1").prop("checked", false);
        UpdateIdInHiddenField(hf, $("#chk_fabric_-1").val(), false);
    }
    if (giatritotal == false && checkedchk == totalchk) {
        $("#chk_" + name + "_-1").prop("checked", true);
        UpdateIdInHiddenField(hf, $("#chk_" + name + "_-1").val(), true);
    }
}
function getVulueSelected(name) {
    var string = "";

    $('input[id*="chk_' + name + '"]:checked').each(function () {
        var temp = $(this).next("label").text();
        string += "," + $(this).next("label").text();
    });
    if (string.indexOf("Chọn") > -1 || string.indexOf("Tất cả") > -1) {
        return "Chọn";
    } else
        return string;
}
function showSelected(ID, name) {
    var id = "#" + ID;
    var chuoitrave = getVulueSelected(name);
    if (chuoitrave === "") {
        $(id).html("");
    }
    if (chuoitrave !== "Chọn") {
        var ttt = chuoitrave.split(',');
        var sopt = ttt.length;
        var chuoi = " ";
        if (sopt <= 3 && sopt > 1) {
            for (i = 1; i < sopt; i++) {
                if (ttt[i] !== "") {
                    if (i < sopt - 1) {
                        chuoi += ttt[i] + ", ";
                    } else {
                        chuoi += ttt[i];
                    }
                }
            }
        }
        else if (sopt > 3) {
            for (i = 1; i < 4; i++) {
                if (ttt[i] !== "") {
                    if (i < 3) {
                        chuoi += ttt[i] + ", ";
                    } else {
                        chuoi += ttt[i];
                    }
                }
            }
            chuoi += ", ...";
        }
        if (chuoi.length > 8) {
            $(id).html(chuoi);
        } else {
            $(id).html("");
        }
    } else {
        $(id).html(" ");
    }
}

//Set select all start pages
function setDefaultDropList(idDrop, idHF) {
    var dropdownlist = $("#" + idDrop).data("kendoDropDownList");
    $('input[id*="chk_' + idDrop+'"]').each(function () {
        $(this).prop("checked", true);
        UpdateIdInHiddenField($("#" + idHF).get(0), $(this).val(), true);
    });

    ShowSelectedItem(idDrop, "spanfabric");
    showSelected("chitietchon", idDrop);
}

/*======================================================================================================================================================*/

//swal
function loading() {
    swal({
        title: 'Tải dữ liệu',
        html: 'Đang lấy dữ liệu.<br>Vui lòng đợi trong giây lát...',
        onOpen: function () {
            swal.showLoading()
        }
    });
}
/*==============================================Remove items per page===================================================================================*/
function removeitemperpage() {
    $(".k-pager-sizes")
        .contents()
        .filter(function () {
            return this.nodeType === 3;
        }).remove();
};