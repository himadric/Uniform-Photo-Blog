import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";

import { ContentfulEnhancerResult } from "@uniformdev/canvas-contentful";

type HeroProps = ComponentProps<{
  pageIntro: ContentfulEnhancerResult<{
    fields: {
      id: string;
      pageName: string;
      title: string;
      body: object;
    };
  }>;
}>;

const Hero: React.FC<HeroProps> = ({ pageIntro }: HeroProps) => {
  console.log(pageIntro);
  return (
    <div>
      {/* <h1 className="title">{pageIntro.fields.title["en-US"]}</h1>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: pageIntro.fields.body["en-US"],
        }}
      /> */}
    </div>
  );
};

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
