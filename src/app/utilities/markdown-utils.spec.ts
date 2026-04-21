import { createHeadingId, extractHeadings } from './markdown-utils';

describe('markdown-utils', () => {
  it('keeps non-Latin heading text in generated ids', () => {
    expect(createHeadingId('பாடலின் வரலாறு')).toBe('பாடலின்-வரலாறு');
    expect(createHeadingId('श्लोक 36-1')).toBe('श्लोक-36-1');
  });

  it('preserves ids that already exist on rendered heading elements', () => {
    const headings = extractHeadings('<h2 id="actual-rendered-id" class="title">பாடலின் வரலாறு</h2>');

    expect(headings).toEqual([
      {
        level: 2,
        text: 'பாடலின் வரலாறு',
        id: 'actual-rendered-id',
      },
    ]);
  });

  it('generates unique ids for repeated headings', () => {
    const headings = extractHeadings('<h3>பதவுரை</h3><h3>பதவுரை</h3>');

    expect(headings.map((heading) => heading.id)).toEqual([
      'பதவுரை',
      'பதவுரை-2',
    ]);
  });
});
