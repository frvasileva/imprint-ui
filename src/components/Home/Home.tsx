import { useEffect, useState } from "react";
import "./Home.scss";
import { API } from "../../api/API";

export const Home = () => {

    return (<>
        <div className="container-fluid info-section-wrapper welcome-section">
            <div className="container">
                <div className="row">
                    <div className="info-section-wrapper-hello">
                        <p className="section-title">Fight Climate Change now!</p>

                        Imprint calculates your personal carbon footprint and redeem your carbon points!
                        <br />
                    </div>
                </div></div>
        </div>
        <div className="container-fluid info-section-wrapper action-section">
            <div className="container">
                <div className="row">
                    <div className="info-section-wrapper-hello">
                        <p className="section-title">What can you do</p>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <p>Track</p>
                                <div>
                                    Monitor your carbon emissions and lower your environmental impact
                                    <br/>
                                    <img src="https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/frontPage/track.png" width="100%"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <p>Invest</p>
                                <div>
                                    Pick a cause or support emerging sustainable businesses from poor regions
                                    <br/>
                                    <img src="https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/frontPage/invest.png" width="100%"/>
                                </div>
                              
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                    <p>Challenge</p>
                                    <div>
                                        Pick a quest, reduce your carbon footprint in no time.
                                        <br/>
                                        <img src="https://raw.githubusercontent.com/frvasileva/imprint-ui/main/src/static-content/images/frontPage/challenge.png" width="100%"/>
                                    </div>
                                </div>
                        </div>
                    </div></div>
            </div>
        </div>
    </>
    );
};

export default Home;