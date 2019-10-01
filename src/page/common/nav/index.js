/*
 * @Author: Rosen
 * @Date:   2017-05-17 14:17:01
 * @Last Modified by:   Rosen
 * @Last Modified time: 2017-05-22 12:21:05
 */

'use strict';
require('./index.css');
var _mm     = require('util/mm.js');
var _user   = require('service/user-service.js');
// 导航
var nav = {
    init : function(){
        this.bindEvent();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
};

module.exports = nav.init();