import { Tab, Tabs } from 'react-bootstrap';
import { mockChallanges } from '../../mockData/mockChallenges';
import ChallangeItemDto from '../../models/ChallengeItemDto';
import ChallangeItem from './ChallengeItem';
import { useState } from 'react';

export default function ChallangesList() {
    const [key, setKey] = useState('personal');

    return (
        <div className="container challenges-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Challenges:</h1>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k: any) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="personal" title="Personal">
                            {mockChallanges.filter(itm => itm.type === "personal").map((item: ChallangeItemDto) => {
                                return (<ChallangeItem challenge={item} />)
                            })}
                        </Tab>
                        <Tab eventKey="group" title="Group">
                            {mockChallanges.filter(itm => itm.type === "group").map((item: ChallangeItemDto) => {
                                return (<ChallangeItem challenge={item} />)
                            })}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
