using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bank.Models;

namespace Bank.Controllers
{
    public class LoginPageController : Controller
    {
        public ViewResult SignIn()
        {
            return View();
        }

        public ViewResult AdminLogin()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AdminLogin(Admin admin)
        {
            using(var adminDetails = new AdminContext())
            {
                bool isValid = adminDetails.AdminTable.Any(x => x.Name == admin.Name && x.Password == admin.Password);
                if (isValid)
                    return RedirectToAction("AdminSection", "AdminPanel");
                else
                    return RedirectToAction("SignIn", "LoginPage");
            }
        }
        public ViewResult CustomerLogin()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CustomerLogin(Customer customer)
        {
            CustomerContext customerDetails = new CustomerContext();
            try
            {
                Customer validCustomer = customerDetails.CustomerTable.Single(x => x.Name == customer.Name && x.Password == customer.Password);
                    return RedirectToAction("CustomerSection", "CustomerPanel", validCustomer);
            }
            catch
            {
                return RedirectToAction("SignIn", "LoginPage");
            }
        }
    }
}