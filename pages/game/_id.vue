<template>
    <div id="games">
        <div ref="gameContainer" class="game-content">
            <div class="bootstrap-wrapper content-wrapper">
                <div class="content-header">
                    
                </div>
                <div class="row">
                    <div class="col-md-2 product-image">
                        <!-- Image -->
                        <div class="image-container">
                            <img ref="productImage" id="productImage" v-bind:src="game.image" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <!-- Content -->
                        <div class="upper-title">
                            <span class="shadow-text">Platform:</span>&nbsp; <span class="platform">Steam</span>
                        </div>
                        <h1>{{ game.name }}</h1>
                        <h3 class="product-sub-title">Description</h3>
                        <p>{{ game.description }}</p>
                    </div>
                    <div class="col-md-3 checkout-block">
                        <!-- Checkout -->
                        <div class="form-group" style="display: none;">
                            <div class="profile-block">
                                <div class="user-image">
                                    <img src="/static/DevaleTwitter.png" />
                                </div>
                                <div class="user-details">
                                    <a href="#" class="username">Ale</a>
                                    <span class="text-shadow">23 Successful Trades</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group price-group">
                            <label class="shadow-text">Price</label>
                            <span class="price">
                                ${{ game.price }}
                            </span>
                            <h2 class="original-price shadow-text"><strike>$29,99</strike>&nbsp; <span class="discount-percentage">70% Off</span></h2>
                        </div>
                        <div class="separator"></div>
                        <div class="form-group">
                            <label class="currency-label">Select Currency</label>
                            <ul class="payment-select">
                                <li><div class="select zenzo select-active"><img src="~/static/images/currencies/zenzo.png" />&nbsp; ZNZ</div></li>
                                <li><div class="select pivx"><img src="~/static/images/currencies/pivx.png" />&nbsp; PIVX</div></li>
                                <li><div class="select btc"><img src="~/static/images/currencies/bitcoin.png" />&nbsp; BTC</div></li>
                            </ul>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-block btn-primary"><span class="btn-text">Checkout</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
            <div class="content-header">
                <div class="content-wrapper">
                    <h1>Offers: 0</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/services/API'
export default {
    name: 'Game',
    created() {
        // Load all the games from the API
        API.get("/game/" + this.id).then((response) => {
            this.game = JSON.parse(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log("games could not be loaded")
        })

        
    },
    data() {
        return {
            id: this.$route.params.id,
            game: null
        }
    }
}
</script>