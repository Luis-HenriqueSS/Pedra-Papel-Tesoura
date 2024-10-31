let hack = false
let pontosUsuario = 0
let pontosInimigo = 0

function jogo(pergunta) {
    let pedraInimigo = false, papelInimigo = false, tesouraInimigo = false
    let pedra = false, papel = false, tesoura = false

    //esse comando serve para pegar um elemento específico do HTML pelo seu id, colocando o id no paranteses para acessar esse botão e manipular suas propriedades
    let imagemUsuario = document.getElementById("imagemUsuario")
    let imagemInimigo = document.getElementById("imagemInimigo")
    let resultado = document.getElementById("resultado")
    let pontosUsuarioTexto = document.getElementById("pontosUsuario")
    let pontosInimigoTexto = document.getElementById("pontosInimigo")

    switch(pergunta) {
        case 'pedra':
            pedra = true
            imagemUsuario.src = 'Pedra.avif'
        break

        case 'papel':
            papel = true
            imagemUsuario.src = 'Papel.jpeg'
        break

        case 'tesoura':
            tesoura = true
            imagemUsuario.src = 'Tesoura.jpeg'
        break
    }

    let randomNumber = Math.floor(Math.random() * 3) + 1

    switch(randomNumber) {
        case 1:
            pedraInimigo = true
            imagemInimigo.src = 'Pedra.avif'
        break

        case 2:
            papelInimigo = true
            imagemInimigo.src = 'Papel.jpeg'
        break

        case 3:
            tesouraInimigo = true
            imagemInimigo.src = 'Tesoura.jpeg'
        break
    }

    if (hack) {
        randomNumber = Math.floor(Math.random() * 6) + 1
        if (randomNumber >= 3) {
            if (pedra) {
                imagemInimigo.src = 'Papel.jpeg'
                resultado.innerText = "Pedra x Papel \nO usuário perdeu"
                pontosInimigo ++

            } else if (papel) {
                imagemInimigo.src = 'Tesoura.jpeg'
                resultado.innerText = "Papel x Tesoura \nO usuário perdeu"
                pontosInimigo ++

            } else {
                imagemInimigo.src = 'Pedra.avif'
                resultado.innerText = "Tesoura x Pedra \nO usuário perdeu"
                pontosInimigo ++
            }

        } else if (randomNumber == 2) {
            if (pedra) {
                imagemInimigo.src = 'Pedra.avif'
                resultado.innerText = "Pedra x Pedra \nAmbos empataram"

            } else if (papel) {
                imagemInimigo.src = 'Papel.jpeg'
                resultado.innerText = "Papel x Papel \nAmbos empataram"

            } else {
                imagemInimigo.src = 'Tesoura.jpeg'
                resultado.innerText = "Tesoura x Tesoura \nAmbos empataram"

            }

        } else {
            if (pedra) {
                imagemInimigo.src = 'Tesoura.jpeg'
                resultado.innerText = "Pedra x Tesoura \nO usuário venceu"
                pontosUsuario ++

            } else if (papel) {
                imagemInimigo.src = 'Pedra.avif'
                resultado.innerText = "Papel x Pedra \nO usuário venceu"
                pontosUsuario ++

            } else {
                imagemInimigo.src = 'Papel.jpeg'
                resultado.innerText = "Tesoura x Papel \nO usuário venceu"
                pontosUsuario ++
            }   
        }
    } else if (pedra && pedraInimigo) {
        resultado.innerText = "Pedra x Pedra \nAmbos empataram"

    } else if (pedra && papelInimigo) {
       resultado.innerText = "Pedra x Papel \nO usuário perdeu"
       pontosInimigo ++

    } else if (pedra && tesouraInimigo) {
        resultado.innerText = "Pedra x Tesoura \nO usuário venceu"
        pontosUsuario ++

    } else if (papel && pedraInimigo) {
        resultado.innerText = "Papel x Pedra \nO usuário venceu"
        pontosUsuario ++

    } else if (papel && papelInimigo) {
        resultado.innerText = "Papel x Papel \nAmbos empataram"

    } else if (papel && tesouraInimigo) {
        resultado.innerText = "Papel x Tesoura \nO usuário perdeu"
        pontosInimigo ++

    } else if (tesoura && pedraInimigo) {
        resultado.innerText = "Tesoura x Pedra \nO usuário perdeu"
        pontosInimigo ++

    } else if (tesoura && papelInimigo) {
        resultado.innerText = "Tesoura x Papel \nO usuário venceu"
        pontosUsuario ++

    } else if (tesoura && tesouraInimigo) {
        resultado.innerText = "Tesoura x Tesoura \nAmbos empataram"

    }
    pontosUsuarioTexto.innerText = `Usuario: \n${pontosUsuario}`
    pontosInimigoTexto.innerText = `Inimigo: \n${pontosInimigo}`
}

document.getElementById('hack').addEventListener('click', function() {
    hack = !hack
    if (hack) {

    } else {

    }
})