import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

library.add(faCaretDown, faThumbsUp);

dom.watch();
