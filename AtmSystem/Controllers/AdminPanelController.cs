using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bank.Models;

namespace Bank.Controllers
{
    public class AdminPanelController : Controller
    {
        CustomerContext customerDB = new CustomerContext();
        public ViewResult AdminSection()
        {
            return View(customerDB.CustomerTable.ToList());
        }
        public ActionResult Details(long id)
        {
            Customer customer = customerDB.CustomerTable.Find(id);
            return View(customer);
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Customer customer)
        {
            customerDB.CustomerTable.Add(customer);
            customerDB.SaveChanges();
            return RedirectToAction("AdminSection");
        }
        public ActionResult AddMoney(long id)
        {
            Customer customer = customerDB.CustomerTable.Find(id);
            return View(customer);
        }
        [HttpPost]
        public ActionResult AddMoney(Customer updateCustomer)
        {
            Customer customer = customerDB.CustomerTable.Find(updateCustomer.Accountnumber);
            customer.Balance = customer.Balance + updateCustomer.Balance;
            customerDB.SaveChanges();
            return RedirectToAction("AdminSection");
        }
        public ActionResult Delete(long id)
        {
            Customer customer = customerDB.CustomerTable.Find(id);
            return View(customer);
        }
        [HttpPost]
        public ActionResult Delete(Customer customer)
        {
            Customer removeCustomer = customerDB.CustomerTable.Find(customer.Accountnumber);
            if(removeCustomer.Balance == 0)
            {
                customerDB.CustomerTable.Remove(removeCustomer);
                customerDB.SaveChanges();
            }
            else
            {
                return View("ZeroBalance");
            }
            return RedirectToAction("AdminSection");
        }
    }
}