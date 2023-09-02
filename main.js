const form = document.getElementsByTagName('form')[0]
const nome = document.getElementsByClassName('input')[0]
const numero = document.getElementsByClassName('input')[1]
const tabelaCorpo = document.getElementsByTagName('tbody')[0]
let linhas = ''
const nomes = []
const numeros = []

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionar()
})



function adicionar() {
    const Enumero = isNaN(Number(numero.value))
    const Eletra = isNaN(nome.value)

    if (nomes.includes(nome.value) && numeros.includes(Number(numero.value))) {
        alert(`O contato ${nome.value} - ${numero.value} já foi adicionado`)
    } else {
        if ((!Enumero) && (Eletra)) {
            let linha = `<tr>`
            linha += `<td>${nome.value}</td>`
            linha += `<td>${numero.value}</td>`
            linha += `</tr>`
            linhas += linha

            tabelaCorpo.innerHTML = linhas

            numeros.push(Number(numero.value))
            nomes.push(nome.value)

            numero.style.borderBottomColor = 'black'
            nome.style.borderBottomColor = 'black'
        } else {
            numero.style.borderBottomColor = (!Enumero) ? 'black' : 'red'
            nome.style.borderBottomColor = (Eletra) ? 'black' : 'red'
        }
        nome.value = ''
        numero.value = ''
    }
}