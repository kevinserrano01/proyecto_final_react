//  función que divide los segundos por 60 para obtener los minutos y use el operador de módulo (%) para obtener los segundos restantes.

export default function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} sec`;
}