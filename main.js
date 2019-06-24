var tarefas = [];
var i = 0;

class Tarefa 
{
    constructor()
    {
        this.id;
        this.desc;
        this.feito;
    }
    entrada()
    {
        this.id=tarefas.length;
        this.desc=document.getElementById('descTarefa').value;
        this.feito = false;
    }
}

function adicionarTarefa()
{
    //Aqui deve-se colocar o elemento no localstorage e renderizar o elemento na tela
    var tarefa = new Tarefa();
    tarefa.entrada(); 
    tarefas.push(tarefa);
    renderizar(tarefas[i].id,tarefas[i].desc);
    document.getElementById('descTarefa').value='';
    i++;
}

function tarefaCompleta()
{
    //Aqui a tarefa ira desaparecer da tela, uma coisa a se pensar é chamar a função de deletar
    console.log('Entrou na tarefa Completa');
}

function renderizar(id,desc)
{
    //Aqui cria os elementos html a partir do adicionar tarefa e carrega na tela
    /*<li>
                <div class="itemDiv" >
                	<input type="checkbox" id="feito" onclick="tarefaCompleta()">
                    <label>Comer Pão</label> 
                    <a onclick="deletarTarefa()"><i class="material-icons">delete</i> </a>  
                </div>
	</li>*/
    var lista = document.getElementById('listaTarefas');
    var li = document.createElement('li');
    li.id=id;
    var div = document.createElement('div');
    div.id=id;
    div.className='itemDiv';
    var checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.id=id;
    checkbox.onclick=tarefaCompleta;
    var label = document.createElement('label');
    label.innerHTML=desc;
    var a = document.createElement('a');
    a.id=id;
    a.onclick=function deletarTarefa()
    {
        //Aqui deve-se deletar o elemento do localstorage e apagar da tela
        tarefas.slice(id,1);
        var element = document.getElementById(id);
        lista.parentNode.removeChild(element);
    };
    var iEl = document.createElement('i');
    iEl.className='material-icons';
    iEl.id=id;
    iEl.innerHTML='delete';
    a.appendChild(iEl);
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(a);
    li.appendChild(div);
    lista.appendChild(li);
}