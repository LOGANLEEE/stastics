import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { dummy } from '../../actions';
import Wrapper from './mainWrapper';

function Main(props) {
    const [count, setState] = useState(0);

    useEffect(() => {
        document.title = ` ${props.title} `;
    });

    return (
        <Wrapper>
            main
            <div>
                <div>
                    value of  {count}
                    <br />
                    redux connection test : {props.mainTest}
                </div>
                <div>
                    <button onClick={() => setState(count + 1)}>
                        counter up
                </button>
                    <button onClick={() => props.dummy(666)}>
                        dummy
                </button>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state, ownProps) => ({
    mainTest: state.main.mainTest,

});

const mapDispatchToProps = dispatch => ({
    dummy: (value) => dispatch(dummy(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);