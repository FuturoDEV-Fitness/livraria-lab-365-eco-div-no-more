class Instrumento {
    codigo = 0
    nome =''    // # para propriedade protegida
    tipo ='' //(Ex: violão, teclado)
    estado='' //(Ex: Danificado, Novo, Usado)

    constructor(codigo, nome,tipo,estado) {
        this.codigo = codigo
        this.nome = nome
        this.tipo =  tipo 
        this.estado =  estado 
    }
get getCodigo(){ return this.codigo}
get getNome(){ return this.nome}
get getTipo(){ return this.tipo}
get getEstado(){ return this.estado}

set setCodigo(newValue){ this.codigo = newValue}
set setNome(newValue){ this.nome = newValue}
set setTipo(newValue){ this.tipo = newValue}
set setEstado(newValue){ this.estado = newValue}


}

module.exports = Instrumento;