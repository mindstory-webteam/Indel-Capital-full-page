export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
            <div className="preloader">
                {/* <div className="preloader-close">close</div> */}
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="d" className="letters-loading">
                                d
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                l
                            </span>
                            <span data-text-preloader="C" className="letters-loading">
                                C
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="p" className="letters-loading">
                                p
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                l
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
