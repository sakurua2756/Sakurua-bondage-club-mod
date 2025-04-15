// 存放工具类方法

export class 功能基类 {
    
    绘制带提示文字 (文本,x,y,偏移量,默认颜色,悬停颜色,悬停文本) {
        this.文本宽度 = document.getElementById('MainCanvas').getContext('2d').measureText(文本).width;

        // debug模式下绘制碰撞框
        if (window.SABCM.DEBUG) {
            DrawRect(
                (x*0.7) + 偏移量,
                y-25,
                this.文本宽度,
                50,
                "Blue");
        }

        // 检测鼠标是否悬停在文本上
        if (MouseIn((x*0.7) + 偏移量,y-25,this.文本宽度,50)) {
            DrawText(文本, 
                     x, 
                     y,
                     悬停颜色);
            DrawTextWrap(悬停文本,
                         1200,
                         100,
                         600,
                         800,
                         "Black",
                         "White",
                         10,
                         23,
                         "Top");
        }
        else {
            DrawText(文本, 
                     x, 
                     y,
                     默认颜色);
        }
    }
}