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
                <form>
                    <section class="panel">
                        <div class="panel-heading">
                            Account Security
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <label>Current Password</label>
                                <input type="password" class="form-control" placeholder="Current Password" />
                            </div>
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="password" class="form-control" placeholder="New Password" />
                            </div>
                            <div class="form-group">
                                <label>Confirm New Password</label>
                                <input type="password" class="form-control" placeholder="New Password" />
                            </div>
                        </div>
                    </section>
                    <div class="form-group submit-button text-center">
                        <button type="submit" class="btn btn-primary"><span class="btn-text">Change Password</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Profile/Sidebar'
export default {
    name: 'Purchases',
    components: {
        Sidebar
    },
    data() {
        return {

        }
    }
}
</script>