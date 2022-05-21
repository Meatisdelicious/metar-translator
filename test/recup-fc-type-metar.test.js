import {expect} from 'chai';
import {recupFcTypeMetar} from '../metar-translator.js';

describe('../metar-translator.js', () => {
  describe('#recupFcTypeMetar()', () => {
    it('Should return a string', () => {
      expect(
        recupFcTypeMetar(
          'LFPX 161700Z AUTO 1107KT 100V150 CAVOK 21/10 Q1010 TEMPO 10010G18KT='
        )
      ).to.be.an('String');

      it.skip('should return an error', () => {});
    });
  });
});
