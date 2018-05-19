using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BaoCaoLoiTramTiepNhan.Models
{
    public class NhatKyTruyen_Tai : Transfer_NhatKyTruyenTaiDuLieu
    {
        public List<Transfer_NhatKyTruyenTaiDuLieu> getAll()
        {
            try
            {
                using (var dbc = new QLVanTai_TESTEntities())
                {
                    //var list= dbc.Transfer_NhatKyTruyenTaiDuLieu.Select(item => new Transfer_NhatKyTruyenTaiDuLieu {

                    //})
                    List<Transfer_NhatKyTruyenTaiDuLieu> list = dbc.Transfer_NhatKyTruyenTaiDuLieu.Select(item => item).ToList();
                    return list;
                };
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public int getIdXe()
        {
            try
            {
                using (var dbc = new QLVanTai_TESTEntities())
                {

                    int id = Convert.ToInt32( dbc.Transfer_NhatKyTruyenTaiDuLieu.Select(item => item.IDNhatTrinhXe));
                    return id;
                };
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Transfer_NhatKyTruyenTaiDuLieu> getDataToContent()
        {
            try
            {
                using (var dbc = new QLVanTai_TESTEntities())
                {
                    List<Transfer_NhatKyTruyenTaiDuLieu> list = dbc.Transfer_NhatKyTruyenTaiDuLieu.Select(item => new Transfer_NhatKyTruyenTaiDuLieu
                    {
                        MaLoi = item.MaLoi,
                        Loi = item.Loi,
                        ChanDoan= item.ChanDoan,
                        ThongTinThem= item.ThongTinThem
                    }).ToList();
                return list;
                };
            }
            catch (Exception e)
            {
                throw e;
            }
        }

    }
}