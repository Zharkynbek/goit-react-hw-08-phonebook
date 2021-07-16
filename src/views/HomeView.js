import React from "react";
import AuthNav from "../components/AuthNav";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomeView = () => (
  <>
    <AuthNav />
    <div style={styles.container}>
      <img
        src="https://pixabay.com/get/g69fa40246dc3b85d19aed7b492ef728a8eb3387fe2f2a46c20997d5705983036f285349cf19b72b2e496d7ccf7d2fe07e4be5941ec4210ae8cb31907fa6459e4_1280.jpg"
        className="img"
      />
    </div>
  </>
);

export default HomeView;
