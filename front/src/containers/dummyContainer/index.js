import React, { useState, useEffect } from 'react';

function DummyContainer() {

    const [count, setState] = useState(0);

    useEffect(() => {
        document.title = `well come to dummy ${count}`;
    });


    return (
        <div>
            dummyTest
            <div>
                <div>
                    value of  {count}
                    <br>
                    </br>
                    value of {setState}
                </div>
                <button onClick={() => setState(count + 1)}>
                    counter up
                </button>
            </div>
        </div>
    )
}

export default DummyContainer;