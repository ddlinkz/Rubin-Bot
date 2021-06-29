import React, { Component } from 'react';

import { TweetDiv } from '../components';

import styled from 'styled-components';

const GridContainer = styled.div`
    padding: 0 40px 40px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

class TweetList extends Component {
    render() {
        return (
            <GridContainer>
                {this.props.tweets.map(tweet => 
                    <TweetDiv tweet={tweet.img}
                               text={tweet.text_string}
                               alt={tweet.secure_img}
                               tweet_id={tweet.tweet_id} />
                )}
            </GridContainer>
        )
    }
}

export default TweetList;