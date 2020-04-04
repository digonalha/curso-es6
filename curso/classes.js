class List {
  constructor(){
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//classes podem herdar de outras classes utilizando o extends
class TodoList extends List {
  constructor() {
    // classes que fazem extends de outras, 
    // podem chamar o método super() no seu proprio contrutor
    // que irá chamar o construtor da classe que ela fez extend
    super();
    this.usuario = 'digonalha';
  }

  mostraUsuario(){
    console.log(this.usuario);
  }

  static show(user){
    // não da pra chamar o this.usuario dessa classe, 
    // pois como o método é estatico, ele nao tem acesso ao
    // restante da classe
    console.log(user)
  }
}

var MinhaLista = new TodoList();