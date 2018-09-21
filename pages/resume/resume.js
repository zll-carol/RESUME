//index.js
//获取应用实例
const app = getApp();
const Chart=require("../../utils/wxChart.js");

//API:音乐组件控制    
const audio = wx.createInnerAudioContext();
audio.src = "http://pcq93ptij.bkt.clouddn.com/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3";
audio.autoplay = true
audio.loop = true

Page({
  data: {
   animationData: {},
   nodes:[
     {
      name:"h2",
      attrs:{
        class:"h2",
      },
      children:[{
        type:'text',
        text:"个&nbsp;人&nbsp;简&nbsp;历"
      }]
     },
     {
      name: "p",
      attrs: {
        class: "p",
      },
      children: [{
        type: 'text',
        text: "R&nbsp;e&nbsp;s&nbsp;u&nbsp;m&nbsp;e"
      }]
     }
  ],
  name:"郑灵玲",
  sex:"女",
  nation:"汉",
  date:"1994.10",
  height:"1.63m",
  politics:"共青团员",
  education:"本科",
  profession:"工商管理（会计方向）",
  email:"1051100420@qq.com"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow:function(){
        var res = wx.getSystemInfoSync()
        console.log(res)

        const chart = new Chart({
                canvasId: "radarCanvas",
                type: "radar",
                categories: ["交际", "态度", "学习", "积极性", "团队"],
                series: [{
                        name: "综合素质能力图",
                        data: [8, 9.5, 8.5, 9.5, 9,],
                        color: "#722e5e"
                }],
                width: 320,
                height: 320,
                extra: {
                        legendTextColor: "#a55d24",
                        radar: {
                                max: 10,
                                labelColor: "#b8bcbc"
                        }
                }
        }) 
  }
})