import React from 'react';
import LastProduct from './LastProduct';
import AllProducts from './AllProducts';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <AllProducts />

        </div>
    )
}

export default ContentRowCenter;