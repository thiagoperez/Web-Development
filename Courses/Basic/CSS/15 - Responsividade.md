# Responsividade

1.  Tipos

    - all: para todos os dispositivos;

    - braille: para dispositivos táteis;
    
    - embossed: para dispositivos que imprimem em braile.
    
    - handheld: para dispositivos portáteis, geralmente com telas pequena e banda limitada;
    
    - print: para impressão em papel.
    
    - projection: para apresentações como PPS.
    
    - screen: para monitores ou dispositivos com telas coloridas e resolução adequada.
    
    - speech: para sintetizadores de voz. As CSS 2 tem uma especificação de CSS chamada Aural, onde podemos formatar a voz dos sintetizadores.

2. Orientação

    - portrait -> altura maior que a largura.
    
    - landscape -> largura maior que a altura.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Pseudo Classes</title>
</head>
<body>
    <div>
        
    </div>
</body>
</html>

----------------> Conteúdo styles.css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div {
    height: 700px;
    width: 700px;
    background: blue;
}
            /* e */                /* e */  
@media screen and (max-width: 600px) and (orientation: landscape){
    div {
        background: red;
        height: 200px;
        width: 200px;
    }
}