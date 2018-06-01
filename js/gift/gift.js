/**
 * @author 袁俊凯 2018-06-01
 * @description 增加礼物功能，每20秒出现一次，从上至下全向漂浮，hero吃了以后子弹变成双弹道并且变快，持续5秒种
 * @todo 1.礼物的横向位置也需要改变
 */ 
import Animation from '../base/animation'
import DataBus   from '../databus'

const GIFT_IMG_SRC = 'images/bullet_.png'
const GIFT_WIDTH   = 40
const GIFT_HEIGHT  = 40

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}

export default class GIFT extends Animation {
  constructor() {
    super(GIFT_IMG_SRC, GIFT_WIDTH, GIFT_HEIGHT)

  }

  init(speed) {
    this.x = rnd(0, window.innerWidth - GIFT_WIDTH)
    this.y = -this.height

    this[__.speed] = speed

    this.visible = true
  }


  // 每一帧更新礼物位置（）
  update() {
    this.y += this[__.speed]
    // this.x += rnd(-10, 10)

    // 对象回收
    if ( this.y > window.innerHeight + this.height )
      databus.removeGift(this)
  }
}

