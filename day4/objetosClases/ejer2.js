function sleep(sec,text){

  function shout(){
    console.log(text);
  }
  
  setTimeout(shout,1000*sec);
}

console.log("Uno");
sleep(5,"Dos");
console.log("Tres");