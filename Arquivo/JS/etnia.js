const anao = {
    nome: 'anao',
    combate: 08,
    habilidade: 06,
    pv: 15,
    pm: 05,
}

const elfo = {
    nome: 'elfo',
    combate: 07,
    habilidade: 07,
    pv: 05,
    pm: 10,
}

const halfling = {
    nome: 'halfling',
    combate: 06,
    habilidade: 09,
    pv: 05,
    pm: 05,
}

const humano = {
    nome: 'humano',
    combate: 07,
    habilidade: 07,
    pv: 10,
    pm: 10,
}

const meiogenio = {
    nome: 'meiogenio',
    combate: 05,
    habilidade: 08,
    pv: 05,
    pm: 15,
}

const minotauro = {
    nome: 'minotauro',
    combate: 09,
    habilidade: 05,
    pv: 10,
    pm: 05,
}

const racas = [anao,elfo,halfling,humano,meiogenio,minotauro]
//pode ser assim:
// racas.push(anao)
// racas.push(elfo)
// racas.push(halfling)
// racas.push(humano)
// racas.push(meiogenio)
// racas.push(minotauro)
// console.log(racas)

let etnia = {}
function escolherRaca (raca){
    
 etnia = racas.find(e=>e.nome===raca)  
    //  console.log(etnia)
    // criou infomracao no navegado
    let personagemString = localStorage.getItem('personagem')

    // let personagemObj = JSON.parse(personagemString)
    // console.log(personagemObj)
    // cirou um personagem com  os atributos da varivel
    let personagem = {...etnia}
    // armazenou o personagem no navegador que ele criou na linha 65
    localStorage.setItem('personagem', JSON.stringify(personagem))
    // chamar  a funcao da linha 77
    personalizado ('',personagem.nome,'classes')
}






