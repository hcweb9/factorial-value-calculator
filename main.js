function factorial() {
  let chosen_number = document.getElementById("fieldNumber");
  let chosen_number2 = chosen_number.value;
  let finalResult = document.getElementById("resultonweb");
  let result = 1;

  for (let i = 1; i <= chosen_number2; i++) {
    result *= i; // (*=) this method multiplies result and saves multiplied result again x i
  }                                              //which is the number that has been running

  //Reset form
   document.getElementById("formReset").reset();

 

  return (finalResult.innerHTML += `Factorial ${chosen_number2} equals to ${result} `);



}
// Refresh the web and delete result
  function resetResult() {
    location.reload();
  }



//To force the scrollTop after refreshing with location.reload()
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};