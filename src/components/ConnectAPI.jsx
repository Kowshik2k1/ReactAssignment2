import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function ConnectAPT() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="mt-5">Results</h1>
      {isLoading && <p>Loading results...</p>}
      {error && (
        <p>Error in loading the data. Please try again after sometime.</p>
      )}
      <div className="card-wrap d-flex flex-wrap justify-content-center">
        {posts.map((post, index) => {
          return (
            <>
              <Card className="m-2 flex-grow-1" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
