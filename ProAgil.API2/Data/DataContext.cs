using Microsoft.EntityFrameworkCore;
using Model;
using System;

namespace Repository
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }


        public Microsoft.EntityFrameworkCore.DbSet<Usuario> Usuarios { get; set; }

    }
}
