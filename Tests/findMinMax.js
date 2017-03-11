
 (function() {
  'use strict';
 var findMinMax = require('../Apps/findMinMax.js').findMinMax;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [9] for [9, 9, 9]', function () {
        expect(findMinMax([9, 9, 9])).toEqual([9]);
      });
      it('should return [7] for [7, 7]', function () {
        expect(findMinMax([7, 7])).toEqual([7]);
      });

    });

    describe('Ignore duplicates in the list', function () {

      it('should return [0, 8] for [8, 5, 8, 0, 7]', function () {
        expect(findMinMax([8, 5, 8, 0, 7])).toEqual([0, 8]);
      });
      it('should return [0, 9] for [9, 0, 1, 0, 7]', function () {
        expect(findMinMax([9, 0, 1, 0, 7])).toEqual([0, 9]);
      });
      it('should return [0, 9] for [9, 0, 1, 1, 7]', function () {
        expect(findMinMax([9, 0, 1, 1, 7])).toEqual([0, 9]);
      });

    });

    describe('Return an empty list for an empty list', function () {
      it('should return [] for []', function () {
        expect(findMinMax([])).toEqual([]);
      });

  });
});
})();