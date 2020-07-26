var time = new Vue({
    el: "#time",
    data: {
        h: "9",
        m: "12",
        s: "35"
    },
    methods: {
        setClock : function(){
            var date = new Date();         // 新增日期物件:包含年月日時分秒
            this.h = date.getHours();      // 這個物件的時 = 日期.取得小時
            this.m = date.getMinutes();    // 這個物件的時 = 日期.取得分鐘
            this.s = date.getSeconds();     // 這個物件的時 = 日期.取得秒鐘
        }
    },
    //已安裝完成:指定元素內的所有元素都顯示完成會執行這裡一次
    mounted(){
        //設定間隔時間執行API setInterval
        setInterval(this.setClock, 1000);
    },
})