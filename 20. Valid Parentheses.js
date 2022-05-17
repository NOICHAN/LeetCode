var isValid = function(s) {
    const a = []

    for(let i = 0; i < s.length; i++){
        switch (s[i]) {
            case '{':
                a.push('}')
                break;

            case '[':
                a.push(']')
                break;

            case '(':
                a.push(')')
                break;

            default:
                if(a.pop() !== s[i]) return false
                break;
        }
    }

    return !a.length
};