function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // No missing letters are found
    if (str == alphabet) return undefined;

    // Create an array from the alphabet
    const letters = [...alphabet];

    // Retrieve the part of the array we need by using the 
    // first and last Array index of the input string
    let sliced = letters.slice(
        letters.findIndex(letter => letter == str.charAt(0)),
        (letters.findIndex(letter => letter == str.slice(-1))) + 1,
    );




    return str;
}

fearNotLetter("ceg");
