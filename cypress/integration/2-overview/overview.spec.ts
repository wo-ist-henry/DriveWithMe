
import {visitPage} from './../helpfer.func'
describe('overview', () => {
    it('visit Home', () => {
      visitPage('mitfahrzentrale')
    });
    it('visit Export', () => {
        visitPage('export');
    });
});
