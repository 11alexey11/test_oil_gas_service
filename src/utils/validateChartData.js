import { getTimes } from './getTimes';

export const validateChartData = (data) => {
    const {
        date,
        hour,
        av,
        bv,
        cv,
        dv,
        ev,
        fv,
        gv
    } = data;

    const time = new Date(date);
    const formatter = new Intl.DateTimeFormat('ru', { day: 'numeric', month: 'short' });
    const dateString = formatter.format(time);

    const times = getTimes(hour, av.length);

    const chartData = av.map((_, index) => {
        return {
            name: index === 0 ? dateString : times[index],
            av: av[index],
            bv: bv[index],
            cv: cv[index],
            dv: dv[index],
            ev: ev[index],
            fv: fv[index],
            gv: gv[index]
        }
    });

    return chartData;
};