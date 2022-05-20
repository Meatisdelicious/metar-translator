import {expect} from 'chai';
import {recupFcTypeMetar} from '../metar-translator.js';

describe('../metar-translator.js', () => {
  describe('#recupFcTypeMetar()', () => {
    it('Should return a string', () => {
      expect(
        recupFcTypeMetar(
          'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
        )
      ).to.be.an('String');

      it.skip('should return an error', () => {});
    });
  });
});
