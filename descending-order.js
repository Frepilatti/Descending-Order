function descendingOrder(n){

    let numStr = n.toString();
    
    let ar = numStr.split('');
    
    let final = ar.sort(function(a, b){
      return  b-a;
      
    });
    
    let ordered = final.join('');
    
    let result = parseInt(ordered);
    
    return result;
    
  }