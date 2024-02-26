function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div className="display-1">Welcome to Rainucorp!!</div>
        <p className="lead fs-3">More coming soon...</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#282c34",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    textAlign: "center",
  },
} as const;

export default App;
