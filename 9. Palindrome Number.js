var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    if (x % 10 === 0) return false
    const str = String(x)
    let i = 0
    let k = str.length - 1
    while (i < k) {
        if (str[i] !== str[k]) {
            return false
        }
        i++
        k--
    }
    return true
};