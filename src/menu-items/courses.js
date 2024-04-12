// assets
import { CoffeeOutlined, FilePdfOutlined, MehOutlined } from '@ant-design/icons';

// icons
const icons = {
    CoffeeOutlined,
    FilePdfOutlined,
    MehOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const courses = {
    id: 'group-courses',
    title: 'Estude por aqui',
    type: 'group',
    children: [
        {
            id: 'courses',
            title: 'Cursos',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.CoffeeOutlined,
            breadcrumbs: false
        },
        {
            id: 'materials',
            title: 'Materiais',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.FilePdfOutlined,
            breadcrumbs: false
        },
        {
            id: 'guide',
            title: 'Por onde começar?',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.MehOutlined,
            breadcrumbs: false
        }
    ]
};

export default courses;
