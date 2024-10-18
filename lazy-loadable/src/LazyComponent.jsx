const LazyComponent = () => {
  return (
    <div style={{ color: "white" }}>
      <h1>Lazy Loaded Component</h1>
      <p>
        This component is loaded only when visible in the viewport.
      </p>
    </div>
  );
};

export default LazyComponent;
