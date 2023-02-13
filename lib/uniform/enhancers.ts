// TODO: uncomment and bring your desired enhancer imports here
import { compose, enhance, EnhancerBuilder } from "@uniformdev/canvas";
import {
  createContentfulEnhancer,
  ContentfulClientList,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";

const client = createClient({
  space: "okj8oer2ranj",
  environment: "master",
  accessToken: "5NzGXYkT8_-a-DreRme0JDyw8RQp7AGwchTtK3i3vHg",
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
