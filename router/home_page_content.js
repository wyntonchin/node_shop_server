
const express = require("express");
const router = express();
const config = require("./config");

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/";
const category_url = "http://" + config.IP + ":" + config.PORT + "/images/category";

//router.get("/", (req, res) => {//前端测试
router.post("/", (req, res) => {
    var data = {
        "code": 0,
        "message": "success",
        "data":{
            //banner
            "slides": [
                {
                    "image": base_url + "banner/1.jpg",
                    "goodsId": "001",
                },
                {
                    "image": base_url + "banner/2.jpg",
                    "goodsId": "002",
                },
                {
                    "image": base_url + "banner/3.jpg",
                    "goodsId": "003",
                },
                {
                    "image": base_url + "banner/4.jpg",
                    "goodsId": "004",
                },
            ],
            //
            "recommend": [
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/001/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "001",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/002/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "002",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/003/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "003",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/004/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "004",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/005/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "005",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/006/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "006",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/007/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "007",
                    "oriPrice": "210.98"
                },
                {
                    "name": "法国代购连衣裙",
                    "image": base_url + "goods/008/cover.jpg",
                    "presentPrice": 198.98,
                    "goodsId": "008",
                    "oriPrice": "210.98"
                }
            ],
            //中间广告
            "floorPic": {
                "PICTURE_ADRESS": base_url + "advert/ad01.jpg",
                "TO_PLACE": "4"
            },
            //底部推荐
            "floor1": [{
                "image": base_url + "floor/1.jpg",
                "goodsId": "001"
            },
            {
                "image": base_url + "floor/2.jpg",
                "goodsId": "002"
            }, 
            {
                "image": base_url + "floor/3.jpg",
                "goodsId": "003"
            },
            {
                "image": base_url + "floor/4.jpg",
                "goodsId": "004"
            }, 
            {
                "image": base_url + "floor/5.jpg",
                "goodsId": "005"
            },],

            
            "category": [
                {
                    "firstCategoryId": "1",
                    "firstCategoryName": "毛衣",
                    "secondCategoryV0": [{
                            "secondCategoryId": "11",
                            "firstCategoryId": "1",
                            "secondCategoryName": "羊驼",
                            "commemts": ""
                        },
                        {
                            "secondCategoryId": "12",
                            "firstCategoryId": "2",
                            "secondCategoryName": "山羊",
                            "commemts": ""
                        }],
                    "comments": null,
                    "image": category_url + "1.jpg"
                },

                {
                    "firstCategoryId": "2",
                    "firstCategoryName": "西服",
                    "secondCategoryV0": [{
                        "secondCategoryId": "21",
                        "firstCategoryId": "2",
                        "secondCategoryName": "职场",
                        "commemts": ""
                    }
                    ],
                    "comments": null,
                    "image": category_url + "2.jpg"
                },

                {
                    "firstCategoryId": "3",
                    "firstCategoryName": "裤衩",
                    "secondCategoryV0": [{
                        "secondCategoryId": "31",
                        "firstCategoryId": "3",
                        "secondCategoryName": "三角裤衩",
                        "commemts": ""
                    }
                    ],
                    "comments": null,
                    "image": category_url + "3.jpg"
                },

                {
                    "firstCategoryId": "4",
                    "firstCategoryName": "胸罩",
                    "secondCategoryV0": [{
                        "secondCategoryId": "41",
                        "firstCategoryId": "4",
                        "secondCategoryName": "透明",
                        "commemts": ""
                    }
                    ],
                    "comments": null,
                    "image": category_url + "4.jpg"
                },

                {
                    "firstCategoryId": "5",
                    "firstCategoryName": "毛衣",
                    "secondCategoryV0": [{
                        "secondCategoryId": "51",
                        "firstCategoryId": "5",
                        "secondCategoryName": "羊驼",
                        "commemts": ""
                    }
                    ],
                    "comments": null,
                    "image": category_url + "5.jpg"
                },

            ],
        }
    };
    res.send(data);
});


module.exports = router;