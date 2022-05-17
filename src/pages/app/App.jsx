import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Quotes from "../../components/quotes/Quotes";
import narutoImg from '../../img/naruto.png';
import { getQuote } from "../../services/quotesServices/quotesServices";
import jutsuSound from '../../sounds/jutsu.mp3';

const audio = new Audio(jutsuSound);

const App = ()=>{
    let isMounted = useRef(true);

    const [quoteState, setQuoteState] = useState({
        quote: 'loading quote...',
        speaker:'loading speaker...'
    });

    const onUpdate = async () => {
        const resQuote = await getQuote();
        if(isMounted.current){
            audio.play();
            setQuoteState(resQuote);
        }
    };
    
    useEffect(()=>{
        onUpdate();

        return()=> {
            isMounted.current = false;
        }
    },[]);

    return(
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate} />
            <NarutoImg src={narutoImg} alt='Naruto with a Kunai'/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`

export default App;