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
                    <div class="panel-body table-responsive">
                        <!-- Order Number, Seller name, Item name, Total cost, Purchase date, Rate purchase?, A proper order detail page?  -->
                        <table cellpadding="0" class="table">
                            <thead>
                                <tr style="display: none;">
                                    <th width="65%">Product</th>
                                    <th width="10%" style="text-align: center;">Quantity</th>
                                    <th width="10%" style="text-align: center;">Total</th>
                                    <th width="10%"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5" class="trow">
                                        <span class="right">Status: &nbsp;<span class="badge badge-pill badge-success">Completed</span></span>
                                        Order #80102066446910 <div class="vertical-divider"></div><span class="shadow-text"> Purchased on: 9th May, 02:25 AM</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-details">
                                            <div class="product-image">
                                                <img src="/static/harrypotter.jpg" />
                                            </div>
                                            <div class="product-name">
                                                <a href="#">YuurinBee's awesome product that'll change the world!</a><br />
                                                Seller Name: Ale
                                            </div>
                                        </div>
                                    </td>
                                    <td style="text-align: center;">3<br /> <span class="shadow-text">Items</span></td>
                                    <td style="text-align: center;">€1.62<br /> <span class="shadow-text">Total Cost</span></td>
                                    <td style="text-align: center;"><button class="btn btn-small btn-primary"><span class="btn-text">Reveal Key</span></button></td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="trow">
                                        <span class="right">Status: &nbsp;<span class="badge badge-pill badge-success">Completed</span></span>
                                        Order #80102066446910 <div class="vertical-divider"></div><span class="shadow-text"> Purchased on: 9th May, 02:25 AM</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-details">
                                            <div class="product-image">
                                                <img src="/static/harrypotter.jpg" />
                                            </div>
                                            <div class="product-name">
                                                <a href="#">YuurinBee's awesome product that'll change the world!</a><br />
                                                Seller Name: Ale
                                            </div>
                                        </div>
                                    </td>
                                    <td style="text-align: center;">3<br /> <span class="shadow-text">Items</span></td>
                                    <td style="text-align: center;">€1.62<br /> <span class="shadow-text">Total Cost</span></td>
                                    <td style="text-align: center;"><button class="btn btn-small btn-primary"><span class="btn-text">Reveal Key</span></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Profile/Sidebar'
export default {
    name: 'Security',
    components: {
        Sidebar
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.panel-body {
    padding: 0;
}

.product-image {
    display: inline-block;
    vertical-align: middle;
}

.product-image img {
    height: 48px;
    width: 48px;
    border-radius: 10rem;
    -moz-border-radius: 10rem;
    -webkit-border-radius: 10rem;
}

.product-name {
    display: inline-block;
    vertical-align: middle;
    padding-left: 15px;
    font-weight: 600;
}
</style>