import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const workInfo = {
    id: 'workInfo',
    title: 'ข้อมูลงาน',
    type: 'group',
    children: [
        {
            id: 'workInfo.detail',
            title: 'รายละเอียดงาน',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'workInfo.status',
            title: 'อัพเดทสถานะงาน (Pop-up)',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default workInfo;
