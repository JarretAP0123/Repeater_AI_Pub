import React from 'react';
import IPageProps from '../interfaces/page';


import Navbar from './navbar';

const Compare: React.FunctionComponent<IPageProps> = props => {

    return (
        <>
            <Navbar />

            <div style={{ position: 'fixed', top: 'auto', left: 0, width: '100%', height: '100%' }}>
                <iframe
                    src="http://localhost:5432/compare"
                    title="compare"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                />
            </div>
        </>

    );
}
export default Compare;