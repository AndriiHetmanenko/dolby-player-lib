import { DOLBY_MARKER } from './config';
import xhook from 'xhook';

xhook.enable();

xhook.before((request) => {
  try {
    if (request.url.indexOf(DOLBY_MARKER) !== -1) {
      console.log(`                `);
      console.log(`==============================================`);
      console.log(`Request object:`, request);
      console.log(`%c MANIFEST Request: ${request.url}`, request, 'color: red');
      request.url = request.url.replace(DOLBY_MARKER, '');
      console.log(`%c NEW MANIFEST Request: ${request.url}`, 'color: green');
      console.log(`===============================================`);
      console.log(`                `);
    }
  } catch (e) {
    console.error(e);
  }
});