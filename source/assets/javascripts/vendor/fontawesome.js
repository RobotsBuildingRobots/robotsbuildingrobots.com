import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons/faBroadcastTower';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons/faHandHoldingHeart';

library.add(faBars,
  faEnvelope,
  faBars,
  faProjectDiagram,
  faDollarSign,
  faBroadcastTower,
  faHammer,
  faHandHoldingHeart,
  faThumbsUp);

dom.watch();
