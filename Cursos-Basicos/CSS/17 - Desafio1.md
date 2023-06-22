--------------> index.html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    <header>
        <a href="#" class="link-header">Home</a>
        <a href="#" class="link-header">About</a>
        <a href="#" class="link-header">Product</a>
        <a href="#" class="link-header">Service</a>
        <a href="#" class="link-header">Contact</a>
        <button class="button-header">Login</button>
    </header>
    <main>
        <img src="./img/gatinho.jpeg" alt="gatinho-fofo" class="iamgem-central">
        <section>
            <h1>Leão Feroz</h1>
            <h2>Caminhos do Felino Brabo</h2>
            <p>Lorem ipsum dolor sit, amet conasdasdasectetur adipisicing elit. Deleniti recuseulpa cupiditate reprehenderit.</p>
            <button class="button-main">Explore</button>  
        </section>     
    </main> 
</body>
</html>

-------------> styles.css

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

* {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box  ;
}

header {
    margin: 44px 0px 144px 76px;
}

h1 {
    font-weight: 900;
    font-size: 100px;
    line-height: 122px;
    color: #515151;
}

h2 {
    font-weight: 500;
    font-size: 58px;
    line-height: 71px;
}

p {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #848484;
    width: 515px;
    margin-top: 32px;
    margin-bottom: 65px;
}

.link-header {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #989D9C;
    cursor: pointer;
    margin-right: 23px;
    text-decoration: none;
}

.button-header {
    background: #665AE1;
    border-radius: 20.5px;
    width: 130px;
    height: 41px;
    border: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    cursor: pointer;
}

img {
    width: 568px;
    height: 500px;
    margin-left: 125px;
    display: inline-block;
}

section  {
    display: inline-block;
    margin-left: 86px;
}

.button-main {
    background: #ADFF00;
    border-radius: 30px;
    width: 239px;
    height: 64px;
    border: none;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,25));
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}

@media screen and (max-width: 900px) {
    
    header {
        margin: 20px 0px;
    }

    a {
        display: flex;
        justify-content: center;
    }

    .button-header {
        margin: auto;
        display: block;
    }

    h1 {
        text-align: center;
        font-size: 40px;
    }
    h2 {
        text-align: center;
        font-size: 40px;
    }

    img {
        width: 80%;
        height: 80%;
        margin: auto;

        display: flex;
  justify-content: center;
  align-items: center;
    }

    
}