import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/profile",
        "exact": true,
        "component": require('../profile.js').default,
        "Route": require('D:/3.Full-stack/my-project/1.back-manage-system/back-manage/src/routes/PrivateRoute.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/user",
        "exact": false,
        "component": require('../user/_layout.js').default,
        "routes": [
          {
            "path": "/user/add",
            "exact": true,
            "component": require('../user/add.js').default
          },
          {
            "path": "/user/detail/:id",
            "exact": true,
            "component": require('../user/detail/$id.js').default
          },
          {
            "path": "/user/list",
            "exact": true,
            "component": require('../user/list.js').default
          },
          {
            "component": () => React.createElement(require('D:/3.Full-stack/my-project/1.back-manage-system/back-manage/node_modules/_umi-build-dev@0.22.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/profile","exact":true,"component":"./src/pages/profile.js","Route":"./src/routes/PrivateRoute.js"},{"path":"/login","exact":true,"component":"./src/pages/login.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/user","exact":false,"component":"./src/pages/user/_layout.js","routes":[{"path":"/user/add","exact":true,"component":"./src/pages/user/add.js"},{"path":"/user/detail/:id","exact":true,"component":"./src/pages/user/detail/$id.js"},{"path":"/user/list","exact":true,"component":"./src/pages/user/list.js"}]}]}]' })
          }
        ]
      },
      {
        "component": () => React.createElement(require('D:/3.Full-stack/my-project/1.back-manage-system/back-manage/node_modules/_umi-build-dev@0.22.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/profile","exact":true,"component":"./src/pages/profile.js","Route":"./src/routes/PrivateRoute.js"},{"path":"/login","exact":true,"component":"./src/pages/login.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/user","exact":false,"component":"./src/pages/user/_layout.js","routes":[{"path":"/user/add","exact":true,"component":"./src/pages/user/add.js"},{"path":"/user/detail/:id","exact":true,"component":"./src/pages/user/detail/$id.js"},{"path":"/user/list","exact":true,"component":"./src/pages/user/list.js"}]}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
