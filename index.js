class usuario {

    static count = 0;

    constructor ( nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros =  libros;
        this.mascotas = mascotas;
        this.contarMascotas = 0;

    }

    getFullName () {
    return `El nombre es ${this.nombre} ${this.apellido}`
    } 

    setName (nombre) {
        return this.nombre = nombre;
    }

    addMascota(Nuevo) {
        this.mascotas.push(Nuevo)
    }

    contarMascotas(){
       return this.contarMascotas
    }

    getcuentaglobal (){
        return usuario.count;
    }

    contar (){
        this.contarMascotas++
        usuario.getcuentaglobal++
    }
}

class libro {
constructor (nombre, autor){
    this.nombre = nombre
    this.autor = autor
}
}

const masc1 = new libro ("","Salchicha")
const u1 = new usuario ("Matías", "Almonacid", ["el señor de la guera"], ["perro", "gato"])

console.log(u1.contar)

console.log(u1)
// console.log(`el nombre es ${u1.nombre}`)
console.log(u1.getFullName())








