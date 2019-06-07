describe('Flatten', () => {
  it('should be defined as a function', () => {
    expect(flatten).to.be.a('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(flatten([]))).to.be.true;
  });

  it('should return an empty array if no param is given', () => {
    expect(Array.isArray(flatten())).to.be.true;
    expect(flatten()).to.deep.equal([]);
  });

  it('should not alter an already-flattened array', () => {
    expect(flatten([1])).to.deep.equal([1]);
  });

  it('should flatten the array to the answer for the ultimate question of life, the universe, and everything', () => {
    expect(flatten([[4], [2]])).to.deep.equal([4, 2]);
  });

  describe('should flatten arrays to [1,2,3,4]', () => {
    const flattenedArray =  [1, 2, 3, 4];
    const testCases = [
      [[1],2,3,4],
      [1,[2,3],4],
      [[1,2,[3]],4],
      [[1,2,3,4]],
      [[1],[2],[[3]],[[[[4]]]]]
    ];

    testCases.forEach(oneCase => {
      it(`for input ${JSON.stringify(oneCase)}`, () => {
        let output = flatten(oneCase);
        expect(output).to.deep.equal(flattenedArray);
      });
    });
  });
});
