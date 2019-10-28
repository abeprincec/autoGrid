import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import styled from "styled-components";

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap
});

const Gallery = styled.div({
  ...autoGrid(230, 15)
});

const Image = styled.img({
  width: "100%",
  objectFit: "cover",
  borderRadius: 10,
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)"
});

function App() {
  const randomImages = Array.from({ length: 100 });
  return (
    <div className="App">
      <h3> CSS Grid rocks </h3>

      <Gallery>
        {randomImages.map((_, i) => (
          <Image key={i} src={`https://picsum.photos/id/${i}/640/480`} />
        ))}
      </Gallery>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
