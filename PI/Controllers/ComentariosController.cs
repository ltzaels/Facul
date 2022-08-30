using Microsoft.AspNetCore.Mvc;
using PI.Models;

namespace PI.Controllers
{
    [Route("/[controller]/[action]")]
    [ApiController]
    public class ComentariosController : ControllerBase
    {

        private BDContexto contexto;

        public ComentariosController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }

        [HttpGet]
        public List<Comentario> Listar()
        {
            return contexto.Comentarios.ToList();
        }

        [HttpPost]
        public string Cadastrar([FromBody] Comentario novoComentario)
        {
            contexto.Add(novoComentario);
            contexto.SaveChanges();
            return "Comentario registrado com sucesso!";
        }

        [HttpDelete("{id}")]
        public string Excluir(int id)
        {
            Comentario dados = contexto.Comentarios.FirstOrDefault(p => p.Id == id);

            if (dados == null)
            {
                return "Não foi possivel encontrar comentario para o id informada";
            }
            else
            {
                contexto.Remove(dados);
                contexto.SaveChanges();
                return "Comentario removido com sucesso!";
            }
        }


    }
}