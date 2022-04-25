import React from 'react';

function Home(){
    return(
        <div className=''>
            <h3>Employee Management System</h3>

            <div>
                <p>Stats</p>
                <div>
                    <h5 className='totalemp'>Total Employees</h5>
                    <h5 className='total_terminated'>Total Terminated</h5>
                    <h5 className='total_promoted'>Total Promoted</h5>
                    <h5 className='total_new'>Total New</h5>
                </div>

            </div>
            
        </div>

    )
}

export default Home;