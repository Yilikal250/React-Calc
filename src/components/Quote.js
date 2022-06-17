export default function Quote() {
  const quote = '"Mathimatics is not about numbers, equations, computations, or algorithms: it is about understanding."';
  const name = 'William Paul Thurston';
  return (
    <main>
      <h2 className="quote">
        {quote}
        <span>{name}</span>
      </h2>
    </main>
  );
}
