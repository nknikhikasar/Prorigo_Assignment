using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Bank.Models
{
    public class CustomerContext : DbContext
    {
        public CustomerContext()
            :base("DatabaseConnection")
        {

        }
        public DbSet<Customer> CustomerTable { get; set; }
    }
}