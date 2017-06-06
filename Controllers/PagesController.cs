using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class PagesController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult People()
        {
            return View();
        }

        public ActionResult AddPerson()
        {
            return View();
        }

        public ActionResult Details(int? id)
        {
            if(id != null)
            {
                var person = db.people.ToList().Where(x => x.ID == id).First();
                ViewBag.Person = person.Name + " " + person.Surname;
            }
            return View();
        }
    }
}