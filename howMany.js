
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
   var  a = readLine().split(' ');
    a = a.map(Number);
    var combos = [];
    var modulos = [];
    
    
    
   function adder(arr) { 
    for (var i = 0; i < arr.length;i++) {
        for (var e = i + 1; e < arr.length; e++) {
            
            combos.push(arr[i] + arr[e]);
            
            
        }   
    }    
   }
    adder(a);
    
    function modder(val) {
        
        if (val % k == 0) { modulos.push(val)}
        
        
    }
    
    
    combos.forEach(modder)
    
    
//console.log(a); // included so we can see input array we are modifying
//console.log(combos); // included see we can see how our input array has been modified 
console.log(modulos.length);    

}
