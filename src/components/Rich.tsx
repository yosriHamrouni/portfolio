import { Fragment } from 'react';

// Renders `**text**` as emphasis, so translated paragraphs can highlight company
// and school names wherever each language puts them in the sentence.
const Rich = ({ text }: { text: string }) => (
  <>
    {text.split('**').map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="text-ink font-medium">
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    )}
  </>
);

export default Rich;
