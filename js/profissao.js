const clerigo = {
    classe: 'clerigo',
    pv: +5,
    pm: null,
    combate: null,
    habilidade: null,
    dom: 'divino',
}

const druida = {
    classe: 'druida',
    pv: null,
    pm: +5,
    combate: null,
    habilidade: null,
    dom: 'ancestral',
}

const guerreiro = {
    classe: 'guerreiro',
    pv: null,
    pm: null,
    combate: +1,
    habilidade: null,
    dom: 'combatente',
}

const ladino = {
    classe: 'ladino',
    pv: null,
    pm: null,
    combate: null,
    habilidade: +1,
    dom: 'malandragem',
}

const mago = {
    classe: 'mago',
    pv: null,
    pm: +5,
    combate: null,
    habilidade: null,
    dom: 'arcano',
}

const paladino = {
    classe: 'paladino',
    pv: +5,
    pm: null,
    combate: null,
    habilidade: null,
    dom: 'inabalavel',
}

const classes = [clerigo,druida,guerreiro,ladino,mago,paladino]
// console.log(classes)

let profissao = {}
function escolherClasse (classe){
    /* nesse momento meu parametro da função (classe) é ladino */
    profissao = classes.find(e=>e.classe===classe)  
    // console.log(profissao)
    let personagemString = localStorage.getItem('personagem')
    let personagemObj = JSON.parse(personagemString)

        switch (profissao.classe) {
            case 'clerigo':
                personagemObj.pv = personagemObj.pv +5
                
                break;
            case 'druida':
                personagemObj.pm = personagemObj.pm +5
                    
                break;
            case 'guerreiro':
                personagemObj.combate = personagemObj.combate +1
                        
                break;
            case 'ladino':
                personagemObj.habilidade = personagemObj.habilidade +1
                    
                break;
            case 'mago':
                personagemObj.pm = personagemObj.pm +5
                        
                break;
            case 'paladino':
                personagemObj.pv = personagemObj.pv +5
                            
                break;
            default:
                break;
        }


        

    // console.log(personagemObj)
    let personagem = {...profissao, ...personagemObj}
    localStorage.setItem('personagem', JSON.stringify(personagem))
        esconderSection (2)
        let fechar = document.querySelectorAll('.close')
    

        let count = 0
        Array.from(fechar).forEach(function(el) {
            if(count ===0){
                el.click()
                count = 1
                console.log(count)
            }
          });
}

function personalizado (classe , raca, pagina) {
    if (window.confirm ("Você vai iniciar a aventura de: " + raca + " " + classe)) {
        window.location.href = "http://127.0.0.1:5500/Index/"+pagina+".html";
    }
    else {
       localStorage.removeItem('personagem') 
    }
}

