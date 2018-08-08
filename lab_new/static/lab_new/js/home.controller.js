"use strict";

angular.module('lab_new')
    .controller('HomeController', HomeController)
    .controller('PeopleController', PeopleController);
function HomeController($scope) {
    console.log("HomeController loaded");
    var db_list=[{"dbname":"AnimalTFDB2.0","figure":"animaltfdb2","address":"http://bioinfo.life.hust.edu.cn/AnimalTFDB2/"},
        {"dbname":"AnimalTFDB3.0","figure":"animaltfdb3","address":"http://bioinfo.life.hust.edu.cn/AnimalTFDB/"},
        {"dbname":"EVmiRNA","figure":"evmirna","address":"http://bioinfo.life.hust.edu.cn/EVmiRNA/"},
        {"dbname":"GSCALite","figure":"gscalite","address":"http://bioinfo.life.hust.edu.cn/web/GSCALite/"},
        {"dbname":"HMED","figure":"hmed","address":"http://bioinfo.life.hust.edu.cn/smallRNA/index.php"},
        {"dbname":"hTFtarget","figure":"htftarget","address":"http://bioinfo.life.hust.edu.cn/hTFtarget/"},
        {"dbname":"HumanTFDB","figure":"humantfdb","address":"http://bioinfo.life.hust.edu.cn/HumanTFDB/"},
        {"dbname":"LNCediting","figure":"lncediting","address":"http://bioinfo.life.hust.edu.cn/LNCediting/"},
        {"dbname":"lncRInter","figure":"lncrinter","address":"http://bioinfo.life.hust.edu.cn/lncRInter"},
        {"dbname":"lncRNASNP2","figure":"lncrnasnp2","address":"http://bioinfo.life.hust.edu.cn/lncRNASNP/"},
        {"dbname":"miR_path","figure":"mirpath","address":"http://bioinfo.life.hust.edu.cn/miR_path"},
        {"dbname":"miRNASNP2","figure":"mirnasnp2","address":"http://bioinfo.life.hust.edu.cn/miRNASNP2/"},
        {"dbname":"PancanQTL","figure":"pancanqtl","address":"http://bioinfo.life.hust.edu.cn/PancanQTL/"},
        {"dbname":"SEGreg","figure":"segreg","address":"http://bioinfo.life.hust.edu.cn/SEGreg"},
        {"dbname":"SEGTool","figure":"segtool","address":"http://bioinfo.life.hust.edu.cn/SEGtool/"},
        {"dbname":"SNORic","figure":"snoric","address":"http://bioinfo.life.hust.edu.cn/SNORic"}];
    var tf_db=[ {"dbname":"hTFtarget","figure":"htftarget","address":"http://bioinfo.life.hust.edu.cn/hTFtarget/"},
        {"dbname":"AnimalTFDB2.0","figure":"animaltfdb2","address":"http://bioinfo.life.hust.edu.cn/AnimalTFDB2/"},
        {"dbname":"AnimalTFDB3.0","figure":"animaltfdb3","address":"http://bioinfo.life.hust.edu.cn/AnimalTFDB/"},
        {"dbname":"HumanTFDB","figure":"humantfdb","address":"http://bioinfo.life.hust.edu.cn/HumanTFDB/"}
]
    var ncrna_db=[{{"dbname":"LNCediting","figure":"lncediting","address":"http://bioinfo.life.hust.edu.cn/LNCediting/"},
        {"dbname":"lncRInter","figure":"lncrinter","address":"http://bioinfo.life.hust.edu.cn/lncRInter"},
        {"dbname":"lncRNASNP2","figure":"lncrnasnp2","address":"http://bioinfo.life.hust.edu.cn/lncRNASNP/"},
        {"dbname":"SNORic","figure":"snoric","address":"http://bioinfo.life.hust.edu.cn/SNORic"}
}]
    var mirna_db=[{"dbname":"EVmiRNA","figure":"evmirna","address":"http://bioinfo.life.hust.edu.cn/EVmiRNA/"},
         {"dbname":"HMED","figure":"hmed","address":"http://bioinfo.life.hust.edu.cn/smallRNA/index.php"},
          {"dbname":"miR_path","figure":"mirpath","address":"http://bioinfo.life.hust.edu.cn/miR_path"},
        {"dbname":"miRNASNP2","figure":"mirnasnp2","address":"http://bioinfo.life.hust.edu.cn/miRNASNP2/"}
]
    var cancer_db=[ {"dbname":"PancanQTL","figure":"pancanqtl","address":"http://bioinfo.life.hust.edu.cn/PancanQTL/"},
         {"dbname":"SEGreg","figure":"segreg","address":"http://bioinfo.life.hust.edu.cn/SEGreg"}
]
    $scope.tf_db=tf_db;
    $scope.ncrna_db=ncrna_db;
    $scope.mirna_db=mirna_db;
    $scope.cancer_db=cancer_db;
    $scope.db_list=db_list;
    var gallery_list=[{"figure":"gallery_gscalite"},{"figure":"gallery_gscalite"}];
    $scope.gallery_list=gallery_list
}
function PeopleController($scope) {
    var people_list=[{"figure":"leiqian.jpg","name":"Qian Lei, Postdoc","email":"leiqian_email.png"},
        {"figure":"zhangqiong.jpg","name":"Qiong Zhang, Postdoc","email":"zhangqiong_email.png"},
        {"figure":"liuchunjie.jpg","name":"Chun-Jie Liu, Postdoc","email":"liuchunjie_email.png"},
        {"figure":"linshengyan.png","name":"Shengyan Lin, Ph.D.Candidate","email":"linshengyan_email.png"},
        {"figure":"liuteng.jpg","name":"Teng Liu, Ph.D.Candidate","email":"liuteng_email.png"},
        {"figure":"yezheng.jpg","name":"Zheng Ye, Ph.D.Candidate","email":"yezheng_email.png"},
        {"figure":"wuxianhao.jpg","name":"Xianhao Wu, Ph.D.Candidate","email":"wuxianhao_email.png"},
        {"figure":"huhui.jpg","name":"Hui Hu, Ph.D.Candidate","email":"huhui_email.png"},
        {"figure":"hufeifei.jpg","name":"Feifei Hu, Ph.D.Candidate","email":"hufeifei_email.png"},
        {"figure":"xiamengxuan.jpg","name":"Mengxuan Xia, Ph.D.Candidate","email":"xiamengxuan_email.png"},
        {"figure":"luomei.jpg","name":"Mei Luo, Ph.D.Candidate","email":"luomei_email.png"},
        {"figure":"lvyao.jpg","name":"Lv Yao, M.S.","email":"lvyao_email.png"},
        {"figure":"miaoyr.jpg","name":"Yaru Miao, M.S.","email":"miaoyr_email.png"},
        {"figure":"chensiyi.jpg","name":"Siyi Chen, M.S.","email":"chensiyi_email.png"},
        {"figure":"xieguiyan.jpg","name":"Guiyan Xie, M.S.","email":"xieguiyan_email.png"},
        {"figure":"fuxin.png","name":"Xin Fu, M.S.","email":"fuxin_email.png"},
        {"figure":"liulanlan.png","name":"Lanlan, Liu, M.S.","email":"liulanlan_email.png"},
    ];
    $scope.people_list=people_list
}

