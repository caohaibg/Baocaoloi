var record = 0;
function CreateGridTTTinhSo() {
    var otherElementsHeightThongTinXe = $(".panel-heading").height() + $(".row").height() + 250;
    $("#gridTTTinhSo").kendoGrid({
        excel: {
            fileName: "Thong Tin Tinh So.xlsx",
            allPages: true,
            filterable: true
        },
        dataSource: {
            data: [],
            pageSize: 20
        },
        selectable: "row",
        title: "Thông tin tinh sở",
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
        }, {
            field: "TS_IdMaTinh",
            title: "Mã Tỉnh",
            width: 120,
            headerAttributes: {
                "class": "table-header-cell",
                style: "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "TS_TenTinh",
            title: "Tên Tỉnh",
            width: 250,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "GiamDocSo",
            title: "Giám đốc",
            width: 130,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "SoDienThoai",
            title: "Số điện thoại",
            width: 80,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }, {
            field: "Email",
            title: "Email",
            width: 120,
            headerAttributes: {
                "class": "table-header-cell",
                style:
                    "text-align: center; font-size: 12px; font-weight: bold; white-space: normal; vertical-align: middle"
            }
        }]
    });
};
