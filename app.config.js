import config from "./key-config";

export default {
  name: "Monthly Moments",
  slug: "monthly",
  description:
    "Share amazing moments with amazing people — one month at a time.",
  platforms: ["ios", "android"],
  privacy: "public",
  githubUrl: "https://github.com/davidhartsough/Monthly",
  version: "0.1.2",
  orientation: "portrait",
  primaryColor: "#1471eb",
  icon: "./assets/images/icon.png",
  scheme: "monthly",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/foreground.png",
    resizeMode: "contain",
    backgroundColor: "#f4f5f6",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.davidhartsough.monthly",
    buildNumber: "0.1.0",
    icon: "./assets/images/icon.png",
    supportsTablet: true,
    config: {
      googleSignIn: {
        reservedClientId: config.reservedClientId,
      },
    },
  },
  android: {
    package: "com.davidhartsough.monthly",
    versionCode: 3,
    icon: "./assets/images/android-icon.png",
    adaptiveIcon: {
      backgroundColor: "#f4f5f6",
      foregroundImage: "./assets/images/foreground.png",
    },
    permissions: [],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.davidhartsough.monthly",
    config: {
      googleSignIn: {
        apiKey: config.apiKey,
        certificateHash: config.certificateHash,
      },
    },
  },
};
