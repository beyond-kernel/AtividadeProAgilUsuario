using System;
using GameTOP.Interface;
using GameTOP.Lib;


namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            JogoFODA game = new JogoFODA(
                new Jogador1("Rafael"), 
                new Jogador2("Deadpool"),
                new Jogador3());
            game.IniciarJogo();
        }
    }
}
