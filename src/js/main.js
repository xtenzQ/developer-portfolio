import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/js/all'
// TODO: add AOS as dependency instead of CDNing it

console.info('Came here to check my code? Go to my GitHub!\nhttps://github.com/xtenzQ!')
console.info('PDF version of CV is available here\nhttp://xtenzq.github.io/cv')

AOS.init({disable: 'mobile'});

function calculateDifferenceBetweenDates(start, end) {
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return {years: Math.floor(months / 12), months: months % 12}
}

function calcDate() {
    const internship = calculateDifferenceBetweenDates(new Date(2020, 2, 1), new Date(2020, 4, 1));
    const work = calculateDifferenceBetweenDates(new Date(2020, 10, 12), new Date());

    const exp = {years: work.years + internship.years, months: work.months + internship.months};

    const year_word = exp.years === 1 ? "year" : "years";
    const month_word = exp.months === 1 ? "month" : "months";

    return `${exp.years} ${year_word} ${exp.months} ${month_word}`;
}

document.getElementById('time').innerHTML = calcDate();

console.log('%c     \n%c     ', "background: #0057B8; color: white; font-size: 12px;", "background: #FFD700; color: black; font-size: 12px;");