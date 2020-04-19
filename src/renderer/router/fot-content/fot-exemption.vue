<template>
    <div class="fot-exemption">
        <fotBanner></fotBanner>
        <div class="main">
            <div class="title">免责声明</div>
            <div class="text">
                <p>一、据家微课已尽力确保所有资料是准确、完整及最新的，同时因依赖该资料所致的任何损失，本网站亦不承担任何法律责任。</p>
                <p>二、对使用本网站信息和服务所引起的后果，基于该信息和服务的受众均为有独立民事意识能力和行为能力的主体，其应当对自己的法律行为法则，本网不作任何承诺。</p>
                <p>三、对由于使用据家网站点所产生的任何直接、间接或偶然性的损失或破坏，本网站不承担任何责任，无论该损失或破坏是否源于疏忽、违约、诽谤、侵权甚至电脑病毒。同时，对是否对外公报该类损失或破坏，基于本网站没有蓄意隐瞒，本网将不作任何承诺。</p>
                <p>四、据家微课网站不保证所有信息、文本、图形、链接及其它项目的绝对准确性和完整性，故仅供访问者参照使用。其中政策法规中文本不得作为正式法规文本使用。</p>
                <p>五、据家微课网站文章未注明著作权人的文章、图片等稿件均为转载稿，均出于公益目的，仅提供参考，并不意味着赞同其观点或证明其内容的真实性，不作为任何法律事务的法律依据； 如其他媒体、网站或个人从本站下载使用，必须保留本站注明的“作者”，并自负版权等法律责任。</p>
                <p>六、如果单位或个人认为本网站转载文章涉及著作权等问题，敬请立即通知我们，我们将第一时间予以更改或删除。本网站并不承担查清事情的责任和证实事情公正性和合法性的责任，同时在事情查清前保留对该部分内容继续刊载的权利。</p>
                <p>七、以上声明之最终解释权归据家微课所有，法律上有相关解释的，以中国法律为基准。</p>
                <p>八、如有争议限在我方所在地司法部门解决。</p>
            </div>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
export default {
    name:'fot-exemption',
    components: {
        fotBanner,
    },
}
</script>

<style lang='scss' scoped>
.fot-exemption{
    background-color: #fff;
}
.main{
    width: 70%;
    margin: 0 auto;
}
.title{
font-size:42px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(65,65,65,1);
text-align: center;
padding-top: 94px;
/* line-height:5px; */
}
.text{
font-size:25px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(65,65,65,1);
line-height:50px;
padding-top: 94px;
padding-bottom: 94px;
}
.text p{
  font-size: 25px;
    font-family: Microsoft YaHei;
    font-weight: Regular;
    color: rgba(65, 65, 65, 1);
    line-height: 37.5px;
    margin-top: 20px;
    margin-bottom:20px;  
}
</style>