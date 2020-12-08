using GameTOP.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace GameTOP.Lib
{
    public class Jogador2 : Ijogador
    {

        public readonly string _jogador;

        public Jogador2(string jogador)
        {
            this._jogador = jogador;
        }

        public string Chuta()
        {
            return $"{_jogador} chuta";
        }

        public string Corre()
        {
            return $"{_jogador} corre";
        }

        public string Passe()
        {
            return $"{_jogador} passa";
        }
    }
}
