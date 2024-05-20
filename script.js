const form = document.getElementById("form");
  const campos = [document.getElementById('input0'), document.getElementById('input1'),
                document.getElementById('input2'), document.getElementById('input3'), 
                document.getElementById('input4')];
  const spans = document.querySelectorAll('.span-required');
  const num = document.getElementById('num-card-front');
  const date = document.getElementById('date-card-front');
  const name = document.getElementById('name-card-front');
  const cvc = document.getElementById('cvc-card-back');
  const divRC = document.querySelectorAll('.right-container');
  var numberRegex = /^\d+$/;
  

  function setError(index){
    campos[index].style.border = '2px solid hsl(0, 100%, 66%)';
    spans[index].style.display = 'block';
  }

  function removeError(index){
    campos[index].style.border = ''; 
    spans[index].style.display = 'none';
  }

  function nameValidate(){
    name.innerHTML=campos[0].value;
    if(campos[0].value.length == 0){
      setError(0);
      return 1;
    }else{
      removeError(0);
      return 0;
    }
  }
  function numValidate(){
    let aux="";
    for (let i = 0; i < campos[1].value.length; i++) {
      if(i%4===0)
        aux+=" ";
      aux+=campos[1].value[i];
    }
    num.innerHTML=aux;
    if(campos[1].value.length < 16 || !campos[1].value.match(numberRegex) ){
      setError(1);
      return 1;
    }else{
      removeError(1);
      return 0;
    }
  }
  function monthValidate(){
    date.innerHTML=campos[2].value+"/"+campos[3].value;
    if(String(campos[2].value).length === 0 || campos[2].value<1 || campos[2].value>12 || !campos[2].value.match(numberRegex)){
      setError(2);
      return 1;
    }else{
      removeError(2);
      return 0;
    }
  }
  function yearValidate(){
    date.innerHTML=campos[2].value+"/"+campos[3].value;
    if(String(campos[3].value).length === 0||campos[3].value<24 || campos[3].value>99 || !campos[3].value.match(numberRegex)){
      setError(3);
      return 1;
    }else{
      removeError(3);
      return 0;
    }
  }
  function cvcValidate(){
    cvc.innerHTML=campos[4].value;
    if(campos[4].value.length != 3 || !campos[4].value.match(numberRegex)){
      setError(4);
      return 1;
    }else{
      removeError(4);
      return 0;
    }
  }
  function complete(){
    $('#right-container').html('<div id="right-container" class="right-container"><div id="complete"><img id="img-complete" src="/images/icon-complete.svg" alt="icone de completo"><h1 id="thankyou">Thank you!</h1><h2 id="carddetails">Weve added your card details</h2><button id="confirm" type="submit">Continue</button></div></div>');
  }


  form.addEventListener('submit',e=>{
      e.preventDefault();
      let namEr=nameValidate();
      let numEr=numValidate();
      let monEr=monthValidate();
      let yearEr=yearValidate();
      let cvcEr=cvcValidate();
      complete();

  })
