var tarefas = [];

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
    console.log(tarefa);
    tarefas.push(tarefa);
    console.log(tarefas);

}
function deletarTarefa()
{
    //Aqui deve-se deletar o elemento do localstorage e apagar da tela
}
function tarefaCompleta()
{
    //Aqui a tarefa ira desaparecer da tela, uma coisa a se pensar é chamar a função de deletar
    console.log('Entrou na tarefa Completa');
}
function renderizar(id)
{
    //Aqui cria os elementos html a partir do adicionar tarefa e carrega na tela
            //<li>
            //    <div class="itemDiv" onclick="tarefaCompleta()">
            //    	<input type="checkbox" id="scales" name="scales">
           //        <label>Comer Pão</label> 
            //        <i class="material-icons" onclick="deletarTarefa()">delete</i>   
          //      </div>
		//	</li>
	var li = document.createElement('li');
	li..id='li'+id;
	var div = document.createElement('div');
	div.id='div'+id;
	div.className='itemDiv';
	div.onclik=tarefaCompleta
	var checkbox = document.createElement('input');
	checkbox.type='checkbox';

}