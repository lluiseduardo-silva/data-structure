function isPalindrome(x:number):boolean{
    const str = String(x);
    let length = str.length -1;
    for(let i=0; i < str.length; i++){
        if(str[i] !== str[length]){
            return false;
        }
        length--;
    }
    return true;
}
function isPalindromeBestTime(x: number): boolean {
    return x >= 0 && x <= 9
        ? true
        : x.toString() == x.toString().split('').reverse().join('');
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

console.log(isPalindromeBestTime(121));
console.log(isPalindromeBestTime(-121));
console.log(isPalindromeBestTime(10));