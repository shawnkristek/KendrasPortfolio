import {AppConfig} from 'utils/AppConfig';

import Meta from 'layouts/meta';
import Main from 'layouts/main';

import Section from 'components/section';
import Intro from 'components/intro';

export default function Home() {
  return (
    <Main 
      meta={
        <Meta
          title={AppConfig.title}
          description={AppConfig.description}
        />
      }
    >
      <Section>
        <Intro />
      </Section>
    </Main>
  );
}