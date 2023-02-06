// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

const userInfo = {
    id: 'userInfo',
    title: 'ข้อมูลผู้ใช้งาน',
    type: 'group',
    children: [
        {
            id: 'userInfo.info',
            title: 'ข้อมูลส่วนตัว',
            type: 'item',
            url: '/',
            icon: icons.LoginOutlined
        },
        {
            id: 'userInfo.project',
            title: 'ข้อมูลโครงการ',
            type: 'collapse',
            icon: icons.LoginOutlined,
            subMenuLevel2: [
                {
                    id: 'userInfo.project.detail',
                    title: 'รายละเอียดโครงการ',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'userInfo.project.progress',
                    title: 'ความคืบหน้าโครงการ',
                    type: 'item',
                    url: '/'
                },
                {
                    id: 'userInfo.project.progressFindCarrier',
                    title: 'ความคืบหน้าหาผู้ขนส่ง',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'userInfo.project.carrier',
                    title: 'ผู้ขนส่งในโครงการ',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'userInfo.project.officerInCharge',
                    title: 'ผู้รับผิดชอบโครงการ',
                    type: 'item',
                    url: '/dashboard/default'
                }
            ]
        },
        {
            id: 'userInfo.driverInfo',
            title: 'ข้อมูลคนขับ (กรณีเป็นผู้ขนส่ง)',
            type: 'collapse',
            icon: icons.LoginOutlined,
            subMenuLevel2: [
                {
                    id: 'userInfo.driverInfo.detail',
                    title: 'รายละเอียดคนขับรถ',
                    type: 'item',
                    url: '/dashboard/default'
                }
            ]
        },
        {
            id: 'userInfo.truckInfo',
            title: 'ข้อมูลรถ (กรณีเป็นผู้ขนส่ง)',
            type: 'collapse',
            icon: icons.ProfileOutlined,
            subMenuLevel2: [
                {
                    id: 'userInfo.truckInfo.detail',
                    title: 'รายละเอียดรถ',
                    type: 'item',
                    url: '/dashboard/default'
                }
            ]
        }
    ]
};

export default userInfo;
