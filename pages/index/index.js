//index.js
//获取应用实例
const app = getApp();
var curtarg = 0;
Page({
  data: {
    //curtarg:0,
    thumbnails: [
      {
        id: 0,
        path: '../../imgs/croc.png',
        style: 'pic-pick'
      },
      {
        id: 1,
        path: '../../imgs/bird.png',
        style: 'pic-pick'
      },
      {
        id: 2,
        path: '../../imgs/chame.png',
        style: 'pic-pick'
      },
      {
        id: 3,
        path: '../../imgs/apple.png',
        style: 'pic-pick'
      },
      {
        id: 4,
        path: '../../imgs/dano.png',
        style: 'pic-pick'
      },
      {
        id: 5,
        path: '../../imgs/flower.png',
        style: 'pic-pick'
      },
      {
        id: 6,
        path: '../../imgs/ostrich.png',
        style: 'pic-pick'
      },
      {
        id: 7,
        path: '../../imgs/panda.png',
        style: 'pic-pick'
      },
      {
        id: 8,
        path: '../../imgs/tree.png',
        style: 'pic-pick'
      },
    ],
    // test part
    practise: ['十以内加法', '十以内减法', '十以内加减混合'],
    selectValue: 0,
  },
  //事件处理函数
  btnNext:function(event){
    wx.navigateTo({
      url: '../math/math?f=' + this.data.selectValue + '&p=' + JSON.stringify(this.data.thumbnails[curtarg])
    })
  },
  pickerChange: function (event) {
    this.setData({
      selectValue:event.detail.value,
    })
  },
  picPicker: function (event) {
    var index = event.currentTarget.id;
    console.log("thumbnails[" + index + "]")
    var picked = "thumbnails[" + index + "].style"
    var revert = "thumbnails[" + curtarg + "].style"
    console.log(curtarg + ":" + revert)
    curtarg = index
    this.setData({
      [revert]: "pic-pick",
      [picked]: "pic-pick pic-picked"
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'CrocMath',
    }
  }
})
