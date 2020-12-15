import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608005781135_1425';

  // add your config here
  config.middleware = [];

  // csrf
	config.security = {
    // domainWhiteList: ['http://localhost:8080'],
    // domainWhiteList: ['*'],
		csrf: {
			enable: false,
			ignoreJSON: true,
		},
	};

  return config;
};
