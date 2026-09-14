import logo from "../assets/logo.png";

export default function Brand({ compact = false }) {

  return (

    <img
      src={logo}
      alt="D&J Car Rentals"
      className={`
        drop-shadow-[0_6px_14px_rgba(23,23,23,.28)]

        ${
          compact
            ? "h-11 w-auto"
            : "h-16 w-auto"
        }
      `}
    />
  );
}
