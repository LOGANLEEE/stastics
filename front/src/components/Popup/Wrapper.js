import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    color: black;

    .transWrapper{
        display: grid;
        width: 100%;
        grid-gap: 10px;
    }
    
    .original {
        grid-column: 1;
        grid-row: 1;
    }

    .bar { 
        grid-column: 2;
        grid-row: 1;
        height: 100%;
        border-left: 1px solid black;
    }

    .translated {
        grid-column: 3;
        grid-row: 1;
    }

`;


export default Wrapper;
