const to_do_list_template = [
  {
    prep_time: "6~12 個月前",
    to_do_example: "安排雙方家長會面",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "決定婚禮形式及行禮地點",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "商量聘禮及禮金數目",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "決定婚宴日期及地點",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "擇定結婚日期",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "預訂酒席",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "制定婚禮開支預算",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "美容、美髮及皮膚護理計劃",
  },
  {
    prep_time: "6~12 個月前",
    to_do_example: "新居租置或選購計劃",
  },
  {
    prep_time: "6個月前",
    to_do_example: "洽借教堂",
  },
  {
    prep_time: "6個月前",
    to_do_example: "搜集及落實攝錄攝影公司",
  },
  {
    prep_time: "6個月前",
    to_do_example: "搜集及落實婚紗店,裙褂店",
  },
  {
    prep_time: "6個月前",
    to_do_example: "搜集及落實場地佈置公司",
  },
  {
    prep_time: "6個月前",
    to_do_example: "搜集及落實化妝師店",
  },
  {
    prep_time: "6個月前",
    to_do_example: "拍攝婚紗照",
  },
  {
    prep_time: "3個月前",
    to_do_example: "設計及印製喜帖",
  },
  {
    prep_time: "3個月前",
    to_do_example: "排期註冊",
  },
  {
    prep_time: "3個月前",
    to_do_example: "辦理擬結婚通知書",
  },
  {
    prep_time: "3個月前",
    to_do_example: "列出婚禮及婚宴邀客名單",
  },
  {
    prep_time: "3個月前",
    to_do_example: "訂造結婚戒指",
  },
  {
    prep_time: "3個月前",
    to_do_example: "訂造或預租晚裝",
  },
  {
    prep_time: "3個月前",
    to_do_example: "選新郎禮服，預租裙褂",
  },
  {
    prep_time: "3個月前",
    to_do_example: "替雙方家長訂造禮服",
  },
  {
    prep_time: "3個月前",
    to_do_example: "婚前檢查",
  },
  {
    prep_time: "3個月前",
    to_do_example: "計劃蜜月旅行地點及財政預算",
  },
  {
    prep_time: "3個月前",
    to_do_example: "組織婚禮籌備委員會分配職位及工作",
  },
  {
    prep_time: "3個月前",
    to_do_example: "裝修新居",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "準備嫁粧",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "預約花車",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "預備回禮小禮品",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "計劃婚禮場地佈置",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "試粧，試頭",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "召開籌委會會議",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "準備過大禮物品",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "擬定新居購物清單",
  },
  {
    prep_time: "2 個月前",
    to_do_example: "選照片作成長片段、選婚禮歌曲",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "準備婚宴用品",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "過大禮",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "製訂結婚程序表及座位表",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "最後確定嘉賓及工作人員名單",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "試穿婚紗，晚裝，裙褂，禮服",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "編訂教堂禮儀",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "寄發請帖",
  },
  {
    prep_time: "1 個月前",
    to_do_example: "逐步遷入新居",
  },
  {
    prep_time: "2 星期前",
    to_do_example: "覆實化粧師，髮型師，攝影師",
  },
  {
    prep_time: "2 星期前",
    to_do_example: "執拾家居用品及安排搬入新居",
  },
  {
    prep_time: "2 星期前",
    to_do_example: "通知酒樓嘉賓人數,確定婚宴菜式",
  },
  {
    prep_time: "2 星期前",
    to_do_example: "婚禮授懽書送交神父/牧師",
  },
  {
    prep_time: "2 星期前",
    to_do_example: "繼續召開會議，觀察工作進度",
  },
  {
    prep_time: "1 星期前",
    to_do_example: "在教堂行禮，作婚前綵排",
  },
  {
    prep_time: "1 星期前",
    to_do_example: "舉行戥穿石聚會",
  },
  {
    prep_time: "1 星期前",
    to_do_example: "舉行姊妹團午宴",
  },
  {
    prep_time: "1 星期前",
    to_do_example: "預訂回門燒豬",
  },
  {
    prep_time: "2日前",
    to_do_example: "向家長及各工作人員講解結婚當日程序",
  },
  {
    prep_time: "2日前",
    to_do_example: "寫台上多謝家人朋友台詞",
  },
  {
    prep_time: "2日前",
    to_do_example: "收拾婚禮及婚宴物品,順序排列",
  },
  {
    prep_time: "2日前",
    to_do_example: "最後統計婚宴坐位表",
  },
  {
    prep_time: "2日前",
    to_do_example: "往美容院護理皮膚、GEL甲",
  },
  {
    prep_time: "2日前",
    to_do_example: "預備利是,貼士和各項費用",
  },
  {
    prep_time: "2日前",
    to_do_example: "執拾旅行裝備，證件",
  },
  {
    prep_time: "2日前",
    to_do_example: "預訂酒樓午膳",
  },
  {
    prep_time: " １日前",
    to_do_example: "提醒攝影師,化粧師,髮型師",
  },
  {
    prep_time: " １日前",
    to_do_example: "收拾婚禮及婚宴物品,順序排列",
  },
  {
    prep_time: " １日前",
    to_do_example: "預備敬茶用的茶具和全盒",
  },
  {
    prep_time: " １日前",
    to_do_example: "分發婚禮程序表及座位編排圖表",
  },
  {
    prep_time: " １日前",
    to_do_example: "由大妗姐或長者為新郎新娘(上頭)",
  },
  {
    prep_time: " １日前",
    to_do_example: "預備利是,貼士和各項費用",
  },
  {
    prep_time: " １日前",
    to_do_example: "取花球襟花",
  },
  {
    prep_time: " １日前",
    to_do_example: "取婚紗禮服",
  },
  {
    prep_time: " １日前",
    to_do_example: "充足睡眠迎接大喜日子",
  },
];
