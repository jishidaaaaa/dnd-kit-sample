import React from 'react';

import { Dashboard } from "./components/Dashboard";

export default {
  title: 'Example/Dashboard',
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;
export const dashboard = Template.bind({});
