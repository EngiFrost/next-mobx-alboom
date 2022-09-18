export const makeRow = (title: string, content: string) => {
  return (
    <div>
      <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{title}</span>
      {`: ${content}`}
    </div>
  );
};
