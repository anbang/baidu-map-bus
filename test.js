//写日志
let log4js = require('./log4/config');
let logger = log4js.getLogger('read_db');//此处使用category的值

/* var result = {
    "ad_display_type": 0,//广告显示类型
    "aladdin_res_num": 24,//阿拉丁定律
    "aladin_query_type": 0,//ALADIN查询类型
    "area_profile": 0,//面积分布
    "bd_search_enable": 1,//BD搜索启用
    "broadcast_type": 0,//广播类型
    "business_bound": "",//商家约束
    "catalogID": 0,//分类ID
    "cmd_no": 45,
    "count": 10,//计数
    "current_null": 0,
    "data_security_filt_res": 0,
    "db": 0, 
    "debug": 0,
    "jump_back": 1,
    "loc_attr": 0,
    "op_gel": 1,
    "page_num": 0,
    "pattern_sign": 0,
    "profile_uid": "2bfcb14cf5cb2cfcc23644f2",
    "qid": "3232732166738837756",
    "requery": "",
    "res_bound": "(12319232,2201940;12353378,2239561)",
    "res_bound_acc": "(0,0;0,0)",
    "res_l": 0,
    "res_x": "0.000000",
    "res_y": "0.000000",
    "result_show": 2,
    "return_query": "\u6c7d\u4fee",
    "rp_strategy": 0,
    "spec_dispnum": 0,
    "spothot": false,
    "sug_index": -1,
    "time": 0,
    "total": 24,
    "total_busline_num": 0,
    "tp": 0,
    "type": 36,
    "wd": "\u6c7d\u4fee",
    "wd2": "",
    "what": "\u6c7d\u4fee",
    "where": "",
    "uii_type": "china_main",
    "region": "0",
    "uii_qt": "poi",
    "login_debug": 0,
    "lbs_forward": {
        "param": [
            {
                "d_brand_id": "0",
                "d_query_attr_type": "0",
                "d_tag_info_list": "",
                "is_viewcity_has_result": true,
                "query_show_click_flag": 0,
                "sample_experiment": [],
                "view_city": 2758
            }
        ]
    },
    "auth": "76HzIzDDa1zPUSH2NwwMAw9gaZ2@KBVyuxHEzEBzRxNtxjhNwzWWv1GgvPUDZYOYIZuVt1cv3uVtGccZcuVtPWv3GuVtUvhgMZSguxzBEHLNRTVtcEWe1aDYyuVt@ZPuxtdw8E62qvy7un1aDegvcguxHEzEBzRxNtuyWWJ0IrZZWuV"
}
 */

 var res ={"content":[{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u65b0\u98ce\u8def59\u53f7","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][\u65b0\u98ce\u8def()|ROAD|1|59\u53f7$]","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1232869539,"diPointY":221596188,"di_tag":"\u6c7d\u8f66\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"78","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"3844061415444762063","update_time":"1535540475.5728"}},"src_name":"display_info","uids":["3844061415444762063:redu","3844061415444762063"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"512","geo":"1|12328695.39,2215961.88;12328695.39,2215961.88|12328695.39,2215961.88;","geo_type":2,"name":"\u6587\u5e84\u6c7d\u4fee\u5382","navi_update_time":1542240237,"navi_x":"0","navi_y":"0","new_catalog_id":"040000","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"3844061415444762063","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","ty":2,"uid":"85014b2ffed7d07c4f6d4665","view_type":0,"x":1232869539,"y":221596188},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u6587\u57ce\u9547\u5751\u7f8e\u6751\u8fce\u5bbe\u8def(\u4e2d\u56fd\u77f3\u6cb9\u52a0\u6cb9\u7ad9\u659c\u5bf9\u9762)","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|]\u6587\u57ce\u9547\u5751\u7f8e\u6751[\u8fce\u5bbe\u8def()|ROAD|1|](\u4e2d\u56fd\u77f3\u6cb9\u52a0\u6cb9\u7ad9\u659c\u5bf9\u9762)","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1232714959,"diPointY":221520398,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"9","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"14454760573966955556","update_time":"1539796339.4424"}},"src_name":"display_info","uids":["14454760573966955556:redu","14454760573966955556"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"1024","geo":"1|12327149.59,2215203.98;12327149.59,2215203.98|12327149.59,2215203.98;","geo_type":2,"name":"\u65b0\u946b\u6e90\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1540083348,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"14454760573966955556","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","ty":2,"uid":"74d185d8e2bb91404107c198","view_type":0,"x":1232714959,"y":221520398},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u6587\u6e05\u5927\u905326","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][\u6587\u6e05\u5927\u9053()|ROAD|1|26$]","alias":["\u4e2d\u5927\u6c7d\u8f66\u4fee\u5382"],"area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":204,"cla":[[21,"\u6c7d\u8f66\u670d\u52a1"],[204,"4s\/\u6c7d\u8f66\u9500\u552e"]],"click_flag":0,"detail":1,"diPointX":1233050102,"diPointY":221009788,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1 \u8f66\u8f86\u7ef4\u4fee","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":null,"impression_tag":{"hotel":"","life":""},"redu":"32","source_map":[],"src_name":"display_info","uids":["17821540742586171391:redu"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"256","geo":"1|12330501.02,2210097.88;12330501.02,2210097.88|12330501.02,2210097.88;","geo_type":2,"name":"\u4e2d\u5927\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1542242673,"navi_x":"12330522.62","navi_y":"2210124.2","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"17821540742586171391","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","tel":"13307630599","ty":2,"uid":"be54cde9bce4405b79f796bf","view_type":0,"x":1233050102,"y":221009788},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02S316","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][S316()|ROAD|1|]","alias":["\u5085\u8bb0\u6c7d\u8f66\u7ef4\u4fee\u5382"],"area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1235053262,"diPointY":221880998,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"44","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"7312909414334575556","update_time":"1538207408.8851"}},"src_name":"display_info","uids":["7312909414334575556:redu","7312909414334575556"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"1024","geo":"1|12350532.62,2218809.98;12350532.62,2218809.98|12350532.62,2218809.98;","geo_type":2,"name":"\u5085\u8bb0\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1541808930,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"7312909414334575556","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","ty":2,"uid":"6b019b000c3c705e475726a0","view_type":0,"x":1235053262,"y":221880998},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6d77\u53e3\u5e02\u4e1c\u8def\u9547\u743c\u86df\u8857\u6587\u660c\u7ea6\u4ead\u5c0f\u5b66\u897f\u5357150\u7c73","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|0|][X195()|ROAD|0|]\u4e1c\u8def\u9547\u743c\u86df\u8857\u6587\u660c\u7ea6\u4ead\u5c0f\u5b66\u897f\u5357150\u7c73","alias":["\u8fdc\u5927\u8fdb\u53e3\u6c7d\u8f66\u7ef4\u4fee\u5382"],"area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":204,"cla":[[21,"\u6c7d\u8f66\u670d\u52a1"],[204,"4s\/\u6c7d\u8f66\u9500\u552e"]],"click_flag":0,"detail":1,"diPointX":1232207809,"diPointY":223522100,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1 \u8f66\u8f86\u7ef4\u4fee","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"26","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"7484818473119670869","update_time":"1539918157.9297"}},"src_name":"display_info","uids":["7484818473119670869:redu","7484818473119670869","12202323174794123495","7484818473119670869:proc"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"512","geo":"1|12322078.09,2235221.00;12322078.09,2235221.00|12322078.09,2235221.00;","geo_type":2,"name":"\u8fdc\u5927\u8fdb\u53e3\u56fd\u4ea7\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1542387947,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"7484818473119670869","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","tel":"13876701006","ty":2,"uid":"4ff69ea63e2358b60782c2e2","view_type":0,"x":1232207809,"y":223522100},{"acc_flag":0,"addr":"\u6587\u6e05\u5927\u9053325","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|0|][\u6587\u660c\u5e02(469005)|CITY|0|][\u6587\u6e05\u5927\u9053()|ROAD|1|325$]","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":205,"cla":[[21,"\u6c7d\u8f66\u670d\u52a1"],[205,"\u6c7d\u8f66\u7ef4\u4fee\/\u517b\u62a4\/\u6d17\u8f66"]],"click_flag":0,"detail":1,"diPointX":1233447810,"diPointY":220628124,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1 \u8f66\u8f86\u7ef4\u4fee","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"46","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"3640491158195236182","update_time":"1539591281.5312"}},"src_name":"display_info","uids":["3640491158195236182:redu","3640491158195236182"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"512","geo":"1|12334478.10,2206281.24;12334478.10,2206281.24|12334478.10,2206281.24;","geo_type":2,"indoor_pano":"","ismodified":1,"name":"\u4e09\u9f0e\u6c7d\u4fee\u5382","navi_update_time":1542145749,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","pano":1,"poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"3640491158195236182","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","street_id":"9eae253c33b66e564354d786","tag":"","tel":"(0898)63330922","ty":2,"uid":"9eae253c33b66e564354d786","view_type":0,"x":1233447810,"y":220628124},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u6587\u57ce\u9547\u60e0\u6c11\u5c0f\u533a\u659c\u5bf9\u9762","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|]\u6587\u57ce\u9547\u60e0\u6c11\u5c0f\u533a\u659c\u5bf9\u9762","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1233115881,"diPointY":221298088,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"55","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"16409581485061770456","update_time":"1533661714.9768"}},"src_name":"display_info","uids":["16409581485061770456:redu","16409581485061770456"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"1024","geo":"1|12331158.81,2212980.88;12331158.81,2212980.88|12331158.81,2212980.88;","geo_type":2,"name":"\u7ea2\u5c9b\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1542161773,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"16409581485061770456","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","tel":"(0898)63217787","ty":2,"uid":"52fdd1dbe06993444f3a59ac","view_type":0,"x":1233115881,"y":221298088},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u65b0\u98ce\u8def","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][\u65b0\u98ce\u8def()|ROAD|1|]","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1232854797,"diPointY":221605231,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"17","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"1867749032938547776","update_time":"1539905856.2486"}},"src_name":"display_info","uids":["1867749032938547776:redu","1867749032938547776","8799565004615740454"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"512","geo":"1|12328547.97,2216052.31;12328547.97,2216052.31|12328547.97,2216052.31;","geo_type":2,"name":"\u6587\u660c\u4e07\u901a\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1540945840,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"1867749032938547776","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","ty":2,"uid":"a7434d4ef9874924fb2d618c","view_type":0,"x":1232854797,"y":221605231},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u6587\u6e05\u5927\u9053157","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][\u6587\u6e05\u5927\u9053()|ROAD|1|157$]","area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1233158549,"diPointY":220780322,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":null,"impression_tag":{"hotel":"","life":""},"redu":"1","source_map":[],"src_name":"display_info","uids":["6987621901355943019:redu"]}},"ext_type":4,"f_flag":1,"father_son":0,"flag_type":"1024","geo":"1|12331585.49,2207803.22;12331585.49,2207803.22|12331585.49,2207803.22;","geo_type":2,"name":"\u5b8f\u6cf0\u6c7d\u4fee","navi_update_time":1541205252,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"6987621901355943019","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","ty":2,"uid":"3793c4041d2d727c4afd3f80","view_type":0,"x":1233158549,"y":220780322},{"acc_flag":0,"addr":"\u6d77\u5357\u7701\u6587\u660c\u5e02\u5e86\u9f84\u8def\u78a7\u6c34\u5357\u6e7e\u5bf9\u9762","address_norm":"[\u6d77\u5357\u7701(460000)|PROV|1|][\u6587\u660c\u5e02(469005)|CITY|1|][\u5e86\u9f84\u8def()|ROAD|1|]\u78a7\u6c34\u5357\u6e7e\u5bf9\u9762","alias":["\u6052\u5bcc\u6c7d\u8f66\u4fee\u7406\u5382"],"area":2758,"area_name":"\u6587\u660c\u5e02","biz_type":0,"brand_id":null,"catalogID":0,"cla":[],"click_flag":0,"detail":1,"diPointX":1233136097,"diPointY":221514677,"di_tag":"\u6c7d\u8f66\u670d\u52a1 \u6c7d\u8f66\u7ef4\u4fee \u751f\u6d3b\u670d\u52a1","dis":-1,"dist2route":0,"dist2start":0,"ext_display":{"display_info":{"catalog_fields":[],"impression_tag":{"hotel":"","life":""},"redu":"1","source_map":{"catalog":{"field_name":"poi_bank","priority":"0","uid":"3178483339110741766","update_time":"1539589483.1078"}},"src_name":"display_info","uids":["3178483339110741766:redu","3178483339110741766","1871851338062155449"]}},"ext_type":4,"f_flag":17,"father_son":0,"flag_type":"512","geo":"1|12331360.97,2215146.77;12331360.97,2215146.77|12331360.97,2215146.77;","geo_type":2,"name":"\u6587\u660c\u6052\u5bcc\u6c7d\u8f66\u4fee\u7406\u5382","navi_update_time":1542118308,"navi_x":"0","navi_y":"0","new_catalog_id":"040500","poiType":0,"poi_click_num":0,"poi_profile":0,"primary_uid":"3178483339110741766","prio_flag":32,"route_flag":0,"show_tag":[],"status":1,"std_tag":"\u6c7d\u8f66\u670d\u52a1;\u6c7d\u8f66\u7ef4\u4fee","std_tag_id":"2103","storage_src":"api","tag":"","tel":"13617544222","ty":2,"uid":"9f1fbb9ff7a0826dfe0eb040","view_type":0,"x":1233136097,"y":221514677}],"result":{"ad_display_type":0,"aladdin_res_num":24,"aladin_query_type":0,"area_profile":0,"bd_search_enable":1,"broadcast_type":0,"business_bound":"","catalogID":0,"cmd_no":45,"count":10,"current_null":0,"data_security_filt_res":0,"db":0,"debug":0,"jump_back":1,"loc_attr":0,"op_gel":1,"page_num":0,"pattern_sign":0,"profile_uid":"2bfcb14cf5cb2cfcc23644f2","qid":"5603871791272774220","requery":"","res_bound":"(12319232,2201940;12353378,2239561)","res_bound_acc":"(0,0;0,0)","res_l":0,"res_x":"0.000000","res_y":"0.000000","result_show":2,"return_query":"\u6c7d\u4fee","rp_strategy":0,"spec_dispnum":0,"spothot":false,"sug_index":-1,"time":0,"total":24,"total_busline_num":0,"tp":0,"type":36,"wd":"\u6c7d\u4fee","wd2":"","what":"\u6c7d\u4fee","where":"","uii_type":"china_main","region":"0","uii_qt":"poi","login_debug":0,"lbs_forward":{"param":[{"d_brand_id":"0","d_query_attr_type":"0","d_tag_info_list":"","is_viewcity_has_result":true,"query_show_click_flag":0,"sample_experiment":[],"view_city":2758}]},"auth":"3IU@E2ESUFX=gv3Sd31F78QAM41=aecFuxHEzEBBzRVtBnlQADZZz1GgvPUDZYOYIZuVt1cv3uVtGccZcuVtPWv3GuVtUvhgMZSguxzBEHLNRTVtlEeLZNz1VD=CUbB9AYyuVt@ZPuxtfv7uegvcguxHEzEBBzRVteh33uVtrZZWuV"}}

function toChiese(str){
    console.log(str);
    if(str){
        return unescape(str.replace(/\u/g, "%u"));
    }else{
        return "---";
    }
}

var resultObj = res;
var resultContent=resultObj.content;
var resultResult=resultObj.result;
var tempSubAry=[],
    tempSubObj={};

//写result
// resultResult.return_query = toChiese(resultResult.return_query);
// resultResult.wd = toChiese(resultResult.wd);
// resultResult.what = toChiese(resultResult.what);

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
logger.info(tempSubAry);