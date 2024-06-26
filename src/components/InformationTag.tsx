const InformationTag = ({ contents }: { contents: string[] }) => {
  return (
    <ul className="flex typo-caption1 xs:typo-body2">
      {contents.map((content, i) => (
        <li key={`tag_${i}`} className="information-tag">
          {content}
        </li>
      ))}
    </ul>
  );
};

export default InformationTag;
