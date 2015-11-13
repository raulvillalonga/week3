function caesarCipher (message) {
  var desplazamiento = -3;
  var encrypt = "";
  for (var i = 0; i< message.length; i++) {
    if  (message.charAt(i) != ' ') {
      if ((message.charAt(i).charCodeAt() + desplazamiento) <= 'Z'.charCodeAt()){
        if ((message.charAt(i).charCodeAt() + desplazamiento) < 'A'.charCodeAt()) {
          encrypt = encrypt + String.fromCharCode((message.charAt(i).charCodeAt() + desplazamiento) + (('z'.charCodeAt() - 'a'.charCodeAt()) + 1));
        }
        else{
          encrypt = encrypt + String.fromCharCode(message.charAt(i).charCodeAt() + desplazamiento);
        } 
      }  
      else {  
        if ((message.charAt(i).charCodeAt() + desplazamiento) < 'a'.charCodeAt()) {
           encrypt = encrypt + String.fromCharCode((message.charAt(i).charCodeAt() + desplazamiento) + (('z'.charCodeAt() - 'a'.charCodeAt()) + 1));
        }
        else{
          encrypt = encrypt + String.fromCharCode(message.charAt(i).charCodeAt() + desplazamiento);
        } 
      }  
    }
    else{
      encrypt = encrypt + String.fromCharCode(message.charAt(i).charCodeAt());
    }
  }
  return encrypt; 
}

//var encrypted = caesarCipher("brutus? Raul es lo!!");
//var encrypted = caesarCipher("abcdefghijklmnopqrstuvwxyz");
var encrypted = caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

console.log(encrypted);