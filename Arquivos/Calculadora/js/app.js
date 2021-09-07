function calc() {
    var calcfu = Number(func.value) * Number(funcsala.value);
    var ano = (calcfu) * 12;
    var abs = (ano) * 0.10;
    var abssaude = (abs) * 0.50;
    somatoria.innerHTML = ` <h3>${funcio.value}</h3>
    Seu gasto anual com os funcionários é de <b><span style ="color: green;">${ano.toFixed(2)}R$</span></b> de acordo com a taxa de absenteismo você perde <b><span style ="color: red;">${abs.toFixed(2)}R$</span></b> anualmente, com o nosso software você pode evitar afastamento por conta de problemas de saude que são 50% desse valor <b><span style ="color: green;">${abssaude.toFixed(2)}R$</span></b> `;
}