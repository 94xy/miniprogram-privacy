Page({
    data: {},
    onShow() {
        const _ = this
        wx.getPrivacySetting({
            success(res) {
                if (res.needAuthorization) {
                    _.setData({
                        showPrivacy: true
                    })
                }
            }
        })
    }
})