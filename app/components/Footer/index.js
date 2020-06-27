import React from 'react';
import { FormattedMessage } from 'react-intl';

import Divider from '@material-ui/core/Divider';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Wrapper>
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
          <LocaleToggle />
        </section>
        <section>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: (
                <A href="https://twitter.com/zeevosec">Shane O{"'"}Neill</A>
              ),
            }}
          />
        </section>
      </Wrapper>
    </React.Fragment>
  );
}

export default Footer;
