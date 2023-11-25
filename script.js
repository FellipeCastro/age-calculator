const dia = document.getElementById('dia');
const mes =document.getElementById('mes');
const ano = document.getElementById('ano');

const erroDia = document.getElementById('erro-dia');
const erroMes = document.getElementById('erro-mes');
const erroAno = document.getElementById('erro-ano');

const labelDia = document.getElementById('label-dia');
const labelMes = document.getElementById('label-mes');
const labelAno = document.getElementById('label-ano')

const botao = document.getElementById('button');
botao.addEventListener('click', calcularIdade);

let resAnos = document.getElementById('res-anos');
let resMeses = document.getElementById('res-meses');
let resDias = document.getElementById('res-dias');



function calcularIdade() {
    let erro = false

    const diaValue = parseInt(dia.value);
    const mesValue = parseInt(mes.value);
    const anoValue = parseInt(ano.value);

    const data = new Date();
    const anoAtual = data.getFullYear();
    const mesAtual = data.getMonth() +1;
    const diaAtual = data.getDate();

    const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();

    let idadeAnos = anoAtual - anoValue;
    let idadeMeses = mesAtual - mesValue;
    let idadeDias = diaAtual - diaValue;

    if (diaValue <= 0 || diaValue > 31 || isNaN(diaValue)) {
        erroDia.style.display = 'block';
        dia.style.border = '1px solid #ff5454';
        labelDia.style.color ='#ff5454';
        erro = true
    } else {
        erroDia.style.display = 'none';
        dia.style.border = '1px solid #888';
        labelDia.style.color ='#888';
    } 

    if (mesValue < 1 || mesValue > 12 || isNaN(mesValue)) {
        erroMes.style.display = 'block';
        mes.style.border = '1px solid #ff5454';
        labelMes.style.color ='#ff5454';
        erro = true
    } else {
        erroMes.style.display = 'none';
        mes.style.border = '1px solid #888';
        labelMes.style.color ='#888';
    }

    if (anoValue > anoAtual || isNaN(anoValue)) {
        erroAno.style.display = 'block';
        ano.style.border = '1px solid #ff5454';
        labelAno.style.color ='#ff5454';
        erro = true
    } else {
        erroAno.style.display = 'none';
        ano.style.border = '1px solid #888';
        labelAno.style.color ='#888';
    }

    if(mesValue > mesAtual || (mesValue === mesAtual && diaValue > diaAtual)) {
        idadeAnos -= 1;
    }
    
    if (diaValue > diaAtual) {
        idadeMeses -= 1;
    }

    if (idadeMeses < 0) {    const diaValue = parseInt(dia.value);
        idadeMeses += 12;
    }

    if (idadeDias < 0) {
        idadeDias = ultimoDiaMesAnterior -diaValue + diaAtual;
    }

    if (!erro) {
        resAnos.innerHTML = `${idadeAnos}`;
        resMeses.innerHTML = `${idadeMeses}`;
        resDias.innerHTML = `${idadeDias}`;        
    } else {
        resAnos.innerHTML = '--';
        resMeses.innerHTML = '--';
        resDias.innerHTML = '--';       
    }

    
}