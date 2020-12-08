using Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public interface IProAgilRepository
    {
        //general
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        //Usuaarios
        Task<Usuario> GetUsuarioById(int UsuarioId);

        Task<Usuario[]> GetAllUsariosAsync();

    }
}
