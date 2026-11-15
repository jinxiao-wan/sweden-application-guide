const guides = [
["记录瑞典申请全过程","我是工作一年后 DIY 申请瑞典硕士的，后来去了隆德大学读 Machine Learning, Systems and Control。这里整理了我的网申、备料和补件经验。大四申请人可先看第三篇。适用范围：中国大陆本科背景，2027 秋季硕士第一轮。规则核对日期：2026-11-15。","dates"],
["瑞典网申全流程","在 University Admissions 注册。搜索项目后，再到各项目官网查看先修课、语言和专用材料。2026 年 10 月 16 日开放，2027 年 1 月 15 日截止提交和排序，2 月 1 日截止交材料、缴费或证明免缴，4 月 1 日公布硕士录取。需缴费者同一学期缴一次 900 SEK。提交后在 Application 核对，按各自入口交文件并查看账户消息。","dates"],
["材料清单（1）｜学历、证件与学信网","已毕业申请人准备中文毕业证和学位证原件扫描件、两份学信网英文学历和学位验证报告、成绩单和护照资料页或其他身份证明。学校正式出具的英文成绩单和 CSSD 英文成绩单都是可接受的方式。大四申请人准备已完成课程成绩和最后一年在读证明，符合条件的 CSSD 注册学籍记录也可接受。独立学院须已取得学位。","china"],
["材料清单（2）｜语言、课程与项目材料","查项目要求的英语等级、先修课和专用材料。课程描述以实际修读课程及本校大纲为依据，按项目规定提交。Lund MLSC 用官方合并表，KTH Machine Learning 从项目页提交 Summary Sheet。工作证明按项目或奖学金需要准备。","lund","kth","chalmers","english"]
];
const sources = {
 dates:["2027 秋季官方时间表","https://universityadmissions.se/en/key-dates-and-deadlines/autumn-semester-dates/"],
 china:["中国大陆硕士材料","https://universityadmissions.se/en/apply-to-masters/provide-application-documents-masters/country-instructions/china-mainland/"],
 english:["英语考试及提交方式","https://www.universityadmissions.se/en/entry-requirements/english-language-requirements/"],
 rank:["硕士志愿排序","https://www.universityadmissions.se/en/apply-to-masters/rank-your-selections-masters/"],
 lund:["隆德 MLSC 申请页","https://www.lunduniversity.lu.se/study/machine-learning-systems-and-control-masters-programme-TAMSR/how-to-apply"],
 kth:["KTH Machine Learning 申请材料","https://www.kth.se/en/2.985/machine-learning/entry-requirements-machine-learning-1.48539"],
 chalmers:["Chalmers 硕士申请材料","https://www.chalmers.se/en/education/application-and-admission/how-to-apply-from-application-to-admission/apply-for-masters-programmes/"],
 late:["逾期与重新申请","https://www.universityadmissions.se/en/selection-and-admissions-results/reapplying/"],
 docs:["文件提交方式","https://www.universityadmissions.se/en/apply-to-masters/provide-application-documents-masters/submitting-your-documents/"]
};
const faq = [
 ["什么时候截止？","2027 秋季第一轮：1 月 15 日提交志愿，2 月 1 日提交材料及缴费或免缴证明。",["截止","时间","缴费","2月","雅思补交"],"dates"],
 ["如何确认已提交申请？","到 Application 核对申请项目和编号，在 Documents 检查上传记录，再查看账户消息。上传记录不等于材料已审核。",["提交","申请编号","上传"],"docs"],
 ["四个志愿怎么排？","按真实就读意愿排序。若第二志愿录取，第三和第四志愿会被移除。项目选拔标准另查学校官网。",["排序","志愿","保底","第一"],"rank"],
 ["学校开了英文成绩单，还要做 CSSD 吗？","学校正式出具的英文成绩单可单独提交。学信网英文成绩单是另一种方式。已毕业者仍需另交英文学历和学位验证报告。若英文成绩单没有均分，查项目是否要求另附正式证明。",["成绩单","学信网","cssd","均分","绩点"],"china","chalmers"],
 ["毕业证、学位证要公证吗？","中国大陆专项清单列出中文毕业证和学位证原件扫描件及两份英文 CSSD 验证报告。先确认目标项目有无额外要求。",["毕业证","学位证","公证","海牙","护照","身份证"],"china"],
 ["大四没毕业可以申请吗？","本科最后一年可交已完成课程成绩、学校最后一年在读证明或符合要求的 CSSD 注册学籍记录。独立学院申请人须已完成学位。",["大四","在读","学籍","没毕业"],"china"],
 ["Summary Sheet 在哪里下载和提交？","分别看项目官网。Lund MLSC 的合并表上传至 University Admissions，KTH Machine Learning 通过项目页面的专用链接提交。",["summary","表格","动机信"],"lund","kth"],
 ["课程描述要交吗？需要盖章吗？","查看学校材料总页和项目页。以成绩单和本校对应年份课程大纲为依据，按要求准备。不要用其他大学的同名课程证明自己修过的内容。",["课程描述","先修课","盖章","学分","大纲"],"chalmers","lund"],
 ["截止后收到学校补件邮件怎么办？","收到学校补件通知后按邮件指示提交。普通材料迟交可能影响本轮审理，查询官方重新申请流程。",["补件","逾期","补材料"],"late"],
 ["IELTS 和 TOEFL 要多少分？","如果项目要求 English Level 2，IELTS Academic 总分至少 6.5、各项至少 5.5。2026 年 1 月 21 日起的 TOEFL iBT 新量表总分至少 4.5、各项至少 4。按官方页面确认认可版本及在线核验方式。",["雅思","托福","语言","ielts","toefl"],"english"],
 ["工作证明、实习证明、推荐信是必交吗？","按项目及奖学金分别核对。工作证明可先请 HR 开具，证件号、签章、翻译按接收方规定填写。",["工作","实习","推荐信","证件号","签字"],"chalmers","kth"]
];
if (typeof module !== "undefined") module.exports = {guides,sources,faq};

