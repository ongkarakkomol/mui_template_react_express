// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

const finances = {
    id: 'finance',
    title: 'ข้อมูลการเงิน',
    type: 'group',
    children: [
        {
            id: 'finance.customer',
            title: 'ลูกค้า',
            type: 'collapse',
            // url: '/',
            icon: icons.LoginOutlined,
            subMenuLevel2: [
                {
                    id: 'finance.customer.waitingPayment',
                    title: 'รอชำระ',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.invoice',
                    title: 'แจ้งหนี้',
                    type: 'item',
                    url: '/'
                },
                {
                    id: 'finance.customer.invoiceHistory',
                    title: 'ประวัติแจ้งหนี้ (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.billing',
                    title: 'วางบิล',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.billingHistory',
                    title: 'ประวัติการวางบิล (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.waitingExamine',
                    title: 'รอตรวจสอบ (รวบยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.paid',
                    title: 'ชำระแล้ว',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.paidHistory',
                    title: 'ประวัติการชำระเงิน (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.customer.cancelWork',
                    title: 'ยกเลิกงาน',
                    type: 'item',
                    url: '/dashboard/default'
                }
            ]
        },
        {
            id: 'finance.carrier',
            title: 'ผู้ขนส่ง',
            type: 'collapse',
            // url: '/',
            icon: icons.ProfileOutlined,
            subMenuLevel2: [
                {
                    id: 'finance.carrier.waitingTransferMoney',
                    title: 'รอแจ้งโอน',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.preparePayment',
                    title: 'ตั้งจ่าย',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.preparePaymentHistory',
                    title: 'ประวัติการตั้งจ่าย (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.billing',
                    title: 'วางบิล',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.billingHistory',
                    title: 'ประวัติการวางบิล (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.prepareExamine',
                    title: 'รอตรวจสอบ (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.finishedTransferMoney',
                    title: 'แจ้งโอนเงินแล้ว',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.transferMoneyHistory',
                    title: 'ประวัติการแจ้งโอน (รวมยอด)',
                    type: 'item',
                    url: '/dashboard/default'
                },
                {
                    id: 'finance.carrier.cancelWork',
                    title: 'ยกเลิกงาน',
                    type: 'item',
                    url: '/dashboard/default'
                }
            ]
        }
    ]
};

export default finances;
