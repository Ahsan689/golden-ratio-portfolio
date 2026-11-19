import CountUp from "react-countup";

// Animates once on mount (i.e. when the site loads) rather than on scroll into
// view — the visibility sensor has been removed.
const ReactCounter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={1.2}
      decimals={decimals ? decimals : 0}
      className="tm_counter"
    />
  );
};

export default ReactCounter;
