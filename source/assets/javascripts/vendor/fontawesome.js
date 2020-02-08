import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';

library.add(faBars,
  faEnvelope,
  faBars,
  faProjectDiagram,
  faThumbsUp);

dom.watch();
