using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BaoCaoLoiTramTiepNhan.Models;

namespace BaoCaoLoiTramTiepNhan.Models
{
    public class BCLoiTram
    {
        //public int Id { get; set; }
        public string MaLoi { get; set; }
        public string BSXe { get; set; }
        public string Loi { get; set; }
        public string ChuanDoan { get; set; }
        public string ThongTinThem { get; set; }
        public DateTime NgayGhi { get; set; }

        public List<BCLoiTram> getBCLoi(int page = 1, int pageSize = 0)
        {
            List<BCLoiTram> list = new List<BCLoiTram>();
            try
            {
                using (var dbc = new QLVanTai_TESTEntities())
                {
                    // var test = dbc.Transfer_NhatKyTruyenTaiDuLieu.ToList();
                    list = (from nk in dbc.Transfer_NhatKyTruyenTaiDuLieu
                            join nt in dbc.NhatTrinhXes on nk.IDNhatTrinhXe equals nt.Id into ljNT
                            from nt in ljNT.DefaultIfEmpty()
                            //where nk.MaLoi == 0
                            orderby nk.IDNhatKyTruyenTaiDuLieu descending
                            select new BCLoiTram
                            {
                                MaLoi = nk.MaLoi.ToString(),
                                NgayGhi = nk.NgayGhi,
                                BSXe = nt != null ? nt.BienSoDi : "",
                                Loi = nk.Loi,
                                ChuanDoan = nk.ChanDoan,
                                ThongTinThem = nk.ThongTinThem,
                            }).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                };
            }
            catch (Exception e) {
                string s = e.ToString();
            }

            return list;
        }

        public List<string> getMaloi()
        {
            using (var dbc = new QLVanTai_TESTEntities())
            {
                List<long> Lst = new List<long>();
                Lst = (from nk in dbc.Transfer_NhatKyTruyenTaiDuLieu
                      select nk.MaLoi).ToList();
                var cc = Lst.Count;
                List<string> abc = new List<string>();
                foreach(long i in Lst)
                {
                    abc.Add(i.ToString());
                }
                
                return abc;
            };
            
        }

        public List<string> getloi()
        {
            using (var dbc = new QLVanTai_TESTEntities())
            {
                List<string> Lst = new List<string>();
                Lst = (from nk in dbc.Transfer_NhatKyTruyenTaiDuLieu
                       select nk.Loi).ToList();
                return Lst;
            };

        }

        public List<string> getBsxe(int page = 0, int pageSize = int.MaxValue)
        {
            List<string> abc = getBCLoi(page, pageSize).Select(l => l.BSXe).ToList();
            return abc;
        }
    }

}