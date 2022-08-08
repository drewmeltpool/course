const isPalindrome = str => {
    const regExp = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(regExp, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

export default isPalindrome

// A man, a plan, a canal. Panama
// eye