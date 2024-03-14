import { useEffect, useState } from "react";

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  var rowColors = [
    "table-primary",
    "table-success",
    "table-danger",
    "table-info",
    "table-warning",
    "table-active",
    "table-secondary",
    "table-light",
    "table-primary",
    "table-dark",
  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center h-100 w-100 pt-3 pb-3">
      <button
        variant="primary"
        type="button"
        onClick={fetchJokes}
        className="btn btn-outline-primary mb-5"
      >
        Get more jokes
      </button>

      {isLoading ? (
        <div
          className="spinner-border text-info align-self-center mt-5"
          role="status"
        >
          <span className="visually-hidden mt-5">Loading...</span>
        </div>
      ) : (
        <table className="table table-bordered w-80 text-center">
          <thead>
            <tr className="bg-warning text-dark pb-2 pt-2">
              <th>ID</th>
              <th>Jokes</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={joke.id} className={rowColors[index]}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Homepage;
