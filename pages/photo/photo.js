// pages/photo/photo.js
Page({

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {
    nodes: [
      {
        name: "h3",
        attrs: {
          class: "h3",
        },
        children: [{
          type: 'text',
          text: "【按下快门就是回忆】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "时&nbsp;光&nbsp;是&nbsp;留&nbsp;不&nbsp;住&nbsp;的，&nbsp;唯&nbsp;独&nbsp;可&nbsp;以&nbsp;留&nbsp;下&nbsp;时&nbsp;光&nbsp;里&nbsp;的&nbsp;画&nbsp;面"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "下&nbsp;面&nbsp;是&nbsp;部&nbsp;分&nbsp;摄&nbsp;影&nbsp;中&nbsp;前&nbsp;期&nbsp;作&nbsp;品&nbsp;:"
        }]
      }
    ],
    imgUrls: [
      "http://pcq93ptij.bkt.clouddn.com/1.jpg",
      "http://pcq93ptij.bkt.clouddn.com/2.jpg",
      "http://pcq93ptij.bkt.clouddn.com/3.jpg",
      "http://pcq93ptij.bkt.clouddn.com/4.jpg",
      "http://pcq93ptij.bkt.clouddn.com/5.JPG",
      "http://pcq93ptij.bkt.clouddn.com/6.JPG",
      "http://pcq93ptij.bkt.clouddn.com/7.JPG",
      "http://pcq93ptij.bkt.clouddn.com/8.JPG",
      "http://pcq93ptij.bkt.clouddn.com/9.JPG"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
