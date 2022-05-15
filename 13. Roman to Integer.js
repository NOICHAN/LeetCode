var romanToInt = function(s) {
    const numerals  = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}

    const len = s.length
    let total = 0
    for(let i = 0; i < len; i++) {
        if (i < len-1 && numerals[s[i+1]] > numerals[s[i]]) {
            total -= numerals[s[i]]
        }else {
            total += numerals[s[i]]
        }
    }
    return total
};