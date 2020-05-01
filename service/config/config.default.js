"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1535188129687_4127";

  // add your config here
  config.middleware = [];

  return config;
};
("use strict");

module.exports = appInfo => {
  const config = (exports = {});

  config.keys = appInfo.name + "_1532831179029_8381";

  config.middleware = [];

  config.mysql = {
    client: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "cms"
    },
    app: true
  };

  config.security = {
    csrf: false,
    domainWhiteList: ["http://localhost:8000"]
  };
  config.cors={
    credentials:true
  }
  config.jwtSecret='zfpx';
  return config
};
