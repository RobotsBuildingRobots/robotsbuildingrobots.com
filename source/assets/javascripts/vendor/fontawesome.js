import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

library.add(faChevronRight, faChevronDown, faCheck);

dom.watch();
