// 功能
export const 系统设置 = {
    按钮文本:"膀胱设置",
    设置按钮位置:[500,200],
    设置按钮大小:[200,80],

    // 子界面设置文本
    子界面标题:"膀胱设置",
}; 
export let 设置 = {
    系统设置:{...膀胱系统设置},
};

export class 类 {
    constructor(设置){
        this.参数 = 设置;
        this.上次更新时间 = Date.now();
    }

    渲染子设置按钮() {
        // 绘制主界面膀胱设置子按钮
        DrawButton( this.参数.系统设置.设置按钮位置[0],
                    this.参数.系统设置.设置按钮位置[1], 
                    this.参数.系统设置.设置按钮大小[0],
                    this.参数.系统设置.设置按钮大小[1], 
                    this.参数.系统设置.按钮文本, 
                    "White", 
                    "");
    }

    渲染子界面() {
        DrawCharacter(Player, 50, 50, 0.9); // 渲染玩家
        DrawText(this.参数.系统设置.子界面标题, 1000, 130, "Black"); //渲染标题
        // 渲染退出按钮
        DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
    }

    退出子界面() {
        Player.ExtensionSettings.SABCM.功能 = this.参数;
    }


    更新() {
        let 当前时间 = Date.now();
        if (当前时间 - this.上次更新时间 >= this.参数.更新间隔) {
            // 更新逻辑
            console.log("已更新")

            // 更新结束处理
            this.上次更新时间 = Date.now();
        }
    }

}