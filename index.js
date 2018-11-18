const request = require('superagent');
const userAgents = require('./user-agent');
var city = require("./city-code.js");

//写日志
let log4js = require('./log4/config');
let logger = log4js.getLogger('write_db');//此处使用category的值

var url = 'http://map.baidu.com/';
var key_word = '汽修';
var currentCity, citycode, pageno;
var resultObj,
    resultContent,
    resultResult;
var tempSubAry=[],
    tempSubObj={};
var cityNum = 0;
var timer = null;

  function toChiese(str){
      console.log(str);
      if(str){
          return unescape(str.replace(/\u/g, "%u"));
      }else{
          return "---";
      }
  }
pageno = 0;

function doRequest() {
  let userAgent = userAgents[parseInt(Math.random() * userAgents.length)];
  currentCity = city[cityNum];
  citycode = currentCity[0];

  var parameter = {
    "newmap": "1",
    "reqflag": "pcmap",
    "biz": "1",
    "from": "webmap",
    "da_par": "direct",
    "pcevaname": "pc4.1",
    "qt": "spot",          //con | spot
    "c": citycode,        // 城市代码 179
    "wd": key_word,       // 搜索关键词 汽修 = %E6%B1%BD%E4%BF%AE
    "wd2": "",
    "pn": pageno,         // 页数
    "nn": pageno * 10,
    "db": "0",
    "sug": "0",
    "addr": "0",
    "da_src": "pcmappg.poi.page",
    "on_gel": "1",
    "src": "7",
    "gr": "3",
    "l": "12",//15
    // "rn":"50",
    "tn": "B_NORMAL_MAP",
    //"u_loc": "12621219.536556,2630747.285024",
    "ie": "utf-8",
    //"b": "(11845157.18,3047692.2;11922085.18,3073932.2)",  //这个应该是地理位置坐标，可以忽略
    "t": Date.parse(new Date()) //时间戳自动生成，需要修改；
  }
  request.get(url)
    .query(parameter)
    .set({ 
      'User-Agent': userAgent ,
      'Content-Type':'text/html; charset=utf-8'
    })
    .timeout({ response: 5000, deadline: 60000 })
    .end(function (err, res) {
      if (err) {
        logger.info(err);
      } else {
        resultObj = JSON.parse(res.text);
        resultContent=resultObj["content"];
        resultResult=resultObj["result"];

        //写result
        // resultResult.return_query = toChiese(resultResult.return_query);
        // resultResult.wd = toChiese(resultResult.wd);
        // resultResult.what = toChiese(resultResult.what);

        //写Cont
        tempSubAry=[];
        if(resultContent){
          resultContent.forEach(item=>{
            tempSubObj={
              area_name:toChiese(item.area_name),
              name:toChiese(item.name),
              addr:toChiese(item.addr),
              tel:toChiese(item.tel),
            };
            tempSubAry.push(tempSubObj);
            tempSubObj={};
          });
        }else{
          console.log(resultContent)
        }

        logger.info(tempSubAry);
        console.log(tempSubAry.length);

        //删除已经爬取完毕的城市
        pageno++;
        var max =8,
            min=3;
        var ROM= Math.ceil(Math.random()*(max-min)+min);
        if(tempSubAry.length==10){
          console.log("还有数据");
          timer = setTimeout(function(){
            doRequest();
          },1000*ROM)
        }else{
          console.log("没有数据了！");
          logger.info("没有数据了！");
          logger.info(`============ End ${city[cityNum][1]} ============`);
          pageno=0;
          cityNum++;
          if(cityNum<(city.length)){
            timer = setTimeout(function(){
              logger.info(`============ Start ${city[cityNum][1]} ============`);
              doRequest();
            },1000*ROM)
          }
        }

      }
    })
}
logger.info(`============ Start ${city[cityNum][1]} ============`);
doRequest();