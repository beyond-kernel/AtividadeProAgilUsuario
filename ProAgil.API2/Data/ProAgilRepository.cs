using Microsoft.EntityFrameworkCore;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class ProAgilRepository : IProAgilRepository
    {
        protected DataContext _dataContext;

        public ProAgilRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
            //NoTracking Para não travar os recursos nas querys
            _dataContext.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public void Add<T>(T entity) where T : class
        {
            _dataContext.AddAsync(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public async Task<Usuario> GetUsuarioById(int UsuarioId)
        {
            return await _dataContext.Usuarios.FirstOrDefaultAsync(x => x.Id == UsuarioId);
        }

        public async Task<Usuario[]> GetAllUsariosAsync()
        {
            return await _dataContext.Usuarios.ToArrayAsync();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _dataContext.SaveChangesAsync()) > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            _dataContext.Update(entity);
        }
    }
}
