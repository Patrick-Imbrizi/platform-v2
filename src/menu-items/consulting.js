// assets
import { TeamOutlined } from '@ant-design/icons';

// icons
const icons = {
    TeamOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const consulting = {
    id: 'group-consulting',
    title: 'Faça uma consultoria',
    type: 'group',
    children: [
        {
            id: 'consulting',
            title: 'Consultoria',
            type: 'item',
            url: '/consultoria',
            icon: icons.TeamOutlined,
            breadcrumbs: false
        }
    ]
};

export default consulting;
