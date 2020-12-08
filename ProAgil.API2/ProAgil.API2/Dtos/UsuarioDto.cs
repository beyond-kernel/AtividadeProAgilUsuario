using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace  ProAgil.API2.Dtos
{
    public class UsuarioDto
    {

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public int Escolaridade { get; set; }

        //public int EventoId { get; set; }
        //public string Local { get; set; }
        //public string DataEvento { get; set; }
        //[Required]
        //public string Tema { get; set; }
        //public int QtdPessoas { get; set; }
        //public List<LoteDto> Lotes { get; set; }
        //public string Telefone { get; set; }
        //public string ImagemUrl { get; set; }
        //public string Email { get; set; }
        //public List<RedeSocialDto> RedesSociais { get; set; }
        //public List<PalestranteDto> Palestrantes { get; set; }
    }

}