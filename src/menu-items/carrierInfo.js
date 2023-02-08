// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

const carrierInfo = {
    id: 'carrierInfo',
    title: 'ข้อมูลคนขับรถ',
    type: 'group',
    children: [
        {
            id: 'carrierInfo.detail',
            title: 'รายละเอียดคนขับรถ',
            type: 'item',
            url: '/',
            icon: icons.LoginOutlined
        },
        {
            id: 'carrierInfo.tracking',
            title: 'ติดตามคนขับ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default carrierInfo;
