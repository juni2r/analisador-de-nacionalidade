function clicar() {
    var pais_do_usuario = window.document.querySelector('input#pais').value
    var botao = window.document.querySelector('input#verificacao')
    var res = window.document.querySelector('p#txt')
    if (pais_do_usuario === 'brasil') {
        res.innerHTML = 'Você e brasileiro'
    }
    else {
        res.innerHTML = 'Você e estrangeiro'
    }
}