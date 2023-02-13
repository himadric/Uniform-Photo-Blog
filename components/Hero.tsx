import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";

import { ContentfulEnhancerResult } from "@uniformdev/canvas-contentful";

type HeroProps = ComponentProps<{
  test: ContentfulEnhancerResult<{
    fields: {
      id: string;
      pageName: string;
      title: string;
      body: object;
    };
  }>;
}>;

const Hero: React.FC<HeroProps> = ({ test }: HeroProps) => {
  console.log(test);
  return (
    <div>
      <h1 className="title">{test.fields.title}</h1>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: test.fields.pageName,
        }}
      />
    </div>
  );
};

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
