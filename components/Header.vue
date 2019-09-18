<template>
    <div class="top-header">
        <div class="content-wrapper">
            <nuxt-link to="/" class="logo">
                <img src="~/static/logo.svg" />
            </nuxt-link>
            <div class="user-navigation">
                <div class="user-dropdown" v-bind:class="{ active: userDropdownActive }">
                    <button ref="userAnchor" class="user-dropdown-anchor" @click="userDropdown">
                        <!--<span>My Account</span>-->
                        <img src="/static/DevaleTwitter.png" alt="Avatar" class="user-image" /> &nbsp;
                        <fa :icon="['fas', 'chevron-down']" />
                    </button>
                    <div class="user-dropdown-content">
                        <ul class="user-dropdown-menu">
                            <li><router-link to="/profile"><fa :icon="['fas', 'address-card']" />&nbsp; Profile</router-link></li>
                            <li><router-link to="/dashboard"><fa :icon="['fas', 'chart-pie']" />&nbsp; Dashboard</router-link></li>
                            <li><a href="#"><fa :icon="['fas', 'sign-out-alt']" />&nbsp; Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            userDropdownActive: false
        }
    },
    methods: {
        userDropdown: function() {
            this.userDropdownActive = !this.userDropdownActive
        }
    },
    mounted() {

        const _ = this

        // Detect all clicks on the document, close the user dropdown if clicked anywhere else on the page except the drop down
        window.onclick = function(event) {
            if (!event.target.closest('.user-dropdown') && !event.target.closest('.user-dropdown-content')) {
                _.userDropdownActive = false;
            }
        }
    }
}
</script>