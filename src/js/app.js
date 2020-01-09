
const day = 10;
const mon = 10;
const capr = 'capricon';
const aqua = 'aquarius';
const pis = 'pisces'
const ari = 'aries'
const auru = 'taurus'
const gem = 'gemini'

let sign;

if (mon === 1) {
    if (day <= 19) {
        sign = capr;
    } else {
        sing = aqua;
    }
} else if (mon === 2) {
if (day <= 18){
    sign = aqua;
} else {
    sign = pis;
}
    }else if (mon === 3) {
        if (day <= 21){
            sign = pis;
        } else {
            sign = ari;
        }
    }
// alt shift F 