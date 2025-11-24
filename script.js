let palavras = [
    { nome: "LEAO", categoria: "animais" }, { nome: "TIGRE", categoria: "animais" }, { nome: "ELEFANTE", categoria: "animais" }, { nome: "GIRAFA", categoria: "animais" }, { nome: "ZEBRA", categoria: "animais" }, { nome: "HIPOPOTAMO", categoria: "animais" }, { nome: "LOBO", categoria: "animais" }, { nome: "URSO", categoria: "animais" }, { nome: "MACACO", categoria: "animais" }, { nome: "CROCODILO", categoria: "animais" }, { nome: "PANDA", categoria: "animais" }, { nome: "CAMALEAO", categoria: "animais" }, { nome: "GUEPARDO", categoria: "animais" }, { nome: "AGUIA", categoria: "animais" }, { nome: "TUBARAO", categoria: "animais" }, { nome: "GOLFINHO", categoria: "animais" }, { nome: "CORUJA", categoria: "animais" }, { nome: "JAVALI", categoria: "animais" }, { nome: "LEMURE", categoria: "animais" },
    { nome: "NIKE", categoria: "marcas famosas" }, { nome: "ADIDAS", categoria: "marcas famosas" }, { nome: "SAMSUNG", categoria: "marcas famosas" }, { nome: "COCA-COLA", categoria: "marcas famosas" }, { nome: "GOOGLE", categoria: "marcas famosas" }, { nome: "MICROSOFT", categoria: "marcas famosas" }, { nome: "TOYOTA", categoria: "marcas famosas" }, { nome: "AMAZON", categoria: "marcas famosas" }, { nome: "PEPSI", categoria: "marcas famosas" }, { nome: "SONY", categoria: "marcas famosas" }, { nome: "FERRARI", categoria: "marcas famosas" }, { nome: "MCDONALD'S", categoria: "marcas famosas" }, { nome: "LOUIS VUITTON", categoria: "marcas famosas" }, { nome: "GUCCI", categoria: "marcas famosas" }, { nome: "BMW", categoria: "marcas famosas" }, { nome: "INTEL", categoria: "marcas famosas" }, { nome: "ROLEX", categoria: "marcas famosas" }, { nome: "TESLA", categoria: "marcas famosas" }, { nome: "DISNEY", categoria: "marcas famosas" },
    { nome: "CADEIRA", categoria: "objetos" }, { nome: "MESA", categoria: "objetos" }, { nome: "COMPUTADOR", categoria: "objetos" }, { nome: "CELULAR", categoria: "objetos" }, { nome: "GARRAFA", categoria: "objetos" }, { nome: "RELOGIO", categoria: "objetos" }, { nome: "OCULOS", categoria: "objetos" }, { nome: "CHAVE", categoria: "objetos" }, { nome: "LIVRO", categoria: "objetos" }, { nome: "CANETA", categoria: "objetos" }, { nome: "MOCHILA", categoria: "objetos" }, { nome: "CARTEIRA", categoria: "objetos" }, { nome: "TELEVISAO", categoria: "objetos" }, { nome: "FONES", categoria: "objetos" }, { nome: "ABAJUR", categoria: "objetos" }, { nome: "ESCOVA", categoria: "objetos" }, { nome: "PRATO", categoria: "objetos" }, { nome: "CONTROLE", categoria: "objetos" }, { nome: "VENTILADOR", categoria: "objetos" }, { nome: "ESPELHO", categoria: "objetos" },
    { nome: "PIZZA", categoria: "comidas" }, { nome: "HAMBURGUER", categoria: "comidas" }, { nome: "LASANHA", categoria: "comidas" }, { nome: "SUSHI", categoria: "comidas" }, { nome: "CHURRASCO", categoria: "comidas" }, { nome: "SALADA", categoria: "comidas" }, { nome: "BATATA-FRITA", categoria: "comidas" }, { nome: "MACARRAO", categoria: "comidas" }, { nome: "TACO", categoria: "comidas" }, { nome: "SOPA", categoria: "comidas" }, { nome: "OMELETE", categoria: "comidas" }, { nome: "BOLO", categoria: "comidas" }, { nome: "SANDUICHE", categoria: "comidas" }, { nome: "PANQUECA", categoria: "comidas" }, { nome: "STROGONOFF", categoria: "comidas" }, { nome: "SORVETE", categoria: "comidas" }, { nome: "ARROZ", categoria: "comidas" }, { nome: "FEIJAO", categoria: "comidas" }, { nome: "TORTA", categoria: "comidas" }, { nome: "CACHORRO-QUENTE", categoria: "comidas" },
    { nome: "MEDICO", categoria: "profissões" }, { nome: "ENGENHEIRO", categoria: "profissões" }, { nome: "PROFESSOR", categoria: "profissões" }, { nome: "ADVOGADO", categoria: "profissões" }, { nome: "PROGRAMADOR", categoria: "profissões" }, { nome: "ENFERMEIRO", categoria: "profissões" }, { nome: "POLICIAL", categoria: "profissões" }, { nome: "BOMBEIRO", categoria: "profissões" }, { nome: "MOTORISTA", categoria: "profissões" }, { nome: "PADEIRO", categoria: "profissões" }, { nome: "MECANICO", categoria: "profissões" }, { nome: "ELETRICISTA", categoria: "profissões" }, { nome: "VETERINARIO", categoria: "profissões" }, { nome: "PILOTO", categoria: "profissões" }, { nome: "JORNALISTA", categoria: "profissões" }, { nome: "DESIGNER", categoria: "profissões" }, { nome: "FOTOGRAFO", categoria: "profissões" }, { nome: "DENTISTA", categoria: "profissões" }, { nome: "GARCOM", categoria: "profissões" }
]

