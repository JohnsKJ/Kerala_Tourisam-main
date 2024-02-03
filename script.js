$(function(){
  var $form=$("#register");
  $form.validate({
      rules:{
          username:{
              required:true,
              lettersonly:true,
              minlength:4
          },
          phone:{
              required:true,
              numbersonly:true,
              minlength:10
          },
          email:{
              required:true,
             // email:true,
              emailvalue:true
              
          },
          password1:{
              required:true,
              all:true,
              canumltrp:true
          },
          password2:{
              required:true,
              equalTo:"#password",
              
          }
      },
      messages:{
          username:{
              required:'username requied',
              lettersonly:'invalid name',
              minlength:'Atleast 4 letters required' 
          },
          phone:{
              required:'phone number required',
              numbersonly:'invalid ',
              minlength:'minimum 10 numbers required'
          },
          email:{
              required:'Email required',
              //email:'Email invalid',
              emailvalue:'Email mismatch'
          },
          password1:{
              required:'Password required',
              all:'Space is not allowed',
              canumltrp:'min 1 uppercase,number,lowercase required'

          },
          password2:{
              required:'Conform password reqired',
              equalTo:'Password mmismatch',
              
          }
      }       
  })
  jQuery.validator.addMethod('lettersonly', function(value, element) {
      return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
  });
  jQuery.validator.addMethod('emailvalue', function(value, element) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
  });
  jQuery.validator.addMethod('numbersonly', function(value, element) {
      return /^[0-9]+$/.test(value);
  });

  jQuery.validator.addMethod('all', function(value, element) {
      return /^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
  });

  jQuery.validator.addMethod('canumltrp', function(value, element) {
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
  });
})
$(function(){
  var $form=$("#loginform");
  $form.validate({
      rules:{
          username:{
              required:true,
              lettersonly:true,
              minlength:4

          },
          password1:{
              required:true,
              all:true,
              canumltrp:'Password mismatch'
          },
      },
      messages:{
          username:{
              required:'username requied',
              lettersonly:'invalid name',
              minlength:'Atleast 4 letters required' 
          },
          password1:{
              required:'Password required',
              all:'Space is not allowed',
              canumltrp:'Password mismatch'
          },
      }       
  })
  jQuery.validator.addMethod('lettersonly', function(value, element) {
      return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
  });
  jQuery.validator.addMethod('all', function(value, element) {
      return /^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
  });
  jQuery.validator.addMethod('canumltrp', function(value, element) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
  });
})
