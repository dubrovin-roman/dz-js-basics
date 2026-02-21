const language = 'ru';

switch (language) {
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'en':
        console.log('Good afternoon!');
        break;
    default:
        console.log('The specified language is not supported.');
}