﻿var record = 0;
function CreateGridThongTinXe() {
    var otherElementsHeightThongTinXe = $(".panel-heading").height() + $(".row").height() + 250;
    $("#gridThongTinXe").kendoGrid({
        excel: {
            fileName: "Thong Tin Xe.xlsx",
            allPages: true,
            filterable: true
        },
        dataSource: {
            data: [],
            pageSize: 20
        },
        selectable: "row",
        title: "Thông tin xe",
        height: $(window).height() - otherElementsHeightThongTinXe,
        sortable: true,
        pageable: {
            //refresh: true,
            pageSizes: true,
            //buttonCount: 5
            numeric: true,
            info: false
        }, dataBinding: function () {
            record = 0;
            //$('.k-grid-content').height($(window).height() - otherElementsHeightThongTinXe);
        },
        columns: [{
            title: "STT",
            template: "#= ++record #",
            width: 45,
            maxwidth: 45,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        //}, {
        //    field: "TX_MaSoXe",
        //    title: "Mã số xe",
        //    width: 100,
        //    headerAttributes: {
        //        "class": "table-header-cell",
        //        style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
        //    }
        }, {
            field: "TX_BienSoXe",
            title: "Biển số xe",
            width: 90,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "TenCongTy",
            title: "Công ty vận tải",
            width: 200,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "TX_BX_TongLuotVanChuyen",
            title: "Lượt VC",
            width: 50,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            //field: "TX_GioXuatBen",
            title: "Giờ xuất bến",
            width: 150,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            },
            template: "<div class='text-center'> #= TX_GioXuatBen #</div>"
        }, {
            field: "TenTuyen",
            title: "Tuyến",
            width: 250,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "TX_NgayBatDau",
            title: "Ngày bắt đầu",
            width: 100,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            },
            template: "<div>#=kendo.toString(kendo.parseDate(TX_NgayBatDau), 'dd/MM/yyyy')#</div>"
        }, {
            field: "TX_NgayNgungHoatDong",
            title: "Ngày ngưng hoạt động",
            width: 100,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            },
                template: "<div>#=kendo.toString(kendo.parseDate(TX_NgayNgungHoatDong), 'dd/MM/yyyy')#</div>"
        }, {
            field: "TX_TT_IdTenTrangThai",
            title: "Trạng thái",
            width: 125,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }]
    });
};