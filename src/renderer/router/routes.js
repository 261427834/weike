import App from '../app'
import Home from '@router/home/home'
import Course from '@router/course/course'
import CourseDetail from '@router/course-detail/course-detail'
import CourseVideo from '@router/course-video/course-video'
import Community from '@router/community/community'
import StudyQuiz from '@router/study-quiz/study-quiz'
import Download from '@router/download/download'
import Works from '@router/works/works'
import UserCenter from '@router/user-center/user-center'
import Collaboration from '@router/collaboration/collaboration'
import About from '@router/about/about'
import Mall from '@router/mall/mall'
import FotContent from '@router/fot-content/fot-content'
import FotExemption from '@router/fot-content/fot-exemption'
import FotMember from '@router/fot-content/fot-member'
import FotWatch from '@router/fot-content/fot-watch'
import FotProblem from '@router/fot-content/fot-problem'
import FotChannel from '@router/fot-content/fot-channel'
import FotLecturer from '@router/fot-content/fot-lecturer'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        //redirect: { name: 'home' },
    },
    {
        path: '/course',
        name: 'course',
        component: Course,
    },
    {
        path: '/courseDetail',
        name: 'courseDetail',
        component: CourseDetail,
    },
    {
        path: '/courseVideo',
        name: 'courseVideo',
        component: CourseVideo,
    },
    {
        path: '/community',  // 社群中心
        name: 'community',
        component: Community,
    },
    {
        path: '/studyQuiz', // 学习问答
        name: 'studyQuiz',
        component: StudyQuiz,
    },
    {
        path: '/download', // 资料下载
        name: 'download',
        component: Download,
    },
    {
        path: '/works', // 学员作品
        name: 'works',
        component: Works,
    },
    {
        path: '/userCenter', // 个人主页
        name: 'userCenter',
        component: UserCenter,
    },
    {
        path: '/collaboration', // 商务合作
        name: 'collaboration',
        component: Collaboration,
    },
    {
        path: '/about', // 关于我们
        name: 'about',
        component: About,
    },
    {
        path: '/mall', // 据家商城
        name: 'mall',
        component: Mall,
    },
    {
        path: '/fotContent', // footer跳转
        name: 'fotContent',
        component: FotContent,
    },
    {
        path: '/fotExemption', // 免责声明
        name: 'fotExemption',
        component: FotExemption,
    },
    {
        path: '/fotMember', // 会员权益
        name: 'fotMember',
        component: FotMember,
    },
    {
        path: '/fotWatch', // 如何观看
        name: 'fotWatch',
        component: FotWatch,
    },
    {
        path: '/fotProblem', // 常见问题
        name: 'fotProblem',
        component: FotProblem,
    },
    {
        path: '/fotChannel', // 渠道加盟
        name: 'fotChannel',
        component: FotChannel,
    },
    {
        path: '/fotLecturer', // 讲师合作
        name: 'fotLecturer',//使用驼峰命名
        component: FotLecturer,
    },
]

export default routes
