<template>
    <nav class="nav">
        <a href="./index.html">
            <!--            <img src="../image/index/logo.png" alt="logo" class="logo"></a>-->
            <img src="image/index/logo.png" alt="logo" class="logo"></a>
        <ul class="nav_list">
            <li><span><a href="./index.html">首页</a></span></li>
            <li>
                <el-dropdown :show-timeout=0>
                  <span class="el-dropdown-link">
                    产品介绍
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="./goods-erp-1.html">
                            <el-dropdown-item>云ERP</el-dropdown-item>
                        </a>
                        <a href="./goods-e-erp.html">
                            <el-dropdown-item>云电商</el-dropdown-item>
                        </a>
                        <a href="./goods-cloud-classRoom.html">
                            <el-dropdown-item>云课堂</el-dropdown-item>
                        </a>
                        <a href="./goods-wms.html">
                            <el-dropdown-item>云仓储</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li>
                <el-dropdown :show-timeout=0>
              <span class="el-dropdown-link">
                解决方案
              </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="./project-erp.html">
                            <el-dropdown-item>电商ERP一体化</el-dropdown-item>
                        </a>
                        <a href="./project-saas.html">
                            <el-dropdown-item>Saas协同云服务</el-dropdown-item>
                        </a>
                        <a href="./project-wms.html">
                            <el-dropdown-item>WMS智能仓储</el-dropdown-item>
                        </a>
                        <a href="./project-make.html">
                            <el-dropdown-item>生产制造ERP</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li>
                <el-dropdown :show-timeout=0>
              <span class="el-dropdown-link">
                行业赋能
              </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="./industry-pim.html">
                            <el-dropdown-item>工业品数据库</el-dropdown-item>
                        </a>
                        <a href="./industry-wit.html">
                            <el-dropdown-item>工享荟</el-dropdown-item>
                        </a>
                        <a href="./industry-integration.html">
                            <el-dropdown-item>工业物联集成</el-dropdown-item>
                        </a>
                        <a href="./industry-operator.html">
                            <el-dropdown-item>工业电商代运营</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li><a href="./about-us.html"><span>关于梅施</span></a></li>
                        <li style="width: 100px">
                            <button @click="goLogin" class="button">登录</button>
                        </li>
                        <li style="width: 100px;margin-left: 15px">
<!--                            <button @click="goRegister" class="button">免费试用</button>-->
                            <button style="background: #2497F7;color: white;border: 0;font-family: unset" @click="goRegister">免费试用</button>
                        </li>
        </ul>
        <i class="iconfont menuBtn" v-if="!isShow" @click="isShow=!isShow">&#xe653;</i>
        <i class="iconfont menuBtn" v-else @click="isShow=!isShow"
           style="font-size: 2em;margin-right: 5vw;">&#xe678;</i>
        <el-collapse-transition>
            <el-menu default-active="2"
                     v-if="isShow"
                     style="position: absolute;top: 15.42vw;width: 100%"
                     class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <a href="./index.html" slot="title">
                        <div>首页</div>
                    </a>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <span>产品</span>
                    </template>
                    <el-menu-item index="2-1">
                        <a href="./goods-erp-1.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>云ERP</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <a href="./goods-e-erp.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>云电商</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        <a href="./goods-cloud-classRoom.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>云课堂</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="2-4">
                        <a href="./goods-wms.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>云仓储</li>
                            </ul>
                        </a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <span>解决方案</span>
                    </template>
                    <el-menu-item index="3-1">
                        <a href="./project-erp.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>电商ERP一体化</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <a href="./project-saas.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>Saas协同云服务</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                        <a href="./project-wms.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>WMS智能仓储</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="3-4">
                        <a href="./project-make.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>生产制造ERP</li>
                            </ul>
                        </a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <span>行业赋能</span>
                    </template>
                    <el-menu-item index="4-1">
                        <a href="./industry-pim.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>工业品数据库</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="4-2">
                        <a href="./industry-wit.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>工享荟</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="4-3">
                        <a href="./industry-integration.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>工业物联集成</li>
                            </ul>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="4-4">
                        <a href="./industry-operator.html" slot="title">
                            <ul style="list-style-type:disc;">
                                <li>工业电商代运营</li>
                            </ul>
                        </a>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item index="4">
                    <a href="./about-us.html" slot="title">
                        <div>关于梅施</div>
                    </a>
                </el-menu-item>
            </el-menu>
        </el-collapse-transition>

    </nav>
</template>

