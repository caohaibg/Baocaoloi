var record = 0;
function CreateGridTTBenXe() {
    var otherElementsHeightThongTinXe = $(".panel-heading").height() + $(".row").height() + 250;
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
            aggregate: [
                { field: "TenBenXe", aggregate: "count" },
                { field: "CoQuanQuanLy", aggregate: "count" }
            ]
        },
        selectable: "row",
        title: "Thông tin bến xe",
        height: $(window).height() - otherElementsHeightThongTinXe,
        sortable: true,
        pageable: {
            //refresh: true,
            pageSizes: true,
            //buttonCount: 5
            numeric: true,
            info: false
        },
        dataBinding: function ()
         {
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
            }
           
        }, {
            field: "MaBen",
            title: "Mã bến xe",
            width: 100,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
            footerTemplate: "TỔNG:"
        }, {
            field: "TenTinhSo",
            title: "Sở giao thông vận tải ",
            width: 150,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        },{
            field: "TenBenXe",
            title: "Tên bến xe",
            width: 200,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
            footerTemplate: "<div style='text-align: left;'><strong>#=kendo.toString(count,'n0')#</strong> bến </div>"
        },  {
            field: "CoQuanQuanLy",
            title: "Cơ quan quản lý",
            width: 200,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                },
            footerTemplate: "<div style='text-align: left;'><strong>#=kendo.toString(count,'n0')#</strong> cơ quan </div>"
            }, {
                field: "LoaiBenXe",
                title: "Loại bến",
                width: 70,
                headerAttributes: {
                    "class": "table-header-cell",
                    style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                }
            }, {
            field: "SDT",
            title: "Số điện thoại",
            width: 120,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            title: "DIỆN TÍCH",
            width: 80,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle;"
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
                    }
                },
                {
                    field: "DienTich_XeKhach",
                    title: "Xe khách",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    }
                },
                {
                    field: "DienTich_PhuongTienKhac",
                    title: "Phương tiện khác",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    }
                },
                {
                    field: "DienTich_NhaCho",
                    title: "Nhà chờ",
                    width: 70,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style:
                            "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
                    }
                },
            ]
        }, {
            field: "SoTuyenQuyHoach",
            title: "Số tuyến QH",
            width: 70,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "SoLuotXuatBenQuyHoach",
            title: "SL xuất bến QH",
            width: 70,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
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