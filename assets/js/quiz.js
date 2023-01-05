var inicio=confirm('Bem-Vindo ao Quiz do COVID-19! Você tem certeza de que quer participar? Utilize apenas Sim ou Não');
    var sair = ('Obrigado por participar do Quiz!')
    if(inicio==false){alert(sair);}
    else{ window.alert('Começou o game! Clique em Ok abaixo para começar');
    //Inicio do quiz
    var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
    var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
    var t=5; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
    // LISTA DE PERGUNTAS
    p[1] = "A cloroquina é um tratamento eficaz para a COVID-19?";
    r[1] = "Não";
    p[2] = "A máscara é essencial para o combate da COVID-19?";
    r[2] = "Sim";
    p[3] = "A via de contaminação da COVID-19 é pelo contato?";
    r[3] = "Sim";
    p[4] = "O primeiro contato da Variante Ômicron foi na África do Sul?";
    r[4] = "Sim";
    p[5] = "As vacinas da COVID-19 protegem de casos graves?";
    r[5] = "Sim";
    //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
     for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
     for(var i=1;i<=5;i++)          //embaralha a sequencia 10 vezes
     {
      n=Math.round(t*(Math.random())); 
      m=Math.round(t*(Math.random()));
      if(m==0){m++;}
      if(n==0){n++;}
      var temp = o[n];
      o[n]=o[m];
      o[m]=temp;
     } 
    for(var i=1;i<=t;i++)
    {
      respostas[o[i]] = prompt(p[o[i]],"");
       if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
     }
    //fim do quiz
    document.write("<div class='container'> Quiz da COVID-19:<br><br>Suas respostas:<br><br>");
    document.write("<ol>");
    for(var i=1;i<=t;i++)
    {
    document.write("<li>"+respostas[o[i]]);}
    document.write("</ol>");
    document.write("<br>Total de acertos: "+acertos);
    document.write("<br>Total de erros: "+erros);
    document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
    document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
    for(var i=1;i<=t;i++)
     { document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
    document.write("</ol></div></div>");
   }