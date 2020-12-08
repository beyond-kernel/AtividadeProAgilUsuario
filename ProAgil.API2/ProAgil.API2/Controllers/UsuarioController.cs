using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;
using ProAgil.API2.Dtos;
using Repository;

namespace ProAgil.API2.Controllers
{
    [Route("site/Usuarios")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        // private readonly DataContext _dataContext;
        private readonly IProAgilRepository _respository;
        private readonly IMapper _mapper;

        public UsuarioController(IProAgilRepository respository, IMapper mapper)
        {
            _respository = respository;
            _mapper = mapper;
        }

        // GET: api/Usuario
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {

                var usuarios = await _respository.GetAllUsariosAsync();

                var finalResults = _mapper.Map<List<UsuarioDto>>(usuarios);

                return Ok(finalResults);

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "DB failure");
            }
        }



        // GET: api/Usuario/UsuarioId
        [HttpGet("getById/{UsuarioId}")]
        public async Task<IActionResult> Get(int usuarioId)
        {
            try
            {
                var result = await _respository.GetUsuarioById(usuarioId);

                var finalResults = _mapper.Map<UsuarioDto>(result);


                return Ok(finalResults);

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "DB failure");
            }
        }

        // GET: api/Usuario/UsuarioId
        [HttpPost]
        public async Task<IActionResult> Post(UsuarioDto model)
        {
            try
            {
                var usuario = _mapper.Map<Usuario>(model);

                _respository.Add(usuario);

                if (await _respository.SaveChangesAsync())
                {
                    return Created($"/api/Usuario/{model.Id}", _mapper.Map<UsuarioDto>(usuario));
                }

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "DB failure");
            }

            return BadRequest();
        }

        // GET: site/Usuario/UsuarioId
        [HttpPut]
        public async Task<IActionResult> Put(UsuarioDto model)
        {
            try
            {

                var usuario = await _respository.GetUsuarioById(model.Id);
                if (usuario == null) return NotFound();

                _mapper.Map(model, usuario);

                _respository.Update(usuario);

                if (await _respository.SaveChangesAsync())
                {
                    return Created($"/api/Usuario/{model.Id}", _mapper.Map<UsuarioDto>(usuario));
                }

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "DB failure");
            }

            return BadRequest();
        }


        [HttpDelete("Delete/{UsuarioId}")]
        public async Task<IActionResult> Delete(int usuarioId)
        {

            try
            {
                var usuarioToDelete = await _respository.GetUsuarioById(usuarioId);

                _respository.Delete(usuarioToDelete);

                if (await _respository.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "DB failure");
            }

            return BadRequest();
        }

    }
}
