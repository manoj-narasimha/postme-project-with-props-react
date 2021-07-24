import "./styles.css";
import React from "react";
import Card from "./card";
import Header from "./header";
function App() {
  const username = "Manoj_Narasimha";
  return (
    <div className="main">
      <Header />
      <Card
        imgUrl="/images/test.jpg"
        name={username}
        comment="This is my first post. Feeling excited to share more."
        time="2 days ago"
        input="Comment Here"
      />
      <Card
        imgUrl="/images/test2.jpg"
        name={username}
        comment="This is my second post. Feeling better."
        time="1 day ago"
        input="Comment Here"
      />
      <Card
        imgUrl="/images/manoj2.jpg"
        name={username}
        comment="This is my third post. Looking handsome."
        time="12 min ago"
        input="Comment Here"
      />
    </div>
  );
}

export default App;
