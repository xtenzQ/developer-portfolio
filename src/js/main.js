import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/js/all'

console.info('Came here to check my code? Go to my GitHub!\nhttps://github.com/xtenzQ!')
console.info('PDF version of CV is available here\nhttp://xtenzq.github.io/cv')

AOS.init({disable: 'mobile'});

function calcDate() {
    const internship = new Date(2020, 1, 4).getTime() - new Date(2020, 1, 2).getTime();
    const work_exp = new Date().getTime() - new Date(2020, 12, 10).getTime();
    const diff = Math.floor(internship + work_exp);
    const day = 1000 * 60 * 60 * 24; // day in ms
    const daysInMonth = 31;
    const monthsInYear = 12;

    const mod_months = Math.floor((diff / day) % daysInMonth);
    const years = Math.floor(diff / day / daysInMonth / monthsInYear);

    let year_word = years === 1 ? "year" : "years";
    let month_word = mod_months === 1 ? "month" : "months";

    return `${years} ${year_word} ${mod_months} ${month_word}`;
}

document.getElementById('time').innerHTML = calcDate();

console.log('%c     \n%c     ', "background: #0057B8; color: white; font-size: 12px;", "background: #FFD700; color: black; font-size: 12px;");