/* eslint-disable react/prop-types */
import { Age } from "./Age";
import Message from "./Message";

function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>

      <Message age={age} />

      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
    </div>
  );
}

export default Welcome;
