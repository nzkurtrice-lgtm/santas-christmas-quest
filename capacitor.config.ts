import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.goodthings.santasquest',
  appName: "Santa's Christmas Quest",
  webDir: 'www',
  android: {
    backgroundColor: '#102b3b',
    allowMixedContent: false
  }
};

export default config;
