module.exports = function toReadable (number) {
    const onesAndTensReadable = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tensReadable = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number === 0) return 'zero';

    let hundreds = Math.floor(number / 100);
    let tensAndOnes = number - hundreds * 100;

    hundreds = hundreds !== 0 ? onesAndTensReadable[hundreds] + ' hundred' : '';

    if (tensAndOnes === 0) {
        tensAndOnes = ''
    } else if (tensAndOnes < 20) {
        tensAndOnes = onesAndTensReadable[tensAndOnes];
    } else {
        let tens = Math.floor(tensAndOnes / 10);
        let ones =  tensAndOnes - tens * 10;
        tens = (tens !== 0) ? tensReadable[tens] : '';
        ones = (ones !== 0) ? onesAndTensReadable[ones] : ''
        tensAndOnes = `${tens}${ tens && ones ? ' ' : '' }${ones}`
    }

    return `${hundreds}${ hundreds && tensAndOnes ? ' ' : '' }${tensAndOnes}`;
}
