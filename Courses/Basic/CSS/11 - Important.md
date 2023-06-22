# !important

No CSS, a declaração "!important" é usada para dar prioridade a uma regra específica e anular outras regras de estilo que possam estar afetando o mesmo elemento. 

Ela é usada para forçar uma regra a ter precedência sobre outras regras de estilo.

Quando você usa a declaração "!important" em uma propriedade CSS, ela se torna a mais importante e substitui qualquer valor definido anteriormente para a mesma propriedade. 

Isso significa que mesmo que existam regras de estilo subsequentes que tentem alterar essa propriedade, elas serão ignoradas.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>!important</title>
</head>
<body>
    <h1>Aula !important</h1>
</body>
<style>
    h1 {
        color: red !important;
        color: blue;
    }
</style>
</html>