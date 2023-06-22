# Position

1. Tipos:

    - position: static (padrão) - Não aceita valores de top, bottom, right e left.

    - position: fixed - fixa o elemento na tela.

    - position: sticky - age como oum adesivo, fixa o elemento só onde eu determinar.

    - position: relative - posição relativa a posição inicial dele;

    - position: absolute - posição absoluta (fixa) a algum elemento ou a página.

            - Se não tiver pai / pai for static -> Posiciona referente a página.

            - Se o pai não for static -> Posiciona referente ao pai.

2. Propriedades:

    - top

    - bottom

    - left

    - rigth

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Position</title>
</head>
<body>
    <div class="div-pai">
        <div class="div-filho"></div>
    </div>
    <div class="div-vizinha"></div>
</body>
</html>

----------------> Conteúdo styles.css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 200vh;
    width: 200vw;
}

.div-pai {
    height: 350px;
    width: 350px;
    background-color: #FF1396;
    position: static;
    top: 50px;
    margin-top: 100px;
}

.div-filho {
    height: 150px;
    width: 150px;
    background-color: #FFFF00;
    position: absolute;
    top: 5px;
}

.div-vizinha {
    height: 150px;
    width: 450px;
    background-color: #4d4d15;
    opacity: 60%;
    position: relative;
    top: 50px;
}

/*
.div-pai {
    height: 350px;
    width: 350px;
    background-color: #FF1396;
    position: relative;
    top: 90px;
}

.div-pai {
    height: 350px;
    width: 350px;
    background-color: #FF1396;
    position: fixed;
    top: 20px;
    left: 23px;
}

.div-pai {
    height: 350px;
    width: 350px;
    background-color: #FF1396;
    position: sticky;
    top: 29px;
    left: 35px;
}
*/