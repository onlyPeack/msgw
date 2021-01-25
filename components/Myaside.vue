<template>
    <aside>
<!--        <img src="../image/index/QQ-default.png" alt="">-->
        <img src="image/index/QQ-default.png" alt="" class="PCQQ">
        <a target="_blank" href="https://wpa.qq.com/msgrd?v=3&uin=3376893959&site=qq&menu=yes">
<!--            <img src="../image/index/QQ-result.png" alt="" class="QQ_show">-->
            <img src="image/index/QQ-result.png" alt="" class="QQ_show PCQQ">
<!--            <img src="../image/index/咨询@2x.png" alt="" class="QQ_show PhoneQQ">-->
            <img src="image/index/咨询@2x.png" alt="" class="QQ_show PhoneQQ">
        </a>
    </aside>
</template>

<script>
    module.exports= {

    }
</script>

<style>
    aside{
        width: 54px;
        height: 91px;
        position: fixed;
        right: -2px;
        top: 370px;
        z-index: 999;
    }
    aside img{
        cursor: pointer;
    }
    aside .QQ_show{
        opacity: 0;
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
    }
    aside:hover .QQ_show{
        opacity: 1;
    }
    .PCQQ{
        display: block;
    }
    .PhoneQQ{
        display: none;
    }
    @media screen and (max-width: 768px) {

        .PCQQ{
            display: none;
        }
        aside{
            top: 80vh;
        }
        aside .PhoneQQ{
            display: block;
            opacity: 1;
            width: 16vw;
            right: 4vw;
            bottom: 4vw;
        }
    }
</style>
