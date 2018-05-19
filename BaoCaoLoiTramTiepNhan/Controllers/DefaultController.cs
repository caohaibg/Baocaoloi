using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Web.Mvc;
using BaoCaoLoiTramTiepNhan.Models;


namespace BaoCaoLoiTramTiepNhan.Controllers
{
    public class DefaultController : Controller
    {
        BCLoiTram bCLoiTram = new BCLoiTram();

        // GET: Default
        public ActionResult Index()
        {
            return RedirectToAction("Views");
        }

        public ActionResult Views()
        {
            NhatKyTruyen_Tai nhatKyTruyen_Tai = new NhatKyTruyen_Tai();
            NhatTrinh_Xe nhatTrinh_Xe = new NhatTrinh_Xe();

            ViewBag.AllData_BCL = JsonConvert.SerializeObject(bCLoiTram.getBCLoi());
            ViewBag.All = bCLoiTram.getBCLoi();
            ViewBag.maloi= bCLoiTram.getMaloi().ToArray();
            ViewBag.loi = bCLoiTram.getloi();
            ViewBag.bsxe = bCLoiTram.getBsxe();
            return View();
        }

        [HttpGet]
        public JsonResult AllData_BCL(int page, int pageSize)
        {
            return Json(bCLoiTram.getBCLoi(page, pageSize), JsonRequestBehavior.AllowGet);
        } 
        
    }
}