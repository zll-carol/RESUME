// pages/exp/experience.js
Page({

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
          text: "【经验都是私有财产】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "走&nbsp;过&nbsp;的&nbsp;弯&nbsp;路&nbsp;叫&nbsp;教&nbsp;训&nbsp;，&nbsp;而&nbsp;这&nbsp;一&nbsp;路&nbsp;走&nbsp;来&nbsp;就&nbsp;叫&nbsp;经&nbsp;验&nbsp;。"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "没&nbsp;有&nbsp;谁&nbsp;可&nbsp;以&nbsp;帮&nbsp;谁&nbsp;积&nbsp;攒&nbsp;经&nbsp;验&nbsp;，&nbsp;无&nbsp;论&nbsp;是&nbsp;何&nbsp;种&nbsp;经&nbsp;验&nbsp;，&nbsp;都&nbsp;是&nbsp;自&nbsp;己&nbsp;一&nbsp;步&nbsp;一&nbsp;个&nbsp;脚&nbsp;印&nbsp;亲&nbsp;自&nbsp;体&nbsp;验&nbsp;而&nbsp;来&nbsp;的&nbsp;。"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "so，经验的确很重要，但并非没有经验的人就应该被远离机会，我觉得应该是努力创造机会让自己拥有更多这样的私有财产。"
        }]
      }
    ]
  },

  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '13876237047'
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