<script>
    function debounce(fn, wait) {
        var timeout = null;
        return function() {
            if(timeout !== null) clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    }
    module.exports = {
        data() {
            return {
                isShow: false
            }
        },
        mounted(){
            //监听滚动条是否在最顶部,如果不是则给导航条黑色背景色
            // window.onscroll = function () {
            //
            // }
            let nav = document.getElementsByClassName("nav")[0];
            document.addEventListener('scroll',debounce (function () {
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                console.log(window.screen.height)
                if(window.screen.height < scrollTop||scrollTop===0){
                    nav.style.position='absolute'
                    nav.className='nav '
                }else{
                    nav.style.position='sticky'
                    nav.className='nav navFix'
                }
                //
                // //console.log("这是在组件里的事件")
                if (window.screen.width >= 768) {
                    nav.style.backgroundColor = scrollTop === 0 ? 'rgba(0,0,0,0)' : '#1E2327'
                }
            },1000/120))


        },
        methods:{
            goLogin(){
                window.open('http://cloud.msebc.com/#/login','_blank')
            },

            goRegister(){
                window.open('http://cloud.msebc.com/#/login?index=1','_blank')
            }
        }

    }
</script>
<style>
    @font-face {
        font-family: 'iconfont';  /* project id 914713 */
        src: url('//at.alicdn.com/t/font_914713_ee0927pqdjm.eot');
        src: url('//at.alicdn.com/t/font_914713_ee0927pqdjm.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_914713_ee0927pqdjm.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_914713_ee0927pqdjm.woff') format('woff'),
        url('//at.alicdn.com/t/font_914713_ee0927pqdjm.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_914713_ee0927pqdjm.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
<style>

    /*清除公共样式*/
    @import "../css/reset.css";

    button {
        cursor: pointer;
    }

    /*H-nav*/
    nav {
        position: absolute;
        top: 0;
        float: left;
        z-index: 666;
        width: 100%;
        height: 3.12vw;
    }
    .navFix{
        margin-bottom: -3.12vw;
    }
    nav:hover {
        background-color: #1E2327 !important;
    }

    nav .menuBtn {
        display: none;
    }

    .logo {
        margin-top: 13px;
        margin-left: 64px;
        width: 8.02vw;
    }

    .nav_list {
        color: white;
        display: inline-block;
        font-size: 0.83vw;
        font-weight: bold;
        text-align: center;
        position: absolute;
        top: 0.67vw;
        right: 3.33vw;
    }

    .nav_list li {
        float: left;
        width: 5.2vw;
        height: 1.77vw;
        margin-left: 2.08vw;
        line-height: 1.77vw;
        cursor: pointer;
        font-weight: 400;
    }

    .nav_list li a {
        color: white;
        font-weight: 400;
    }

    .nav_list li:hover span {
        color: rgba(255, 255, 255, .5);
    }

    .nav_list li:hover a {
        color: rgba(255, 255, 255, .5);
    }

    .nav_list li button, .nav_contain button {
        width: 100px;
        height: 1.77vw;
        background: rgba(0, 0, 0, 0);
        color: white;
        border-radius: 5px;
        border: 1px solid white;
    }
    .nav_list .button:hover{
        background-color: white;
        color: #2497F7;
        border-color: #2497F7;
    }
    /*H-element ui 样式*/
    .el-dropdown-link {
        cursor: pointer;
        color: white;
        font-size: 0.83vw;
    }

    .el-icon-arrow-down {
        font-size: 12px;
        line-height: 12px;
    }

    .nav_img {
        margin-left: 14px;
    }

    .el-dropdown-menu__item a {
        color: rgb(68, 68, 68);
    }


    @media screen and (max-width: 768px) {
        nav {
            background-color: black;
            height: 15.29vw;
        }
        .navFix{
            margin-bottom: -15.29vw;
        }
        nav .menuBtn {
            float: right;
            color: white;
            display: inline-block;
            font-size: 3em;
            line-height: 16.99vw;
            margin-right: 3vw;
        }

        .logo {
            width: 28.26vw;
            margin-left: 6.66vw;
            margin-top: 4.93vw;
        }

        .nav_list {
            display: none;
        }
    }

    /*E-nav*/
    /*H-header*/
    header {
        height: 697px;
        position: relative;
        background-position: center;
        overflow-x: hidden;
        width: 100%;
    }

    .header_contain {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 17.7vw;
    }

    .header_title {
        color: white;
    }

    .header_contain h1 {
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    }

    .header_contain h2 {
        color: white;
        font-weight: 400;
        font-size: 2.80vw;
        margin-top: 28px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

    }

    .header_contain button {
        width: 200px;
        height: 54px;
        margin-top: 70px;
        border: 2px solid white;
        background: rgba(0, 0, 0, 0);
        color: white;
        border-radius: 5px;
    }
    @media screen and (max-width: 768px) {
        header{
            background-size: cover;
            background-position: center;
        }
        .header_contain{
            top: 38vh;
        }
        .header_title{
            font-size: 40px;
            line-height: 65px;
            padding: 0 22px;
        }
        .header_contain h2{
            font-size: 20px;
        }
    }
    /*E-header*/
</style>
