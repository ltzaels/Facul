using System;
using System.Collections.Generic;

namespace PI.Models
{
    public partial class Comentario
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public string Materia { get; set; } = null!;
        public string Nota { get; set; } = null!;
        public string Sugest { get; set; } = null!;
    }
}
