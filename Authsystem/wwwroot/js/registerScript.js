

// Function to check for entered password and coverts to text and vice versa
function viewPassword(){
        var passwordInput = document.getElementById('password-field');
        var passStatus = document.getElementById('pass-status');
 
        if (passwordInput.type == 'password'){
            passwordInput.type='text';
           passStatus.className='fa fa-eye-slash';}

       else{passwordInput.type='password';
           passStatus.className='fa fa-eye';}
       }

// Function to check for entered password and coverts to text and vice versa
function confirmPassword(){
         var passwordInput = document.getElementById('confirmPassword-field');
         var passStatus = document.getElementById('check-status');
 
      if (passwordInput.type == 'password'){
          passwordInput.type='text';
          passStatus.className='fa fa-eye-slash';}
     
     else{passwordInput.type='password';
         passStatus.className='fa fa-eye';}
}