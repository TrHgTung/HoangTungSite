import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const [y, setY] = useState('');

  useEffect(() => {
    let date = new Date();
    let yea = date.getFullYear();
    let year = Number(yea);

    setY(year - 2023);
  })
  return (
    <Typewriter
      options={{
        strings: [
          `Đã có ${y} năm code Laravel 😎`,
          `Đã có ${y} năm code .NET Core 🫣`,
          "Có 'mối quan hệ' với MySQL",
          "Đã từng cãi lộn với Designer 🐧🐧🐧",
          "Hay bị Tester 'dí'",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
