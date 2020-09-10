

let cellBloc = document.getElementsByClassName('cell');
console.log(cellBloc);

for ( const cell of cellBloc) {
    console.log(cell);
}

const Player = (name) => {
 const sayName = () => console.log(`my name is ${name}`)
 return {sayName}

}


let num = 0;


