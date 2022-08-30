$(document).ready(function () {
  grid();
});

function grid() {
  $.get('https://localhost:5001/Comentarios/Listar')
    .done(function (resposta) {
      for (i = 0; i < resposta.length; i++) {
        let linha = $('<tr class="text-center"></tr>');

        linha.append($('<td></td>').html(resposta[i].nome));
        linha.append($('<td></td>').html(resposta[i].materia));
        linha.append($('<td></td>').html(resposta[i].nota));
        linha.append($('<td></td>').html(resposta[i].sugest));

        let botaoExcluir = $('<button class="btn btn-danger"></button>').attr('type', 'button').html('Excluir').attr('onclick', 'excluir(' + resposta[i].id + ')');

        let acoes = $('<td></td>');
        acoes.append(botaoExcluir);

        linha.append(acoes);

        $('#grid').append(linha);
      }
    })
    .fail(function (erro, mensagem, excecao) {
      alert("Erro ao consultar a API!");
    });
}

function excluir(id) {
  $.ajax({
    type: 'DELETE',
    url: 'https://localhost:5001/Comentarios/Excluir/' + id,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(id),
    success: function (resposta) {
      alert("Eleitor removido com sucesso!");
      location.reload(true);
    },
    error: function (erro, mensagem, excecao) {
      alert("Erro ao realizar a remoção!");
    }
  });
}


function cadastrar() { //atualizar API  de cadastro de usuarios futuramente

  let usuario = {

    Nome: formulario.nomeInput.value,
    Email: formulario.emailInput.value,
    Senha: formulario.senhaInput.value

  };

  console.log(usuario); //Por enquanto ainda está no xano


  $.ajax({
    type: 'POST',
    url: 'https://x8ki-letl-twmt.n7.xano.io/api:g-sIc9YA/pi2',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(usuario),
    success: function () {
      alert("Usuario cadastrado com sucesso!");
      location.reload(true);
    },
    error: function () {
      alert("Erro ao realizar o cadastro!");
    }
  });

}

function comentarios() {

  let comentarios = {

    nome: formularioAula.nomeInput.value,
    materia: formularioAula.materiaInput.value,
    nota: formularioAula.notaInput.value,
    sugest: formularioAula.sugestaoInput.value

  };

  console.log(comentarios);


  $.ajax({
    type: 'POST',
    url: 'https://localhost:5001/Comentarios/Cadastrar',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(comentarios),
    success: function () {
      alert("Feedback enviado com sucesso!");
      location.reload(true);
    },
    error: function () {
      alert("Erro ao enviar feedback!");
    }
  });

}

