<template>
    <nav id="nav">
        <div class="content-wrapper">
            <ul>
                <li><router-link to="/" class="frontpage-link">Homepage</router-link></li>
                <li><router-link to="/listings" class="listings-link">Games</router-link></li>
            </ul>
        </div>
        <div class="magic-line"></div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    nav {
        position: relative;
        background: #FFFFFF;
        color: rgb(154, 154, 169);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        overflow: hidden;

        width: 100%;
        height: 60px;
        line-height: 60px;

        transition: 0.2s;
    }

    nav ul, nav ul li{
        margin: 0;
        padding: 0;
    }

    nav ul {
        list-style-type: none;
        font-size: 0;
    }

    nav ul li {
        display: inline-block;
    }

    nav ul li a {
        display: block;

        color: inherit;

        padding: 0 30px;

        font-size: 14px;
        font-weight: 600;
    }

    nav ul li a.router-link-exact-active {
        color: #8778DC;
    }

    nav .magic-line {
        display: none;
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 120px;
        background: #8778DC;

        transition: 0.2s;
    }

    /* just a sec */

    
</style>