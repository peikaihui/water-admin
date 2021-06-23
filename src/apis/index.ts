// NOTE water/use
import createAxios from '@@utils/use/axios';
import { getEnvConfig, isDevMode } from '@@utils/use/env';
import { error } from '@@utils/use/log';

// import { appStore } from '@@stores/mods/app';
// import { authStore } from '@@stores/mods/auth';

// import { useMessage } from '@@hooks/web/use-message';
// import { TOKEN_PREFIX } from '@@enums/cache';

// const { createMessage, createErrorModal } = useMessage();

const ENV = getEnvConfig();

export default createAxios({
  apiUrl: ENV.VITE_API,
  isDevMode,
  errorLog: error,
  // errorMsg: createMessage.error,
  // errorModal: createErrorModal,
  // transform: {
  //   transformRequestData: () => {
  //     // appStore.commitPageLoadingState(false);
  //   },
  //   requestInterceptors: (config) => {
  //     // 请求之前处理config
  //     // const token = authStore.getTokenState;
  //     // if (token) {
  //     //   // jwt token
  //     //   config.headers.Authorization = `${TOKEN_PREFIX}${token}`;
  //     // }
  //     return config;
  //   },
  // }
});
