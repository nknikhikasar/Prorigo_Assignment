using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Bank.Models
{
    public class AdminContext : DbContext
    {
        public AdminContext()
            : base("DatabaseConnection")
        {

        }
        public DbSet<Admin> AdminTable { get; set; }
    }
}