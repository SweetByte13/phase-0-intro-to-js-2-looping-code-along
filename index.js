
function writeCards(name, eventName) {
    let cards = []
    for (let i = 0; i < name.length; i++) {
        cards.push (`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    
    
    }


return cards;
}



function countDown(number) {

    while (number >= 0) {
         
        console.log(number);
        number--;

    }

    return number;


}