# Pseudo Elementos


----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Pseudo Elementos</title>
</head>
<body>
    <a href="#">Clique aqui</a>
    <!--
    <input placeholder="Digite aqui">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nisi harum eius temporibus voluptatibus sunt est ex. Minima architecto facere deserunt enim, ipsam consequatur, aspernatur iusto dolore, facilis quidem doloremque!</p>
    -->
</body>
</html>

----------------> Conteúdo styles.css

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

a {
    color: blue;
}

a::before {
    content: "---->";
}  

a::after {
    content: "<----";
}


/*
input {
    border: 1 solid red;
    color: blue;
}

input::placeholder {
    color: #401294;
}

p {
    color: blue;
}

p::first-line {
    color: pink;
}

p::first-letter {
    color: red;
}
*/