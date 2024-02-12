function stringChop(str,size) {
    str = str.toString();
    let len = str.length;
    let rest = len%size;    
    let lp = parseInt(len/size);
    let nstr =[];
    let index = 0;
    while(index<len){    
       
        nstr.push(str.slice(index,size+index));
        index += size;
    }    
    return nstr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
