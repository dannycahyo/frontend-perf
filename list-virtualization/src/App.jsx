import { FixedSizeList as List } from "react-window";
import "./App.css";

const rowCount = 1000; // Number of items in the list

// eslint-disable-next-line react/prop-types
const Row = ({ index, style }) => (
  <div style={style} className="card">
    <img
      src={`https://picsum.photos/seed/${index}/100/100`}
      alt={`Random ${index}`}
      className="card-image"
    />
    <div className="card-content">
      <h2>Card {index}</h2>
      <p>This is a description for card {index}.</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>List Virtualization with React-Window</h1>
      <List
        height={600}
        itemCount={rowCount}
        itemSize={120}
        width={400}
      >
        {Row}
      </List>
    </div>
  );
}

export default App;
