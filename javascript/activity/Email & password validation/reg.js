function allnumeric(inputtxt,ps)
   {
      var numbers = /^[0-9]{10,10}$/;
      var pass=/^([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{7,7})*([!@#\$%\^\&*\)\(+=._-]{1,1})+$/g;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if((inputtxt.value.match(numbers) || inputtxt.value.match(mailformat)) && ps.value.match(pass))
      {
      alert('Your Registration has accepted....');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return true;
      }
      else
      {
      alert('Please enter a valid email and password');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return false;
      }
   } 
