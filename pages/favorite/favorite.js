// pages/favorite/favorite.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [
      {
        name: "h2",
        attrs: {
          class: "h2",
        },
        children: [{
          type: 'text',
          text: "【青&nbsp;春&nbsp;不&nbsp;负&nbsp;好&nbsp;时&nbsp;光】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "初&nbsp;次&nbsp;见&nbsp;面，请&nbsp;多&nbsp;多&nbsp;指&nbsp;教&nbsp;哟！"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "下&nbsp;面&nbsp;就&nbsp;是&nbsp;我&nbsp;的&nbsp;兴&nbsp;趣&nbsp;爱&nbsp;好&nbsp;啦&nbsp;:"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p3",
        },
        children: [{
          type: 'text',
          text: "(点击图片可以有更多了解哟!)"
        }]
      }
    ],
   
  },

  navigateToProgram:function(){
    wx.navigateTo({
      url: '/pages/program/program',
    })
  },
  navigateToTravel: function () {
    wx.navigateTo({
      url: '/pages/travel/travel',
    })
  },
  navigateToDancing: function () {
    wx.navigateTo({
      url: '/pages/dancing/dancing',
    })
  },
  navigateToPhoto: function () {
    wx.navigateTo({
      url: '/pages/photo/photo',
    })
  },
  navigateToArticle: function () {
    wx.navigateTo({
      url: '/pages/article/article',
    })
  },
  navigateToDog: function () {
    wx.navigateTo({
      url: '/pages/dog/dog',
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