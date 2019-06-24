import styled from 'styled-components';

const TouchableItem = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    margin: 10px 0px;
`;

export default TouchableItem;