import { useEffect, useState } from "react";
import "./Home.scss";
import { API } from "../../api/API";

export const Home = () => {
   
    return (<>
        <div className="container-fluid info-section-wrapper welcome-section">
            <div className="container">
                <div className="row">
                    <div className="info-section-wrapper-hello">
                        <p className="section-title">Fight Climate Change</p>

                        Calculate your personal carbon footprint and redeem your carbon points!
                        <br />
                        <br />
                        With the Imprint app, you can find tips that will help you minimize your carbon footprint.                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus voluptas earum.
                        <br />
                        <br />
                        Support various causes, fund sustainable businesses or connect with some of the world’s most innovative businesses to sell or invest.
                    </div>
                </div></div>
        </div>
        <div className="container-fluid info-section-wrapper action-section">
            <div className="container">
                <div className="row">
                    <div className="info-section-wrapper-hello">
                        <p className="section-title">What can you do</p>
                        <div className="row">
                            <div className="col-4">
                                <p>Track</p>
                                <div>
                                    Monitor your carbon emissions and lower your environmental impact
                                </div>
                            </div>
                            <div className="col-4">
                                <p>Invest</p>
                                <div>
                                    Pick a cause or support emerging sustainable businesses from poor regions
                                </div>
                            </div> <div className="col-4">
                                <p>Challenge</p>
                                <div>
                                    Pick a quest, reduce your carbon footprint in no time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
        <div className="container-fluid info-section-wrapper ">
            <div className="container">
                <div className="row">
                    <div className="info-section-wrapper-">
                        <p className="section-title">Lorem ipsum dolores</p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus voluptas earum.
                        Accusantium, in reiciendis. Alias atque similique et ullam laudantium dolor doloribus quas ad rerum, rem ex, labore sit.
                    </div>
                </div></div>
        </div>
    </>
    );
};

export default Home;