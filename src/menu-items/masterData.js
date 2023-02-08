import { ProfileOutlined } from '@ant-design/icons';

const icons = {
    ProfileOutlined
};

const masterData = {
    id: 'masterData',
    title: 'จัดการ Master Data',
    type: 'group',
    children: [
        {
            id: 'masterData.truckType',
            title: 'ประเภทรถ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.insurance',
            title: 'ทุนประกันภัยรายปี',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.productType',
            title: 'ประเภทสินค้า',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.serviceArea',
            title: 'พื้นที่ให้บริการ',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.sizeAndPriceSTL',
            title: 'ขนาดและราคา STL',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.termAndCondition',
            title: 'Term&Condition',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        },
        {
            id: 'masterData.privacyPolicy',
            title: 'Privacy Policy',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined
        }
    ]
};

export default masterData;
