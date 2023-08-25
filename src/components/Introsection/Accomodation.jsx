import { Accomodations } from "../../constants/Complementdata";
import { Stack } from "@mui/material";
import "../component.css";
import Image from "next/image";
import Link from "next/link";

const Accomodation = () => {
  return (
    <div>
      <br />
      <h2
        className="text-3xl"
        style={{ textAlign: "center", color: "orangered" }}
      >
        Accomodation
      </h2>
      <br />
      <Link href={"/bookpg"}>
        <Stack
          flexDirection={"row"}
          gap={3}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {Accomodations.map((e, i) => {
            const { text, img } = e;
            return (
              <Stack key={i} className="carding">
                <Image src={img} alt="harami" />
                <Stack
                  flexDirection={"row "}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  p={2}
                >
                  <h5>
                    ₹ 25,999.00 <br />
                    <span style={{ color: "orangered", fontSize: "16px" }}>
                      /per month
                    </span>
                  </h5>
                  <button className="bookcardbut">Book Now</button>
                </Stack>

                <div className="cardbanner">
                  <h4>{text}</h4>
                </div>
              </Stack>
            );
          })}
        </Stack>
      </Link>
    </div>
  );
};

export default Accomodation;
