import React from "react";
import { Stack } from "@mui/material";
import { Complementdata } from "../../constants/complementdata";
import "../component.css";
import Amenities from "./Amenities/Amenities";
import Accomodation from "./Accomodation";
import Image from "next/image";

const Complimentary = () => {
  return (
    <div style={{ padding: "24px" }} id="services">
      <br />
      <Accomodation />
      <br />
      <br />
      <br />

      <h2
        className="anim-center-title text-3xl"
        style={{ textAlign: "center", color: "#FF4500" }}
      >
        Complimentary Benefits
      </h2>

      <br />
      <br />
      <Stack
        style={{ textAlign: "center" }}
        gap={2}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {Complementdata.map((e, i) => {
          const { text, img } = e;
          return (
            <div
              className="complementarybox flex items-center flex-col justify-center gap-4"
              key={i}
            >
              <Image src={img} alt="" />
              <p>{text}</p>
            </div>
          );
        })}
      </Stack>
      <br />

      <Amenities />
    </div>
  );
};

export default Complimentary;
