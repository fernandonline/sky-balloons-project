<template>
    <div class="faq">

        <details>
            <summary> Oque devo enviar? </summary>
            <p> Você pode enviar qualquer mensagem para comemorar o fim de ano, desde que não seja ofensiva. <br>
                Evite inserir dados sensiveis como nome completo, CPF, RG, endereço, etc.
            </p>
        </details>

        <details>
            <summary> Devo inserir meu nome verdadeiro? </summary>
            <p> Depende, você pode enviar um apelido ou username. Você também pode deixar o campo vazio e será anônimo. <br>
                Se for usar seu nome, evite digitar seu nome completo.
            </p>
        </details>

        <details>
            <summary> E se enviar uma mensagem ofensiva? </summary>
            <p> As mensagens serão analisadas, e se for ofensiva serão removidas. </p>
        </details>

        <details>
            <summary> Algum dado é coletado? </summary>
            <p> Não. nenhum dado de localização, ip ou cookies são coletados, apenas a mensagem digitada será armazenada. </p>
        </details>

        <details>
            <summary> Quando e qual será o resultado? </summary>
            <p> No dia 31 de dezembro de 2024 cada mensagem se tornará um balão flutuante na tela, todos que acessarem poderão interagir e ler </p>
        </details>

        <details>
            <summary> Oque acontecerá depois?  </summary>
            <p> Depois dessa data, a pagina será simplificada usando dados estáticos e o codigo completo ficará disponivel no meu github. </p>
        </details>

    </div>
</template>

<style scoped>

    .faq {
        width: 100vw;
        padding: 8%;
        gap: 10px;
    }

    details {
        padding: 0.5em 0.5em 0;
        color: #cdcdcd;
        cursor: pointer;
    }

    summary {
        font-weight: medium;
        margin: -0.5em -0.5em 0;
        padding: 0.6em;
    }

    details[open] {
        padding: 0.5em;
    }

    details[open] summary {
        border-bottom: 1px solid #aaa;
        margin-bottom: 0.5em;
    }
</style>