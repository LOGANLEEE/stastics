import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #264f58;
    height:100%;
    width:100%;

    .listGrid{
        cursor: pointer;
        overflow: hidden;
        border-bottom: 1px solid wheat;
        line-height: 36px;
        font-weight: bold;
    }

    .SLR{
        background-color: red;
    }
    .TodayHumor{
        background-color: teal;
    }
    .FmKorea{
        background-color: orange;
    }
    .TheQoo{
        background-color: blue;
    }
    .Bobae{
        background-color: silver;
    }
    .RuliWeb{
        background-color: gray;
    }
    .Clien{
        background-color: purple;
    }
    .Etoland{
        background-color: slategrey;
    }
    .Gasengi{
        background-color: violet;
    }
    .Cook{
        background-color: coral;
    }

    .index {
        font-size: 12px;
        width:5%;
        text-align: center;
    };
    
    .from {
        font-size: 12px;
        width:10%;
        text-align: center;
    };

    .title {
        font-size: 14px;
        width: 45%;
        padding-left: 10px;
        padding-right: 10px;
    };
    
    .author {
        font-size: 11px;
        width:10%;
        line-height: 52px;
    };

    .hitCount {
        font-size: 12px;
        width:10%;
        line-height: 50px;
    };
    
    .registeredAt {
        font-size: 12px;
        width:15%;
    };

`;


export default Wrapper;
