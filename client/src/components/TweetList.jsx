import React, { Component, useState } from 'react';

import { TweetDiv } from '../components';

import styled from 'styled-components';

const GridContainer = styled.div`
    padding: 0 40px 40px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

class TweetList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets: this.props.tweets,
            size: 6
        };
    }

    render() {
        return (
            <GridContainer>
                {this.state.tweets.slice(0, this.state.size).map(tweet => 
                    <TweetDiv tweet={tweet.img}
                               text={tweet.text_string}
                               alt={tweet.secure_img}
                               tweet_id={tweet.tweet_id} />
                )}
                <button onClick={() => this.setState({size: this.state.size + 9})} >
                    Load more
                </button>
            </GridContainer>
        )
    }
}

export default TweetList;