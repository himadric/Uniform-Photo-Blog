// TODO: uncomment and bring your desired enhancer imports here
import { compose, enhance, EnhancerBuilder } from "@uniformdev/canvas";
import {
  createContentfulEnhancer,
  ContentfulClientList,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
console.log(serverRuntimeConfig);

const client = createClient({
  space: serverRuntimeConfig.contentFulSpaceId,
  environment: serverRuntimeConfig.contentFulEnv,
  accessToken: serverRuntimeConfig.contentFulApiKey,
});
const clientList = new ContentfulClientList({ client });
const contentfulEnhancer = createContentfulEnhancer({ client: clientList });

export default async function runEnhancers(composition, context) {
  //TODO: uncomment and bring your desired enhancers here
  await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_CONTENTFUL_PARAMETER_TYPES,
      compose(contentfulEnhancer, ({ parameter }) => {
        const { fields } = parameter.value;
        console.log(parameter);
        return { fields };
      })
    ),
    context: {},
  });
}