const sourceNotes = {
 china:"学信网 CSSD、成绩单、英文翻译、毕业证、学位证、在读证明及证件。",
 dates:"申请、排序、缴费、支持材料与录取结果日期。",
 english:"雅思 IELTS、托福 TOEFL、PTE，考试版本、分数和提交方式。"
};
const resources = [
 ["下载模板","中英双语在职证明","工作证明｜按接收方要求填写。","templates/employment-certificate.docx",[]],
 ["填写案例","英文课程描述原件｜自动化","原始 Word 样例。请按本人实际修读课程填写。","templates/course-description.docx",[]],
 ["填写案例","英文课程描述原件｜电子信息工程","原始 Word 样例。学分换算请查目标项目要求。","templates/course-description-eie.docx",[]],
 ["填写案例","如何把先修课要求对应到本科课程","按 Chalmers 笔记整理：先摘出项目所需主题，再列高等数学、线性代数或概率统计等实际修读课程，标注成绩单页码、课程大纲出处和学分换算依据。具体门槛查询项目页。","templates/chalmers-prerequisite-example.docx",["chalmers"]],
 ["经验参考","如何找本校对应年份的课程大纲","湖南大学的 2015 年培养方案按学院分档，2011 年英文课程手册按编号检索。先匹配自己的学院及培养方案年份，再核对成绩单。",null,[]],
 ["经验参考","Peter：25 Fall 学信网成绩认证教程","CSSD 办理操作参考，正文未核验。","https://zhuanlan.zhihu.com/p/689905293",["china"]],
 ["经验参考","彼泽之陂：学信网认证与报告发送教程","正文未核验。报告发送部分针对 OMSCS。","https://zhuanlan.zhihu.com/p/680218886",["china"]],
 ["经验参考","评论区分享的夸克网盘模板","含工作证明与课程描述的原分享入口，网盘内容未核验。","https://pan.quark.cn/s/fa47f69c8182",[]],
 ["官方链接","University Admissions 申请入口","登录、查找项目、提交申请。","https://www.universityadmissions.se/",[]],
 ["官方链接","申请费","申请费金额、付款方式和缴费状态。","https://www.universityadmissions.se/en/fees-scholarships-residence-permit/pay-your-application-fee/",[]]
];
const materialFiles = [
 ["Passport.pdf", "护照个人资料页", "与其他符合要求的身份证明二选一", "china"],
 ["Identity card.pdf", "身份证明", "使用前确认接受的证件", "china"],
 ["Higher Education Degree Certificate-Chinese-CSSD-XXX.pdf", "学信网学位验证报告（中文）", "备查版本", "china", "graduate"],
 ["Higher Education Degree Certificate-English-CSSD-XXX.pdf", "学信网学位验证报告（英文）", "已毕业申请材料", "china", "graduate"],
 ["Higher Education Qualification Certificate-Chinese-CSSD-XXX.pdf", "学信网学历验证报告（中文）", "备查版本", "china", "graduate"],
 ["Higher Education Qualification Certificate-English-CSSD-XXX.pdf", "学信网学历验证报告（英文）", "已毕业申请材料", "china", "graduate"],
 ["Online Verification Report of Student Record-Chinese-CSSD-XXX.pdf", "学信网学籍验证报告（中文）", "采用此途径时，按官方语言要求准备", "china", "student"],
 ["Online Verification Report of Student Record-English-CSSD-XXX.pdf", "学信网学籍验证报告（英文）", "显示注册状态时可作为在读证明的替代材料", "china", "student"],
 ["Certificate of Final-Year Studies-XXX.pdf", "学校出具的本科最后一年在读证明", "与符合要求的学信网学籍记录二选一", "china", "student"],
 ["Transcript-Chinese-CSSD-XXX.pdf", "学信网成绩单（中文）", "备查版本", "china"],
 ["Transcript-English-CSSD-XXX.pdf", "学信网成绩单（英文）", "可替代学校正式英文成绩单", "china"],
 ["Transcript-Chinese-XXX.pdf", "学校成绩单（中文）", "采用中文原件加正式翻译的途径时提交", "china"],
 ["Transcript-English-XXX.pdf", "学校正式英文成绩单或正式英译件", "学校正式英文成绩单可单独提交，正式译件与原件一起提交", "china"],
 ["Bachelor Degree Certificate-Chinese-XXX.pdf", "学士学位证（中文原件扫描件）", "已毕业申请材料", "china", "graduate"],
 ["Bachelor Degree Certificate-English-XXX.pdf", "学士学位证（英文版）", "按项目额外要求", "china", "graduate"],
 ["Certificate of Graduation-Chinese-XXX.pdf", "毕业证（中文原件扫描件）", "已毕业申请材料", "china", "graduate"],
 ["Certificate of Graduation-English-XXX.pdf", "毕业证（英文版）", "按项目额外要求", "china", "graduate"],
 ["CV.pdf", "个人简历", "按目标项目要求"],
 ["Certificate of Employment-XXX.pdf", "工作证明", "按目标项目或奖学金要求"],
 ["English Test Report-IELTS-XXX.pdf", "雅思成绩报告", "使用雅思证明英语能力时", "english"],
 ["English Test Report-TOEFL-XXX.pdf", "托福成绩报告", "使用托福证明英语能力时", "english"],
 ["Personal-Statement-XXX.pdf", "个人陈述或动机信", "按目标项目要求，可分别准备多个版本"],
 ["Summary-Sheet-XXX.pdf", "项目专用表格", "使用目标项目提供的格式和提交入口"],
 ["Course Description-XXX.pdf", "课程描述或教学大纲", "按目标项目要求"],
 ["Recommendation Letter1.pdf", "第一封推荐信", "按目标项目或奖学金要求"],
 ["Recommendation Letter2.pdf", "第二封推荐信", "按要求的份数准备"],
 ["Scholarship Motivation Letter.pdf", "奖学金动机信", "按对应奖学金要求"]
];
resources.push(
 ["经验参考","小红书原帖：记录瑞典申请全过程","作者的 DIY 申请经历。","https://www.xiaohongshu.com/discovery/item/6869d932000000002400acc8",[]],
 ["经验参考","小红书原帖：瑞典网申全流程概述","原帖网申截图及评论。请参照本网站当季时间线。","https://www.xiaohongshu.com/discovery/item/686a2f8a000000001c030df2",["dates"]],
 ["经验参考","小红书原帖：瑞典申请材料清单（1）","原帖的证件及 CSSD 办理经验。","https://www.xiaohongshu.com/discovery/item/686b73c7000000002203db50",["china"]],
 ["经验参考","小红书原帖：瑞典申请材料清单（2）","原帖的课程描述、语言成绩与工作证明经验。","https://www.xiaohongshu.com/discovery/item/686f6fbe000000002400a41b",["chalmers"]]
);
