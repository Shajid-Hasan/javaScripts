
function doDoubleOrTriple (num, doDouble){
    if(doDouble === 0){
        const result = num * 2;
        return result;
        
    }
    else{
        const result = num * 3;
        return result;
    }

}
console.log(doDoubleOrTriple(10, true));
console.log(doDoubleOrTriple(5, false));