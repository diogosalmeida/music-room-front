import { differenceInMinutes } from 'date-fns';

function getTimeDifference(time) {
  const now = new Date();
  const then = new Date(time);
  let diff = differenceInMinutes(now, then);
  let timeDimension = 'minutos';
  const calc = Math.floor(diff / 60);
  if (calc > 0) {
    if (calc < 24) {
      timeDimension = 'hora(s)';
      diff = calc;
    } else if (calc < 720) {
      timeDimension = 'dia(s)';
      diff = Math.floor(calc / 24);
    } else if (calc < 8640) {
      timeDimension = 'mese(s)';
      diff = Math.floor(calc / 720);
    } else {
      timeDimension = 'ano(s)';
      diff = Math.floor(calc / 8640);
    }
  }

  return calc <= 0 && diff <= 1 ? 'Agora' : `${diff} ${timeDimension} atrás`;
}

export default getTimeDifference;
