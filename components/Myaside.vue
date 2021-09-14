<template>
    <aside>
<!--        <img src="../image/index/QQ-default.png" alt="">-->
<!--        <img src="image/index/QQ-default.png" alt="" class="PCQQ">-->
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3368906505&site=qq&menu=yes">
<!--            <img src="../image/index/QQ-result.png" alt="" class="QQ_show">-->
<!--            <img src="image/index/QQ-result.png" alt="" class="QQ_show PCQQ">-->
            <img src="../image/index/咨询@2x.png" alt="" class="QQ_show Phone">
<!--            <img src="image/index/咨询@2x.png" alt="" class="QQ_show PhoneQQ">-->
        </a>
        <el-popover
                placement="left"
                width="150"
                class="PC"
                trigger="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/l4kg0z1vjtmjb9ucq9jj.png" alt="电话" slot="reference" class="aside-img">
            <div class="aside-message">
                <span>售前咨询电话</span>
                <h2>0521-63632706</h2>
            </div>
        </el-popover>
        <el-popover
                placement="left"
                width="150"
                class="PC"
                trigger="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/warv29otvrzi4h77ubpc.png" alt="微信" slot="reference" class="aside-img">
            <div class="aside-message">
                <span>客服微信/客服二维码</span>
                <h2>18262161770</h2>
                <img src="http://gxcl-shop.qiniu.520mro.com/adciyl0dpbnrdr7ft13f.png" alt="微信客服">
            </div>
        </el-popover>
        <el-popover
                placement="left"
                width="150"
                class="PC"
                trigger="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/9gmzx388d6a7nx1zlm1b.png" alt="QQ" slot="reference" class="aside-img">
            <div class="aside-message">
                <span>客服QQ</span>
                <h2>3368906505</h2>
            </div>
        </el-popover>
        <el-popover
                placement="left"
                width="200"
                class="PC"
                trigger="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/08lixc8f5v84gyy94qhe.png" alt="邮箱" slot="reference" class="aside-img">
            <div class="aside-message">
                <span>企业邮箱</span>
                <h2>meishicloud@163.com</h2>
            </div>
        </el-popover>
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
        right: 20px;
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
        display: none;
    }
    .aside-message h2{
        color: #3688FE;
        font-size: 16px;
        font-weight: normal;
        margin-top: 10px;
    }
    .aside-img{
        margin-bottom: 2px;
    }
    .el-popover{
        border-radius: unset!important;
        font-family: Microsoft YaHei;
    }
    @media screen and (max-width: 768px) {
        .PCQQ{
            display: none;
        }
        aside{
            top: 80vh;
            right: 8px;
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
