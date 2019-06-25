var tarefas = [];
var i = 0;

function adicionarTarefa()
{
    //Aqui deve-se colocar o elemento no localstorage e renderizar o elemento na tela
    var tarefa = new Tarefa();
    tarefa.entrada(); 
    tarefas.push(tarefa);
    console.log(tarefas[i].id+' '+tarefas[i].desc);
    renderizar(tarefas[i].id,tarefas[i].desc);
    i++;
}
function deletarTarefa()
{
    //Aqui deve-se deletar o elemento do localstorage e apagar da tela
    console.log('Entrou em deletar tarefa');
}
function tarefaCompleta()
{
    //Aqui a tarefa ira desaparecer da tela, uma coisa a se pensar é chamar a função de deletar
    console.log('Entrou na tarefa Completa');
}
function renderizar(id,desc)
{
    //Aqui cria os elementos html a partir do adicionar tarefa e carrega na tela

    var lista = document.getElementById('listaTarefas');
    var li = document.createElement('li');
    li.id='li'+id;
    var div = document.createElement('div');
    div.id='div'+id;
    div.className='itemDiv';
    div.onclik=tarefaCompleta;
    var checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.id='checkbox'+id;
    var label = document.createElement('label');
    label.innerHTML=desc;
    var i = document.createElement('i');
    i.className='material-icons';
    i.onclick=deletarTarefa;
    i.innerHTML='delete';
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(i);
    li.appendChild(div);
    lista.appendChild(li);
}
