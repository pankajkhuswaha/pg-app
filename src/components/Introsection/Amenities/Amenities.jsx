import React from "react";
import { Amenitiesdata } from "../../../constants/Complementdata";
import { Stack } from "@mui/material";
import Image from "next/image";

const Amenities = () => {
  return (
    <div className="Amenitiesmain">
      <h2 className="text-3xl">Amenities List</h2>
      <br />
      <p style={{ width: "60%", margin: "auto" }}>
        We provide all the amenities, some amenities are surely available for
        all our service places. Some of the items only you may get by request,
        Because that type of amenities are not mandatory.
      </p>
      <br />

      <Stack
        flexDirection={"row"}
        mt={2}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {Amenitiesdata.map((e, i) => {
          return (
            <div key={i} className="amenities-box">
              <Image src={e.img} alt="icon" />
              <Stack flexDirection={"column"}>
                <p className="mb-0">
                  {e.text} <br />
                  Surely Available{" "}
                </p>
              </Stack>
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default Amenities;
