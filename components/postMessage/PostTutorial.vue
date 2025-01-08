<template>
    <div class="sobre">

        <div class="sobre_img">
            <img src="../../public/images/skyballoon140px.png">
        </div>

        <div class="sobre_texto">
            <h2> Vamos lançar balões virtuais com mensagens de fim de ano? </h2>
            <span> Envie sua mensagem e volte nessa pagina no dia 31 de dezembro </span>
        </div>

    </div>
</template>

<style scoped>
    .sobre {
        width: 100vw;
        background-color: #cfcfcf;
        display: flex;
        padding: 8%;
        gap: 10px;
    }

    .sobre_img img {
        height: 90px;
    }

    .sobre_texto {
        font-size: 0.8rem;
    }

    @media (min-width: 768px) {
        .sobre {
            padding: 3%;
            gap: 20px;
        }

        .sobre_img img {
            height: 120px;
        }

        .sobre_texto {
            font-size: 1.2rem;
        }
    }
</style>