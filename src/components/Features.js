import phone from '../assets/phone.jpg';
import currency from '../assets/currency.jpg';
import screen from '../assets/screen.jpg';


const Features = () => {
    return (
        <>
        <div className="features">
          <div className="feature">
            <h2>Stock Analysis</h2>
            <ul>
            <li>Discover stocks with smart lists and smart filters</li>
            <li>Access key company information</li>
            <li>Learn to Buy and sell stocks in a single click</li>
            </ul>
          </div>
          <img src={phone}/>
      </div>

      <div className="features">
        <img src={currency}/>
          <div className="feature">
          <h2>Global News Feed</h2>
            <ul>
            <li>Unbiased news articles</li>
            <li>Keep track of market news around the world</li>
            <li>Make investments by assessing the market</li>
            </ul>
          </div>
      </div>

      <div className="features">
          <div className="feature">
          <h2>Advance Tools</h2>
            <ul>
            <li>Explore future projections</li>
            <li>Manage your stock portfolio</li>
            <li>Visualize the market data</li>
            </ul>
          </div>
          <img src={screen}/>
      </div>
        </>
    );
}

export default Features;