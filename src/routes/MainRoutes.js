import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

//test
const Works = Loadable(lazy(() => import('pages/works/works')));
const Annoucement = Loadable(lazy(() => import('pages/works/annoucement')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const token = localStorage.getItem('access_token') ?? null;

const MainRoutes = (isLogedIn) => [
    {
        path: '/',
        element: isLogedIn ? <MainLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: '/',
                element: <DashboardDefault />
            },
            {
                path: 'color',
                element: <Color />
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: 'default',
                        element: <DashboardDefault />
                    }
                ]
            },
            {
                path: 'sample-page',
                element: <SamplePage />
            },
            {
                path: 'shadow',
                element: <Shadow />
            },
            {
                path: 'typography',
                element: <Typography />
            },
            {
                path: 'icons/ant',
                element: <AntIcons />
            },
            {
                path: '/work',
                element: <Works />
            },
            {
                path: '/annoucement',
                element: <Annoucement />
            }
        ]
    }
];

export default MainRoutes;
