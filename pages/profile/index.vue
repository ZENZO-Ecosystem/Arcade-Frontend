<template>
    <div id="settings" class="bootstrap-wrapper content-wrapper">
        <div class="content-header">
            <h1>Settings</h1>
        </div>
        <div class="row">
            <div class="col-md-3">
                <Sidebar />
            </div>
            <div class="col-md-9">
                <section class="panel">
                    <div class="panel-heading">
                        Account Security
                    </div>
                    <div class="panel-body">
                        asd something here ?
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Profile/Sidebar'
export default {
    name: 'Profile',
    components: {
        Sidebar
    },
    head() {
        return {
            title: 'Your Profile',
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.panel {
    padding: 0;
    background: #FFFFFF;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 3px;
}

.panel-heading {
    border-bottom: 1px solid #eeeff8;
    padding: 15px 15px;
    font-size: 1rem;
}

.panel-body {
    padding: 20px;
}

#settings .sidebar.panel {
    padding: 15px 0;
}

.sidebar ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.sidebar ul li {
    display: block;
    margin: 0;
    padding: 0;
}

.sidebar ul li a {
    display: block;
    color: inherit;
    border-left: 3px solid transparent;
    padding: 15px;
}

.sidebar ul li a:hover {
    color: #8778dc;
}

.sidebar ul li a.nuxt-link-exact-active {
    color: #8778dc;
    border-color: #8778dc;
    font-weight: 600;
}

</style>