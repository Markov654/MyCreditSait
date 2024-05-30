function myFunction(){
  

    let amount = document.getElementById('amount').value
    let interest = document.getElementById('interest').value
    let months = document.getElementById('months').value
    
     
    let interest1 = (amount * (interest * 1.2 /12)) / months;
    
    let total = ((amount / months) + interest1)  || 0;
    let total1 = amount + interest1 * months
  
    console.log(`Месечна вноска в размер ${total}`)
    console.log(total1)

    document.getElementById('result').innerHTML = (`Месечна вноска в размер: ${total.toFixed(2)} лв.`)


}

myFunction()