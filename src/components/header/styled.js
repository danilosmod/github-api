import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 35px;
        padding: 4px;
    }

    button {
        background-color: #CCC;
        padding: 8px 16px;
        margin-left: 8px;
        border-radius: 8px;
        border: 1px solid white;

        &:hover {
            background-color: #97C221;
            color: white;
            font-weight: bold;
        }
    }
`;