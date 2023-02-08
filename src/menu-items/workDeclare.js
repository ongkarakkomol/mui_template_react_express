import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const workDeclare = {
    id: 'workDeclare',
    title: 'ประกาศงาน',
    type: 'group',
    children: [
        {
            id: 'workDeclare.declare',
            title: 'ประกาศงาน',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default workDeclare;
