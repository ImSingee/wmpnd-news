// pages/index/index.js
const types = [
  {
    id: 0,
    type: 'gn',
    name: '国内'
  },
  {
    id: 1,
    type: 'gj',
    name: '国际'
  },
  {
    id: 2,
    type: 'cj',
    name: '财经'
  },
  {
    id: 3,
    type: 'yl',
    name: '娱乐'
  },
  {
    id: 4,
    type: 'js',
    name: '军事'
  },
  {
    id: 5,
    type: 'ty',
    name: '体育'
  },
  {
    id: 6,
    type: 'other',
    name: '其他'
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types,
    typeItemId: 0,
    newsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllArticles()
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
    this.getAllArticles(() => {
      wx.stopPullDownRefresh()
    })
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
  
  },

  getAllArticles(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: types[this.data.typeItemId].type
      },
      success: res => {
        let result = res.data.result
        console.log(result)
        for(let i in result) {
          let datetime = new Date(result[i].date)
          result[i].source += '   '
          result[i].time = formatTime(datetime)
        }
        this.setData({
          newsList: result
        })
      },
      complete: () => {
        callback && callback();
      }
    })
  },
  onTapTypeChoose(source) {
    console.log(source)
    let typeItemId = source.currentTarget.dataset.id
    this.setData({
      typeItemId
    })
    this.getAllArticles()
  }
})

function formatTime(d) {
  let hour = d.getHours()
  let minute = d.getMinutes()
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  return `${hour}:${minute}`
}