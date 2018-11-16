
let miArray = [1,2,3,4,5,6,7,8];
let miOtroArray = [9,10,11,12,13,14,15];
let miUltimoArray = [16,17,18,19,20,21,22];

miObjeto = {
    nombre: "Juan",
    apellidos: "Federico",
    direccion: {
        calle: "Alfonso Pio",
        num: 3
    }
}

miObjeto2 = {
    nombre: "Pedro",
    barrio: "Olivares",
}


// Ejercicio 1
const head = (array) => {
    const [first] = array;
    return first;
}

console.log(head(miArray));

// Ejercicio 2

const tail = (array) => {
    const [, ...rest] = array;
    return rest;
}

console.log(tail(miArray));

// Ejercicio 3

const init = (arr) => Array.prototype.filter.call(arr, (x, index) => index < arr.length-1);

console.log(init(miArray));

//Ejercicio 4

const last = (array) => {
    const [first] = [...array].reverse();
    return first;
}

console.log(last(miArray));

// Ejercicio 5

const concat = (a, b) =>{
    return [...a, ...b];
}

console.log(concat(miArray, miOtroArray));

// Ejercicio 5 (Opcional)

const concat2 = (...arr) =>{
     return [...arr].reduce((a, b) => [...a, ...b])
}

console.log(concat2(miArray, miOtroArray, miUltimoArray));

// Ejercicio 6

const clone = (source) =>{
    return Object.assign({}, source);
}

console.log(clone(miObjeto));

// Ejercicio 7

const merge = (source, target) =>{
    return Object.assign(clone(target), source)
}

console.log(merge(miObjeto, miObjeto2));

// Ejercicio 8


const books = [
    {title:"Harry Potter y la piedra filosofal", isRead:true},
    {title:"Canción de hielo y fuego", isRead:false},
    {title:"Devastación", isRead:true}
]

function isBookRead(books, titleToSearch){
    const [first] = books.filter(x => x.title === titleToSearch)
    return first ? first.isRead : false;
}

console.log(isBookRead(books, "Devastación"))

//Ejercicio 8 (Opcional TS)

// interface Book{
//     title: string,
//     isRead: boolean,
// }

// const books: Book[] = [
//     {title:"Harry Potter y la piedra filosofal", isRead:true},
//     {title:"Canción de hielo y fuego", isRead:false},
//     {title:"Devastación", isRead:true}
// ]

// function isBookRead(books: Book[], titleToSearch: string): boolean{
//     const [first] = books.filter(x => x.title === titleToSearch)
//     return first ? first.isRead : false;
// }

// console.log(isBookRead(books, "Devastación"))

// Ejercicio 9

class SlotMachine {
    constructor() {
      this.contador = 0;
    }

    play(){
        this.contador+=1;
        const boolean1 = Math.random() >= 0.5;
        const boolean2 = Math.random() >= 0.5;
        const boolean3 = Math.random() >= 0.5;

        if(boolean1===boolean2===boolean3 === true){
            console.log(`"Congratulations!!!. You won ${this.contador} coins!!"`);
            this.contador=0;
        }else{
            console.log("Good luck next time!!");
        }
    }
  }

  const machine1 =  new SlotMachine()
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();