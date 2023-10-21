import { mockInitiatives } from "../../mockData/mockInitiatives";
import { InitiativesCategory } from "../../models/InitiativesDto";
import InitiativeItem from "./InitiativesItem";

export const InitiativesList = () => {
    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Initiatives:</h1>

                    <div className="row">
                        {
                            mockInitiatives.map((item: InitiativesCategory) => {
                                return (
                                    <div className="col-4">
                                        <InitiativeItem initiative={item} key={item.id} />
                                    </div>)
                            })}
                    </div>


                </div>
            </div>
        </div>
    );
};