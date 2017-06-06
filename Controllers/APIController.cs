using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class APIController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        public void addPerson(Person p)
        {
            if (p != null)
            {
                db.people.Add(p);
                db.SaveChanges();
            }
            
        }

        public JsonResult getPeople()
        {
            var people = db.people.ToList();
            return Json(people, JsonRequestBehavior.AllowGet);
        }
    }
}