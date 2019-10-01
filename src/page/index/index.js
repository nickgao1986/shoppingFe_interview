/**
 * Created by gaoyoujian on 2019/9/30.
 */


'use strict'

var _mm             = require('util/mm.js');

require('../module.js');
_mm.request({
    url:'./test.do',
    success:function (res) {
        console.log("res="+res);
    },
    error:function (res) {
        console.log("res="+res);
    }
})