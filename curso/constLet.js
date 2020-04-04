const num = 1;
num = 3; //<- da erro pois a constante não pode ser alterada

const user = {
  nome: "Rodrigo"
};
user.nome = "Alves"; // <- funciona pois estamos utilizando 
                     // da mutação da  não o conteudo dela.


function comparaMaior(y) {
  let x = 3 // let é uma variavel de escopo, 
            // só funciona aqui dentro dessa função
  
  if (y > x)
    console.log(`${y} é maior que ${x}`);
}

x = 20; // não funciona pois o let x só pode ser manipulado
        // dentro do escopo do método comparaMaior