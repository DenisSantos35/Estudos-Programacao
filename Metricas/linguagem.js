const quantTabelas = document.querySelector('#tabelas');
const enviar = document.querySelector('#enviar');
let tabelas = document.querySelector('#tab');
let opcao = document.querySelector('opcao');
const fpb = document.querySelector('#fpb');
const fpr = document.querySelector('#fpr');
const cobol = document.querySelector('#cobol');
const pascal = document.querySelector('#pascal');
const cMaisMais = document.querySelector('#cMais');
const java = document.querySelector('#java');
const html = document.querySelector('#html');
const comercial = document.querySelector('#comercial');
const eletronico = document.querySelector('#eletronico');
const web = document.querySelector('#web');
const custo = document.querySelector('#custo');
const valorHora = document.querySelector('#valorHora');
const prazo = document.querySelector('#prazo');


let fa = 1.35;
let quantidade;
let dados = [];
let geral = 0;
let entradas = 0;
let entradaArq1a4 = 0;
let entradaArq5a15 = 0;
let entradaArq16 = 0;
let entradaSimples = 0;
let entradaMedia = 0;
let entradaComplexa = 0;
let auxiliar;
let n1, n2, n3, n4, n5, n6;
let fpbSimples, fpbMedio, fpbComplexo;
let somatoriaEntrada = 0;
let somatoriaArquivos = 0;
let somatoriaSaidas = 0;


function criarTabela(quantTabelas){
    for(let i = 1; i <= quantTabelas; i++){
        console.log(i)
        opcao = document.createElement('option');
        quantidade = Number(prompt(`Digite a quantidade de linhas da tabela ${i}`));
        opcao.text = `Tabela ${i} : ${(quantidade)} Linhas`;
        tabelas.appendChild(opcao);  
        dados.push(quantidade); 
        geral += quantidade;
    }
    dados.push(geral);
    console.log(dados); 
}

