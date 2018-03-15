import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        name:"vuetest",//title名称
        goodsApi:{
            minPrice : "199",//最低起送金额
            deliveryPrice : "39",//配送费
            goods:[//数据，真正的项目中，数据应该从后台获取
                {
                "colorNum": 0,
                "id": 1097011,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/fea36ef2514c904f4f45f1975f37f289.png",//图片
                "name": "原素系列1.8米实木床",
                "newItemFlag": false,
                "pieceNum": 0,//件数
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 3899,
                "primarySkuPreSellStatus": 1,
                "retailPrice": 99,//单价
                "sellVolume": 101,
                "simpleDesc": "【预售】预计12月30日开始发货",//描述
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 0,
                "id": 1097005,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/e5fd0724a05387615738173fb8f1570d.png",
                "name": "原素系列实木餐椅（两把）",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 1199,
                "primarySkuPreSellStatus": 1,
                "retailPrice": 29,
                "sellVolume": 448,
                "simpleDesc": "【预售】预计12月30日开始发货",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 2,
                "id": 1084001,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/07f682d405c1d2ed343c210ac8f8862a.png",
                "name": "纯棉简欧条纹针织盖毯",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 24,
                "sellVolume": 481,
                "simpleDesc": "纯棉针织，柔软亲肤",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 2,
                "id": 1068012,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/9e1eb31c36e6056c3282ab34613ae17f.png",
                "name": "全棉色织绗缝四件套",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 59,
                "sellVolume": 189,
                "simpleDesc": "可以用一“被”子的四件套",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 3,
                "id": 1055024,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/448690d192746b999e87a54505ce30f0.png",
                "name": "60S醇净暖绒AB面四件套",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 31,
                "sellVolume": 1136,
                "simpleDesc": "全棉缎纹磨毛，温暖你的冬季被窝",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 0,
                "id": 1006014,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/2b537159f0f789034bf8c4b339c43750.png",
                "name": "双宫茧桑蚕丝被 子母被",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 19,
                "sellVolume": 1487,
                "simpleDesc": "子母被设计，四季皆可使用",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 4,
                "id": 1009024,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png",
                "name": "日式和风懒人沙发",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 24,
                "sellVolume": 3652,
                "simpleDesc": "优质莱卡纯棉，和风家居新体验",
                "status": 2,
                "unitPrice": 0
                },
                {
                "colorNum": 4,
                "id": 1057036,
                "limitedFlag": false,
                "listPicUrl": "http://yanxuan.nosdn.127.net/8a9ee5ba08929cc9e40b973607d2f633.png",
                "name": "日式纯色水洗亚麻抱枕",
                "newItemFlag": false,
                "pieceNum": 0,
                "pieceUnitDesc": "件",
                "primarySkuPreSellPrice": 0,
                "primarySkuPreSellStatus": 0,
                "retailPrice": 21,
                "sellVolume": 689,
                "simpleDesc": "水洗亚麻，透气亲肤",
                "status": 2,
                "unitPrice": 0
                }
        ]
        }
    },
    
    getters: {//getter 接受 state 作为其第一个参数，也可以接受第二个参数
    
        tatolPrice(state){//总金额，通过计算属性得到
            let tatolP = 0;
            state.goodsApi.goods.forEach((val,index) => {
                tatolP+= val.pieceNum * val.retailPrice;
            });

            if(tatolP>0){
                tatolP = parseFloat(tatolP) + parseInt(state.goodsApi.deliveryPrice)
            }else{
                tatolP = 0;
            }

            return tatolP.toFixed(2);
        },
        
        tatolNum(state){//总件数，通过计算属性得到
            let tatolN = 0;
            state.goodsApi.goods.forEach((val,index) => {
                tatolN += val.pieceNum;
            })
            return tatolN;
        }
    },
    
    mutations: {
    
        goodsReduce(state,index){//减少件数方法
            if(state.goodsApi.goods[index].pieceNum > 0){
                state.goodsApi.goods[index].pieceNum-=1;
            }
        },
        goodsAdd(state,index){//增加件数方法
            state.goodsApi.goods[index].pieceNum+=1;
        }
    },
    actions: {

    }
})

//作者：newArray
//链接：https://www.jianshu.com/p/c36792b38510
//來源：简书
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。