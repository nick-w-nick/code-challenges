const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getAlphabetLetter(currentPosition: number, keyIndex: number) {
    const alphabetLetters = alphabet.split('');
    if ((currentPosition + keyIndex) >= alphabetLetters.length) {
        const rolloverAmount = ((alphabetLetters.length - currentPosition) - keyIndex);
        const normalizedRolloverAmount = rolloverAmount < 1 ? rolloverAmount * -1 : rolloverAmount;
        const newLetter = alphabetLetters[normalizedRolloverAmount];
        return newLetter;
    }
    
    const newLetter = alphabetLetters[currentPosition + keyIndex];
    return newLetter;
}

function encode(text: string, key: string) {
    const keyLetters = key.split('');
    const keyLetterPositions = keyLetters.map(keyLetter => alphabet.indexOf(keyLetter));
    
    const words = text.split(' ');
    const wordPositions = words.map(word => {
        const letters = word.split('');
        const positions = letters.map(letter => alphabet.indexOf(letter));
        return positions;
    });
    
    let encodeIndex = 0;
    const encodedWords = wordPositions.reduce<string[]>((acc, curr) => {
        const encodedWord = curr.map(position => {
            if (encodeIndex === key.length) {
                encodeIndex = 0;
            }
            const keyIndex = keyLetterPositions[encodeIndex];
            const newLetter = getAlphabetLetter(position, keyIndex);
            
            encodeIndex++;
            
            return newLetter;
        }).join('');
        
        acc.push(encodedWord)
        
        return acc;
    }, [])
    
    return encodedWords.join(' ');
}

function decode(text: string, key: string) {
    const keyLetters = key.split('');
}

console.log(encode('big dog on the fence yeah boy whats up i like to party', 'sjodkfgnosikdnfinsdofnsdnfsodnfosndfosndofnsiodjnfgosd'));
console.log(decode('tru gyl ua hzm phahm lwdv gbq zuflg xc n zaxh yc hnuhd', 'sjodkfgnosikdnfinsdofnsdnfsodnfosndfosndofnsiodjnfgosd'));