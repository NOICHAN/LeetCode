var strStr = function(haystack, needle) {
    if (!needle || haystack === needle) return 0

    for (let i = 0; i <= haystack.length - needle.length; i++){
        if (needle === haystack.substring(i,i+needle.length)) {
            return i
        }
    }

    return -1
};