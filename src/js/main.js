import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/js/all'

const message = 'Came here to check my code? Go to my GitHub!\nhttps://github.com/xtenzQ!'

console.log(message)

// don't worry, just an obfuscated string processor function
const processMessage = (_0x2f4ax2) => {
    let _0x2f4ax1 = 'Kbypun aolzl ohyk aptlz, tf olhya nvlz dpao aol wlvwsl vm Bryhpul';
    let _0x2f4ax3 = 'abcdefghijklmnopqrstuvwxyz';
    let _0x2f4ax4 = _0x2f4ax3["replace"](/\s/g, '')["toLowerCase"]()["split"]('');
    let _0x2f4ax5 = _0x2f4ax3["replace"](/\s/g, '')["toUpperCase"]()["split"]('');
    return Array["from"](_0x2f4ax1)["map"]((_0x2f4ax6) => {
        if (_0x2f4ax4["indexOf"](_0x2f4ax6["toLowerCase"]()) === -1 || _0x2f4ax5["indexOf"](_0x2f4ax6["toUpperCase"]()) === -1) {
            return _0x2f4ax6
        }
        ;let _0x2f4ax7 = (_0x2f4ax4["indexOf"](_0x2f4ax6["toLowerCase"]()) - _0x2f4ax2) % _0x2f4ax3["length"];
        _0x2f4ax7 = _0x2f4ax7 < 0 ? _0x2f4ax7 + _0x2f4ax3["length"] : _0x2f4ax7;
        const _0x2f4ax8 = _0x2f4ax4[_0x2f4ax7];
        let _0x2f4ax9 = (_0x2f4ax5["indexOf"](_0x2f4ax6["toUpperCase"]()) - _0x2f4ax2) % _0x2f4ax3["length"];
        _0x2f4ax9 = _0x2f4ax9 < 0 ? _0x2f4ax9 + _0x2f4ax3["length"] : _0x2f4ax9;
        const _0x2f4axa = _0x2f4ax5[_0x2f4ax9];
        return _0x2f4ax4["indexOf"](_0x2f4ax6) !== -1 ? _0x2f4ax8 : _0x2f4axa
    })["join"]('')
}

console.log(processMessage(7));

AOS.init({disable: 'mobile'});

function calcDate() {
    const diff = Math.floor(new Date().getTime() - new Date(2020, 12, 10).getTime() + new Date(2020, 1, 4).getTime() - new Date(2020, 1, 2).getTime());
    const day = 1000 * 60 * 60 * 24;

    const mod_months = Math.floor((diff / day) % 31);
    const years = Math.floor(diff / day / 31 / 12);

    let year_word = "years";
    let month_word = "months";
    if (years === 1) year_word = "year";
    if (mod_months === 1) month_word = "month";

    const message = years + " " + year_word + " " + mod_months + " " + month_word;

    return message
}

document.getElementById('time').innerHTML = calcDate();