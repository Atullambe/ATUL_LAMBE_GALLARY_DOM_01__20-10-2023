let registeredUser ;
let validation=[true,false,false,false]
console.log(validation);
let diceRolls = [];
let rollCount = 0;






  function registerUser(event)  { 
        event.preventDefault();
        if(validation[0]===true) { 
     document.getElementById('formContainer').classList.remove('hidden');
     
     
        
      }
      
      else{
        alert("click the 1 item")
    }
    

}
function register(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
      const username = document.getElementById('username').value;
      registeredUser = { name, username };
      document.getElementById('userInfo').innerText = `Name: ${name}\nUsername: ${username}`;
      
      validation[1]=true
     console.log(validation)
     document.getElementById('formContainer').classList.add('hidden');

}

console.log(validation[1])


function displayUserInfo(){
  
      if(validation[1]===true){
      document.getElementById('infoContainer').classList.remove('hidden');
      validation[2]=true
      console.log(validation)
   
  }
  else{
      alert("click the 1st box first")
  }
    }


    
function rollDice() {
 if(validation[2]===true){

    if (rollCount < 3) {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(diceResult);
        rollCount++;
        console.log(rollCount)
    }
  
        if (rollCount === 3) {
            validation[3]=true
      console.log(validation)
          const total = diceRolls.reduce((sum, val) => sum + val, 0);
          console.log(total)
          if (total > 10) {
            document.getElementById('image4').style.cursor = 'pointer';
            document.getElementById('couponContainer').classList.remove('hidden');
            document.getElementById('diceContainer').classList.remove('hidden');
            
            document.getElementById('diceResult').innerText = `Dice Roll:->${rollCount} ,Dice Total:->${total}`;
            document.getElementById('message').innerText = 'congratulation';

          } else {
            document.getElementById('message').innerText = 'Try again after scoring more than 10';
            document.getElementById('messageContainer').classList.remove('hidden');
            document.getElementById('image3').style.cursor = 'not-allowed';
            document.getElementById('image4').style.cursor = 'not-allowed';
            validation[3]=false;

          }
        }
    
        
    

 }
 else{
    alert("click the 1st box first")
}
 
  }
  function generateCoupon() {
    if(validation[3]===true){
        const coupon=Math.random()*1000;
        console.log(coupon)
        document.getElementById('coupon').innerText = `Coupon Code: ${coupon}`;
        document.getElementById('couponContainer').classList.remove('hidden');
        document.getElementById('congratsImage').classList.remove('hidden');


    }
    else{
        alert("click the 1st box first")
    }

  }





 



  