const btComecar = document.getElementById("btcomecar")
const btZerar = document.getElementById("btzerar")
const letras = document.getElementById("letras")
const somFalha = new Audio('sons/mixkit-cartoon-failure-piano-473.wav')
const somSucesso = new Audio("sons/success-fanfare-trumpets-6185.mp3")
btComecar.addEventListener("click", function () {
    let inputLetra = document.createElement("input")
    inputLetra.type = "text"
    inputLetra.id = "inputletra"
    inputLetra.placeholder = "Digite uma letra"
    inputLetra.classList.add("item")
    const btEnviar = document.createElement("button")
    btEnviar.innerText = "Enviar"
    btEnviar.classList.add("item")
    btEnviar.id = "enviar"
    let i = Math.floor(Math.random() * palavras.length)
    let arrayDeLetras = palavras[i].nome.split('')
    const p = document.createElement("p")
    p.classList.add("item")
    p.id = "p"
    p.textContent = palavras[i].categoria.charAt(0).toUpperCase() + palavras[i].categoria.slice(1)
    let contadorLetras = arrayDeLetras.length
    console.log(arrayDeLetras)
    arrayDeLetras.forEach(function (l, i) {
        const letra = document.createElement("li")
        letra.classList.add("item")
        letra.textContent = "__"
        letra.id = "item" + (i)
        letras.appendChild(letra)
    })
    letras.appendChild(p)
    letras.appendChild(inputLetra)
    letras.appendChild(btEnviar)

    btEnviar.addEventListener("click", function enviarLetra (evento) {
        if(inputLetra.value==""){
            alert("Digite uma letra maiúscula ou minúscula!")
            return
        }
        if (arrayDeLetras.includes(inputLetra.value.toUpperCase())) {
            let indices = arrayDeLetras.map((letra, indice) => letra.toUpperCase() == inputLetra.value.toUpperCase() ? indice : -1).filter(indice => indice !== -1)
            indices.forEach(function (indice) {
                letras.childNodes[indice].textContent = inputLetra.value.toUpperCase()
            })

        } else {
            let img = document.querySelector("img")
            let imgsrc = img.getAttribute("src")
            console.log(imgsrc)

            switch (imgsrc) {
                case "./imgs/forca.png":
                    img.setAttribute("src", "./imgs/cabeça.png")
                    break;
                case "./imgs/cabeça.png":
                    img.setAttribute("src", "./imgs/corpo.png")
                    break;
                case "./imgs/corpo.png":
                    img.setAttribute("src", "./imgs/braço1.png")
                    break;
                case "./imgs/braço1.png":
                    img.setAttribute("src", "./imgs/braço2.png")
                    break;
                case "./imgs/braço2.png":
                    img.setAttribute("src", "./imgs/perna1.png")
                    break;
                case "./imgs/perna1.png":
                    img.setAttribute("src", "./imgs/perna2.png")
                    document.getElementById("msgderrota").textContent = "Você perdeu :("
                    somFalha.play()
                    const letrasJuntas = letras.childNodes
                    for(let i=0;i<arrayDeLetras.length;i++){
                        letrasJuntas[i].textContent = arrayDeLetras[i]
                    }
                    break;
            }
        }
        const letrasDigitadas = document.getElementById("letrasdigitadas")
        const letraDigitada = document.createElement("li")
        letraDigitada.textContent = inputLetra.value
        letrasDigitadas.appendChild(letraDigitada)

        const itens = document.querySelectorAll("li")
        const arrayItens= Array.from(itens)
        const temLinha = arrayItens.every( i => i.textContent!=="__")
        const img = document.querySelector("img").getAttribute("src")
        if(temLinha && img!=="./imgs/perna2.png"){
           document.getElementById("msgvitoria").textContent="Você venceu!"
           somSucesso.play()
        }
    inputLetra.value=""
    })
})

btZerar.addEventListener("click", function () {
    const itens = document.querySelectorAll(".item")
    itens.forEach(function (item) {
        item.remove()
    })
    document.querySelector("img").setAttribute("src", "./imgs/forca.png")
    document.getElementById("letrasdigitadas").innerHTML = ""
    document.getElementById("msgderrota").innerHTML = ""
    document.getElementById("msgvitoria").innerHTML = ""
})



