formatIp = (x) => {

  if(typeof x !== "string"){
    return new Error("ip entry must be of string type");
  }

  for(i = 0; i < x.length; i++){
    if(!isNaN(parseInt(x[i]))){
      x = x.split('');
      x.splice(x[i], 1);
      x = x.join('');
    }
  }

  return x;

}

console.log(formatIp(3));
