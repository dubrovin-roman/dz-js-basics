function convertCurrency(amountOfFunds, currencyOfFunds, targetCurrency) {
    if (typeof amountOfFunds !== 'number' 
        || amountOfFunds < 0 
        || typeof currencyOfFunds !== 'string' 
        || typeof targetCurrency !== 'string') {
        return undefined;
    }

    const RUB_TO_USD = 76.7519;
    switch (currencyOfFunds) {
        case 'руб':
            if (targetCurrency === '$') {
                return amountOfFunds / RUB_TO_USD;
            } else {
                return null;
            }
        case '$':
            if (targetCurrency === 'руб') {
                return amountOfFunds * RUB_TO_USD;
            } else {
                return null;
            }
        default:
            return null;
    }
}