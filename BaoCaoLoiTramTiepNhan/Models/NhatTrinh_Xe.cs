using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BaoCaoLoiTramTiepNhan.Models
{
    public class NhatTrinh_Xe : NhatTrinhXe
    {
        public string getBSXe(int ID)
        {
            try
            {
                using (var dbc = new QLVanTai_TESTEntities())
                {
                    return dbc.NhatTrinhXes
                        .Where(w => w.Id == ID)
                        .Select(u => u.BienSoDi).ToString();
                };
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}