using GameTOP.Interface;
using GameTOP.Lib;
namespace GameTOP
{
    public class JogoFODA
    {
        private readonly Ijogador _jogador;
        private readonly Ijogador _jogador2;
        private readonly Ijogador _jogador3;

        public JogoFODA(Ijogador jogador, Ijogador jogador2, Ijogador jogador3)
        {
            _jogador = jogador;
            _jogador2 = jogador2;
            _jogador3 = jogador3;
        }

        public void IniciarJogo()
        {
            System.Console.WriteLine(_jogador.Chuta());
            System.Console.WriteLine(_jogador.Corre());
            System.Console.WriteLine(_jogador.Passe());

            System.Console.WriteLine("");
            System.Console.WriteLine("Next Player");
            System.Console.WriteLine("");

            System.Console.WriteLine(_jogador2.Chuta());
            System.Console.WriteLine(_jogador2.Corre());
            System.Console.WriteLine(_jogador2.Passe());


            System.Console.WriteLine("");
            System.Console.WriteLine("Next Player");
            System.Console.WriteLine("");

            System.Console.WriteLine(_jogador3.Chuta());
            System.Console.WriteLine(_jogador3.Corre());
            System.Console.WriteLine(_jogador3.Passe());


        }
    }
}