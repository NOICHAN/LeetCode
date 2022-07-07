var lengthOfLastWord = function(s) {
    const ary = s.split(' ')
    for (let i = ary.length - 1; i > -1; i--){
        if (ary[i] !== "") return ary[i].length
    }
    return 0
};
