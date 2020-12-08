using GameTOP.Interface;

namespace GameTOP.Lib
{
    public class Jogador1 : Ijogador
    {
        public readonly string Nome;

        public Jogador1(string _Nome)
        {
            this.Nome = _Nome;
        }

        public string Chuta()
        {
            return $"{this.Nome} esta chutando";
        }

        public string Corre()
        {
            return $"{this.Nome} esta correndo";
        }
        public string Passe()
        {
            return $"{this.Nome} esta passando";
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}