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
