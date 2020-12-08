using System;
using System.Collections.Generic;
using System.Text;
using GameTOP.Interface;

namespace GameTOP.Lib
{
    public class Jogador3 : Ijogador
    {
        public string Chuta()
        {
            return "chutou";
        }

        public string Corre()
        {
            return "correu";
        }

        public string Passe()
        {
            return "passou";
        }
    }
}
