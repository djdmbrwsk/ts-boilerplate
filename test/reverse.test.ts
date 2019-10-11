import reverse from '../src/reverse';

test('reverse()', () => {
  expect(reverse('raboof')).toBe('foobar');
});
