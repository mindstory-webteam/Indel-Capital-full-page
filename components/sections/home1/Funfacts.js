import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            
            <section className="funfact-section">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-21"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={50} /><span>k+</span>
                                </div>
                                <p>Assets under management</p>
                            </div>
                        </div>
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-22"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={90} /><span>Bn</span>
                                </div>
                                <p>Portfolio companies</p>
                            </div>
                        </div>
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-23"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={40} /><span>+</span>
                                </div>
                                <p>Years of track record</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
