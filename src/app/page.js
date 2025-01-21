import Image from "next/image";
import styles from "./page.module.css";
import {
  COIN_NAME,
  COIN_SYMBOL,
  COIN_TICKER,
  COIN_NAME_LONG,
  PLACES_TO_BUY,
  FOOTER_LINKS,
} from "./config/coin";
import ImageSlider from "./components/ImageSlider";
import SlideShow from "./components/SlideShow";
import AnimatedSlideShow from "./components/AnimatedSlideShow";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import CoinAddress from "./components/CoinAddress";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topSlidingTextStyled}>
          <div className={styles.starSign}></div> i mean bro, it&apos;s literally the Official
          First Lady wif a hat <div className={styles.starSign}></div>
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>
            WHAT IS <div className={styles.styledText}>{COIN_TICKER}</div>?{" "}
          </h1>

          <CoinAddress />

          <div className={styles.messageWrapper}>
            <p className={styles.messageWhiteStrikedThroughWithRedLine}>
              {COIN_SYMBOL} isn&apos;t{" "}
              <span className={styles.messageRealStyledBox}>
                <span className={styles.messageRealStyledBoxLongerInner}>
                  literally just {COIN_NAME_LONG};
                </span>
              </span>
              it&apos;s a symbol of progress, for futuristic transactions, a beacon
              for those who think ahead. It&apos;s clear that the future belongs to
              those who embrace innovations like {COIN_SYMBOL}, transcending boundaries &
              paving a new era in finance and technology.
            </p>
          </div>

          <div className={styles.imageSplitSliderBeforeAndAfter}>
            <ImageSlider />
          </div>
        </div>

        <div className={styles.downButtonWrapperWithDashedLines}>
          <div className={styles.downButton}></div>
        </div>

        <div className={styles.showCaseSection}>
          <h2>WHAT IS {COIN_SYMBOL}? BE FR</h2>

          <div className={styles.videoWrapper}>
            <div className={styles.comingSoon}>
              <h3>Video Coming Soon!</h3>
              <p>Stay tuned for an exciting introduction to {COIN_SYMBOL}!</p>
            </div>
          </div>
        </div>

        <div className={styles.showCaseSection}>
          <h2
            className={
              styles.showCaseSessionHeaderTextUnderlinedWithStylishRedMarks
            }
          >
            BUT FR FR I&apos;M SO SERIOUS{" "}
          </h2>


          <SlideShow />
        </div>

        <div className={styles.buySection}>
          <h1 className={styles.title}>get {COIN_TICKER} it&apos;s the best</h1>

          <div className={styles.buySectionInnerCard}>
            <div className={styles.buySectionInnerCardTopTag}>MOONER</div>

            <Image
              src="/images/m01.jpg"
              alt="Melania Wif Hat"
              width={800}
              height={600}
              className={styles.coinLogo}
            />

            <h4>{COIN_NAME}</h4>

            <p> {COIN_SYMBOL}</p>

            <div className={styles.bestTag}>
              BEST OF THE BEST
            </div>

            <div className={styles.bulletPoints}>
              <div className={styles.bulletPointsItem}>
                <div className={styles.bulletPointsItemIcon}></div>
                <p>{COIN_SYMBOL} is going to the moon. it isn&apos;t just a cryptocurrency; it&apos;s a symbol of progress, for futuristic transactions, a beacon for those who think ahead. It&apos;s clear that the future belongs to those who embrace innovations like {COIN_SYMBOL}, transcending boundaries & paving a new era in finance and technology.</p>
              </div>
              <div className={styles.bulletPointsItem}>
                <div className={styles.bulletPointsItemIcon}></div>
                <p>literally just {COIN_NAME_LONG}</p>
              </div>
            </div>

            <div className={styles.buyButtonIconLinks}>
              {PLACES_TO_BUY.map((place) => (
                <a key={place.name} href={place.url}>
                  <div className={styles.buyButtonIconLink}>
                    <span>Buy on</span>
                  <Image
                    src={place.logo}
                    alt={place.name}
                    width={32}
                    height={32}
                  />
                  </div>
                  
                </a>
              ))}
            </div>
          </div>
        </div>

       <Quote />

        <div className={styles.imageSlider}></div>

        <AnimatedSlideShow />
      </main>

      <Footer />
    </div>
  );
}
