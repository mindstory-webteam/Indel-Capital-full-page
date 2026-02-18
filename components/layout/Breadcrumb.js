import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImg }) {
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${breadcrumbImg})` }}>
                <div className="pattern-layer">
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div  className="content-box centred">
                        <h1 style={{color:"black"}} >{breadcrumbTitle}</h1>
                        <ul  className="bread-crumb clearfix">
                            <li style={{color:"black"}} ><Link  style={{color:"black"}} href="/">Home</Link></li>
                            <li style={{color:"black"}}>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}