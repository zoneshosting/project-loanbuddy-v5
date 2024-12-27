import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// leads routing
const ActiveLeads = Loadable(lazy(() => import('views/leads/ActiveLeads')));
const LeadNotes = Loadable(lazy(() => import('views/leads/Notes')));
const LeadCalculator = Loadable(lazy(() => import('views/leads/Calculator')));
const LeadReports = Loadable(lazy(() => import('views/leads/Reports')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
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
      path: 'leads',
      children: [
        {
          path: 'active',
          element: <ActiveLeads />
        },
        {
          path: 'notes',
          element: <LeadNotes />
        },
        {
          path: 'calculator',
          element: <LeadCalculator />
        },
        {
          path: 'reports',
          element: <LeadReports />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    }
  ]
};

export default MainRoutes;