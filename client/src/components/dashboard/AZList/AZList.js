import React from 'react'
import { Header } from '../Header'
import { Footer } from '../footer'
import { DisplayMovies } from '../DisplayMovies'

export const AZList = () => {

    const displayMoviesByAlpha = (alpha) => {
        console.log("***Alpha that is clicked =>", alpha);
    }

    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    '0', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return(
        <div>
            <Header />
            <div style={{textAlign:'center', marginBottom:'50px'}}>
                {alphabets.map(alphabet => (
                    <button style={{marginRight:'5px', padding:'10px'}} onClick={
                        () => displayMoviesByAlpha(alphabet)}>{alphabet}</button>
                ))}
            </div>
            <DisplayMovies type="AZ" />
            <Footer />
        </div>
    )
}