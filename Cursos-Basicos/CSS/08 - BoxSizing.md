# Box Sizing

1. O Box Sizing facilita no controle das bordas com o box-sizing: border-box

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Box Sizing</title>
</head>
<body>
    <div class="box">
        Conteúdo da Div
    </div>
</body>

</html>

----------------> Conteúdo styles.css

* {
    box-sizing: border-box;
}

.box {
    width: 100px;
    height: 100px;
    background: #FF1493;
    padding: 20px;
    border: 10px solid #0000FF;
}