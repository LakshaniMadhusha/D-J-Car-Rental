export default function BrandName({ dark = false }) {

  return (

    <span className="font-black">

      <span
        className={
          dark
            ? "text-navy-300"
            : "text-navy-700"
        }
      >
        D<span className="italic">&amp;</span>J
      </span>

      {" "}

      <span className="text-gradient">
        Car Rentals
      </span>

    </span>
  );
}
