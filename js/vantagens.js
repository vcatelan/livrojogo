const treinamento = {
   vantagem: "treinamento de campo",
    pv: null,
    pm: null,
    combate: +2,
    habilidade: null,
}

const reflexos = {
    vantagem: "reflexos rápidos",
    pv: null,
    pm: null,
    combate: null,
    habilidade: +2,
}

const fortitude = {
    vantagem: "fortitude maior",
    pv: +5,
    pm: null,
    combate: null,
    habilidade: null,
}

const ancestral = {
    vantagem: "sangue ancestral",
    pv: null,
    pm: +5,
    combate: null,
    habilidade: null,
}

const vantagens = [treinamento, reflexos, fortitude, ancestral]

let talento = {}
function escolherTalento (talento){
   let talentoEscolhido = vantagens.find(e=>e.vantagem===talento) 
        let personagemString = localStorage.getItem('personagem')
        let personagemObj = JSON.parse(personagemString)
    console.log (personagemObj)

    switch (talentoEscolhido.vantagem) {
        case 'treinamento de campo':
            personagemObj.combate = personagemObj.combate +2
                    
            break;
        case 'reflexos rápidos':
            personagemObj.habilidade = personagemObj.habilidade +2
                
            break;
        case 'fortitude maior':
            personagemObj.pv = personagemObj.pv +5
                    
            break;
        case 'sangue ancestral':
            personagemObj.pm = personagemObj.pm +5
                        
            break;
        default:
            break;
    }

    personagemObj.vantagem = talentoEscolhido.vantagem
    let personagem = {...personagemObj}
    localStorage.setItem('personagem', JSON.stringify(personagem))
    alertaProxpag (personagem, 'aventuras') 
}

function alertaProxpag (personagem, pagina) {
    if (window.confirm ("Você será um " + personagem.nome + ", " + personagem.classe + " com a vantagem " + personagem.vantagem)) {
        window.location.href = "http://127.0.0.1:5500/Index/"+pagina+".html";
    }
    else {
       localStorage.removeItem('personagem') 
    }
}
