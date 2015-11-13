function aver (num){
  var arr_num = num.split(":");
  var max = parseInt(arr_num[0]);
  var min = parseInt(arr_num[0]);
  var acumulado = arr_num.reduce(function(acu, num){
    if (parseInt(num) > max) 
      max = parseInt(num);
    if (parseInt(num) < min) 
      min = parseInt(num);
    return acu = parseInt(acu) + parseInt(num);
  });
  return 'Media: ' + acumulado / arr_num.length + ' Maximo: ' + max + ' Minimo: ' + min;
}

var numbers = "80:70:90:100";
console.log(aver(numbers));