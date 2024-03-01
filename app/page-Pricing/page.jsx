import styles from "@/components/css/Pricing.module.css"

export default function Pricing()
{
    return <div className={styles.body + " " + styles.all}>
        <div className={styles.bigTitle}>Take Your <span>Ticket</span></div>
        <div className={styles.wrapper}>
            <div className={styles.pricingTable + " " + styles.gpriceSingle}>
                <div className={styles.head}>
                    <h4 className={styles.title}>Basic</h4> 
                </div>
                <div className={styles.content}>
                    <div className={styles.price}>
                        <h3>$00</h3>
                    </div>
                    <ul>
                        <li>Access to sale</li>
                        <li>Possibility to buy</li>
                        <li>1 person only</li>
                        <li><del>Test on track</del></li>
                        <li> <del>Purchase of premium cars</del> </li>
                        <li> <del>After sales service free</del></li>
                    </ul>
                    <div className={styles.buyNow}>
                        <a href="#" className={styles.btn + " " + styles.bordered + " " + styles.radius}>Buy ticket</a>
                    </div>
                </div>
            </div>
            <div className={styles.pricingTable + " " + styles.gpriceSingle}>
                <div className={styles.head}>
                    <h4 className={styles.title}>regular</h4> 
                </div>
                <div className={styles.content}>
                    <div className={styles.price}>
                        <h3>$100</h3>
                    </div>
                    <ul>
                        <li>Access to sale</li>
                        <li>Possibility to buy</li>
                        <li>2 person only</li>
                        <li>Test on track</li>
                        <li><del>Purchase of premium cars</del> </li>
                        <li> <del>After sales service Free</del></li>
                    </ul>
                    <div className={styles.buyNow}>
                        <a href="#" className={styles.btn + " " + styles.bordered + " " + styles.radius}>Buy ticket</a>
                    </div>
                </div>
            </div>
            <div className={styles.pricingTable + " " + styles.gpriceSingle}>
                <div className={styles.head}>
                    <h4 className={styles.title}>Premium</h4> 
                </div>
                <div className={styles.content}>
                    <div className={styles.price}>
                        <h3>$500</h3>
                    </div>
                    <ul>
                        <li>Access to sale</li>
                        <li>Possibility to buy</li>
                        <li>5 persons</li>
                        <li>Test on track</li>
                        <li>Purchase of premium cars</li>
                        <li>After sales service Free</li>
                    </ul>
                    <div className={styles.buyNow}>
                        <a href="#" className={styles.btn + " " + styles.bordered + " " + styles.radius}>Buy ticket</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}