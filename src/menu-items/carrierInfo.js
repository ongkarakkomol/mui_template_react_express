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
            id: 'carrierInfo.Info',
            title: 'ข้อมูลคนขับรถ',
            type: 'collapse',
            url: '/',
            icon: icons.LoginOutlined,
            subMenu: {
                level: 2,
                children: [
                    {
                        id: 'carrierInfo.detail',
                        title: 'รายละเอียดคนขับรถ',
                        type: 'item',
                        url: '/',
                        icon: icons.LoginOutlined
                    }
                ]
            }
        }
    ]
};

export default carrierInfo;
