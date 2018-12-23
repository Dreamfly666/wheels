//  轮播图v1.1 --- 标准插件封装 ---框架
/**
  * es6 版本
  * class Carousel {
  *       static ID = {
  * }
  *     static CLASS = {
  * }
  *     constructor(selector,userOptions = {}){
  *        this.carouselOptions = {
  * }
  *     object.assign(this.carouselOptions,userOptions)
  *     i
  * }
  * isCarouselComplete(){
  * }
  * ......
  * 
  * }
  * export default Carousel
  */

// (function(root,factory){
//     if(typeof define  === 'function' && define.amd){
//         define([],factory)
//     } else if(typeof module === 'object' && module.exports){
//         module.exports = factory()
//     } else {
//         root.Carousel = factory()
//     }
// }(typeof self !== "undefined" ? self : this,function(){
// 'use strict'
// var ID = {
    
// }
// var CLASS = {

// }
// function addEvent(element,type,handler){
//     if(element.addEventListener){
//         element.addEventListener(type,handler,false)
//     } else if (element.attachEvent){
//         element.attachEvent('on' + type,handler)
//     } else {
//         element['on' + type] = handler
//     }
// }
// function  extend(o,n,override) { 
//     for(var p in n){
//         if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)){
//             o[p] = n[p]
//         }
//     }
//  }

// var Carousel = function(selector,userOptions){
//     var _this = this
//     extend(this.carouselOptions,userOptions,true)
//     // 初始化一系列元素
//     _this.carousel = document.querySelector()
//     _this.carouselWrap = document.querySelector()
//     _this.initCarousel()
//     _this.initDots()
//     _this.initArrow()
// }
// Carousel.prototype = {
//     carouselOptions:{
        
//     },
//     // 检查图片是否加载完成
//     isCarouselComplete:function(){
        
//     },
//     initCarousel:function(){
//         this.carouselCount = this.carouselWrap.children.length
//         this.setCarousel()
//         this.carouselIndex = 1
//         this.carouselInterval = null
//         this.carouselAnimateSpeed = this.carouselWidth/()
//         this.isCarouselAnimate = false
//         this.isDotClick = false
//         this.bindCarousel()
//         this.playCarousel()   
//     }, 
//     setCarousel:function(){

//     },
//     initArrows:function(){
//         this.bindArrows()
//     },
//     getArrows:function(){
        
//     },
//     initDots:function(){
//         // 设置圆点位置
//         this.setDots()
//         // 绑定圆点事件
//         this.bindDots()
//     },
//     getDots:function(){
        
//     },
//     bindDots:function(){
        
//     },
//     moveDots:function(){
//         this.changeCarousel()
//         this.setDots()
//     },
//     changeCarousel:function(){
        
//     },
//     setDot:function(){
        
//     },
//     playCarousel:function(){
        
//     },
//     bindCarousel:function(){
        
//     },
//     bindArrows:function(){
        
//     },
//     isFirstCarousel:function(){

//     },
//     isLastCarousel:function(){

//     },
//     prevCarousel:function(){

//     },
//     nextCarousel:function(){

//     },
//     moveCarousel:function(){

//     },
//     resetCarousel:function(){

//     },
//     resetMoveDot:function(){

//     },
//     resetMoveCarousel:function(){
        
//     },
//     constructor:Carousel
// }
//     return Carousel
// }))
