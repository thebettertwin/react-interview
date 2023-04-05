import React from 'react';
import Table from './components/organisms/Table/Table';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Table tableHeadings={[
        "Name",
        "Rating",
        "Country",
        "Submission Date",
        "Verification"
      ]} />
    </div>
  );
}

export default App;
