# Padding & Margin

1. O padding é o espaçamento interno. Ele consegue expandir o tamanho do conteúdo conforme for necessário.

2. A margin é responsável pelo espaçamento externo entre elementos.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Padding & Margin</title>
</head>
<body>
    <div class="box">
        Conteúdo da Div
    </div>
    <!--
    <div class="box-2">
        Conteúdo Div-2
    </div>
    -->
</body>

</html>

----------------> Conteúdo styles.css

.box {
    width: 100px;
    height: 100px;
    background: #FF1493;
    padding: 100px;
    /*
    margin: 20px; Aplicável em todas as margens
    */
    /*    
    margin-top: 20px; Aplicável na margem superior
    margin-bottom: 30px; Aplicável na margem inferior
    margin-right: 10px; Aplicável na margem direita
    margin-left: 5px; Aplicável na margem esquerda
    */
    /*
    margin: 10px 50px 30px 5px; Aplicavel em cada margem seguindo sentido horário.
             T    D     F   E
    */

    /*
    margin: 10px 20px, 5px; Aplicável quando possue margens paralelas de mesmo valor
             T     DE    F
    */

    margin: 50px 10px; /*Aplicável quando todos as margens paralelas são de mesmo valor*/
}



/*
.box-2 {
    width: 100px;
    height: 100px;
    background: #9932CC;
    padding: 20px;
    margin: 50px;
}
*/