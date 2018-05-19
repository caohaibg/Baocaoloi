var otherElementsHeightThongTinXe = $("#body_dau").height() + $(".navbar-static-top").height() + 230;
function BaoCaoLoiTram(id, datatest) {
    var ttt = "#" + id;
        $(ttt).kendoGrid({
            sortable: true,
            selectable: "row",
            scrollable: true,
            toolbar: kendo.template("<button onclick='printGrid()' class='btn btn-primary btn-small'>IN</button> <button onclick='exportExcel()' class='btn btn-primary btn-small'>XUẤT EXCEL</button>"),
            excel: {
                fileName: "Bao Cao Toan Quoc.xlsx",
                allPages: true,
                filterable: true
            },
            //height: 380,
            dataSource: {
                transport: {
                    read: {
                        url: "/Default/AllData_BCL"
                    }
                },
                serverPaging: true,
                serverSorting: true,
                pageSize: 20,
            },
            pageable: {
                pageSizes: true,
                //input: true,
                numeric: true,
                info: false
            },
            dataBinding: function () {
                record = 0;
                $('.k-grid-content').height($(window).height() - otherElementsHeightThongTinXe);
            },
            columns: [
                {
                    title: "STT",
                    template: "#= ++record #",
                    width: 45,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: center;" },
                  //  footerTemplate: "TỔNG:"
                },
                {
                    field: "MaLoi",
                    title: "MÃ LỖI",
                    width: 80,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: center;" },
                },
                {
                    field: "NgayGhi",
                    title: "NGÀY",
                    width: 50,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: left;" },
                    template: "#= kendo.toString(kendo.parseDate(NgayGhi, 'hh:mm:ss dd/MM/yyyy'),'hh:mm:ss dd/MM/yyyy')#",
                    format: "{0:n0}",
                },
                {
                    field: "BSXe",
                    title: "BIỂN SỐ XE",
                    width: 50,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: center;" },
                    format: "{0:n0}",
                },
                {
                    field: "Loi",
                    title: "LỖI",
                    width: 50,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: left;" },
                    format: "{0:n0}",
                },
                {
                    field: "ChuanDoan",
                    title: "CHUẨN ĐOÁN",
                    width: 90,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: left;" },
                    format: "{0:n0}",
                },
                {
                    field: "ThongTinThem",
                    title: "THÔNG TIN THÊM",
                    width: 90,
                    headerAttributes: {
                        "class": "table-header-cell",
                        style: "text-align: center; font-weight: bold; font-size: 14px; white-space: normal; vertical-align: middle; background: #AEAAAA;"
                    },
                    attributes: { style: "text-align: left;" },
                    format: "{0:n0}",
                },
            ]
        });
};

function removeitemperpage() {
    $(".k-pager-sizes")
    .contents()
    .filter(function () {
        return this.nodeType === 3;
    }).remove();
};