/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL || "https://uniform.app",
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET || "hello-world",
    contentFulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentFulApiKey: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
    contentFulEnv: process.env.CONTENTFUL_ENVIRONMENT,
  },
};

module.exports = nextConfig;
