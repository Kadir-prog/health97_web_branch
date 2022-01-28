import React from 'react';

function About() {
    return (<div>
        {/* <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
 
        Read more about us at :
        <a href="https://www.geeksforgeeks.org/about/">
            https://www.geeksforgeeks.org/about/
        </a> */}
        <div className='container-fluid' style={{ border: '1px solid red' }}>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

}

export default About;