import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const admin = {
    id: 'admin',
    title: 'จัดการผู้ดูแลระบบ',
    type: 'group',
    children: [
        {
            id: 'admin.management',
            title: 'จัดการผู้ดูแลระบบ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default admin;
