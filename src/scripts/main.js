AOS.init();

const dataDoEvento = new Date("aug 28, 2025 00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    // data do nascimento
    const dataNascimento = new Date("Aug 28, 1989 00:00");
    
    const diferencaNowNascimento = agora - dataNascimento;
    
    const anoEmMs = 1000 * 60 * 60 * 24 * 365.25;
    // Calcular idade
    const idade = Math.floor(diferencaNowNascimento / anoEmMs);

    document.getElementById('idade').innerHTML = `${idade + 1}`

    const periodoAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(periodoAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((periodoAteOEvento % (diaEmMs)) / (horaEmMs));
    const minutosAteOEvento = Math.floor((periodoAteOEvento % (horaEmMs)) / (minutoEmMs));
    const segundosAteOEvento = Math.floor((periodoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (periodoAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "0d 0h 0m 0s. Chegou o GRANDE DIA"
    }
}, 1000);
