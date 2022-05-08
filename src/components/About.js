import React, { useState } from 'react'

export default function About() {

    const[myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    });
    
    const[btntext, setBtnText] = useState('Enable Dark Mode');
    
    const toggleStyle = () =>
    {
        
        if (myStyle.color == 'white')
        {
            setmyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white',
                }
            );
            setBtnText(
                'Enable Dark Mode'
            );
        }
        else
        {
            setmyStyle(
                {
                    color: 'white',
                    backgroundColor: 'black',
                });
            
            setBtnText(
                'Enable Light Mode'
            )
        }
    };
    
    return (
        <>
        <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="accordion-body">
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle} >
                    <div className="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleStyle} type='button' className='btn btn-primary my-2 mx-2'> {btntext} </button>
        </>
    )
}
