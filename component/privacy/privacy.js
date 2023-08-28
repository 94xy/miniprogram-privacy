// component/privacy/privacy.js
Component({
    /**
     * 组件的初始数据
     */
    data: {
        privacyContractName: '',
        showPrivacy: false
    },
    /**
     * 组件的生命周期
     */
    pageLifetimes: {
        show() {
            const _ = this
            wx.getPrivacySetting({
                success(res) {
                    if (res.needAuthorization) {
                        _.setData({
                            privacyContractName: res.privacyContractName,
                            showPrivacy: true
                        })
                    }
                }
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 打开隐私协议页面
        openPrivacyContract() {
            const _ = this
            wx.openPrivacyContract({
                fail: () => {
                    wx.showToast({
                        title: '遇到错误',
                        icon: 'error'
                    })
                }
            })
        },
        // 拒绝隐私协议
        exitMiniProgram() {
            // 直接退出小程序
            wx.exitMiniProgram()
        },
        // 同意隐私协议
        handleAgreePrivacyAuthorization() {
            const _ = this
            _.setData({
                showPrivacy: false
            })
        },
    },
})