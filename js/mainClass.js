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