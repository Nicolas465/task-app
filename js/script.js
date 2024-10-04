// * selcionar as tags

const inputtext  = document.getElementById('task');
const tasklist = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

//* coneciar o btnADD a uma função via js

btnAdd.addEventListener('click', function(){
    addtask();
})
inputtext.addEventListener.addeventlistener('keydown, function(){
    if(e.code == "enter")
        addtask();
// * função - conectada ao botão
function addtask(){
    if(inputtext.value ==''){
        alert("você precisa adicionar a descrição da tarefa");

    }
    else{
        // * criando uma tag e salvando em uma variável
        // * createelement()cria uma tag
        //* um novo li = uma nova tarefa
        let li = document.createElement("li");
        //* o conteúdo do li recebe o que a pessoa digitou
        li.innerHTML = inputtext.value;
        //* appendchild = adiciona uma tag dentro de outra
        //* no caso o novo <li> é colocado dentro do <ul> tasklist
        tasklist.appendChild(li);
    }
    // *  limpando caixa de texto para a próxima tarefa
    inputtext.value = '';
    // * criando umspan com x
    let span = document .createelement('span');
    //* \uoo7 representa um x em unicode
    span.innerhtml = '\u00d7';
    // ^ adicionando o span dentro do  <li> que acabou de ser criado
    li.appendchild(span);
}
// * limpando caixa de texto para a próxima tarefa inputtext.value = ' ';
savedata();

]


// * 03/10/2024
//^ adcionando evento de clique na lista de tarefas
tasklist.addEventListener('click', function(e){
    /*
    ^ e na função anõnima representa a tag que foi clicada
    ^ pois dentro da tasklist tem muita coisa pra clicar (ul,
        span, li, imagem)
    ^^então precisamos saber no que exatamente foi clicado
    */
   // * checando se o que foi clicado foi a tag <li>
   if(e.target.tagname == 'li'){
    // * se sim, ele tira ou adiciona a classe ('checked');
}
//* se não foi o <li> foi o <span> que foi clicado? o x else if (e.target.tagname == 'span')
// * pegamos o que foi clicado e acessamos o seu pai
//^ e apagamos o seu pai (0 <li>)
//* e.target =
  e.target.parentelement.remove();

})

//* salvando informação no navegador, para não perder as tarefas ao fechar o site.

function savedata(){
    // * localstorage = armazenamento local do navegador
    //* selften = adiciona uma 'váriavel' chamada "task_data"
    //* tasklist.innerhtml = todos os <li>
    localStorage.sellem("task_data", tasklist.innerHTML):

}

function.loaddata(){
    //* ao carregar o site de novo, o <ul> tasklist vai iniciar vazio
    //* então escrevemos o seu immehtml(seu conteúdo)com a informação salva no localstorage
    tasklist.innerhtml = localStorage.getItem('task_data');

}
chamando a função fora = chama ela ao carregar o Site




}



})


