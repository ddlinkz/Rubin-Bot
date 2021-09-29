import React, { Component } from 'react';

import { TweetCard, Button } from '../components';

import styled from 'styled-components';

import { size } from '../style';

const GridContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 1rem;

    @media (min-width: ${size.tablet}) {
        padding-left: 40px;
        padding-right: 40px;
    }
`

class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 6
        };
    }

    render() {

        return (
            <GridContainer>
                {this.props.tweets.slice(0, this.state.size).map(tweet => 
                    <TweetCard tweet={tweet}
                               standard={true}
                               key={tweet.tweet_id} />
                )}
                <Button onClick={() => this.setState({size: this.state.size + 9})} >
                    Load More
                </Button>
            </GridContainer>
        )
    }
}

export default TweetList;