// pages/Math/math.js
const formula = require('formula.js');
var rsltImg = "../../imgs/croc.png"
var agorithm = ['plus','sub','fix']
var agoChose = 0
Page({
  showImg: function (event) {
    console.log(event);
    var left = event.target.offsetLeft - 1;
    var top = event.target.offsetTop - 1;
    //var btnHid = 'btnHid' + event.target.id;
    var param = { imgLeft: left, imgTop: top, imgHid: 'visible' };
    //param[btnHid] = 'hidden';
    console.log(param);
    this.setData(param);
  },

  verify: function (event) {
    console.log("c:" + this.data.c + " targetID:" + event.target.id);
    if (this.data.c == event.target.id) {
      this.showImg(event);
    }
    console.log(event.target.width)
  },

  next: function (event) {
    this.reload();
  },

  reload: function () {
    var f = formula.getFormula(agorithm[agoChose]);
    console.log(agorithm[agoChose])
    var params = {
      a: f[0],
      b: f[1],
      c: f[2],
      op: f[3],
      imgLeft: 0,
      imgTop: 0,
      imgHid: 'hidden',
      rstImage: rsltImg,
    };
    this.setData(params);
  },
  /**
   * 页面的初始数据
   */
  data: {
    a: '',
    b: '',
    c: '',
    op: '',
    imgLeft: 0,
    imgTop: 0,
    imgHid: 'hidden',
    rstImage: "",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    rsltImg = JSON.parse(options.p).path;
    agoChose = options.f;
    console.log(options);
    this.reload();
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

})