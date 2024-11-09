// alone solution
function isPalindrome(s: string): boolean {
    const alphanumRegex = new RegExp('^[A-Za-z0-9]*$')

    let leftP = 0, rightP = s.length - 1
    
    while(leftP < rightP) {

        if(!alphanumRegex.test(s[leftP])) {
            leftP++
            continue
        }

        if(!alphanumRegex.test(s[rightP])) {
            rightP--
            continue
        }

        if(s[leftP].toLowerCase() !== s[rightP].toLowerCase()) return false

        leftP++

        rightP--
    }

    return true
};

console.log(isPalindrome("0P"))
