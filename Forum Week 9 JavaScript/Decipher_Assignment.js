function digitalDecipher(eMessage, key){
    const signature = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ","."];

    let decodedMessage = "";

    let keyArray = Array.from(key.toString())


    for(let i = 0; i < eMessage.length; i++){
        decodedMessage += signature[eMessage[i] - 1 - keyArray[i % keyArray.length]];
    }

    return decodedMessage;
}
console.log(digitalDecipher([10,5,14,14,17,27,15,20,30,2,3,9,23,19],2022));
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));

