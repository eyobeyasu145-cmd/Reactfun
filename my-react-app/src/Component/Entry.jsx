import market from "../image/market.png";
import real from "../image/real_estate.jpg";
export default function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={real} className="main-image" alt="Real estate" />
      </div>

      <div>
        {" "}
        <img className="market" src={market} alt="market" />
        <span>Conel</span>{" "}
        <a href="https://maps.app.goo.gl/Cn7ZkgJowx4yBPTU6?g_st=atm">
          View on Google maps{" "}
        </a>
        <h2>Mount fuji</h2>
        <p>12 Jan, 2021 - 24 Jan, 2021</p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists .
        </p>{" "}
      </div>
    </article>
  );
}
