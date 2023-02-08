import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const truckInfo = {
    id: 'truckInfo',
    title: 'ข้อมูลรถ',
    type: 'group',
    children: [
        {
            id: 'truckInfo.detail',
            title: 'รายละเอียดรถ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default truckInfo;
