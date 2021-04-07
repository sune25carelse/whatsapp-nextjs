import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", heigh: "100vh" }}>
      <div>
        <img
          src="https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector-400x400.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
