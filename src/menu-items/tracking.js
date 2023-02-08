import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const tracking = {
    id: 'tracking',
    title: 'ติดตามสถานะ',
    type: 'group',
    children: [
        {
            id: 'tracking.track',
            title: 'ติดตามสถานะ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default tracking;
