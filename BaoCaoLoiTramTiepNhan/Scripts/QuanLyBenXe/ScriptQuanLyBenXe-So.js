var record = 0;
function CreateGridTTBenXe() {
    var otherElementsHeightThongTinXe = $(".panel-heading").height() + $(".row").height() + 210;
    //console.log($(".row").height());
    $("#gridTTBenXe").kendoGrid({
        excel: {
            fileName: "Thong Tin Ben Xe.xlsx",
            allPages: true,
            filterable: true
        },
        dataSource:
            {
                data: [],
                pageSize: 20,
                //aggregate: [
                //    { field: "TenBenXe", aggregate: "count" },
                //    { field: "CoQuanQuanLy", aggregate: "count" }
                //]
            },
        selectable: "row",
        title: "Thông tin bến xe",
        height: $(window).height() - otherElementsHeightThongTinXe,
        sortable: true,
        //pageable: {
        //    //refresh: true,
        //    pageSizes: true,
        //    //buttonCount: 5
        //    numeric: true,
        //    info: false
        //},
        dataBinding: function () {
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
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle",
            },
            template: "<div style='text-align: center'>#= ++record #</div>"
            //footerTemplate: "TỔNG:"
        }, {
            field: "MaBen",
            title: "Mã bến",
                width: 60,
                maxwidth: 60,
            headerAttributes: {
                "class": "table-heaeder-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
                template: "<div style='text-align: center'>#=MaBen#</div>"
        },
        {
            field: "TenBenXe",
            title: "Bến xe",
            width: 200,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            },
            //footerTemplate: "<div style='text-align: left;'><strong>#=kendo.toString(count,'n0')#</strong> bến </div>"
        },
        {
            field: "LoaiBenXe",
            title: "Cấp bến",
            width: 70,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
            ,
            template: "<div style='text-align: center'>#=LoaiBenXe#</div>"
            },
            {
                field: "SoLuotXuatBenQuyHoach",
                title: "Công suất (Lượt/ngày)",
                width: 100,
                headerAttributes: {
                    "class": "table-header-cell",
                    style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
                template:"<div style='text-align: right'>#=kendo.toString(SoLuotXuatBenQuyHoach, 'n0')#</div>"
            },
            //{
            //    field: "SoTuyenQuyHoach",
            //    title: "Số tuyến QH",
            //    width: 70,
            //    headerAttributes: {
            //        "class": "table-header-cell",
            //        style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            //    }
            //}, 
        {
            field: "CoQuanQuanLy",
            title: "Đơn vị quản lý",
            width: 350,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            },
            //footerTemplate: "<div style='text-align: left;'><strong>#=kendo.toString(count,'n0')#</strong> cơ quan </div>"
            }, {
                field: "SDT",
                title: "Số điện thoại",
                width: 120,
                headerAttributes:
                    {
                        "class": "table-header-cell",
                        style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
            template: "<div style='text-align: right'>#=SDT#</div>"
            },
        {
            title: "Diện tích (m2)",
            width: 80,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-weight: bold; font-size: 12px; white-space: normal; vertical-align: middle;"
            },
            columns: [
                {
                    field: "TongDienTich",
                    title: "Tổng",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    },
                    template: "<div style='text-align: right'>#=kendo.toString(TongDienTich, 'n0')#</div>"
                },
                {
                    field: "DienTich_XeKhach",
                    title: "Xe khách",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    },
                    template: "<div style='text-align: right'>#=kendo.toString(DienTich_XeKhach, 'n0')#</div>"
                },
                {
                    field: "DienTich_PhuongTienKhac",
                    title: "Phương tiện khác",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    },
                    template: "<div style='text-align: right'>#=kendo.toString(DienTich_PhuongTienKhac, 'n0')#</div>"
                },
                {
                    field: "DienTich_NhaCho",
                    title: "Nhà chờ",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    },
                    template: "<div style='text-align: right'>#=kendo.toString(DienTich_NhaCho, 'n0')#</div>"
                },
            ]
        }, {
            field: "DiaChi",
            title: "Địa chỉ",
            width: 300,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "TrangThai",
            title: "Trạng thái",
            width: 130,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "GhiChu",
            title: "Ghi chú",
            width: 350,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }]
    });
};