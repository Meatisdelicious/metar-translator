import {expect} from 'chai';
import {recupCodeOaci} from '../metar-taf-translator.js';

describe('../metar-taf-translator.js', () => {
  describe('#traduceMetar()', () => {
    it('should should return a json format', () => {
      expect(
        recupCodeOaci(
          'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
        )
      ).to.be.an('object');

      it.skip('should return an error', () => {});
    });
  });
});
