import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

library.add(faBars, faThumbsUp);

dom.watch();
