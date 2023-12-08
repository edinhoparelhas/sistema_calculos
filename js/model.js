calcularRETANNGULO=() =>{
    base=document.getElementById("base").value
    altura=document.getElementById("altura").value
    area= base * altura
    document.getElementById("area").innerHTML=(area + "m²")
    base=document.getElementById("base").value=null
    altura=document.getElementById("altura").value=null
}

areaCirculo = () => {
    raio=document.getElementById("raio").value
    area= 3.14 * (raio**2)
    document.getElementById("valor").innerHTML=(area + " m² ")
    raio=document.getElementById("raio").value=null
}

calcularIMC= () => {
    peso= document.getElementById("peso").value
    altura= document.getElementById("altura").value
    imc= peso /(altura**2)
    abaixo_peso=("você está abaixo do peso")
    peso_ideal=("você esta com peso ideal")
    acima_peso=("você está acima do peso")
    obesidade_1=("você esta com obesidade 1")
    if (imc < 18){
    document.getElementById("resposta").innerHTML=Math.round(imc)
    document.getElementById("alerta").innerHTML= abaixo_peso
    }
    else if (imc >= 18 && imc<=25){
        document.getElementById("resposta").innerHTML=Math.round(imc)
        document.getElementById("alerta").innerHTML= peso_ideal
    }
    else if (imc > 25 && imc <40){
        document.getElementById("resposta").innerHTML=Math.round(imc)
        document.getElementById("alerta").innerHTML= acima_peso
    }
    else{
        document.getElementById("resposta").innerHTML=Math.round(imc)
        document.getElementById("alerta").innerHTML= obesidade_1
    }
    peso= document.getElementById("peso").value=null
    altura= document.getElementById("altura").value=null
}

equacao_seg_grau = ()=>{
    a=document.getElementById("a").value
    b=document.getElementById("b").value
    c=document.getElementById("c").value
    equac_nao_seg_grau=("essa equação não é de segundo grau")
    equac_nao_raiz_real=("a equação não possui raiz real")
    equac_apenas_1_raiz= ("a equação possui apenas uma raiz real")
    equac_2_raiz=("a equação possui duas raiz real")
    if (a==0){
        document.getElementById("tipo").innerHTML=equac_nao_seg_grau
    }
    else{
        delta= (b**2)-4*a*c
        if (delta<0){
            document.getElementById("tipo").innerHTML=equac_nao_raiz_real
        }
        else if (delta==0){
            document.getElementById("tipo").innerHTML=equac_apenas_1_raiz
        }
        else{
            document.getElementById("tipo").innerHTML=equac_2_raiz
        }
    }
    a=document.getElementById("a").value=null
    b=document.getElementById("b").value=null
    c=document.getElementById("c").value=null
}

MEDIAfinal=()=>{
    nota_1=document.getElementById("nota_1").value
    nota_2=document.getElementById("nota_2").value
    nota_3=document.getElementById("nota_3").value
    nota_4=document.getElementById("nota_4").value
    media_final= (Number(nota_1) + Number(nota_2)  + Number(nota_3) + Number(nota_4))/4
    final=("você está na final")
    recuperacao=("você está em recuperação")
    aprovado=("Aprovado")
    if (media_final < 45){
        document.getElementById("media").innerHTML = media_final
        document.getElementById("resposta").innerHTML = final
    }
    else if(media_final >= 45 && media_final < 60){
        document.getElementById("media").innerHTML = media_final
        document.getElementById("resposta").innerHTML = recuperacao
    }
    else{
        document.getElementById("media").innerHTML = media_final
        document.getElementById("resposta").innerHTML = aprovado
    }
    nota_1=document.getElementById("nota_1").value=null
    nota_2=document.getElementById("nota_2").value=null
    nota_3=document.getElementById("nota_3").value=null
    nota_4=document.getElementById("nota_4").value=null
}


SABERogrigatoriedadeVOTO = () => {
    idade = document.getElementById("idade").value
    nao_vota=("você não está abto a votar")
    voto_facultativo=("voto facultativo")
    voto_obrigatorio=("voto obrigatório")
    if (idade < 16){
       document.getElementById("situacao").innerHTML=nao_vota
    }
    else if (idade >= 16 && idade < 18 || idade > 75){
        document.getElementById("situacao").innerHTML=voto_facultativo
    }
    else{
        document.getElementById("situacao").innerHTML=voto_obrigatorio
    }
    idade = document.getElementById("idade").value=null
}
  
graus_fahrenheit=()=>{
    graus= document.getElementById("graus_celcius").value
    graus_fahrenheit= (graus * 9/5) + 32 
    document.getElementById("temperatura").innerHTML= graus_fahrenheit
    graus= document.getElementById("graus_celcius").value=null

}

calcularTRIANGULO = () => {
    a = document.getElementById("lado_a").value
    b = document.getElementById("lado_b").value
    c = document.getElementById("lado_c").value
    tipo_equilatero=("EQUILÁTERO")
    tipo_escaleno=("ESCALENO")
    tipo_esosceles=("ESOSCELES")
    if (a == b && a == c){
       document.getElementById("tipo").innerHTML=tipo_equilatero
    }
    else if (a != b && b!= c){
        document.getElementById("tipo").innerHTML=tipo_escaleno
    }
    else{
        document.getElementById("tipo").innerHTML=tipo_esosceles
    }
    a = document.getElementById("lado_a").value=null
    b = document.getElementById("lado_b").value=null
    c = document.getElementById("lado_c").value=null
}
  