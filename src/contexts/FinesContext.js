import React, { createContext } from 'react'

const FinesContext = createContext(null);

const withFineData = Component => props => (
    <FinesContext.Consumer>
        {({fineData}) => (
            <Component
                {...props}
                fineData={fineData}
            />
        )}
    </FinesContext.Consumer>
);

export default withFineData;
export { FinesContext }