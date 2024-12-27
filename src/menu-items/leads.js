import { IconUsers, IconNotes, IconCalculator, IconChartBar } from '@tabler/icons-react';

// constant
const icons = {
  IconUsers,
  IconNotes,
  IconCalculator,
  IconChartBar
};

// ==============================|| LEAD MANAGEMENT MENU ITEMS ||============================== //

const leads = {
  id: 'lead-management',
  title: 'Lead Management',
  type: 'group',
  children: [
    {
      id: 'active-leads',
      title: 'Active Leads',
      type: 'item',
      url: '/leads/active',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'lead-notes',
      title: 'Lead Notes',
      type: 'item',
      url: '/leads/notes',
      icon: icons.IconNotes,
      breadcrumbs: false
    },
    {
      id: 'mortgage-calculator',
      title: 'Mortgage Calculator',
      type: 'item',
      url: '/leads/calculator',
      icon: icons.IconCalculator,
      breadcrumbs: false
    },
    {
      id: 'reports-analytics',
      title: 'Reports & Analytics',
      type: 'item',
      url: '/leads/reports',
      icon: icons.IconChartBar,
      breadcrumbs: false
    }
  ]
};

export default leads;