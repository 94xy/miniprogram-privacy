// component/privacy/privacy.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        privacyContractName: '',
        showPrivacy: true,
        isRead: false
    },
    /**
     * 组件的生命周期
     */
    lifetimes: {
        ready() {
            // 在组件实例刚刚被创建时执行
            const _ = this
            wx.onNeedPrivacyAuthorization(resolve => {
                _.resolvePrivacyAuthorization = resolve
            })
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
                success: () => {
                    _.setData({
                        isRead: true
                    })
                },
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
            const {
                isRead
            } = _.data
            if (isRead) {
                _.setData({
                    showPrivacy: false
                })
                _.resolvePrivacyAuthorization({
                    buttonId: 'agree-btn',
                    event: 'agree'
                })
            } else {
                wx.showToast({
                    title: '请先阅读',
                    icon: 'error'
                })
            }
        },
    },
})