let dadoTabela;
enviar.addEventListener('click', function(){
    dadoTabela = Number(quantTabelas.value);
    console.log(dadoTabela, typeof(dadoTabela));
    try{
        tabelas = criarTabela(Number(quantTabelas.value));
        
    console.log(tabelas);
    }catch(erro){
        alert('Tabela ja criada')
    }
    finally{                    
        function getEntradas(dados,n1,n2,n3,n4,n5,msg){
            entradaArq1a4 = 0;
            entradaArq5a15 = 0;
            entradaArq16 = 0;
            entradaSimples = 0;
            entradaMedia = 0;
            entradaComplexa = 0;
            auxiliar = dados.pop();
            
            for(let i of dados){
                console.log(i)            
                if(i >= n1 && i <= n2){
                    entradaArq1a4 += 1;                                             
                }                    
                else if (i >= n3 && i <= n4){
                    entradaArq5a15 += 1;                        
                }else if (i >= n5){
                    entradaArq16 += 1;
                }
            }       
            if(entradaArq1a4 >= 0 && entradaArq1a4 <= 2) {
                entradaSimples =  entradaArq1a4;                           
            }else if(entradaArq1a4 >= 3){
                entradaMedia = entradaArq1a4;
            }

            if(entradaArq5a15 >= 0 && entradaArq5a15 <= 1) {
                entradaSimples +=  entradaArq5a15;                         
            }else if(entradaArq5a15 === 2){
                entradaMedia += entradaArq5a15;
            }else if(entradaArq5a15 >= 3){
                entradaComplexa += entradaArq5a15;
            }

            if(entradaArq16 >= 0 && entradaArq16 <= 1) {
                entradaMedia +=  entradaArq16;                         
            }else if(entradaArq16 >= 2){
                entradaComplexa += entradaArq16;
            }else if(entradaArq16 >= 3){
                entradaComplexa += entradaArq16;
            }
            console.log(msg)
            console.log(`${entradaSimples} Entrada Simples`);
            fpbSimples = 3 * entradaSimples
            console.log(fpbSimples, 'Peso Simples');
            console.log(`${entradaMedia} Entrada media`);
            fpbMedio = 4 * entradaMedia
            console.log(fpbMedio, 'Peso Medio');
            console.log(`${entradaComplexa} Entrada complexa`); 
            fpbComplexo = 6 * entradaComplexa
            console.log(fpbComplexo, 'Peso Complexo'); 
            somatoriaEntrada +=  fpbSimples + fpbMedio + fpbComplexo;          
        }
        getEntradas(dados,n1=1,n2=4,n3=5,n4=15,n5=16,msg = 'Entrada');
        dados.push(auxiliar) 
        console.log(dados);

        function getSaida(dados,n1,n2,n3,n4,n5){
            entradaArq1a4 = 0;
            entradaArq5a15 = 0;
            entradaArq16 = 0;
            entradaSimples = 0;
            entradaMedia = 0;
            entradaComplexa = 0;
            
            for(let i of dados){
                console.log(i)            
                if(i >= n1 && i <= n2){
                    entradaArq1a4 += 1;                                             
                }                    
                else if (i >= n3 && i <= n4){
                    entradaArq5a15 += 1;                        
                }else if (i >= n5){
                    entradaArq16 += 1;
                }
            }       
            if(entradaArq1a4 >= 0 && entradaArq1a4 <= 3) {
                entradaSimples =  entradaArq1a4;                           
            }else if(entradaArq1a4 >= 4){
                entradaMedia = entradaArq1a4;
            }

            if(entradaArq5a15 >= 0 && entradaArq5a15 <= 1) {
                entradaSimples +=  entradaArq5a15;                         
            }else if(entradaArq5a15 >=2 && entradaArq5a15 <= 3 ){
                entradaMedia += entradaArq5a15;
            }else if(entradaArq5a15 >= 4){
                entradaComplexa += entradaArq5a15;
            }

            if(entradaArq16 >= 0 && entradaArq16 <= 1) {
                entradaMedia +=  entradaArq16;                         
            }else if(entradaArq16 === 2){
                entradaComplexa += entradaArq16;
            }else if(entradaArq16 >= 3){
                entradaComplexa += entradaArq16;
            }
            console.log('Saida')
            console.log(`${entradaSimples} Entrada Simples`);
            fpbSimples = 4 * entradaSimples
            console.log(fpbSimples,'Peso Simples');
            console.log(`${entradaMedia} Entrada media`);
            fpbMedio = 5 * entradaMedia
            console.log(fpbMedio, 'Peso Medio');
            console.log(`${entradaComplexa} Entrada complexa`); 
            fpbComplexo = 7 * entradaComplexa
            console.log(fpbComplexo, 'Peso Complexo'); 
            somatoriaSaidas = fpbSimples + fpbMedio + fpbComplexo;           
        }
        getSaida(dados,n1=1,n2=5,n3=6,n4=19,n5=20);

        function getConsulta(dados){            
            dados.push(auxiliar) 
            getEntradas(dados,n1=1,n2=4,n3=5,n4=15,n5=16, msg = 'Consulta');
        }
        getConsulta(dados); 

        function getArquivo(dados,n1,n2,n3,n4,n5, msg, v1, v2, v3){
            entradaArq1a4 = 0;
            entradaArq5a15 = 0;
            entradaArq16 = 0;
            entradaSimples = 0;
            entradaMedia = 0;
            entradaComplexa = 0;
            auxiliar = dados.pop();
            
            for(let i of dados){
                console.log(i)            
                if(i >= n1 && i <= n2){
                    entradaArq1a4 += 1;                                             
                }                    
                else if (i >= n3 && i <= n4){
                    entradaArq5a15 += 1;                        
                }else if (i >= n5){
                    entradaArq16 += 1;
                }
            }       
            if(entradaArq1a4 >= 1 && entradaArq1a4 <= 5) {
                entradaSimples =  entradaArq1a4;                           
            }else if(entradaArq1a4 >= 6){
                entradaMedia = entradaArq1a4;
            }

            if(entradaArq5a15 == 1) {
                entradaSimples +=  entradaArq5a15;                         
            }else if(entradaArq5a15 >= 2 && entradaArq5a15 <= 5 ){
                entradaMedia += entradaArq5a15;
            }else if(entradaArq5a15 >= 6){
                entradaComplexa += entradaArq5a15;
            }

            if(entradaArq16 == 1) {
                entradaMedia +=  entradaArq16;                         
            }else if(entradaArq16 >= 2 && entradaArq16 <= 5 ){
                entradaComplexa += entradaArq16;
            }else if(entradaArq16 >= 6){
                entradaComplexa += entradaArq16;
            }
            console.log(msg);
            console.log(`${entradaSimples} Entrada Simples`);
            fpbSimples = v1 * entradaSimples
            console.log(fpbSimples,'peso Simples');
            console.log(`${entradaMedia} Entrada media`);
            fpbMedio = v2 * entradaMedia
            console.log(fpbMedio, 'Peso Medio');
            console.log(`${entradaComplexa} Entrada complexa`); 
            fpbComplexo = v3 * entradaComplexa
            console.log(fpbComplexo, 'Peso Complexo');    
            somatoriaArquivos += fpbSimples + fpbMedio + fpbComplexo       
        }
        getArquivo(dados,n1=1, n2=19,n3=20, n4=50, n5=51, msg='Arquivos',v1=7, v2=10, v3=15);
        dados.push(auxiliar)

        function getInterface(dados){
            dados.push(auxiliar) 
            getArquivo(dados,n1=1, n2=19,n3=20, n4=50, n5=51, msg='Interface', v1=5, v2=7, v3=10);
        }        
        getInterface(dados);

        let total = somatoriaArquivos + somatoriaEntrada + somatoriaSaidas;
        console.log(total);
        fpb.innerHTML = `Total Pontos de Funcao Bruta: ${total}`   
        let resultadofpr = total * fa;
        fpr.innerHTML = `Total Pontos de Função R: ${resultadofpr.toFixed(0)}`

        let ling;
        function getFpr(resultado){
            if(cobol.checked){
                ling = 100 * resultado;
            }else if(pascal.checked){
                ling = 90 * resultado;
            }else if(cMaisMais.checked){
                ling = 30 * resultado;
            }else if(java.checked){
                ling = 20 * resultado;
            }else if(html.checked){
                ling = 15 * resultado;
            }
            return ling;

        }
        let result = getFpr(resultadofpr);
        console.log(result);
        let sistema;
        function getSistema(resultado){
            if(comercial.checked){
                sistema = resultado / 2500;
            }else if(eletronico.checked){
                sistema = resultado / 3600;
            }else if(web.checked){
                sistema = resultado / 3300;
            }
            return sistema

        }
        let resultadoSistema = getSistema(result);
        console.log(resultadoSistema);

        let valor = resultadoSistema * 132 * Number(valorHora.value);
        console.log(valor)
        custo.innerHTML = `Custo do Software: ${valor.toFixed(2)} R$`
    }
    
});




