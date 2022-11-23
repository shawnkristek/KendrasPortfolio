import {AppConfig} from 'utils/AppConfig';

import Meta from 'layouts/meta';
import Main from 'layouts/main';
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
      <Intro />
    </Main>
  );
}