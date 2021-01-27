const nome = document.getElementById('nome');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('estado');
const numero = document.getElementById('numero');
const date = document.getElementById('data');
const cpf = document.getElementById('cpf');
let cpfValido = cpf.value;
const tel = document.getElementById('tel');
const mail = document.getElementById('mail');
const comp = document.getElementById('comp');
const msg = document.getElementById('msg');

cep.addEventListener('blur',()=>{
    /*validação para verifiar se o numero do cep foi preenchido
    caso seja preenchido com os 8 digitos corretos de um cep,
    ele faz a requisição na api para puxar os dados automaticamente
    para preenchimento dos campos, logradouro,uf,bairro,rua.

    Os campos citados acima só é possivel preencher com o cep correto, pois estão desabilitados
    para ser inserido digitando.
    */
    let cepDin = cep.value;
  
   
     if(cepDin && cepDin.length === 8){
       
        fetch(`https://api.postmon.com.br/v1/cep/${cepDin}`)
        .then((res)=>{
        return res.json();
        })
        .then((json)=>{
        rua.value = json.logradouro;
        bairro.value = json.bairro;
        cidade.value = json.cidade;
        uf.value = json.estado_info.nome;
        //console.log(json);
       
        
        });
        
     }else if(cepDin.length !== 8 ){
       let mudarPlace = cep.getAttribute('placeholder');
       let fatiartexto = mudarPlace.slice(0,12);
       let substituirTexto = mudarPlace.replace(fatiartexto,'cep inválido');
       cep.setAttribute('placeholder',substituirTexto);
      
       console.log('Cep format ex:01436210');
       
      
    }
});


// validação quando clica no botão de enviar para verificar se os campos foram preenchidos corretamente
function validar(){
    
    let nomeValido = nome.value.replace(' ','');
    let cepValido = cep.value.toString();
    let ruaValida = rua.value;
    let bairroValido = bairro.value;
    let ufValida = uf.value;
    let cidadeValida = cidade.value;
    let numeroValido = numero.value;
    let dataValida = date.value;
    let cpfValido = cpf.value;
    let telValido = tel.value;
    let mailValido = mail.value;
    let compValido = comp.value;
    let msgValida = msg.value;
     
   if(nomeValido.length >=10 && cepValido.length === 8 && ruaValida !== '' && numeroValido !== '' 
   && dataValida !== '' && cpfValido.indexOf("-") !== -1 && cpfValido.indexOf(".")!== -1 
   && cpfValido.length === 14 && telValido.length === 11 && telValido !== '' && mailValido.indexOf("@") !== -1 && mailValido.indexOf(".com") !== -1 
   && compValido !== '' && msgValida !== ''){


       console.log('Nome correto:' + nomeValido);
       console.log('Cep correto:' + cepValido);
       console.log('Rua correta:' + ruaValida);
       console.log('Bairro correto:' + bairroValido);
       console.log('Uf correta:' + ufValida);
       console.log('Cidade correta:' + cidadeValida );
       console.log('Numero correto:' + numeroValido );
       console.log('Data correta:' + dataValida );
       console.log('Cpf correto:' + cpfValido );
       console.log( ' Tel correto:' + telValido);
       console.log('e-mail: ' + mailValido);
       console.log('Complemento:' + compValido);
       console.log('Mensagem:' + msgValida);
       

       nome.value = '';
       cep.value = '';
       rua.value = '';
       bairro.value = '';
       cidade.value = '';
       uf.value ='';
       numero.value="";
       date.value = '';
       cpf.value = '';
       tel.value = '';
       mail.value = '';
       comp.value = '';
       msg.value = '';
    } 
    else if(nomeValido.length<10 )
    {
      
        console.log('Nome inválido, min 10 caracteres');
      
        
    }else if(cepValido.length !== 8){
        console.log('cep inválido');
        console.log(' Logradouro, uf, cidade e bairro só serão preenchidos com o numero do cep correto');
    }else if(numeroValido === ''|| numeroValido === null){
        console.log('Insira o numero da residencia');
    }else if(dataValida.indexOf('/') === -1 && dataValida.length<10){
        console.log("Data inválida, ex: 00/00/2019")
    }else if(cpfValido.indexOf(".") === -1 || cpfValido.indexOf("-") ===-1  ){
        console.log("cpf inválido. Ex: 000.000.000-00");
    }else if(cpfValido.length < 14){
        console.log('Cpf incorreto. min 14 caracteres');
    }else if(telValido.length <= 10){
        console.log('Telefone inválido.');
    }else if(mailValido.indexOf("@") === -1 || mailValido.indexOf('.com') === -1){
        console.log(" e-mail inválido");
    }else if( compValido === '' && msgValida !== '' ){
        console.log('Nome correto:' + nomeValido);
        console.log('Cep correto:' + cepValido);
        console.log('Rua correta:' + ruaValida);
        console.log('Bairro correto:' + bairroValido);
        console.log('Uf correta:' + ufValida);
        console.log('Cidade correta:' + cidadeValida );
        console.log('Numero correto:' + numeroValido );
        console.log('Data correta:' + dataValida );
        console.log('Cpf correto:' + cpfValido );
        console.log( ' Tel correto:' + telValido);
        console.log('e-mail: ' + mailValido);
        console.log('Mensagem:' + msgValida);

        nome.value = '';
        cep.value = '';
        rua.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value ='';
        numero.value="";
        date.value = '';
        cpf.value = '';
        tel.value = '';
        mail.value = '';
        comp.value = '';
        msg.value = '';
        
    }else if(compValido !== '' && msgValida === ''){
        console.log('Nome correto:' + nomeValido);
        console.log('Cep correto:' + cepValido);
        console.log('Rua correta:' + ruaValida);
        console.log('Bairro correto:' + bairroValido);
        console.log('Uf correta:' + ufValida);
        console.log('Cidade correta:' + cidadeValida );
        console.log('Numero correto:' + numeroValido );
        console.log('Data correta:' + dataValida );
        console.log('Cpf correto:' + cpfValido );
        console.log( ' Tel correto:' + telValido);
        console.log('e-mail: ' + mailValido);
        console.log('Complemento:' + compValido);

        nome.value = '';
        cep.value = '';
        rua.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value ='';
        numero.value="";
        date.value = '';
        cpf.value = '';
        tel.value = '';
        mail.value = '';
        comp.value = '';
        msg.value = '';
    }else if( compValido === '' && msgValida ===''){
        console.log('Nome correto:' + nomeValido);
        console.log('Cep correto:' + cepValido);
        console.log('Rua correta:' + ruaValida);
        console.log('Bairro correto:' + bairroValido);
        console.log('Uf correta:' + ufValida);
        console.log('Cidade correta:' + cidadeValida );
        console.log('Numero correto:' + numeroValido );
        console.log('Data correta:' + dataValida );
        console.log('Cpf correto:' + cpfValido );
        console.log( ' Tel correto:' + telValido);
        console.log('e-mail: ' + mailValido);

        nome.value = '';
        cep.value = '';
        rua.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value ='';
        numero.value="";
        date.value = '';
        cpf.value = '';
        tel.value = '';
        mail.value = '';
        comp.value = '';
        msg.value = '';
    }

   

    
};

