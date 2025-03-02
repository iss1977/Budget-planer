const reasonInput =document.querySelector("#input-reason");
const amountInput =document.querySelector("#input-amount");
const cancelBtn =document.querySelector("#btn-cancel");
const confirmBtn =document.querySelector("#btn-confirm");
const expensesList =document.querySelector("#expenses-List");

const clear = ()=> {
  reasonInput.value ="";
  amountInput.value="";
}

confirmBtn.addEventListener('click',(_)=> {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;
  if(enteredReason.trim().length <=0 ||
  enteredAmount <=0 ||
  enteredAmount.trim().length <= 0
  ) {
      return;
  }
  console.log(enteredReason, enteredAmount);
  const newItem=document.createElement('ion-item')
  newItem.textContent=enteredReason + ':$' + enteredAmount;

  expensesList.appendChild(newItem);
  clear();
});

cancelBtn.addEventListener("click",clear);
