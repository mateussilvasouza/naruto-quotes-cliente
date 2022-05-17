import styled from "styled-components";
import Button from "../button/Button";
import { string, func } from 'prop-types';

const Quotes = ({ quote, speaker, onUpdate }) => {
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker> - {speaker}</Speaker>
            <Button onClick={onUpdate}>Quotes No Jutsu</Button>
        </Wrapper>
    )
}

export default Quotes;

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`
const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`