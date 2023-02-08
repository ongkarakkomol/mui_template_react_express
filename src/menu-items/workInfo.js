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
            id: 'workInfo.info',
            title: 'ข้อมูลงาน',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default workInfo;
