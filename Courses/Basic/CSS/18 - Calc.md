# Calc

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Calc</title>
</head>
<body>
    <div class="container">
        Div Ex
    </div>
</body>
</html>

----------------> Conteúdo styles.css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    height: calc(100vh - 200px);
    width: calc((50vw + 200px) / 2);
    background: red;
}