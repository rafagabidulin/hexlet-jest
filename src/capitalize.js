const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(2);
    return `${firstChar}${restSubstring}`;
}

export default capitalize;