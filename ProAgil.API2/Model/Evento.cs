using Model.Enums;
using System;
using System.Collections.Generic;

namespace Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string  Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public EnumEscolaridade Escolaridade { get; set; }

    }
}
