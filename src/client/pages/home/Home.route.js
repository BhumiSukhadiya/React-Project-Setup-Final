/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
let isAdmin=true;
export default {

  path: '/',

  async action() {
    if (!isAdmin) {
      return { redirect: '/login' };
    }
    return {
      title: 'Home Page',
      component: <Layout><Home news='hello user' /></Layout>,
    };
  },

};
