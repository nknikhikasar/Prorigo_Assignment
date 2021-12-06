using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bank.Models;

namespace Bank.Controllers
{
    public class CustomerPanelController : Controller
    {
        CustomerContext customerDb = new CustomerContext();
        public ViewResult CustomerSection(Customer customer) => View(customer);
        public ActionResult Withdraw(long id)
        {
            Customer customer = customerDb.CustomerTable.Find(id);
            return View(customer);
        }
        [HttpPost]
        public ActionResult Withdraw(Customer updateCustomer)
        {
            Customer customer = customerDb.CustomerTable.Find(updateCustomer.Accountnumber);
            if(customer.Balance>=updateCustomer.Balance)
            {
                customer.Balance = customer.Balance - updateCustomer.Balance;
                customerDb.SaveChanges();
                return RedirectToAction("CustomerSection",customer);
            }
            else
            {
                return RedirectToAction("Insufficient", customer);
            }
        }
        public ActionResult Transfer(long id)
        {
            Customer customer = customerDb.CustomerTable.Find(id);
            return View(customer);
        }
        [HttpPost]
        public ActionResult Transfer(Customer updateCustomer, long receivedCustomerId)
        {
            Customer senderCustomer = customerDb.CustomerTable.Find(updateCustomer.Accountnumber);
            Customer receivedCustomer = customerDb.CustomerTable.Find(receivedCustomerId);
            if(senderCustomer.Balance>=updateCustomer.Balance)
            {
                if (receivedCustomer != null)
                {
                    senderCustomer.Balance = senderCustomer.Balance - updateCustomer.Balance;
                    receivedCustomer.Balance = receivedCustomer.Balance + updateCustomer.Balance;
                    customerDb.SaveChanges();
                }
                else
                    return RedirectToAction("InvalidCustomer", senderCustomer);

                return RedirectToAction("CustomerSection", senderCustomer);
            }
            else
            {
                return RedirectToAction("Insufficient", senderCustomer);
            }
        }
        public ActionResult Insufficient(Customer customer)
        {
            return View(customer);
        }
        public ActionResult InvalidCustomer(Customer customer)
        {
            return View(customer);
        }
    }
}