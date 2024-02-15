function romanToInt(s: string): number {
    const romanToIntMap: { [key: string]: number } = { 
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total: number = 0;
    for(let i = 0; i < s.length; i++){
        if(romanToIntMap[s[i]] < romanToIntMap[s[i+1]]){
            total -= romanToIntMap[s[i]];
        }else{
            total += romanToIntMap[s[i]];
        }
    }
    return total;
}

console.log(romanToInt('IV'))